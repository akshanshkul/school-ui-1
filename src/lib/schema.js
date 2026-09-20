import { site } from '@/data/site';

/** Organization / School structured data, included on every page. */
export function schoolSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'School',
    '@id': `${site.url}/#school`,
    name: site.name,
    alternateName: site.shortName,
    slogan: site.motto,
    url: site.url,
    logo: `${site.url}/images/logo.svg`,
    image: `${site.url}/images/og-cover.svg`,
    foundingDate: site.established,
    email: site.email,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    sameAs: [site.social.facebook, site.social.instagram, site.social.youtube],
    description:
      'The Brahmanand Academy is a co-educational English medium CBSE school in Kaul, Kaithal, Haryana, offering classes from Nursery to XII with a focus on academic excellence and holistic development.',
  };
}

/** Breadcrumb trail for inner pages. */
export function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${site.url}${item.href === '/' ? '/' : `${item.href}/`}`,
    })),
  };
}

/** FAQ rich result. */
export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/** Site-wide search box hint for Google. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: 'en-IN',
    publisher: { '@id': `${site.url}/#school` },
  };
}
