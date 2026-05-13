import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { getSiteSettings } from '@/lib/supabase/settings'
import ImageCarousel from '@/components/sections/ImageCarousel'

const carouselImages = [
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/rejuran-skin-booster.png', alt: 'REJURAN Skin Booster' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/rejuran-healing-essense-description.png', alt: 'REJURAN Healing Essence' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/rejuran-human-pic.png', alt: 'REJURAN Treatment' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/rejuran-customer-product-line.png', alt: 'REJURAN Product Line' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/rejuran-healing-essense.png', alt: 'REJURAN Healing Essence' },
]

export const metadata: Metadata = {
  title: 'Rejuran PDRN Skin Booster in Pasadena, CA',
  description:
    'Rejuran PDRN polynucleotide skin biorevitalization at Slynn Wellness in Pasadena, CA. Advanced injectable skin booster to regenerate texture, reduce fine lines, and restore resilience. Serving Pasadena, Altadena, San Marino, Arcadia, Glendale, and the greater Los Angeles area.',
  keywords: [
    // Brand + city
    'Rejuran Pasadena',
    'Rejuran Healer Pasadena',
    'Rejuran I Pasadena',
    'Rejuran S Pasadena',
    'best Rejuran Pasadena',
    'Rejuran near me',
    'Rejuran medical spa Pasadena',
    'Rejuran injector Pasadena',
    'Rejuran RN Pasadena',
    // Pricing
    'Rejuran cost Pasadena',
    'Rejuran price Pasadena',
    'Rejuran per session',
    'Rejuran package Pasadena',
    // Generic / category terms
    'PDRN therapy Pasadena',
    'PDRN injection Pasadena',
    'polynucleotide treatment Pasadena',
    'polynucleotide injection Pasadena',
    'salmon DNA injection Pasadena',
    'skin biorevitalization Pasadena',
    'skin booster Pasadena',
    'regenerative skin treatment',
    'skin barrier repair Pasadena',
    'k-beauty skin treatment Pasadena',
    'Korean skin booster',
    'natural skin regeneration',
    'collagen stimulator injection',
    // Treatment areas
    'Rejuran face',
    'Rejuran under eye',
    'Rejuran neck',
    'Rejuran décolletage',
    'Rejuran scalp',
    'Rejuran hands',
    // Skin concerns
    'dull skin treatment Pasadena',
    'fine lines treatment Pasadena',
    'enlarged pores treatment',
    'rough texture treatment',
    'skin laxity treatment',
    'crepey skin treatment',
    'sensitive skin treatment',
    'acne scar treatment Pasadena',
    'sun damage treatment',
    'environmental skin damage',
    'damaged skin barrier',
    // Comparison
    'Rejuran vs PRP',
    'Rejuran vs Skinvive',
    'Rejuran vs Profhilo',
    'Rejuran vs filler',
    'PRP alternative Pasadena',
    'natural skin booster',
    // Nearby cities
    'Rejuran Altadena',
    'Rejuran South Pasadena',
    'Rejuran San Marino',
    'Rejuran Arcadia',
    'Rejuran Sierra Madre',
    'Rejuran Monrovia',
    'Rejuran Temple City',
    'Rejuran San Gabriel',
    'Rejuran Alhambra',
    'Rejuran La Cañada',
    'Rejuran La Cañada Flintridge',
    'Rejuran La Canada',
    'Rejuran Flintridge',
    'Rejuran Glendale',
    'Rejuran Burbank',
    'Rejuran Eagle Rock',
    'Rejuran Highland Park',
    'Rejuran San Gabriel Valley',
    'Rejuran Los Angeles',
    // Brand
    'Slynn Wellness Rejuran',
    'luxury medical spa Pasadena',
  ],
  alternates: { canonical: '/services/rejuran' },
}

const concerns = [
  {
    tag: '01',
    title: 'Fine Lines & Wrinkles',
    description: 'PDRN stimulates collagen synthesis to gradually soften fine lines and improve overall skin smoothness.',
  },
  {
    tag: '02',
    title: 'Enlarged Pores',
    description: 'Skin tightening and improved elasticity reduce the appearance of enlarged pores over multiple sessions.',
  },
  {
    tag: '03',
    title: 'Rough Texture',
    description: 'Accelerated cell renewal and fibroblast activation improve the surface quality and feel of the skin.',
  },
  {
    tag: '04',
    title: 'Skin Laxity',
    description: 'Collagen and elastin stimulation improves skin firmness and resilience in areas of mild laxity.',
  },
  {
    tag: '05',
    title: 'Dull, Tired Skin',
    description: 'Enhanced cellular metabolism and microcirculation restore natural radiance and vitality.',
  },
  {
    tag: '06',
    title: 'Weakened Skin Barrier',
    description: 'PDRN reinforces the skin\'s natural barrier function, improving hydration retention and resistance to environmental damage.',
  },
]

