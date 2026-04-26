import type { Metadata } from 'next'
import ServiceGrid from '@/components/services/ServiceGrid'
import { getServices } from '@/lib/supabase/admin'
import { placeholderServices } from '@/lib/content/placeholder-services'
import { getSiteSettings } from '@/lib/supabase/settings'

export const metadata: Metadata = {
  title: 'Medical Aesthetic Treatments in Pasadena, CA',
  description:
    'Botox, Xeomin, Restylane, Juvederm, Sculptra, Skinvive — expert medical aesthetic injectables at Slynn Wellness in Pasadena, CA. Performed by licensed RNs. Serving Pasadena, Altadena, San Marino, Arcadia, Glendale, and the greater Los Angeles area.',
  keywords: [
    'medical aesthetic Pasadena',
    'medical aesthetics Pasadena',
    'aesthetics clinic Pasadena',
    'aesthetic treatments Pasadena',
    'injectables Pasadena',
    'best injectables Pasadena',
    'injectable specialist Pasadena',
    'medspa injectables Pasadena',
    'Botox Pasadena',
    'Xeomin Pasadena',
    'Dysport Pasadena',
    'dermal fillers Pasadena',
    'Restylane Pasadena',
    'Juvederm Pasadena',
    'Sculptra Pasadena',
    'Skinvive Pasadena',
    'Kybella Pasadena',
    'lip filler Pasadena',
    'cheek filler Pasadena',
    'jawline filler Pasadena',
    'tear trough filler Pasadena',
    'wrinkle relaxer Pasadena',
    'neuromodulator Pasadena',
    'liquid facelift Pasadena',
    'non-surgical facelift Pasadena',
    'cosmetic injection Pasadena',
    'aesthetic nurse injector Pasadena',
    'best medical spa Pasadena',
    'top medical spa Pasadena',
    'luxury medical spa Pasadena',
    'medical spa near me Pasadena',
    'aesthetic medicine Pasadena',
    'medical aesthetic Altadena',
    'medical aesthetic South Pasadena',
    'medical aesthetic San Marino',
    'medical aesthetic Arcadia',
    'medical aesthetic Sierra Madre',
    'medical aesthetic Monrovia',
    'medical aesthetic Temple City',
    'medical aesthetic San Gabriel',
    'medical aesthetic Alhambra',
    'medical aesthetic La Cañada',
    'medical aesthetic La Cañada Flintridge',
    'medical aesthetic La Canada',
    'medical aesthetic Glendale',
    'medical aesthetic Burbank',
    'medical aesthetic Eagle Rock',
    'medical aesthetic San Gabriel Valley',
    'medical aesthetic Los Angeles',
    'Slynn Wellness',
  ],
}

export default async function MedicalAestheticPage() {
  const [settings, servicesResult] = await Promise.all([
    getSiteSettings(),
    getServices('medical-aesthetic').catch(() =>
      placeholderServices.filter((s) => s.category === 'medical-aesthetic')
    ),
  ])
  let services = servicesResult

  if (!services || services.length === 0) {
    services = placeholderServices.filter((s) => s.category === 'medical-aesthetic')
  }

  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-16"
        style={{
          background: 'linear-gradient(135deg, #F7E7CE 0%, #D4AF37 50%, #8B7355 100%)',
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
            Medical Aesthetic
          </h1>
          <div className="w-16 h-px bg-white/60 mx-auto mb-6" />
          <p
            className="max-w-2xl mx-auto text-white/80 text-sm leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Transform your appearance with our expert medical aesthetic treatments.
            Our board-certified providers use FDA-approved injectables and advanced
            techniques to deliver natural, beautiful, and lasting results.
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
            Ready to Begin Your Transformation?
          </h2>
          <p
            className="text-sm text-[#8B7355] mb-8"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Book a complimentary consultation with one of our expert providers.
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
