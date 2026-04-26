import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { getSiteSettings } from '@/lib/supabase/settings'

export const metadata: Metadata = {
  title: 'NAD+ IV Infusion Therapy in Pasadena, CA',
  description:
    'NAD+ IV infusions at Slynn Wellness in Pasadena, CA. Replenish cellular NAD+, sharpen mental clarity, restore energy, and support healthy aging — physician-supervised. Serving Pasadena, Altadena, San Marino, Arcadia, Glendale, and the greater Los Angeles area.',
  keywords: [
    // Core
    'NAD+ Pasadena',
    'NAD+ IV Pasadena',
    'NAD infusion Pasadena',
    'NAD plus Pasadena',
    'NAD+ therapy Pasadena',
    'NAD+ drip Pasadena',
    'NAD IV therapy Pasadena',
    'best NAD Pasadena',
    'NAD near me',
    'NAD medical spa Pasadena',
    'NAD clinic Pasadena',
    // Variations
    'nicotinamide adenine dinucleotide IV',
    'NMN IV Pasadena',
    'NR IV Pasadena',
    'longevity IV Pasadena',
    'cellular health IV',
    'mitochondrial IV',
    // Pricing
    'NAD+ cost Pasadena',
    'NAD+ price Pasadena',
    'NAD per session',
    'NAD 250mg Pasadena',
    'NAD 500mg Pasadena',
    'NAD 1000mg Pasadena',
    'NAD prepay package Pasadena',
    'NAD member pricing',
    // Use cases
    'NAD+ for energy',
    'NAD+ for brain fog',
    'NAD+ for mental clarity',
    'NAD+ for anti-aging',
    'NAD+ for longevity',
    'NAD+ for chronic fatigue',
    'NAD+ for jet lag',
    'NAD+ for athletic performance',
    'NAD+ for stress',
    'NAD+ for sleep',
    'NAD+ for addiction recovery',
    'NAD+ for depression',
    'NAD+ for cognitive decline',
    'NAD+ for hangovers',
    'NAD+ for executives',
    'NAD+ for biohackers',
    // Generic
    'longevity therapy Pasadena',
    'anti-aging IV Pasadena',
    'cellular regeneration therapy',
    'metabolic IV therapy',
    'biohacking Pasadena',
    'wellness IV Pasadena',
    'concierge NAD',
    'physician-supervised NAD',
    // Nearby cities
    'NAD+ Altadena',
    'NAD+ South Pasadena',
    'NAD+ San Marino',
    'NAD+ Arcadia',
    'NAD+ Sierra Madre',
    'NAD+ Monrovia',
    'NAD+ Temple City',
    'NAD+ San Gabriel',
    'NAD+ Alhambra',
    'NAD+ La Cañada',
    'NAD+ La Cañada Flintridge',
    'NAD+ La Canada',
    'NAD+ Flintridge',
    'NAD+ Glendale',
    'NAD+ Burbank',
    'NAD+ Eagle Rock',
    'NAD+ Highland Park',
    'NAD+ San Gabriel Valley',
    'NAD+ Los Angeles',
    // Brand
    'Slynn Wellness NAD',
    'luxury medical spa Pasadena',
  ],
}

const benefits = [
  {
    tag: '01',
    title: 'Energy Restoration',
    description: 'Replenishes the cellular fuel that powers every organ, muscle, and neurological function in your body.',
  },
  {
    tag: '02',
    title: 'Mental Clarity',
    description: 'Many patients report sharper focus, improved memory, and reduced brain fog during and after treatment.',
  },
  {
    tag: '03',
    title: 'Anti-Aging Support',
    description: 'NAD+ activates sirtuins — proteins associated with longevity and healthy cellular aging.',
  },
  {
    tag: '04',
    title: 'Athletic Recovery',
    description: 'Supports faster muscle repair, reduced inflammation, and improved endurance for active individuals.',
  },
  {
    tag: '05',
    title: 'Metabolic Function',
    description: 'Plays a key role in how your body converts food to energy and regulates metabolic processes.',
  },
  {
    tag: '06',
    title: 'DNA Repair',
    description: 'Activates enzymes responsible for repairing damaged DNA, supporting long-term cellular health.',
  },
  {
    tag: '07',
    title: 'Mood & Wellbeing',
    description: 'Emerging research suggests NAD+ supports neurotransmitter function and emotional resilience.',
  },
  {
    tag: '08',
    title: 'Addiction Recovery Support',
    description: 'Used in specialized protocols to support neurological recovery and reduce cravings.',
  },
]