const timeline = [
  {
    step: 'Step 01',
    title: 'Consultation',
    description: 'Skin assessment and medical history review to determine candidacy, session number, and injection protocol.',
  },
  {
    step: 'Step 02',
    title: 'Preparation',
    description: 'Topical numbing cream is applied to ensure comfort during the injection process.',
  },
  {
    step: 'Step 03',
    title: 'Treatment',
    description: 'REJURAN is administered via a series of micro-injections across the treatment area. Small papules are normal and resolve within 24 hours.',
  },
  {
    step: 'Step 04',
    title: 'Results',
    description: 'Skin quality improvements develop gradually over 2–4 weeks after each session. Optimal results achieved after completing the recommended series.',
  },
]

const faqs = [
  {
    q: 'How many sessions do I need?',
    a: 'A series of 3–4 sessions spaced 2–4 weeks apart is recommended for optimal results. Maintenance sessions every 3–6 months help sustain improvements.',
  },
  {
    q: 'Is there downtime?',
    a: 'Minimal. Small micro-papules at injection sites are normal and typically resolve within 24 hours. Most clients return to regular activities the same day.',
  },
  {
    q: 'Is REJURAN safe?',
    a: 'Yes. PDRN has been extensively studied and used clinically for decades. The formulation is purified and biocompatible with human tissue.',
  },
  {
    q: 'How is REJURAN different from PRP?',
    a: 'Both use biological regenerative mechanisms, but REJURAN uses purified PDRN from salmon DNA, while PRP uses your own blood\'s growth factors. Both stimulate collagen; REJURAN specifically targets skin quality and barrier repair.',
  },
  {
    q: 'When will I see results?',
    a: 'Gradual improvement is visible over 2–4 weeks after each session. Most clients notice significant changes after completing their full series of treatments.',
  },
  {
    q: 'Can REJURAN be combined with other treatments?',
    a: 'Yes — REJURAN pairs excellently with Botox, fillers, and Skinvive. Your provider will design a comprehensive treatment plan tailored to your goals.',
  },
]

