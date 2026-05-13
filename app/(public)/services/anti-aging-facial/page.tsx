import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { getSiteSettings } from '@/lib/supabase/settings'

export const metadata: Metadata = {
  title: 'Anti-Aging Facial Treatment in Pasadena, CA',
  description:
    'Anti-aging facial at Slynn Wellness in Pasadena, CA. Reduce fine lines, restore firmness, and reveal a refreshed, youthful radiance with medical-grade peptides and corrective actives. Serving Pasadena, Altadena, San Marino, Arcadia, Glendale, and the greater Los Angeles area.',
  keywords: [
    // Core
    'anti-aging facial Pasadena',
    'anti aging facial Pasadena',
    'best anti-aging facial Pasadena',
    'anti-aging facial near me',
    'anti-aging facial medical spa Pasadena',
    'anti-aging treatment Pasadena',
    'aging skin treatment Pasadena',
    // Variations
    'age-defying facial Pasadena',
    'wrinkle facial Pasadena',
    'firming facial Pasadena',
    'lifting facial Pasadena',
    'collagen facial Pasadena',
    'peptide facial Pasadena',
    'retinol facial Pasadena',
    'mature skin facial Pasadena',
    '40s facial Pasadena',
    '50s facial Pasadena',
    '60s facial Pasadena',
    'menopause facial',
    // Pricing
    'anti-aging facial cost Pasadena',
    'anti-aging facial price',
    'anti-aging facial package Pasadena',
    'monthly facial Pasadena',
    // Skin concerns
    'fine lines facial Pasadena',
    'wrinkles facial Pasadena',
    'firmness loss treatment',
    'sagging skin facial',
    'dull skin facial',
    'age spots facial',
    'hyperpigmentation facial',
    'brown spots treatment',
    'sun damage facial',
    'crepey skin facial',
    'dehydration facial',
    'rough texture facial',
    'oxidative damage facial',
    'collagen loss treatment',
    'elasticity loss treatment',
    // Treatment type
    'medical-grade facial',
    'medical facial Pasadena',
    'corrective facial',
    'peptide treatment',
    'growth factor facial',
    'antioxidant facial',
    'brightening facial',
    'lifting massage facial',
    'pre-event anti-aging facial',
    'wedding anti-aging facial',
    // Comparison
    'facial vs Botox',
    'facial vs filler',
    'natural anti-aging Pasadena',
    'non-invasive anti-aging',
    // Nearby cities
    'anti-aging facial Altadena',
    'anti-aging facial South Pasadena',
    'anti-aging facial San Marino',
    'anti-aging facial Arcadia',
    'anti-aging facial Sierra Madre',
    'anti-aging facial Monrovia',
    'anti-aging facial Temple City',
    'anti-aging facial San Gabriel',
    'anti-aging facial Alhambra',
    'anti-aging facial La Cañada',
    'anti-aging facial La Cañada Flintridge',
    'anti-aging facial La Canada',
    'anti-aging facial Flintridge',
    'anti-aging facial Glendale',
    'anti-aging facial Burbank',
    'anti-aging facial Eagle Rock',
    'anti-aging facial Highland Park',
    'anti-aging facial San Gabriel Valley',
    'anti-aging facial Los Angeles',
    // Brand
    'Slynn Wellness anti-aging facial',
    'luxury medical spa Pasadena',
  ],
  alternates: { canonical: '/services/anti-aging-facial' },
}

