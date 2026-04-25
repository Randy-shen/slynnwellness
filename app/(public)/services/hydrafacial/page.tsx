import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { getSiteSettings } from '@/lib/supabase/settings'

export const metadata: Metadata = {
  title: 'HYDRAFACIAL | Slynn Wellness',
  description:
    'HYDRAFACIAL at Slynn Wellness in Pasadena, CA. The world\'s leading hydradermabrasion treatment — cleanse, extract, and hydrate for an instant visible glow with zero downtime.',
}

const benefits = [
  {
    tag: '01',
    title: 'Deep Cleansing',
    description: 'Removes surface debris, dead skin cells, and buildup that daily cleansing cannot reach.',
  },
  {
    tag: '02',
    title: 'Pore Purification',
    description: 'Painless vortex suction extracts blackheads and congestion without manual extractions.',
  },
  {
    tag: '03',
    title: 'Instant Hydration',
    description: 'High-potency hyaluronic acid and peptides penetrate deep for lasting moisture.',
  },
  {
    tag: '04',
    title: 'Radiant Glow',
    description: 'Clients consistently report a visible brightness and glow immediately after treatment.',
  },
  {
    tag: '05',
    title: 'Fine Line Reduction',
    description: 'Regular treatments support collagen production and reduce the appearance of fine lines.',
  },
  {
    tag: '06',
    title: 'Even Skin Tone',
    description: 'Targeted brightening serums address hyperpigmentation and uneven texture.',
  },
  {
    tag: '07',
    title: 'No Downtime',
    description: 'Return to makeup, work, and activities immediately after your session.',
  },
  {
    tag: '08',
    title: 'Customizable',
    description: 'Every treatment is tailored to your skin type, concerns, and goals.',
  },
]

const timeline = [
  {
    step: 'Step 01',
    title: 'Consultation',
    description: 'Skin assessment to determine your ideal HYDRAFACIAL level and any targeted boosters for your specific concerns.',
  },
  {
    step: 'Step 02',
    title: 'Treatment',
    description: 'Relaxing 30–45 minute treatment using the HYDRAFACIAL device with customized serums.',
  },
  {
    step: 'Step 03',
    title: 'Immediate Glow',
    description: 'Skin appears brighter, smoother, and more hydrated immediately after treatment — no redness or downtime.',
  },
  {
    step: 'Step 04',
    title: 'Maintenance',
    description: 'Monthly treatments are recommended for ongoing skin health and cumulative results.',
  },
]

const faqs = [
  {
    q: 'How often should I get a HYDRAFACIAL?',
    a: 'Monthly treatments are ideal for maintaining results. Many clients notice a significant cumulative improvement with consistent sessions.',
  },
  {
    q: 'Is there any downtime?',
    a: 'No. HYDRAFACIAL has zero downtime. Your skin may appear slightly flushed immediately after, but you can apply makeup and resume all activities right away.',
  },
  {
    q: 'Is HYDRAFACIAL suitable for sensitive skin?',
    a: 'Yes. HYDRAFACIAL is gentle enough for sensitive skin types and can be customized to avoid any irritating ingredients.',
  },
  {
    q: 'What is the difference between Signature, Deluxe, and Platinum?',
    a: 'Signature is the core treatment. Deluxe adds a targeted booster serum. Platinum adds lymphatic drainage and LED light therapy for the most comprehensive result.',
  },
  {
    q: 'Can HYDRAFACIAL be combined with other treatments?',
    a: 'Yes — it pairs beautifully with Botox, fillers, and chemical peels (with appropriate timing). Your provider will advise on the best sequence.',
  },
  {
    q: 'How soon will I see results?',
    a: 'Most clients see visible improvement in tone, texture, and hydration immediately after their first treatment.',
  },
]

