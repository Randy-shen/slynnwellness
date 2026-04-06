import { getSiteSettings } from '@/lib/supabase/settings'
import Hero from '@/components/sections/Hero'
import ServiceCategories from '@/components/sections/ServiceCategories'
import WhyUs from '@/components/sections/WhyUs'
import Testimonials from '@/components/sections/Testimonials'
import LocationPreview from '@/components/sections/LocationPreview'

export default async function HomePage() {
  const settings = await getSiteSettings()
  return (
    <>
      <Hero
        videoUrl={settings.hero_video_url}
        posterUrl={settings.hero_poster_url}
        tagline={settings.hero_tagline}
        bookingUrl={settings.booking_url}
      />
      <ServiceCategories bookingUrl={settings.booking_url} />
      <WhyUs />
      <Testimonials />
      <LocationPreview settings={settings} />
    </>
  )
}
