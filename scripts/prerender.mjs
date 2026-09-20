/**
 * Build-time prerenderer.
 *
 * Runs after `vite build` + `vite build --ssr`. For every route it renders the
 * React tree to HTML, injects it (and the page's <head> tags) into the built
 * index.html, and writes <route>/index.html. Also emits sitemap.xml + robots.txt.
 *
 * Result: a plain static site where every URL serves fully rendered HTML,
 * while the client hydrates into a normal React SPA.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render } = await import(pathToFileURL(ssrEntry).href);
const { routes } = await import(pathToFileURL(path.join(root, 'src', 'routes.js')).href);
const { site } = await import(pathToFileURL(path.join(root, 'src', 'data', 'site.js')).href);

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

let count = 0;

for (const route of routes) {
  const { html, head } = render(route.path);

  const page = template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);

  const outDir = route.path === '/' ? distDir : path.join(distDir, route.path);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), page);

  count += 1;
  console.log(`  prerendered  ${route.path === '/' ? '/' : route.path + '/'}`);
}

// --- 404 page (static hosts serve this for unknown URLs) --------------------
const notFound = render('/__not-found__');
fs.writeFileSync(
  path.join(distDir, '404.html'),
  template.replace('<!--app-head-->', notFound.head).replace('<!--app-html-->', notFound.html)
);

// --- sitemap.xml ------------------------------------------------------------
const today = new Date().toISOString().split('T')[0];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${site.url}${r.path === '/' ? '/' : r.path + '/'}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);

// --- robots.txt -------------------------------------------------------------
fs.writeFileSync(
  path.join(distDir, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`
);

console.log(`\n  ${count} pages prerendered, sitemap.xml + robots.txt written to dist/\n`);