export default async function HYDRAFACIALPage() {
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
        slug="hydrafacial"
        name="HYDRAFACIAL"
        description="HYDRAFACIAL at Slynn Wellness in Pasadena, CA. The world's leading hydradermabrasion treatment — cleanse, extract, and hydrate for an instant visible glow with zero downtime. Serving Pasadena, San Marino, Arcadia, Glendale, and the greater Los Angeles area."
        category="Skin & Scalp Care"
        faqs={faqs}
        priceRange="$$"
      />

      {/* Hero */}
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/skin-scalp-care"
            className="inline-flex items-center gap-2 text-xs text-[#8B7355] hover:text-[#D4AF37] transition-colors mb-8"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Skin &amp; Scalp Care
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
                Signature Resurfacing Treatment
              </div>

              <h1
                className="font-light mb-4 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', letterSpacing: '-0.01em' }}
              >
                HYDRAFACIAL
              </h1>

              <p
                className="text-sm leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
              >
                The world&apos;s leading hydradermabrasion treatment — HYDRAFACIAL simultaneously cleanses, exfoliates, extracts, and infuses your skin with nourishing serums for an instant, visible glow with zero downtime.
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
                  { value: 'No Downtime', label: 'Return to activities immediately' },
                  { value: 'All Skin Types', label: 'Safe and effective for everyone' },
                  { value: 'Instant Glow', label: 'Visible results after one treatment' },
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
                className="rounded-2xl flex-1 flex flex-col justify-between p-4 relative overflow-hidden"
                style={{
                  minHeight: '220px',
                  backgroundImage: 'url(https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/hydrafacial.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, transparent 40%, rgba(0,0,0,0.30) 100%)', borderRadius: 'inherit' }} />
                <span className="relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase self-start" style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)', color: '#8B6340', fontFamily: 'Montserrat, sans-serif', border: '1px solid rgba(233,221,209,0.8)' }}>
                  Cleanse · Extract · Hydrate
                </span>
                <span className="relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase self-start" style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)', color: '#8B6340', fontFamily: 'Montserrat, sans-serif', border: '1px solid rgba(233,221,209,0.8)' }}>
                  HYDRAFACIAL
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Best for', value: 'Congestion, dullness, fine lines, uneven texture, hydration' },
                  { label: 'Technology', value: 'Vortex-Fusion® hydradermabrasion' },
                  { label: 'Goal', value: 'Clearer, brighter, deeply hydrated skin' },
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
              Save with our 3-session packages — regular treatments deliver the best long-term results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Signature', single: '$189', package: '$499', sessions: '3 sessions' },
              { name: 'Deluxe', single: '$229', package: '$599', sessions: '3 sessions' },
              { name: 'Platinum', single: '$299', package: '$799', sessions: '3 sessions' },
            ].map((item) => (
              <div key={item.name} className="rounded-2xl p-6" style={{ background: 'rgba(255,250,245,0.85)', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 10px 30px rgba(90,66,44,0.06)' }}>
                <h3 className="font-light mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', margin: '0 0 16px' }}>{item.name}</h3>
                <div className="w-full h-px mb-4" style={{ background: 'rgba(233,221,209,0.9)' }} />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>Single session</span>
                    <span className="font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#2C2C2C' }}>{item.single}</span>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 rounded-xl" style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)' }}>
                    <span className="text-xs font-medium" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8B6340' }}>{item.sessions}</span>
                    <span className="font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#D4AF37' }}>{item.package}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Before &amp; After
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Individual results may vary. Photos shown with patient consent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/hydrafacial-before-after-1.png',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/hydrafacial-before-after-2.png',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/hydrafacial-before-after-3.png',
            ].map((url, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255,250,245,0.85)',
                  border: '1px solid rgba(233,221,209,0.9)',
                  boxShadow: '0 20px 60px rgba(90,66,44,0.08)',
                }}
              >
                <img
                  src={url}
                  alt={`HYDRAFACIAL result ${i + 1}`}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            ))}
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
              HYDRAFACIAL is more than a facial — it&apos;s a complete skin health treatment backed by clinical results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: 'What is HYDRAFACIAL?',
                body: 'HYDRAFACIAL uses patented Vortex-Fusion® technology to deliver a multi-step treatment in a single session. Unlike traditional facials, it simultaneously cleanses, exfoliates, extracts impurities, and infuses the skin with targeted serums — all without irritation or downtime. It\'s one of the most performed aesthetic treatments worldwide, trusted by dermatologists and skin care professionals.',
                pills: [
                  { label: 'Vortex-Fusion®', value: 'Patented delivery technology' },
                  { label: 'No Downtime', value: 'Return to activities immediately' },
                  { label: 'Clinically Proven', value: 'FDA-cleared for all skin types' },
                ],
              },
              {
                title: 'The 3 Steps',
                body: 'Step 1 — Cleanse & Peel: Gentle exfoliation and resurfacing reveal a fresh skin layer. Step 2 — Extract & Hydrate: Painless suction removes debris from pores while nourishing serums are delivered. Step 3 — Fuse & Protect: Antioxidants and peptides are saturated into the skin for long-lasting hydration and protection.',
                pills: [
                  { label: 'Cleanse', value: 'Exfoliate & resurface' },
                  { label: 'Extract', value: 'Remove & nourish' },
                  { label: 'Hydrate', value: 'Fuse & protect' },
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

      {/* Treatment Levels */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Choose Your Treatment Level
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Each level builds on the last for a progressively enhanced experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                tag: '01',
                title: 'Signature',
                description: 'The core HYDRAFACIAL experience. Deep cleansing, gentle exfoliation, painless extraction, and intense hydration in one streamlined treatment.',
              },
              {
                tag: '02',
                title: 'Deluxe',
                description: 'Everything in Signature plus a targeted booster serum customized to your skin concern — brightening, anti-aging, or clarifying.',
              },
              {
                tag: '03',
                title: 'Platinum',
                description: 'The ultimate HYDRAFACIAL. Full Deluxe treatment enhanced with lymphatic drainage to reduce puffiness and LED light therapy for collagen support.',
              },
              {
                tag: '04',
                title: 'Add-Ons Available',
                description: 'Boost any treatment with targeted enhancements. Ask your provider about lip treatment, eye treatment, or décolleté add-ons.',
              },
            ].map((item) => (
              <div key={item.tag} className="rounded-3xl p-6" style={cardStyle}>
                <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={tagStyle}>{item.tag}</span>
                <h4 className="mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 400, margin: '0 0 8px' }}>{item.title}</h4>
                <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section id="experience" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              What to expect
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              From consultation to visible results — here is what the experience looks like at Slynn Wellness.
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

      {/* Benefits */}
      <section id="benefits" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              What HYDRAFACIAL Can Do For You
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              HYDRAFACIAL is one of the most versatile and beloved aesthetic treatments for all skin types.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((item) => (
              <div key={item.tag} className="rounded-3xl p-6" style={cardStyle}>
                <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={tagStyle}>{item.tag}</span>
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
                Ready for Your Best Skin?
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                A consultation helps us understand your skin goals, choose the right HYDRAFACIAL level, and customize the perfect serum boosters for your unique concerns.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C6A050 100%)', boxShadow: '0 10px 30px rgba(212,175,55,0.30)', fontFamily: 'Montserrat, sans-serif' }}
              >
                Book Consultation
              </a>
              <Link
                href="/contact"
                className="w-full text-center px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
                style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(233,221,209,0.9)', color: '#2C2C2C', fontFamily: 'Montserrat, sans-serif' }}
              >
                Contact Us
              </Link>
              <a
                href={`tel:${settings.phone?.replace(/\D/g, '')}`}
                className="w-full text-center px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
                style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(233,221,209,0.9)', color: '#2C2C2C', fontFamily: 'Montserrat, sans-serif' }}
              >
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
                Book Your HYDRAFACIAL
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                Slynn Wellness offers all three levels of HYDRAFACIAL treatment in a serene, luxury environment. Book your consultation and let our skin care experts customize the perfect treatment for your skin.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white transition-all hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C6A050 100%)', boxShadow: '0 10px 30px rgba(212,175,55,0.30)', fontFamily: 'Montserrat, sans-serif' }}
              >
                Book Now
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
                style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(233,221,209,0.9)', color: '#2C2C2C', fontFamily: 'Montserrat, sans-serif' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
