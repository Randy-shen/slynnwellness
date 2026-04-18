import type { Metadata } from 'next'
import ServiceGrid from '@/components/services/ServiceGrid'
import { getServices } from '@/lib/supabase/admin'
import { placeholderServices } from '@/lib/content/placeholder-services'
import { getSiteSettings } from '@/lib/supabase/settings'

export const metadata: Metadata = {
  title: 'Skin & Scalp Care Treatments',
  description:
    'Reveal your most radiant skin at Slynn Wellness. HydraFacial, microneedling, chemical peels, PRP hair restoration, and LED light therapy in Pasadena, CA.',
}

export default async function SkinScalpCarePage() {
  const [settings, servicesResult] = await Promise.all([
    getSiteSettings(),
    getServices('skin-scalp-care').catch(() =>
      placeholderServices.filter((s) => s.category === 'skin-scalp-care')
    ),
  ])
  let services = servicesResult

  if (!services || services.length === 0) {
    services = placeholderServices.filter((s) => s.category === 'skin-scalp-care')
  }

  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-16"
        style={{
          background: 'linear-gradient(135deg, #F5E1DA 0%, #F7E7CE 50%, #D4AF37 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p
            className="text-xs font-medium tracking-[0.3em] uppercase text-white/80 mb-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Our Services
          </p>
          <h1
            className="text-5xl lg:text-6xl font-light text-white mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Skin & Scalp Care
          </h1>
          <div className="w-16 h-px bg-white/60 mx-auto mb-6" />
          <p
            className="max-w-2xl mx-auto text-white/90 text-sm leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Reveal your most radiant skin with advanced clinical treatments tailored
            to your unique needs. From signature facials to collagen-stimulating
            therapies, we deliver visible, lasting results.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 bg-[#FFFAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceGrid services={services} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FDF8F3]">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2
            className="text-3xl font-light text-[#2C2C2C] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Discover Your Glow
          </h2>
          <p
            className="text-sm text-[#8B7355] mb-8"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Book a skin consultation and we&apos;ll create a customized treatment plan for your skin goals.
          </p>
          <a
            href="/book"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#D4AF37] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#B8960A] transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </>
  )
}
