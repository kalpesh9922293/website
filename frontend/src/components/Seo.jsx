import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  SITE_URL,
  SITE_NAME,
  APK_DOWNLOAD_URL,
  CONTACT_EMAIL,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  KEYWORDS,
} from '../constants/seo';
import { FAQ_ITEMS } from '../data/faq';

const LOGO_URL = `${SITE_URL}/logo.png`;

const buildFaqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
});

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: LOGO_URL,
  email: CONTACT_EMAIL,
  description: DEFAULT_DESCRIPTION,
  areaServed: 'IN',
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
};

const APP_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: SITE_NAME,
  operatingSystem: 'Android',
  applicationCategory: 'HealthApplication',
  url: SITE_URL,
  downloadUrl: APK_DOWNLOAD_URL,
  description: DEFAULT_DESCRIPTION,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
  featureList:
    'Medication reminders, heart rate tracking, AI health report explanations, secure document vault, emergency contact alerts',
};

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  includeFaqSchema = false,
  faqItems = FAQ_ITEMS,
}) {
  const canonical = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
  const schemas = [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, APP_SCHEMA];
  if (includeFaqSchema) {
    schemas.push(buildFaqSchema(faqItems));
  }

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={KEYWORDS} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={LOGO_URL} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={LOGO_URL} />
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
