import type { Metadata } from 'next'
import { placeholderServices, getCategoryLabel } from '@/lib/content/placeholder-services'

export const metadata: Metadata = {
  title: 'Price List',
  description:
    'View our complete price list for all medical aesthetic, wellness, and skin & scalp care treatments at Slynn Wellness in Pasadena, CA.',
}

const categories = ['medical-aesthetic', 'wellness', 'skin-scalp-care'] as const

export default function PriceListPage() {
  const servicesByCategory = categories.map((cat) => ({
    category: cat,
    label: getCategoryLabel(cat),
    services: placeholderServices.filter(
      (s) => s.category === cat && s.is_visible
    ).sort((a, b) => a.display_order - b.display_order),
  }))

  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-16"
        style={{
          background: 'linear-gradient(135deg, #FDF8F3 0%, #F7E7CE 50%, #D4AF37 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p
            className="text-xs font-medium tracking-[0.3em] uppercase text-white/80 mb-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Transparent Pricing
          </p>
          <h1
            className="text-5xl lg:text-6xl font-light text-white mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Price List
          </h1>
          <div className="w-16 h-px bg-white/60 mx-auto mb-4" />
          <p
            className="max-w-xl mx-auto text-white/80 text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            We believe in transparent, upfront pricing. Prices may vary based on
            individual treatment plans and consultations.
          </p>
        </div>
      </div>

      {/* Price Tables */}
      <section className="py-20 bg-[#FFFAF5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesByCategory.map(({ category, label, services }) => (
            <div key={category}>
              <h2
                className="text-3xl font-light text-[#2C2C2C] mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {label}
              </h2>
              <div className="w-12 h-px bg-[#D4AF37] mb-6" />

              <div className="bg-white border border-[#F0E8DF] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#FDF8F3] border-b border-[#F0E8DF]">
                      <th
                        className="px-6 py-4 text-left text-xs font-semibold tracking-wider uppercase text-[#8B7355]"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        Service
                      </th>
                      <th
                        className="px-6 py-4 text-right text-xs font-semibold tracking-wider uppercase text-[#8B7355]"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {services.map((service, idx) => (
                      <tr
                        key={service.id}
                        className={`border-b border-[#F0E8DF] last:border-none ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-[#FFFAF5]'
                        }`}
                      >
                        <td className="px-6 py-4">
                          <p
                            className="font-medium text-[#2C2C2C] text-sm"
                            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}
                          >
                            {service.name}
                          </p>
                          <p
                            className="text-xs text-[#B8A99A] mt-0.5"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                          >
                            {service.short_description}
                          </p>
                        </td>
                        <td
                          className="px-6 py-4 text-right text-sm font-medium text-[#D4AF37] whitespace-nowrap"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          {service.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Disclaimer */}
          <div className="bg-[#FDF8F3] border border-[#F0E8DF] p-6">
            <p className="text-xs text-[#8B7355] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              * Prices listed are starting prices and may vary based on individual treatment plans, product used, and
              areas treated. A complimentary consultation is required before most treatments. Pricing is subject to
              change without notice. ProCare Members receive 10-20% off all listed services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#FDF8F3] border-t border-[#F0E8DF]">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2
            className="text-3xl font-light text-[#2C2C2C] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Ready to Book?
          </h2>
          <p className="text-sm text-[#8B7355] mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Book your appointment online or call us to speak with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.aestheticrecord.com/slynn-wellness"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#D4AF37] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#B8960A] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Book Online
            </a>
            <a
              href="tel:+16265550100"
              className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] text-xs font-medium tracking-wider uppercase hover:bg-[#D4AF37] hover:text-white transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              (626) 555-0100
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
