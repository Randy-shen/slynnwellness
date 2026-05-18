import type { Metadata } from 'next'
import ServiceGrid from '@/components/services/ServiceGrid'
import { getServices } from '@/lib/supabase/admin'
import { placeholderServices } from '@/lib/content/placeholder-services'
import { getSiteSettings } from '@/lib/supabase/settings'

export const metadata: Metadata = {
  title: 'Skin & Scalp Care — Facials, Microneedling, Skinvive in Pasadena, CA',
  description:
    'HydraFacial, SkinCeuticals, Candela Matrix Pro RF microneedling, Skinvive, Rejuran, anti-aging facials, and scalp treatments at Slynn Wellness in Pasadena, CA. Serving Pasadena, Altadena, San Marino, Arcadia, Glendale, and the greater Los Angeles area.',
  keywords: [
    'skin care Pasadena',
    'skin care clinic Pasadena',
    'medical skin care Pasadena',
    'skin care medical spa Pasadena',
    'best medical facial Pasadena',
    'medical facial Pasadena',
    'medical-grade facial Pasadena',
    'HydraFacial Pasadena',
    'microneedling Pasadena',
    'RF microneedling Pasadena',
    'Candela Matrix Pro Pasadena',
    'SkinCeuticals facial Pasadena',
    'anti-aging facial Pasadena',
    'Skinvive Pasadena',
    'Rejuran Pasadena',
    'PDRN Pasadena',
    'skin booster Pasadena',
    'collagen induction Pasadena',
    'skin rejuvenation Pasadena',
    'skin tightening Pasadena',
    'glow facial Pasadena',
    'glass skin treatment Pasadena',
    'red carpet facial Pasadena',
    'wedding facial Pasadena',
    'bridal facial Pasadena',
    'monthly facial Pasadena',
    'acne treatment Pasadena',
    'acne facial Pasadena',
    'acne scar treatment Pasadena',
    'hyperpigmentation treatment Pasadena',
    'melasma treatment Pasadena',
    'dark spot treatment Pasadena',
    'sun damage treatment Pasadena',
    'fine lines treatment Pasadena',
    'mature skin facial Pasadena',
    'sensitive skin facial Pasadena',
    'rosacea facial Pasadena',
    'pore reduction Pasadena',
    'skin texture treatment Pasadena',
    // Scalp
    'scalp treatment Pasadena',
    'scalp facial Pasadena',
    'scalp massage Pasadena',
    'head spa Pasadena',
    'scalp care Pasadena',
    'hair scalp wellness Pasadena',
    'best medical spa Pasadena',
    'luxury medical spa Pasadena',
    // Cities
    'skin care Altadena',
    'skin care South Pasadena',
    'skin care San Marino',
    'skin care Arcadia',
    'skin care Sierra Madre',
    'skin care Monrovia',
    'skin care Temple City',
    'skin care San Gabriel',
    'skin care Alhambra',
    'skin care La Cañada',
    'skin care La Cañada Flintridge',
    'skin care La Canada',
    'skin care Glendale',
    'skin care Burbank',
    'skin care Eagle Rock',
    'skin care San Gabriel Valley',
    'skin care Los Angeles',
    'Slynn Wellness',
  ],
  alternates: { canonical: '/skin-scalp-care' },
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
          background: 'linear-gradient(135deg, #D4AF8B 0%, #E0C9A5 35%, #EFD9BB 70%, #FDF2E5 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p
            className="text-xs font-medium tracking-[0.3em] uppercase text-[#8B7355] mb-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Our Services
          </p>
          <h1
            className="text-5xl lg:text-6xl font-light text-[#2C2C2C] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Skin & Scalp Care
          </h1>
          <div className="w-16 h-px bg-[#D4AF37]/70 mx-auto mb-6" />
          <p
            className="max-w-2xl mx-auto text-[#5A534D] text-sm leading-relaxed"
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
