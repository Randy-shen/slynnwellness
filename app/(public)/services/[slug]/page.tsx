import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, ArrowLeft } from 'lucide-react'
import { placeholderServices, getCategoryLabel, getServiceBySlug } from '@/lib/content/placeholder-services'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return placeholderServices.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return { title: 'Service Not Found' }
  }

  return {
    title: service.name,
    description: service.short_description,
  }
}

const categoryGradients: Record<string, string> = {
  'medical-aesthetic': 'linear-gradient(135deg, #F7E7CE 0%, #D4AF37 100%)',
  'wellness': 'linear-gradient(135deg, #FDF8F3 0%, #F5E1DA 100%)',
  'skin-scalp-care': 'linear-gradient(135deg, #F5E1DA 0%, #D4AF37 100%)',
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const relatedServices = placeholderServices
    .filter((s) => s.category === service.category && s.slug !== service.slug && s.is_visible)
    .slice(0, 3)

  const categoryPath = `/${service.category}`
  const gradient = categoryGradients[service.category] || categoryGradients['medical-aesthetic']

  return (
    <>
      {/* Hero */}
      <div className="relative pt-16" style={{ background: gradient }}>
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link
            href={categoryPath}
            className="inline-flex items-center gap-2 text-white/80 text-xs mb-6 hover:text-white transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {getCategoryLabel(service.category)}
          </Link>
          <p
            className="text-xs font-medium tracking-[0.3em] uppercase text-white/70 mb-2"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {getCategoryLabel(service.category)}
          </p>
          <h1
            className="text-5xl lg:text-6xl font-light text-white mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {service.name}
          </h1>
          {service.price && (
            <p
              className="text-white/80 text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {service.price}
            </p>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <section>
              <h2
                className="text-2xl font-light text-[#2C2C2C] mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                About This Treatment
              </h2>
              <p
                className="text-sm text-[#8B7355] leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {service.full_description}
              </p>
            </section>

            {/* Benefits */}
            <section>
              <h2
                className="text-2xl font-light text-[#2C2C2C] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Benefits
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span
                      className="text-sm text-[#8B7355]"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* What to Expect */}
            <section>
              <h2
                className="text-2xl font-light text-[#2C2C2C] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                What to Expect
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { step: '01', title: 'Consultation', desc: 'We begin with a thorough consultation to understand your goals and assess your suitability for treatment.' },
                  { step: '02', title: 'Treatment', desc: 'Your personalized treatment is administered by our expert providers in our luxurious, sterile treatment suite.' },
                  { step: '03', title: 'Follow-Up', desc: 'We schedule a follow-up to assess your results and ensure your complete satisfaction with the outcome.' },
                ].map((item) => (
                  <div key={item.step} className="bg-[#FDF8F3] p-6">
                    <span
                      className="text-3xl font-light text-[#D4AF37] block mb-2"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {item.step}
                    </span>
                    <h4
                      className="font-medium text-[#2C2C2C] mb-2"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem' }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-xs text-[#8B7355] leading-relaxed"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Before/After Gallery Placeholder */}
            <section>
              <h2
                className="text-2xl font-light text-[#2C2C2C] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Before & After Gallery
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="h-48 bg-[#F0E8DF] flex items-center justify-center rounded-sm"
                >
                  <p className="text-xs text-[#B8A99A]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Before Photo
                  </p>
                </div>
                <div
                  className="h-48 bg-[#F7E7CE] flex items-center justify-center rounded-sm"
                >
                  <p className="text-xs text-[#B8A99A]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    After Photo
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#B8A99A] mt-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                * Individual results may vary. Photos shown are for illustrative purposes.
              </p>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Pricing */}
            <div className="bg-[#FDF8F3] p-8 border border-[#F0E8DF]">
              <h3
                className="text-xl font-light text-[#2C2C2C] mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Pricing
              </h3>
              <p
                className="text-2xl text-[#D4AF37] font-light mb-6"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {service.price || 'Contact for pricing'}
              </p>
              <p className="text-xs text-[#8B7355] mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Pricing may vary based on individual treatment plans. A consultation is required before booking.
              </p>
              <a
                href="https://booking.aestheticrecord.com/slynn-wellness"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-[#D4AF37] text-white text-center text-xs font-medium tracking-wider uppercase hover:bg-[#B8960A] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Book Now
              </a>
            </div>

            {/* Contact */}
            <div className="bg-[#2C2C2C] p-8 text-white">
              <h3
                className="text-xl font-light mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Have Questions?
              </h3>
              <p className="text-xs text-[#B8A99A] mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Our expert team is here to answer all your questions about this treatment.
              </p>
              <Link
                href="/contact"
                className="block w-full py-3 border border-[#D4AF37] text-[#D4AF37] text-center text-xs font-medium tracking-wider uppercase hover:bg-[#D4AF37] hover:text-white transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="mt-20 pt-16 border-t border-[#F0E8DF]">
            <h2
              className="text-3xl font-light text-[#2C2C2C] mb-10 text-center"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Related Treatments
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedServices.map((related) => (
                <Link
                  key={related.id}
                  href={`/services/${related.slug}`}
                  className="group bg-white p-6 border border-[#F0E8DF] hover:border-[#D4AF37]/30 hover:shadow-md transition-all"
                >
                  <h4
                    className="text-lg font-light text-[#2C2C2C] mb-2 group-hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {related.name}
                  </h4>
                  <p className="text-xs text-[#B8A99A] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {related.short_description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Book CTA */}
      <section
        className="py-16"
        style={{ background: gradient }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-2xl mx-auto text-center px-4">
            <h2
              className="text-3xl font-light text-white mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Ready to Experience {service.name}?
            </h2>
            <p className="text-white/80 text-sm mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Book your appointment today and take the first step toward your best self.
            </p>
            <a
              href="https://booking.aestheticrecord.com/slynn-wellness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-[#2C2C2C] text-xs font-medium tracking-wider uppercase hover:bg-[#F7E7CE] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
