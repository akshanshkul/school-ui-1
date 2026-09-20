import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

/**
 * Renders one route to HTML at build time.
 * Returns the markup plus the <head> tags collected by react-helmet-async.
 */
export function render(url) {
  const helmetContext = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  // `prioritizeSeoTags` on <Helmet> collects title / description / canonical /
  // Open Graph into `priority`, so it has to be emitted first.
  const head = [
    helmet?.priority?.toString(),
    helmet?.title?.toString(),
    helmet?.meta?.toString(),
    helmet?.link?.toString(),
    helmet?.script?.toString(),
  ]
    .filter(Boolean)
    .join('\n    ');

  return { html, head };
}