const concerns = [
  {
    tag: '01',
    title: 'Fine Lines',
    description: 'Targeted peptide and retinoid actives soften the appearance of fine lines around the eyes, mouth, and forehead.',
  },
  {
    tag: '02',
    title: 'Loss of Firmness',
    description: 'Collagen-stimulating ingredients and lifting massage techniques restore skin tone and elasticity.',
  },
  {
    tag: '03',
    title: 'Wrinkles & Creasing',
    description: 'Resurfacing actives smooth deeper creasing and improve overall skin texture.',
  },
  {
    tag: '04',
    title: 'Dullness',
    description: 'Brightening enzymes and antioxidants remove dead skin buildup and restore a healthy, lit-from-within glow.',
  },
  {
    tag: '05',
    title: 'Age Spots & Pigmentation',
    description: 'Corrective actives target melanin overproduction for a more even, uniform complexion.',
  },
  {
    tag: '06',
    title: 'Dehydration',
    description: 'Intensive hydration serums plump and restore moisture to skin that has lost suppleness with age.',
  },
  {
    tag: '07',
    title: 'Rough Texture',
    description: 'Gentle resurfacing removes rough patches and smooths the skin surface for a refined, polished finish.',
  },
  {
    tag: '08',
    title: 'Oxidative Damage',
    description: 'Antioxidant infusion neutralizes free radicals and addresses cumulative environmental skin damage.',
  },
]

const timeline = [
  {
    step: 'Step 01',
    title: 'Skin Assessment',
    description: 'Your provider evaluates your skin age, primary aging concerns, and selects the optimal anti-aging protocol and active concentrations.',
  },
  {
    step: 'Step 02',
    title: 'Cleanse & Resurface',
    description: 'Deep cleansing followed by targeted exfoliation to remove dead skin and prepare for maximum serum penetration.',
  },
  {
    step: 'Step 03',
    title: 'Active Treatment',
    description: 'Customized application of peptides, growth factors, and corrective serums with professional massage and firming mask.',
  },
  {
    step: 'Step 04',
    title: 'Protect & Hydrate',
    description: 'Treatment finishes with antioxidant protection, SPF, and personalized aftercare recommendations.',
  },
]

const faqs = [
  {
    q: 'How often should I get an Anti-Aging Facial?',
    a: 'Monthly treatments are recommended for cumulative results. Many clients see the most significant improvement after 3–6 consistent sessions.',
  },
  {
    q: 'Is there any downtime?',
    a: 'No. You may experience mild flushing immediately after, which subsides within hours. Makeup can be applied and normal activities resumed right away.',
  },
  {
    q: 'Will it work for my skin type?',
    a: 'Yes. The treatment is customized to your skin type and sensitivity level. Your provider adjusts active concentrations accordingly.',
  },
  {
    q: 'How is this different from a regular spa facial?',
    a: 'Medical-grade actives at clinical concentrations deliver measurable, visible results that standard spa facials cannot achieve.',
  },
  {
    q: 'Can I combine this with injectables?',
    a: 'Yes — Anti-Aging Facials complement Botox and fillers beautifully. Your provider will advise on appropriate timing between treatments.',
  },
  {
    q: 'When will I see results?',
    a: 'Most clients notice improved radiance and skin texture immediately. Firming and line-reduction benefits build progressively with regular treatments.',
  },
]