export default async function REJURANPage() {
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
        slug="rejuran"
        name="REJURAN PDRN Skin Biorevitalization"
        description="REJURAN PDRN therapy at Slynn Wellness in Pasadena, CA. An advanced injectable skin biorevitalizer that harnesses the regenerative power of PDRN to improve texture, reduce fine lines, and restore a healthy, resilient skin foundation from within."
        category="Skin & Scalp Care"
        faqs={faqs}
        priceRange="$$$"
        image="https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/rejuran-skin-booster.png"
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
                PDRN Skin Biorevitalization
              </div>

              <h1
                className="font-light mb-4 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', letterSpacing: '-0.01em' }}
              >
                REJURAN
              </h1>

              <p
                className="text-sm leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
              >
                REJURAN is an advanced skin biorevitalizer that harnesses the regenerative power of PDRN to stimulate your skin&apos;s natural repair mechanisms — improving texture, reducing fine lines, and restoring a healthy, resilient skin foundation from within.
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
                  { value: 'PDRN Technology', label: 'Polynucleotide skin regeneration' },
                  { value: 'Minimal Downtime', label: 'Micro-papules resolve in 24hrs' },
                  { value: '3–4 Sessions', label: 'Recommended for optimal results' },
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
              {/* Carousel */}
              <div className="rounded-2xl overflow-hidden" style={{ flex: '1 1 0', minHeight: '280px' }}>
                <ImageCarousel images={carouselImages} autoPlayInterval={3500} fillHeight />
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Best for', value: 'Fine lines, enlarged pores, rough texture, skin laxity, overall skin quality' },
                  { label: 'Technology', value: 'PDRN (Polydeoxyribonucleotide) injectable biorevitalizer' },
                  { label: 'Goal', value: 'Regenerated, smoother, more resilient skin' },
                  { label: 'Pricing', value: '$400 / session' },
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
              Before &amp; After
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Individual results may vary. Photos shown with patient consent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/rejuran-bf%26af.png',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/rejuran-bf%26af-2.png',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/rejuran-bf%26af--3.png',
            ].map((src, i) => (
              <div
                key={i}
                className="rounded-3xl overflow-hidden"
                style={{
                  background: 'rgba(255,250,245,0.85)',
                  border: '1px solid rgba(233,221,209,0.9)',
                  boxShadow: '0 20px 60px rgba(90,66,44,0.08)',
                }}
              >
                <div
                  className="relative"
                  style={{
                    height: '280px',
                    backgroundImage: `url(${src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 40%, rgba(0,0,0,0.22) 100%)' }} />
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                    style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)', color: 'rgba(255,255,255,0.9)', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Before
                  </span>
                  <span
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                    style={{ background: 'rgba(212,175,55,0.85)', backdropFilter: 'blur(6px)', color: 'white', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    After
                  </span>
                  <div className="absolute inset-y-0 left-1/2 w-px" style={{ background: 'rgba(255,255,255,0.5)' }} />
                </div>
                <div className="p-4">
                  <p className="text-xs text-center" style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8A99A' }}>
                    Patient {i + 1} · REJURAN PDRN Treatment
                  </p>
                </div>
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
              REJURAN works at a biological level to restore the skin&apos;s own regenerative capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: 'What is REJURAN?',
                body: 'REJURAN is an injectable skin biorevitalizer containing PDRN (Polydeoxyribonucleotide) — a polynucleotide complex derived from purified salmon DNA. PDRN has a molecular structure highly compatible with human tissue, allowing it to activate the skin\'s A2A receptors and trigger a natural regenerative response. Unlike fillers, REJURAN does not add volume — it works by stimulating your skin\'s own fibroblasts to produce collagen and repair damaged tissue.',
                pills: [
                  { label: 'PDRN Technology', value: 'Polynucleotide complex' },
                  { label: 'Biostimulation', value: 'A2A receptor activation' },
                  { label: 'Non-volumizing', value: 'Quality over structure' },
                ],
              },
              {
                title: 'How is it different from fillers?',
                body: 'REJURAN works fundamentally differently from hyaluronic acid fillers. Fillers physically add volume beneath the skin. REJURAN stimulates your skin\'s own biology to regenerate from within — improving the quality, strength, and resilience of the skin itself. This makes it an excellent foundational treatment for clients who want better skin health rather than structural changes.',
                pills: [
                  { label: 'Skin Quality', value: 'Texture and resilience' },
                  { label: 'Natural Repair', value: 'Your biology at work' },
                  { label: 'Stackable', value: 'Ideal foundational layer' },
                ],
              },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl p-8 flex flex-col" style={cardStyle}>
                <h3 className="mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400, margin: '0 0 12px' }}>{card.title}</h3>
                <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>{card.body}</p>
                <div className="grid grid-cols-3 gap-3">
                  {card.pills.map((pill) => (
                    <div key={pill.label} className="p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(233,221,209,0.9)', height: '90px' }}>
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

      {/* What REJURAN Can Improve */}
      <section id="concerns" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              What REJURAN Can Improve
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              PDRN&apos;s regenerative mechanisms address a wide range of skin quality concerns from the inside out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {concerns.map((item) => (
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
              Your Treatment Experience
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              From consultation to gradual transformation — here is what your REJURAN session looks like at Slynn Wellness.
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

      {/* Why This Treatment */}
      <section id="why" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Why This Treatment?
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              REJURAN offers a biologically intelligent approach to skin renewal that complements your full aesthetic treatment plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                tag: 'Science',
                title: 'PDRN Regeneration',
                description: 'PDRN activates A2A receptors to trigger tissue regeneration — a clinically studied mechanism with decades of research in wound healing and skin repair.',
              },
              {
                tag: 'Natural',
                title: 'Works With Your Biology',
                description: 'REJURAN does not introduce foreign volume. It activates your skin\'s own repair pathways, making results look and feel completely natural.',
              },
              {
                tag: 'Foundation',
                title: 'Skin Quality First',
                description: 'Ideal as a foundational treatment or complement to fillers and neuromodulators — improving the underlying skin quality that all other treatments build upon.',
              },
            ].map((item) => (
              <div key={item.tag} className="rounded-3xl p-8" style={cardStyle}>
                <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={tagStyle}>{item.tag}</span>
                <h4 className="mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 400, margin: '0 0 12px' }}>{item.title}</h4>
                <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0, lineHeight: 1.7 }}>{item.description}</p>
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
                Ready to Regenerate Your Skin?
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                A consultation with our team helps us design the right REJURAN protocol for your skin concerns and goals.
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
                Book Your REJURAN Consultation
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                Slynn Wellness is proud to offer REJURAN PDRN treatments in Pasadena. Let our team create a personalized protocol to help you achieve healthier, more resilient, beautifully renewed skin.
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
