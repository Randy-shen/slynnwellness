import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { getSiteSettings } from '@/lib/supabase/settings'

export const metadata: Metadata = {
  title: 'Sculptra Collagen Bio-Stimulator Filler in Pasadena, CA',
  description:
    'Sculptra PLLA bio-stimulator at Slynn Wellness in Pasadena, CA. Gradually restore facial volume and stimulate your own collagen for natural, lasting results. Serving Pasadena, Altadena, San Marino, Arcadia, Glendale, and the greater Los Angeles area.',
  keywords: [
    // Core
    'Sculptra Pasadena',
    'best Sculptra Pasadena',
    'Sculptra near me',
    'Sculptra medical spa Pasadena',
    'Sculptra injector Pasadena',
    'Sculptra RN Pasadena',
    'Sculptra clinic Pasadena',
    'Sculptra Aesthetic Pasadena',
    'Galderma Sculptra',
    // Pricing
    'Sculptra cost Pasadena',
    'Sculptra price Pasadena',
    'Sculptra per vial',
    'Sculptra vial cost',
    'Sculptra package Pasadena',
    'Sculptra series cost',
    'Sculptra full face cost',
    // Generic terms
    'PLLA Pasadena',
    'poly-L-lactic acid filler Pasadena',
    'collagen stimulator Pasadena',
    'biostimulator filler Pasadena',
    'bio-stimulator Pasadena',
    'gradual filler Pasadena',
    'natural filler Pasadena',
    'long-lasting filler Pasadena',
    'collagen induction filler',
    // Treatment areas
    'Sculptra cheeks',
    'Sculptra temples',
    'Sculptra jawline',
    'Sculptra chin',
    'Sculptra hands',
    'Sculptra body',
    'Sculptra butt',
    'Sculptra BBL',
    'non-surgical BBL Pasadena',
    'butt augmentation non-surgical',
    'Sculptra hip dips',
    'Sculptra arms',
    'Sculptra knees',
    'Sculptra décolletage',
    // Concerns
    'facial volume loss Pasadena',
    'cheek hollowing treatment',
    'temple hollowing treatment',
    'sunken cheeks treatment',
    'sagging skin Pasadena',
    'midface volume',
    'natural facial rejuvenation',
    'aging face volume',
    'collagen loss treatment',
    'liquid facelift Pasadena',
    'non-surgical facelift Pasadena',
    'gradual facial rejuvenation',
    'long-term filler',
    'preventative filler',
    // Comparison
    'Sculptra vs filler',
    'Sculptra vs Restylane',
    'Sculptra vs Juvederm',
    'Sculptra vs Voluma',
    'Sculptra vs Radiesse',
    'PLLA vs HA filler',
    // Nearby cities
    'Sculptra Altadena',
    'Sculptra South Pasadena',
    'Sculptra San Marino',
    'Sculptra Arcadia',
    'Sculptra Sierra Madre',
    'Sculptra Monrovia',
    'Sculptra Temple City',
    'Sculptra San Gabriel',
    'Sculptra Alhambra',
    'Sculptra La Cañada',
    'Sculptra La Cañada Flintridge',
    'Sculptra La Canada',
    'Sculptra Flintridge',
    'Sculptra Glendale',
    'Sculptra Burbank',
    'Sculptra Eagle Rock',
    'Sculptra Highland Park',
    'Sculptra San Gabriel Valley',
    'Sculptra Los Angeles',
    // Brand
    'Slynn Wellness Sculptra',
    'luxury medical spa Pasadena',
  ],
  alternates: { canonical: '/services/sculptra' },
}

const treatmentAreas = [
  {
    tag: '01',
    title: 'Temples',
    description: 'Restore hollowed temples that make the face appear gaunt or aged, rebuilding structure gradually as collagen develops.',
  },
  {
    tag: '02',
    title: 'Cheeks',
    description: 'Rebuild lost cheek volume and lift midface contours gradually over months as your body\'s collagen response takes effect.',
  },
  {
    tag: '03',
    title: 'Jawline',
    description: 'Improve jawline definition and reduce jowling over time through gradual collagen stimulation and tissue support.',
  },
  {
    tag: '04',
    title: 'Chin',
    description: 'Enhance chin and lower face contour subtly as collagen builds, creating a more balanced and defined facial profile.',
  },
  {
    tag: '05',
    title: 'Nasolabial Folds',
    description: 'Soften deep smile lines as collagen gradually rebuilds the underlying tissue structure over a series of treatments.',
  },
  {
    tag: '06',
    title: 'Marionette Lines',
    description: 'Address lines at the corners of the mouth with gradual collagen support that improves facial structure from within.',
  },
  {
    tag: '07',
    title: 'Full Face',
    description: 'Comprehensive facial rejuvenation addressing multiple areas of volume loss for an overall lifted, youthful appearance.',
  },
  {
    tag: '08',
    title: 'Décolletage',
    description: 'Used off-label to improve skin quality and texture on the chest area, stimulating collagen for smoother, firmer skin.',
  },
]