export default async function AntiAgingFacialPage() {
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
        slug="anti-aging-facial"
        name="Anti-Aging Facial"
        description="Anti-Aging Facial at Slynn Wellness in Pasadena, CA. A targeted, results-driven facial designed to visibly reduce the signs of aging — restoring firmness, smoothing fine lines, and revealing a refreshed, youthful radiance."
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
                Advanced Anti-Aging Treatment
              </div>

              <h1
                className="font-light mb-4 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', letterSpacing: '-0.01em' }}
              >
                Anti-Aging Facial
              </h1>

              <p
                className="text-sm leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
              >
                A targeted, results-driven facial designed to visibly reduce the signs of aging. Our Anti-Aging Facial combines clinically active ingredients with expert technique to restore firmness, smooth fine lines, and reveal a refreshed, youthful radiance.
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
                  { value: 'Clinically Active', label: 'Proven anti-aging ingredients' },
                  { value: 'Cumulative Results', label: 'Improves with each treatment' },
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
                  backgroundImage: 'url(https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/facial-pic1.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)', borderRadius: 'inherit' }} />
                <span className="relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase self-start" style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)', color: '#8B6340', fontFamily: 'Montserrat, sans-serif', border: '1px solid rgba(233,221,209,0.8)' }}>
                  Advanced Anti-Aging Treatment
                </span>
                <span className="relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase self-start" style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)', color: '#8B6340', fontFamily: 'Montserrat, sans-serif', border: '1px solid rgba(233,221,209,0.8)' }}>
                  Firm · Smooth · Radiant
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Best for', value: 'Fine lines, wrinkles, loss of firmness, dullness, age spots' },
                  { label: 'Technology', value: 'Peptides, retinoids, growth factors & resurfacing actives' },
                  { label: 'Goal', value: 'Firmer, smoother, more youthful-looking skin' },
                  { label: 'Pricing', value: '$175 / session' },
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

          <div
            className="rounded-3xl flex flex-col items-center justify-center py-16 px-8 text-center"
            style={{
              background: 'rgba(255,250,245,0.85)',
              border: '1px solid rgba(233,221,209,0.9)',
              boxShadow: '0 20px 60px rgba(90,66,44,0.08)',
            }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
              style={{ background: 'rgba(212,175,55,0.10)', border: '1px solid rgba(212,175,55,0.25)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400 }}>
              Photos Coming Soon
            </h3>
            <p className="text-sm max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>
              We are currently curating before &amp; after photos for this treatment. Check back soon.
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
              A physician-supervised protocol combining the most effective anti-aging actives for visible, lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: 'What is the Anti-Aging Facial?',
                body: 'Our Anti-Aging Facial is a physician-supervised treatment that combines the most effective anti-aging actives in a customized protocol. Using medical-grade peptides, growth factors, retinoids, and antioxidants, this facial works at the cellular level to stimulate collagen production, accelerate cell renewal, and restore the skin\'s natural vitality and firmness.',
                pills: [
                  { label: 'Collagen Stimulating', value: 'Activates natural collagen synthesis' },
                  { label: 'Peptide-Rich', value: 'Medical-grade peptide formulations' },
                  { label: 'Physician Guided', value: 'Supervised medical protocol' },
                ],
              },
              {
                title: 'A personalized approach to aging',
                body: 'Aging affects everyone differently — from early fine lines to deeper wrinkles, volume loss, and pigmentation changes. Our providers assess your unique concerns and select the combination of actives, massage techniques, and finishing treatments that deliver the most meaningful results for your skin at this stage of your journey.',
                pills: [
                  { label: 'Customized', value: 'Tailored to your skin concerns' },
                  { label: 'Progressive', value: 'Builds with each treatment' },
                  { label: 'Results-Driven', value: 'Measurable, visible improvement' },
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

      {/* What the Anti-Aging Facial Targets */}
      <section id="concerns" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              What the Anti-Aging Facial Targets
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Clinically active ingredients address the full spectrum of visible aging concerns with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
              From skin assessment to a radiant, firmed finish — here is what your Anti-Aging Facial session looks like at Slynn Wellness.
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
              Not all facials are equal. Our Anti-Aging Facial delivers clinically meaningful results through medical-grade expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                tag: 'Science',
                title: 'Clinically Active Ingredients',
                description: 'Medical-grade concentrations of retinoids, peptides, and growth factors that work beyond what retail skincare can achieve.',
              },
              {
                tag: 'Expert',
                title: 'Physician-Supervised Protocol',
                description: 'Every treatment is performed and overseen by our licensed medical team, ensuring safe application of potent anti-aging actives.',
              },
              {
                tag: 'Lasting',
                title: 'Cumulative Improvement',
                description: 'Each session builds on the last — regular monthly treatments deliver progressively firmer, smoother, and more youthful skin over time.',
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
                Ready to Turn Back the Clock?
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                A consultation with our skin care team helps us select the optimal anti-aging protocol for your skin concerns, age, and goals.
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
                Book Your Anti-Aging Facial
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                Slynn Wellness is proud to offer physician-supervised Anti-Aging Facial treatments in Pasadena. Let our skin care experts create a customized protocol for your firmest, most youthful-looking skin.
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
