import Hero from '@/components/sections/Hero'
import ServiceCategories from '@/components/sections/ServiceCategories'
import WhyUs from '@/components/sections/WhyUs'
import Testimonials from '@/components/sections/Testimonials'
import LocationPreview from '@/components/sections/LocationPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceCategories />
      <WhyUs />
      <Testimonials />
      <LocationPreview />
    </>
  )
}