const timeline = [
  {
    step: 'Step 01',
    title: 'Consultation',
    description: 'Medical history review and health assessment to determine your optimal NAD+ dose and treatment frequency.',
  },
  {
    step: 'Step 02',
    title: 'Preparation',
    description: 'IV access is established and the NAD+ solution is prepared at your prescribed concentration.',
  },
  {
    step: 'Step 03',
    title: 'Slow Infusion',
    description: 'NAD+ is administered slowly over 2–4 hours. You may feel warmth, tingling, or a subtle energy shift during treatment — this is normal.',
  },
  {
    step: 'Step 04',
    title: 'Recovery & Results',
    description: 'Most clients feel increased energy and mental clarity within hours. Full benefits deepen over subsequent sessions.',
  },
]

const faqs = [
  {
    q: 'How long does a NAD+ infusion take?',
    a: '2–4 hours depending on dose. The slow rate is essential — rushing the infusion causes side effects like chest tightness or nausea. Our providers monitor your comfort throughout the entire session.',
  },
  {
    q: 'How many sessions do I need?',
    a: 'A single session provides noticeable benefits. A series of 3–5 sessions is recommended for deeper anti-aging and neurological benefits. Your provider will recommend a personalized plan based on your health goals.',
  },
  {
    q: 'Will I feel anything during the infusion?',
    a: 'Some clients feel warmth, tingling, or mild chest pressure if the rate is too fast. Our providers adjust the rate for your comfort throughout. These sensations are temporary and resolve quickly when the rate is slowed.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Many clients notice increased energy and mental clarity the same day. Full cellular benefits — including anti-aging and neurological support — accumulate over subsequent sessions in a series.',
  },
  {
    q: 'Who is a good candidate?',
    a: 'Adults experiencing fatigue, brain fog, aging concerns, or seeking performance optimization. A medical evaluation is required before starting. NAD+ is not appropriate for all individuals — your provider will review your health history.',
  },
  {
    q: 'Can NAD+ be combined with other IV therapies?',
    a: 'Yes, NAD+ can be part of a comprehensive IV wellness plan. However, it is always administered as a standalone infusion due to its slow rate requirement. Other IV therapies can be scheduled separately on the same or different days.',
  },
]

