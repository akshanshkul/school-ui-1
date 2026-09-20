/**
 * Route list shared by the router and the build-time prerenderer
 * (scripts/prerender.mjs) so every page gets its own static HTML file
 * and a sitemap entry.
 */
export const routes = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.9, changefreq: 'monthly' },
  { path: '/academics', priority: 0.9, changefreq: 'monthly' },
  { path: '/admission', priority: 0.9, changefreq: 'weekly' },
  { path: '/facilities', priority: 0.8, changefreq: 'monthly' },
  { path: '/gallery', priority: 0.7, changefreq: 'monthly' },
  { path: '/parent-corner', priority: 0.7, changefreq: 'weekly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
];
