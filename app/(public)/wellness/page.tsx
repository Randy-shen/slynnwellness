import type { Metadata } from 'next'
import ServiceGrid from '@/components/services/ServiceGrid'
import { getServices } from '@/lib/supabase/admin'
import { placeholderServices } from '@/lib/content/placeholder-services'
import { getSiteSettings } from '@/lib/supabase/settings'

export const metadata: Metadata = {
  title: 'IV Therapy & Wellness Services in Pasadena, CA',
  description:
    'IV vitamin therapy, NAD+ infusions, medical weight loss (Semaglutide & Tirzepatide), and vitamin injections at Slynn Wellness in Pasadena, CA. Serving Pasadena, Altadena, San Marino, Arcadia, Glendale, and the greater Los Angeles area.',
  keywords: [
    'wellness Pasadena',
    'wellness clinic Pasadena',
    'wellness center Pasadena',
    'wellness services Pasadena',
    'wellness medical spa Pasadena',
    'wellness near me Pasadena',
    'IV therapy Pasadena',
    'IV drip Pasadena',
    'IV vitamin therapy Pasadena',
    'NAD+ Pasadena',
    'NAD infusion Pasadena',
    'medical weight loss Pasadena',
    'GLP-1 Pasadena',
    'Semaglutide Pasadena',
    'Tirzepatide Pasadena',
    'Ozempic alternative Pasadena',
    'vitamin injections Pasadena',
    'B12 injection Pasadena',
    'lipotropic injection Pasadena',
    'MIC injection Pasadena',
    'Myers cocktail Pasadena',
    'glutathione IV Pasadena',
    'vitamin C IV Pasadena',
    'immunity drip Pasadena',
    'energy IV Pasadena',
    'beauty IV Pasadena',
    'recovery IV Pasadena',
    'longevity therapy Pasadena',
    'biohacking Pasadena',
    'concierge wellness Pasadena',
    'preventative health Pasadena',
    'metabolic health Pasadena',
    'best medical spa Pasadena',
    'luxury medical spa Pasadena',
    // Cities
    'wellness Altadena',
    'wellness South Pasadena',
    'wellness San Marino',
    'wellness Arcadia',
    'wellness Sierra Madre',
    'wellness Monrovia',
    'wellness Temple City',
    'wellness San Gabriel',
    'wellness Alhambra',
    'wellness La Cañada',
    'wellness La Cañada Flintridge',
    'wellness La Canada',
    'wellness Glendale',
    'wellness Burbank',
    'wellness Eagle Rock',
    'wellness San Gabriel Valley',
    'wellness Los Angeles',
    'Slynn Wellness',
  ],
  alternates: { canonical: '/wellness' },
}

export default async function WellnessPage() {
  const [settings, servicesResult] = await Promise.all([
    getSiteSettings(),
    getServices('wellness').catch(() =>
      placeholderServices.filter((s) => s.category === 'wellness')
    ),
  ])
  let services = servicesResult

  if (!services || services.length === 0) {
    services = placeholderServices.filter((s) => s.category === 'wellness')
  }

  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-16"
        style={{
          background: 'linear-gradient(135deg, #FDF8F3 0%, #F5E1DA 50%, #B8A99A 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/15" />
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
            Wellness
          </h1>
          <div className="w-16 h-px bg-white/60 mx-auto mb-6" />
          <p
            className="max-w-2xl mx-auto text-white/90 text-sm leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Optimize your health from within through our physician-supervised wellness
            and longevity programs. From IV nutrition to medical weight loss, we address
            your wellness goals at their root.
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
            Take the First Step Toward Optimal Wellness
          </h2>
          <p
            className="text-sm text-[#8B7355] mb-8"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Schedule a consultation with our wellness team to create your personalized health plan.
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