export default async function NadInfusionPage() {
  const settings = await getSiteSettings()

  const cardStyle = {
    background: 'rgba(255,250,245,0.85)',
    border: '1px solid rgba(233,221,209,0.9)',
    boxShadow: '0 20px 60px rgba(90,66,44,0.08)',
  }

  const tagStyle = {
    background: '#EFE5DB',
    color: '#8B6340',
    fontFamily: 'Montserrat, sans-serif',
  }

  return (
    <div style={{
      background: 'radial-gradient(circle at top left, rgba(212,175,55,0.08), transparent 30%), radial-gradient(circle at top right, rgba(184,169,154,0.12), transparent 25%), linear-gradient(180deg, #FDF8F3 0%, #F7F1EA 40%, #FFFAF5 100%)',
      minHeight: '100vh',
      color: '#2C2C2C',
    }}>
      <ServiceSchema
        slug="nad-infusion"
        name="NAD+ Infusion Therapy"
        description="Replenish declining NAD+ levels with physician-supervised IV infusions at Slynn Wellness in Pasadena, CA. Restore cellular energy, sharpen mental clarity, and support healthy aging from within."
        category="Wellness"
        faqs={faqs}
        priceRange="$$$"
      />

      {/* Hero */}
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/wellness"
            className="inline-flex items-center gap-2 text-xs text-[#8B7355] hover:text-[#D4AF37] transition-colors mb-8"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Wellness
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
            {/* Left — copy */}
            <div
              className="lg:col-span-3 rounded-3xl p-10 relative overflow-hidden"
              style={{ ...cardStyle, background: 'rgba(255,250,245,0.88)', boxShadow: '0 20px 60px rgba(90,66,44,0.10)' }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(233,221,209,0.9)', color: '#8B6340', fontFamily: 'Montserrat, sans-serif' }}
              >
                Cellular Energy &amp; Anti-Aging
              </div>

              <h1
                className="font-light mb-4 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', letterSpacing: '-0.01em' }}
              >
                NAD+ Infusion
              </h1>

              <p
                className="text-sm leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
              >
                NAD+ is a powerful coenzyme that fuels every cell in your body. Our physician-supervised NAD+ IV infusions replenish declining levels to restore energy, sharpen mental clarity, and support healthy aging from within.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white transition-all hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C6A050 100%)', boxShadow: '0 10px 30px rgba(212,175,55,0.30)', fontFamily: 'Montserrat, sans-serif' }}
                >
                  Book Consultation
                </a>
                <a
                  href="#overview"
                  className="px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
                  style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(233,221,209,0.9)', color: '#2C2C2C', fontFamily: 'Montserrat, sans-serif' }}
                >
                  Explore Treatment
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '2–4 Hours', label: 'Slow infusion for maximum benefit' },
                  { value: 'Cellular Level', label: 'Works at the core of your biology' },
                  { value: 'Series or Single', label: 'Flexible treatment options' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(233,221,209,0.9)' }}>
                    <strong className="block mb-1" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem' }}>{stat.value}</strong>
                    <span className="text-xs" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — detail card */}
            <div
              className="lg:col-span-2 rounded-3xl p-6 flex flex-col gap-5"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,248,242,0.90))', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 20px 60px rgba(90,66,44,0.10)' }}
            >
              {/* Portrait */}
              <div
                className="rounded-2xl flex-1 flex items-end p-4 relative overflow-hidden"
                style={{
                  minHeight: '220px',
                  backgroundImage: 'url(https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/iv-pic1.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)', borderRadius: 'inherit' }} />
                <span
                  className="relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                  style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)', color: '#8B6340', fontFamily: 'Montserrat, sans-serif', border: '1px solid rgba(233,221,209,0.8)' }}
                >
                  Cellular Renewal
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Best for', value: 'Fatigue, brain fog, anti-aging, athletic recovery' },
                  { label: 'Protocol', value: 'Slow IV infusion — 2 to 4 hours' },
                  { label: 'Goal', value: 'Restored cellular energy and cognitive clarity' },
                  { label: 'Pricing', value: 'From $250 · $1/mg' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center gap-4 px-4 py-3.5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(233,221,209,0.9)' }}>
                    <strong className="text-sm flex-shrink-0" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}>{row.label}</strong>
                    <span className="text-xs text-right" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Pricing
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              NAD+ is priced per milligram. Higher doses provide more comprehensive cellular support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            {/* Single Session */}
            <div className="rounded-2xl p-6" style={cardStyle}>
              <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={tagStyle}>
                Single Session
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 300, color: '#2C2C2C' }}>$500</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', color: '#7a6f66' }}>/ session</span>
              </div>
              <div className="w-full h-px mb-4" style={{ background: 'rgba(233,221,209,0.9)' }} />
              <div className="space-y-2">
                {[
                  { dose: '250mg (minimum)', price: '$250' },
                  { dose: '500mg', price: '$500' },
                  { dose: 'Custom dose', price: '$1/mg' },
                ].map((item) => (
                  <div key={item.dose} className="flex justify-between items-center">
                    <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.78rem', color: '#7a6f66' }}>{item.dose}</span>
                    <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#2C2C2C' }}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prepay 3 Sessions */}
            <div className="rounded-2xl p-6" style={{ ...cardStyle, background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.25)' }}>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase" style={tagStyle}>
                  Prepay 3 Sessions
                </span>
                <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: 'rgba(212,175,55,0.15)', color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}>
                  Best Value
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 300, color: '#D4AF37' }}>$349</span>
                <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', color: '#7a6f66' }}>/ session</span>
              </div>
              <p className="text-xs mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8A99A', margin: '4px 0 16px' }}>
                500mg per session · Prepay 3 sessions
              </p>
              <div className="w-full h-px mb-4" style={{ background: 'rgba(212,175,55,0.2)' }} />
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.78rem', color: '#7a6f66' }}>Total (3 sessions)</span>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#2C2C2C' }}>$1,047</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.78rem', color: '#7a6f66' }}>You save</span>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#D4AF37', fontWeight: 600 }}>$453</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl px-6 py-4" style={{ background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(233,221,209,0.9)' }}>
            <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Most first-time clients start with 250mg. Prepay pricing of $349/session applies to 500mg sessions only. Your provider will recommend the optimal dose and frequency based on your health goals.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Overview
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              NAD+ is one of the most important molecules in your body — and its decline is directly linked to aging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: 'What is NAD+?',
                body: 'NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme present in every living cell. It plays a central role in energy metabolism, DNA repair, gene expression, and cellular communication. After age 40, NAD+ levels can drop by as much as 50%, contributing to fatigue, cognitive decline, and accelerated aging.',
                pills: [
                  { label: 'Energy Metabolism', value: 'Powers cellular function' },
                  { label: 'DNA Repair', value: 'Supports cellular integrity' },
                  { label: 'Cellular Health', value: 'Declines naturally with age' },
                ],
              },
              {
                title: 'Why IV infusion?',
                body: 'Oral NAD+ supplements have poor bioavailability — most are broken down before reaching your cells. Intravenous delivery bypasses the digestive system entirely, ensuring 100% absorption directly into your bloodstream for immediate cellular uptake. The slow infusion protocol maximizes benefit while minimizing discomfort.',
                pills: [
                  { label: '100% Absorption', value: 'Direct to bloodstream' },
                  { label: 'Immediate Effect', value: 'Bypasses digestion' },
                  { label: 'Physician Supervised', value: 'Safe, monitored care' },
                ],
              },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl p-8 flex flex-col" style={cardStyle}>
                <h3 className="mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400, margin: '0 0 12px' }}>{card.title}</h3>
                <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>{card.body}</p>
                <div className="grid grid-cols-3 gap-3">
                  {card.pills.map((pill) => (
                    <div key={pill.label} className="p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(233,221,209,0.9)' }}>
                      <strong className="block mb-1.5" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}>{pill.label}</strong>
                      <span className="text-xs" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>{pill.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              What NAD+ Can Do For You
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              From cellular energy to cognitive clarity — NAD+ works at the foundation of nearly every biological process.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit) => (
              <div key={benefit.tag} className="rounded-3xl p-6" style={cardStyle}>
                <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={tagStyle}>{benefit.tag}</span>
                <h4 className="mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 400, margin: '0 0 8px' }}>{benefit.title}</h4>
                <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Your NAD+ Experience
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              A calm, monitored experience from first consultation through each infusion session.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {timeline.map((item) => (
              <div key={item.step} className="rounded-3xl p-6" style={cardStyle}>
                <strong className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8B6340' }}>{item.step}</strong>
                <h4 className="mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 400, margin: '0 0 8px' }}>{item.title}</h4>
                <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            style={{ background: 'linear-gradient(135deg, rgba(255,250,245,0.95), rgba(247,239,230,0.98))', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 20px 60px rgba(90,66,44,0.10)' }}
          >
            <div>
              <h3 className="mb-3 font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', margin: '0 0 12px' }}>
                Ready to Recharge at the Cellular Level?
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                A consultation helps us determine your optimal dose and treatment plan. Whether you&apos;re seeking an energy reset, cognitive boost, or long-term anti-aging support — NAD+ may be the answer.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href="/book" className="w-full text-center px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C6A050 100%)', boxShadow: '0 10px 30px rgba(212,175,55,0.30)', fontFamily: 'Montserrat, sans-serif' }}>
                Book Consultation
              </a>
              <Link href="/contact" className="w-full text-center px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors" style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(233,221,209,0.9)', color: '#2C2C2C', fontFamily: 'Montserrat, sans-serif' }}>
                Contact Us
              </Link>
              <a href={`tel:${settings.phone?.replace(/\D/g, '')}`} className="w-full text-center px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors" style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(233,221,209,0.9)', color: '#2C2C2C', fontFamily: 'Montserrat, sans-serif' }}>
                {settings.phone || 'Call Us'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Frequently asked questions
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Have more questions? Our team is happy to walk you through everything during your consultation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl p-7" style={cardStyle}>
                <strong className="block mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 500 }}>{faq.q}</strong>
                <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0, lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            style={{ background: 'linear-gradient(135deg, rgba(255,250,245,0.95), rgba(247,239,230,0.98))', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 20px 60px rgba(90,66,44,0.10)' }}
          >
            <div>
              <h3 className="mb-3 font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', margin: '0 0 12px' }}>
                Book Your NAD+ Consultation
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                Slynn Wellness offers physician-supervised NAD+ infusions in a serene, luxury environment. Take the first step toward restored cellular energy and lasting vitality.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="/book" className="px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C6A050 100%)', boxShadow: '0 10px 30px rgba(212,175,55,0.30)', fontFamily: 'Montserrat, sans-serif' }}>
                Book Now
              </a>
              <Link href="/contact" className="px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors" style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(233,221,209,0.9)', color: '#2C2C2C', fontFamily: 'Montserrat, sans-serif' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