const timeline = [
  {
    step: 'Step 01',
    title: 'Consultation',
    description: 'A full facial assessment reviews your areas of volume loss, skin laxity, and candidacy. We discuss the realistic timeline for results so you know what to expect.',
  },
  {
    step: 'Step 02',
    title: 'Treatment',
    description: 'Diluted SCULPTRA is injected strategically into targeted areas. Your provider explains the massage protocol — an important step for even distribution and optimal results.',
  },
  {
    step: 'Step 03',
    title: 'Collagen Response',
    description: 'Results develop gradually over 3–6 months as your body builds new collagen. This is intentional — the slow build creates natural-looking, lasting improvement.',
  },
  {
    step: 'Step 04',
    title: 'Maintenance',
    description: 'Touch-up sessions may be recommended to maintain and optimize your results. Most clients complete 2–3 sessions spaced 4–6 weeks apart.',
  },
]

const faqs = [
  {
    q: 'How is SCULPTRA different from fillers?',
    a: 'SCULPTRA is a collagen bio-stimulator, not a filler. Traditional fillers like Juvederm add physical volume immediately using hyaluronic acid. SCULPTRA works differently — it triggers your body to produce its own collagen over time, creating gradual, natural-looking volume that develops over months rather than days.',
  },
  {
    q: 'How many sessions do I need?',
    a: 'Most clients require 2–3 treatment sessions spaced 4–6 weeks apart. The exact number depends on the degree of volume loss, the areas being treated, and your individual collagen response. Your provider will create a personalized treatment plan during your consultation.',
  },
  {
    q: 'When will I see results?',
    a: 'SCULPTRA results are gradual by design. You may notice subtle improvement in the weeks following each session, but the full effect typically develops over 3–6 months as your body continues to build collagen. This slow progression is what gives SCULPTRA its natural-looking outcome.',
  },
  {
    q: 'How long do results last?',
    a: 'SCULPTRA results can last 2 years or more with a proper treatment series. Because the improvement comes from your own collagen — not a foreign substance filling space — the results tend to be longer-lasting than most hyaluronic acid fillers.',
  },
  {
    q: 'Can SCULPTRA be reversed?',
    a: 'No — unlike hyaluronic acid fillers, SCULPTRA cannot be dissolved or reversed. Because it works by stimulating your own collagen production, there is no enzyme available to neutralize the results. This makes choosing an experienced, qualified provider especially important.',
  },
  {
    q: 'Who is a good candidate for SCULPTRA?',
    a: 'SCULPTRA is ideal for adults experiencing facial volume loss, hollowing in the temples or cheeks, skin laxity, or deep folds who are looking for gradual, long-lasting improvement. It is not recommended for those seeking immediate results, lip augmentation, or a single-session correction.',
  },
]

