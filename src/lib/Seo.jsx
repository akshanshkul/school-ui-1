import { Helmet } from 'react-helmet-async';
import { site } from '@/data/site';

/**
 * Per-page SEO. Renders title, description, canonical, Open Graph,
 * Twitter card and any JSON-LD structured data into <head>.
 * These tags are baked into the static HTML by scripts/prerender.mjs.
 */
export default function Seo({
  title,
  description,
  path = '/',
  keywords = [],
  image = '/images/og-cover.svg',
  schema = [],
  noindex = false,
}) {
  const url = `${site.url}${path === '/' ? '/' : `${path}/`}`;
  const fullTitle = path === '/' ? title : `${title} | ${site.name}`;
  const imageUrl = `${site.url}${image}`;

  const allKeywords = [
    site.name,
    'CBSE school in Kaul',
    'best school in Kaithal',
    'schools in Kaithal Haryana',
    'CBSE affiliated school 532002',
    ...keywords,
  ].join(', ');

  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={site.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((item, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}
