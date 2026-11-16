import type { Metadata } from 'next'
import { getSiteSettings } from '@/lib/supabase/settings'
import { getServices } from '@/lib/supabase/admin'
import Hero from '@/components/sections/Hero'
import ServiceCategories from '@/components/sections/ServiceCategories'
import WhyUs from '@/components/sections/WhyUs'
import Testimonials from '@/components/sections/Testimonials'
import LocationPreview from '@/components/sections/LocationPreview'
import FinancingNote from '@/components/sections/FinancingNote'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

export default async function HomePage() {
  const [settings, allServices] = await Promise.all([
    getSiteSettings(),
    getServices(),
  ])

  const servicesByCategory = {
    medical: allServices.filter(s => s.category === 'medical-aesthetic' && s.is_visible).map(s => ({ name: s.name, slug: s.slug })),
    wellness: allServices.filter(s => s.category === 'wellness' && s.is_visible).map(s => ({ name: s.name, slug: s.slug })),
    skin: allServices.filter(s => s.category === 'skin-scalp-care' && s.is_visible).map(s => ({ name: s.name, slug: s.slug })),
  }

  return (
    <>
      <Hero
        videoUrl={settings.hero_video_url}
        posterUrl={settings.hero_poster_url}
        tagline={settings.hero_tagline}
        bookingUrl="/book"
      />
      <ServiceCategories bookingUrl="/book" servicesByCategory={servicesByCategory} />
      <WhyUs />
      <FinancingNote
        financingUrl={settings.financing_url}
        heading="Flexible payment plans with Cherry"
        body="Split the cost of eligible treatments into monthly payments. Checking your options takes a couple of minutes and uses a soft credit check that does not affect your credit score. Subject to approval."
      />
      <Testimonials />
      <LocationPreview settings={settings} />
    </>
  )
}