export default async function SCULPTRAPage() {
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
        slug="sculptra"
        name="SCULPTRA Bio-Stimulator"
        description="Gradually restore facial volume and stimulate your own collagen production with SCULPTRA poly-L-lactic acid bio-stimulator treatments at Slynn Wellness in Pasadena, CA."
        category="Medical Aesthetic"
        faqs={faqs}
        priceRange="$$$$"
      />

      {/* Hero */}
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/medical-aesthetic"
            className="inline-flex items-center gap-2 text-xs text-[#8B7355] hover:text-[#D4AF37] transition-colors mb-8"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Medical Aesthetic
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
                Poly-L-Lactic Acid Bio-Stimulator
              </div>

              <h1
                className="font-light mb-4 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', letterSpacing: '-0.01em' }}
              >
                SCULPTRA
              </h1>

              <p
                className="text-sm leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
              >
                SCULPTRA is a poly-L-lactic acid (PLLA) bio-stimulator that gradually restores facial volume by stimulating your body&apos;s own collagen production for natural, long-lasting rejuvenation.
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
                  { value: 'Gradual results', label: 'Develops over 3–6 months' },
                  { value: '2+ years', label: 'Typical results duration' },
                  { value: '2–3 sessions', label: 'Recommended treatment series' },
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
                  backgroundImage: 'url(https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/scupltra-product.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)', borderRadius: 'inherit' }} />
                <span
                  className="relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                  style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)', color: '#8B6340', fontFamily: 'Montserrat, sans-serif', border: '1px solid rgba(233,221,209,0.8)' }}
                >
                  Gradual collagen restoration
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Best for', value: 'Volume loss, facial hollowing, skin laxity, deep folds' },
                  { label: 'Technology', value: 'PLLA collagen bio-stimulator' },
                  { label: 'Goal', value: 'Gradual, natural-looking volume restoration' },
                  { label: 'Pricing', value: 'Starting at $850/vial' },
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

      {/* Before & After */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Before & After
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Individual results may vary. Photos shown with patient consent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/sculptra-before-after2.png',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/scalptra-bf-&-af-1.png',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/scalptra-bf-&-af.png',
            ].map((url, i) => (
              <div key={i} className="rounded-3xl overflow-hidden" style={cardStyle}>
                {url ? (
                  <img
                    src={url}
                    alt={`SCULPTRA result ${i + 1}`}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                ) : (
                  <div style={{ background: 'linear-gradient(135deg, #2C1F0E 0%, #4A3218 40%, #8B6535 70%, #D4AF37 100%)', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(255,255,255,0.5)' }}>Photo coming soon</p>
                  </div>
                )}
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
              SCULPTRA is a bio-stimulator, not a filler — it works with your body to rebuild collagen gradually for results that look and feel natural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: 'What is SCULPTRA?',
                body: "SCULPTRA is an FDA-approved injectable made from poly-L-lactic acid (PLLA), a biocompatible synthetic material that has been used in medicine for decades. Unlike hyaluronic acid fillers that add volume directly, SCULPTRA works as a collagen bio-stimulator — it triggers your body's own fibroblasts to produce new collagen over time. The result is a gradual, natural restoration of facial volume that develops over 3–6 months.",
                pills: [
                  { label: 'Stimulates', value: 'Your own collagen production' },
                  { label: 'Gradual', value: 'Results over 3–6 months' },
                  { label: 'Long-lasting', value: '2+ years of improvement' },
                ],
              },
              {
                title: 'Why choose a bio-stimulator?',
                body: "Think of SCULPTRA as building a collagen bank over time rather than making an immediate deposit. Because the improvement comes from your own tissue rather than a foreign substance, results look and feel remarkably natural. The series approach — typically 2–3 sessions — allows your provider to refine and optimize results progressively. For those who value subtle, long-lasting rejuvenation over instant transformation, SCULPTRA offers a compelling alternative to traditional fillers.",
                pills: [
                  { label: 'Natural', value: 'Your own collagen, not filler' },
                  { label: '2+ Years', value: 'Lasting results' },
                  { label: 'Collagen', value: 'Bio-stimulation approach' },
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

      {/* Treatment Areas */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Treatment areas
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              SCULPTRA can address multiple areas of facial volume loss as part of a comprehensive, staged treatment plan.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {treatmentAreas.map((area) => (
              <div key={area.tag} className="rounded-3xl p-6" style={cardStyle}>
                <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={tagStyle}>{area.tag}</span>
                <h4 className="mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 400, margin: '0 0 8px' }}>{area.title}</h4>
                <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>{area.description}</p>
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
              What to expect
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              SCULPTRA is a journey, not a quick fix — here is what your treatment experience looks like at Slynn Wellness.
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
                Ready to invest in gradual, lasting rejuvenation?
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                A consultation helps us assess your facial volume loss, review candidacy, and set a realistic timeline — so you can commit to the process with full confidence in your expected results.
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
                Book your SCULPTRA consultation
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                Slynn Wellness offers a refined, welcoming environment for aesthetic care in Pasadena. Book your consultation and receive a personalized SCULPTRA treatment plan tailored to your facial anatomy and long-term goals.
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
