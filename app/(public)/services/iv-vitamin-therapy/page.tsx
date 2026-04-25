import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { getSiteSettings } from '@/lib/supabase/settings'
import { getIVTherapies, IVTherapy } from '@/lib/supabase/iv-therapies'

export const metadata: Metadata = {
  title: 'IV Vitamin Therapy',
  description:
    'Customized IV vitamin drips delivering essential vitamins, minerals, and antioxidants directly into your bloodstream for 100% absorption.',
}

// Strip dosage info — keep only ingredient name before any number/unit
function cleanIngredient(ingredient: string): string {
  return ingredient
    .replace(/\s+\d[\d\s\-–.]*(?:mg|mcg|g|mL|L|IU|ml|iu)[\w\s\-–/]*$/i, '')
    .replace(/\s*\(.*?\)\s*$/, '')
    .replace(/\s*\[.*?\]\s*$/, '')
    .trim()
}

export default async function IVVitaminTherapyPage() {
  const [settings, ivTherapies] = await Promise.all([getSiteSettings(), getIVTherapies()])

  return (
    <div style={{ backgroundColor: '#FFFAF5', color: '#2C2C2C' }}>
      <ServiceSchema
        slug="iv-vitamin-therapy"
        name="IV Vitamin Therapy"
        description="Customized IV vitamin drips at Slynn Wellness in Pasadena, CA. Essential vitamins, minerals, and antioxidants delivered directly into your bloodstream for 100% absorption — energy, hydration, immunity, recovery, and more."
        category="Wellness"
        priceRange="$$"
      />
      {/* Hero */}
      <div
        className="relative pt-16"
        style={{
          background: 'linear-gradient(135deg, #F7E7CE 0%, #D4AF37 60%, #B8960A 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Link
            href="/wellness"
            className="inline-flex items-center gap-2 text-white/80 text-xs mb-6 hover:text-white transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Wellness
          </Link>
          <p
            className="text-xs font-medium tracking-[0.3em] uppercase text-white/70 mb-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Wellness
          </p>
          <h1
            className="text-5xl lg:text-7xl font-light text-white mb-5"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            IV Vitamin Therapy
          </h1>
          <p
            className="text-white/85 text-sm max-w-xl leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Nourish your body at the cellular level. Our curated menu of intravenous therapies
            delivers vitamins, minerals, and antioxidants directly into your bloodstream for
            100% bioavailability and immediate effect.
          </p>
        </div>
      </div>

      {/* Intro paragraph */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <p
          className="text-[#8B7355] text-sm leading-relaxed max-w-3xl"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Unlike oral supplements, IV therapy bypasses the digestive system entirely — ensuring
          your body receives every nutrient at full potency. Each drip is administered by our
          licensed clinical team in a serene, spa-like environment. Whether your goal is energy,
          recovery, glow, or longevity, we have a formula designed for you.
        </p>
      </div>

      {/* Base Fluid Info Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div
          className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 px-6 py-3 text-xs"
          style={{
            backgroundColor: '#FBF4EA',
            borderLeft: '3px solid #D4AF37',
            fontFamily: 'Montserrat, sans-serif',
            color: '#8B7355',
          }}
        >
          <span>
            <span style={{ color: '#2C2C2C', fontWeight: 500 }}>Base Fluid:</span>{' '}
            Normal Saline (NS) · Lactated Ringer&apos;s (LR)
          </span>
          <span className="hidden sm:inline" style={{ color: '#D4AF37' }}>|</span>
          <span>
            <span style={{ color: '#2C2C2C', fontWeight: 500 }}>Standard Infusion:</span>{' '}
            30–60 min
          </span>
        </div>
      </div>

      {/* Therapy Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* The "group" wrapper enables the dim-others-on-hover effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 group">
          {ivTherapies.map((therapy) => (
            <div
              key={therapy.name}
              className="bg-white flex flex-col transition-opacity duration-300 group-hover:opacity-60 hover:!opacity-100"
              style={{
                boxShadow: '0 2px 16px rgba(44,44,44,0.07)',
                border: '1px solid #F0E8DF',
              }}
            >
              {/* Card header */}
              <div className="p-6 pb-4 flex items-start justify-between gap-3">
                <h3
                  className="text-xl font-light leading-tight"
                  style={{ fontFamily: 'Cormorant Garamond, serif', color: '#2C2C2C' }}
                >
                  {therapy.name}
                </h3>
                {/* Infusion time badge */}
                {therapy.is_special ? (
                  <span
                    className="shrink-0 px-3 py-1 text-[10px] font-medium tracking-wide rounded-full whitespace-nowrap"
                    style={{
                      backgroundColor: '#FBF0E0',
                      color: '#9B6E28',
                      border: '1px solid #E8C97A',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    {therapy.infusion_time}
                  </span>
                ) : (
                  <span
                    className="shrink-0 px-3 py-1 text-[10px] font-medium tracking-wide rounded-full whitespace-nowrap"
                    style={{
                      backgroundColor: '#FDF8F3',
                      color: '#D4AF37',
                      border: '1px solid #D4AF37',
                      fontFamily: 'Montserrat, sans-serif',
                    }}
                  >
                    {therapy.infusion_time}
                  </span>
                )}
              </div>

              {/* Purpose — flex-grow pushes ticker to consistent position */}
              <div className="px-6 pb-4 flex-grow">
                <p
                  className="text-xs leading-relaxed"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#8B7355' }}
                >
                  {therapy.purpose}
                </p>
              </div>

              {/* Ingredient ticker */}
              <div
                className="mx-6 mb-5 overflow-hidden py-2.5 relative"
                style={{
                  background: 'linear-gradient(90deg, #F7E7CE 0%, #FDF3E7 30%, #FFF8F0 50%, #FDF3E7 70%, #F7E7CE 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'gradient-x 6s ease infinite',
                  borderTop: '1px solid #E8C97A',
                  borderBottom: '1px solid #E8C97A',
                }}
              >
                {/* Left fade edge */}
                <div className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(to right, #F7E7CE, transparent)' }} />
                {/* Right fade edge */}
                <div className="absolute right-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(to left, #F7E7CE, transparent)' }} />
                <div className="animate-marquee flex whitespace-nowrap">
                  {[...therapy.ingredients, ...therapy.ingredients].map((ingredient, idx) => (

                    <span
                      key={idx}
                      className="inline-flex items-center"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      <span className="text-[11px] font-medium text-[#8B5E3C]">{cleanIngredient(ingredient)}</span>
                      <span className="mx-2 text-[#D4AF37] text-[11px]">✦</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Price + Book Now */}
              <div className="px-6 pb-6 mt-auto">
                {therapy.price && (
                  <p
                    className="text-xs text-[#D4AF37] font-medium mb-3"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {therapy.price}
                  </p>
                )}
                <a
                  href="/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 text-center text-xs font-medium tracking-wider uppercase transition-colors bg-[#D4AF37] text-white hover:bg-[#B8960A]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book CTA */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #F7E7CE 0%, #D4AF37 60%, #B8960A 100%)',
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-2xl mx-auto text-center px-4">
            <p
              className="text-xs font-medium tracking-[0.3em] uppercase text-white/70 mb-3"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Reserve Your Drip
            </p>
            <h2
              className="text-4xl font-light text-white mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Ready to Feel Your Best?
            </h2>
            <p
              className="text-white/80 text-sm mb-8 leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Book your IV therapy session today. Our clinical team will help you choose
              the right drip for your goals and wellness needs.
            </p>
            <a
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-white text-[#2C2C2C] text-xs font-medium tracking-wider uppercase hover:bg-[#F7E7CE] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
