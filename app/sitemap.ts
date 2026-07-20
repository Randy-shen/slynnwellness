import type { MetadataRoute } from 'next'
import { getServices } from '@/lib/supabase/admin'

const SITE_URL = 'https://www.slynnwellness.com'

export const revalidate = 3600

const LAST_UPDATED = {
  home: new Date('2026-05-13'),
  categoryPages: new Date('2026-05-20'),
  servicePages: new Date('2026-05-20'),
  membership: new Date('2026-04-25'),
  contact: new Date('2026-04-24'),
  book: new Date('2026-04-24'),
  policies: new Date('2026-04-18'),
  privacy: new Date('2026-04-24'),
  terms: new Date('2026-04-24'),
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: LAST_UPDATED.home, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/medical-aesthetic`, lastModified: LAST_UPDATED.categoryPages, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/wellness`, lastModified: LAST_UPDATED.categoryPages, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/skin-scalp-care`, lastModified: LAST_UPDATED.categoryPages, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/membership`, lastModified: LAST_UPDATED.membership, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: LAST_UPDATED.contact, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/book`, lastModified: LAST_UPDATED.book, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/policies`, lastModified: LAST_UPDATED.policies, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: LAST_UPDATED.privacy, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: LAST_UPDATED.terms, changeFrequency: 'yearly', priority: 0.2 },
  ]

  let services: { slug: string }[] = []
  try {
    const data = await getServices()
    services = data || []
  } catch {
    services = []
  }

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: LAST_UPDATED.servicePages,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...servicePages]
}
