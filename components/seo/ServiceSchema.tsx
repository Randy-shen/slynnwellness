type Faq = { q: string; a: string }

type Category = 'Medical Aesthetic' | 'Wellness' | 'Skin & Scalp Care'

interface ServiceSchemaProps {
  slug: string
  name: string
  description: string
  category: Category
  faqs?: Faq[]
  priceRange?: string
  image?: string
}

const SITE_URL = 'https://www.slynnwellness.com'

const categoryPathMap: Record<Category, string> = {
  'Medical Aesthetic': '/medical-aesthetic',
  Wellness: '/wellness',
  'Skin & Scalp Care': '/skin-scalp-care',
}

export default function ServiceSchema({
  slug,
  name,
  description,
  category,
  faqs,
  priceRange,
  image,
}: ServiceSchemaProps) {
  const pageUrl = `${SITE_URL}/services/${slug}`
  const categoryUrl = `${SITE_URL}${categoryPathMap[category]}`

  const serviceSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name,
    description,
    serviceType: name,
    url: pageUrl,
    provider: {
      '@type': 'MedicalSpa',
      '@id': `${SITE_URL}/#medicalspa`,
      name: 'Slynn Wellness',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 34.139,
        longitude: -118.13,
      },
      geoRadius: '80000',
    },
  }

  if (image) serviceSchema.image = image
  if (priceRange) serviceSchema.priceRange = priceRange

  const faqSchema =
    faqs && faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': `${pageUrl}#faq`,
          mainEntity: faqs.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: a,
            },
          })),
        }
      : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumbs`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: category,
        item: categoryUrl,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name,
        item: pageUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
