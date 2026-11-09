import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { getSiteSettings } from '@/lib/supabase/settings'
import { getServiceBySlug } from '@/lib/supabase/admin'

const heroImage = 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/candela-matrix-pro.png'

export const metadata: Metadata = {
  title: 'RF Microneedling + PRP in Pasadena, CA',
  description:
    'RF microneedling with topical PRP, or classic microneedling with PRP or PRF, at Slynn Wellness in Pasadena, CA. Plus PRP and PRF facial injections.',
  keywords: [
    // Brand + technology
    'RF microneedling PRP Pasadena',
    'microneedling with PRP Pasadena',
    'PRP microneedling Pasadena',
    'PRF microneedling Pasadena',
    'Candela Matrix Pro PRP',
    'PRP facial Pasadena',
    'PRF facial Pasadena',
    // Injections
    'PRP facial injections Pasadena',
    'PRF facial injections Pasadena',
    'PRP under eye Pasadena',
    'PRF under eye Pasadena',
    'platelet-rich plasma Pasadena',
    'platelet-rich fibrin Pasadena',
    // Generic terms
    'regenerative skin treatment Pasadena',
    'collagen induction therapy PRP',
    'growth factor facial',
    'natural skin rejuvenation Pasadena',
    'microneedling medical spa Pasadena',
    // Pricing
    'PRP microneedling cost Pasadena',
    'PRP facial price Pasadena',
    'PRF injections cost',
    'microneedling PRP package Pasadena',
    // Skin concerns
    'acne scar treatment Pasadena',
    'fine lines treatment Pasadena',
    'skin texture treatment Pasadena',
    'skin tightening Pasadena',
    'dull skin treatment Pasadena',
    'enlarged pores treatment',
    'skin rejuvenation Pasadena',
    // Nearby cities
    'PRP microneedling Altadena',
    'PRP microneedling South Pasadena',
    'PRP microneedling San Marino',
    'PRP microneedling Arcadia',
    'PRP microneedling Sierra Madre',
    'PRP microneedling Monrovia',
    'PRP microneedling Temple City',
    'PRP microneedling San Gabriel',
    'PRP microneedling Alhambra',
    'PRP microneedling La Cañada Flintridge',
    'PRP microneedling Glendale',
    'PRP microneedling Burbank',
    'PRP microneedling San Gabriel Valley',
    'PRP microneedling Los Angeles',
    // Brand
    'Slynn Wellness PRP',
    'luxury medical spa Pasadena',
  ],
  alternates: { canonical: '/services/rf-microneedling-prp' },
}

const benefits = [
  {
    tag: '01',
    title: 'Collagen Support',
    description: 'Microneedling creates controlled micro-channels while topical PRP or PRF supplies your own growth factors to support the renewal process.',
  },
  {
    tag: '02',
    title: 'Texture & Pores',
    description: 'Frequently selected for rough texture, enlarged pores, and an overall skin-quality refresh.',
  },
  {
    tag: '03',
    title: 'Skin Laxity',
    description: 'The RF option adds radiofrequency energy as part of a nonsurgical plan for firmer-looking skin on the face, jawline, and neck.',
  },
  {
    tag: '04',
    title: 'Acne Scars & Marks',
    description: 'Often chosen when patients want a more advanced, regenerative approach to textural acne scarring.',
  },
  {
    tag: '05',
    title: 'Tone & Radiance',
    description: 'Many clients describe a brighter, more even-looking complexion as the skin renews over the following weeks.',
  },
  {
    tag: '06',
    title: 'Fine Lines',
    description: 'Supports smoother-looking skin and softens the appearance of early lines around the eyes, mouth, and forehead.',
  },
  {
    tag: '07',
    title: 'Delicate Areas',
    description: 'PRP and PRF facial injections may be discussed for select concerns such as the under-eye area during consultation.',
  },
  {
    tag: '08',
    title: 'Natural Approach',
    description: 'PRP and PRF are prepared from a small sample of your own blood, with no synthetic fillers involved.',
  },
]

const timeline = [
  {
    step: 'Step 01',
    title: 'Consultation',
    description: 'We review your skin quality, treatment history, and goals, then recommend RF or classic microneedling, PRP or PRF, or facial injections.',
  },
  {
    step: 'Step 02',
    title: 'Blood Draw & Preparation',
    description: 'A small sample of your blood is drawn and processed in-office into PRP or PRF while your skin is cleansed and numbed.',
  },
  {
    step: 'Step 03',
    title: 'Treatment',
    description: 'Microneedling (or RF microneedling) is performed, then PRP or PRF is applied topically to the skin. No injections are included. PRP and PRF facial injections are a separate service, performed by your provider.',
  },
  {
    step: 'Step 04',
    title: 'Recovery',
    description: 'Most clients experience temporary redness or warmth followed by progressive skin renewal over the following weeks.',
  },
]

const faqs = [
  {
    q: 'What is PRP, and how is it different from PRF?',
    a: 'PRP (platelet-rich plasma) is concentrated from a small sample of your own blood. PRF (platelet-rich fibrin) is prepared without anticoagulant and forms a fibrin matrix that releases growth factors more gradually. Your provider will recommend which option fits your goals.',
  },
  {
    q: 'Does topical PRP involve injections?',
    a: 'No. In our microneedling + PRP and microneedling + PRF treatments, the PRP or PRF is applied topically to the skin immediately after microneedling. No PRP or PRF injections are included. Facial injections are a separate service listed in our pricing.',
  },
  {
    q: 'Do I still need a blood draw for topical PRP or PRF?',
    a: 'Yes. PRP and PRF are prepared from a small sample of your own blood drawn at the start of your visit and processed in-office before treatment.',
  },
  {
    q: 'What is the difference between RF microneedling + PRP and regular microneedling + PRP?',
    a: 'RF microneedling with the Candela Matrix Pro (depth 4.5mm with heat) adds radiofrequency energy to support firmness, laxity, and deeper renewal goals. Regular microneedling (depth 2mm, no heat) is gentler and focused on texture, tone, and surface renewal with a shorter recovery.',
  },
  {
    q: 'Is there downtime?',
    a: 'Temporary redness, warmth, or mild sensitivity is common for 24–72 hours. RF treatments may feel slightly more intense than classic microneedling. Your provider will review aftercare, including when makeup and active skincare can resume.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'A series of three treatments spaced about 4–8 weeks apart is commonly recommended, which is why we offer 3-session packages. The right plan depends on whether your focus is texture, laxity, scarring, or overall rejuvenation.',
  },
]

interface PriceCard {
  name: string
  note: string
  single: string
  package: string
  sessions: string
}

const pricingGroups: { title: string; description: string; cards: PriceCard[] }[] = [
  {
    title: 'Microneedling + Topical PRP / PRF',
    description: 'Topical PRP or PRF is applied to the skin following microneedling. No PRP or PRF injections are included.',
    cards: [
      { name: 'Matrix Pro RF Microneedling + Topical PRP', note: 'Depth 4.5mm + heat', single: '$895', package: '$2,399', sessions: '3 sessions' },
      { name: 'Microneedling + Topical PRP', note: 'Depth 2mm · no heat', single: '$695', package: '$1,668', sessions: '3 sessions' },
      { name: 'Microneedling + Topical PRF', note: 'Depth 2mm · no heat', single: '$695', package: '$1,668', sessions: '3 sessions' },
    ],
  },
  {
    title: 'PRP & PRF Facial Injections',
    description: 'Injectable PRP or PRF delivered by your provider for targeted facial concerns.',
    cards: [
      { name: 'PRP Facial Injections', note: 'Injectable PRP', single: '$495', package: '$1,199', sessions: '3 sessions' },
      { name: 'PRF Facial Injections — Small Area', note: 'Injectable PRF', single: '$495', package: '$1,199', sessions: '3 sessions' },
      { name: 'PRF Facial Injections — Large Area', note: 'Injectable PRF', single: '$650', package: '$1,560', sessions: '3 sessions' },
    ],
  },
]

export default async function RFMicroneedlingPRPPage() {
  const [settings, service] = await Promise.all([
    getSiteSettings(),
    getServiceBySlug('rf-microneedling-prp'),
  ])

  // Pricing on this page is hardcoded in pricingGroups; the DB price string is only used on category cards.
  const price = 'Microneedling + PRP from $695 · Injections from $495'
  const description = service?.short_description || 'Candela Matrix Pro RF microneedling with topical PRP, or classic microneedling with topical PRP or PRF, for collagen-focused, regenerative skin renewal.'

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
        slug="rf-microneedling-prp"
        name="RF Microneedling + PRP"
        description="RF microneedling with topical PRP, or classic microneedling with topical PRP or PRF, at Slynn Wellness in Pasadena, CA. Candela Matrix Pro collagen renewal using your own platelets, plus PRP and PRF facial injections for targeted concerns."
        category="Skin & Scalp Care"
        faqs={faqs}
        priceRange="$$$"
        image={heroImage}
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
                Regenerative Skin Renewal
              </div>

              <h1
                className="font-light mb-4 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', letterSpacing: '-0.01em' }}
              >
                RF Microneedling + PRP
              </h1>

              <p
                className="text-sm leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
              >
                {description} Your own platelets are applied topically after microneedling to support the skin&apos;s natural renewal, with PRP and PRF facial injections available for targeted concerns.
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
                  { value: '3 sessions', label: 'Packages available for best value' },
                  { value: '4–8 weeks', label: 'Common spacing between treatments' },
                  { value: 'Minimal', label: 'Downtime required' },
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
                  backgroundImage: `url(${heroImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, transparent 40%, rgba(0,0,0,0.30) 100%)', borderRadius: 'inherit' }} />
                <span className="relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase self-start" style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)', color: '#8B6340', fontFamily: 'Montserrat, sans-serif', border: '1px solid rgba(233,221,209,0.8)' }}>
                  RF Microneedling · Topical PRP
                </span>
                <span className="relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase self-start" style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)', color: '#8B6340', fontFamily: 'Montserrat, sans-serif', border: '1px solid rgba(233,221,209,0.8)' }}>
                  Candela Matrix Pro
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Best for', value: 'Texture, fine lines, acne scars, laxity, dull tone' },
                  { label: 'Technology', value: 'Matrix Pro RF + topical PRP · classic microneedling + PRP or PRF' },
                  { label: 'Pricing', value: price },
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
              Save with our 3-session packages — recommended for optimal results.
            </p>
          </div>

          <div className="space-y-10">
            {pricingGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-4">
                  <h3 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', margin: '0 0 6px' }}>{group.title}</h3>
                  <p className="text-xs" style={{ fontFamily: 'Montserrat, sans-serif', color: '#9a8f86', margin: 0 }}>{group.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {group.cards.map((item) => (
                    <div key={`${item.name}-${item.note}`} className="rounded-2xl p-6 flex flex-col" style={{ background: 'rgba(255,250,245,0.85)', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 10px 30px rgba(90,66,44,0.06)' }}>
                      <h4 className="font-light mb-1" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', margin: '0 0 4px' }}>{item.name}</h4>
                      <p className="text-xs mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#9a8f86', margin: '0 0 16px' }}>{item.note}</p>
                      <div className="w-full h-px mb-4 mt-auto" style={{ background: 'rgba(233,221,209,0.9)' }} />
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
            ))}
          </div>
          <p className="text-xs" style={{ fontFamily: 'Montserrat, sans-serif', color: '#9a8f86', margin: '24px 0 0' }}>
            Looking for RF microneedling without PRP? See our <Link href="/services/microneedling" className="underline hover:text-[#D4AF37] transition-colors">Candela Matrix Pro</Link> page.
          </p>
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
              Individual results may vary.
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
              Your own platelets, applied right after microneedling
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              PRP and PRF add a regenerative layer to microneedling for patients who want a natural approach to skin renewal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: 'What are PRP and PRF?',
                body: 'Platelet-rich plasma (PRP) and platelet-rich fibrin (PRF) are concentrated from a small sample of your own blood, drawn at the start of your visit and processed in-office. Both are rich in platelets and growth factors. PRF is prepared without anticoagulant, forming a fibrin matrix that releases growth factors more gradually.',
                pills: [
                  { label: 'Your Own', value: 'Prepared from a small blood draw' },
                  { label: 'Growth Factors', value: 'Concentrated platelets' },
                  { label: 'PRP or PRF', value: 'Chosen for your goals' },
                ],
              },
              {
                title: 'Why pair it with microneedling?',
                body: 'Microneedling creates thousands of controlled micro-channels in the skin. Applying PRP or PRF topically immediately afterward allows it to reach the skin while those channels are open. With the Candela Matrix Pro, radiofrequency energy is added to support firmness and laxity goals that classic microneedling alone addresses more gently.',
                pills: [
                  { label: 'Channels', value: 'Created by microneedling' },
                  { label: 'Apply', value: 'Topical PRP or PRF applied' },
                  { label: 'RF Option', value: 'Energy for laxity goals' },
                ],
              },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl p-8 flex flex-col" style={cardStyle}>
                <h3 className="mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400, margin: '0 0 12px' }}>{card.title}</h3>
                <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>{card.body}</p>
                <div className="grid grid-cols-3 gap-3 items-stretch">
                  {card.pills.map((pill) => (
                    <div key={pill.label} className="p-4 rounded-2xl flex flex-col" style={{ background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(233,221,209,0.9)', height: '90px' }}>
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
      <section id="benefits" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              What microneedling + PRP can help address
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              A versatile, regenerative option for patients who want more than a surface-level facial without surgery.
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

      {/* Why this approach */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Three ways to treat
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Your provider will recommend the depth, energy, and delivery that fit your skin and recovery preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { tag: 'RF', title: 'Matrix Pro RF + Topical PRP', desc: 'Candela Matrix Pro RF microneedling at 4.5mm depth with heat, followed by topical PRP. Chosen for firmness, laxity, and deeper renewal goals.' },
              { tag: 'Classic', title: 'Microneedling + Topical PRP or PRF', desc: 'Classic microneedling at 2mm depth with no heat, followed by topical PRP or PRF. A gentler option focused on texture, tone, and surface renewal.' },
              { tag: 'Injections', title: 'PRP & PRF Facial Injections', desc: 'PRP or PRF delivered by injection for targeted facial concerns, offered as a single session or as a small- or large-area PRF treatment.' },
            ].map((item) => (
              <div key={item.tag} className="rounded-3xl p-6" style={cardStyle}>
                <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4" style={tagStyle}>{item.tag}</span>
                <h4 className="mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 400, margin: '0 0 8px' }}>{item.title}</h4>
                <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Experience */}
      <section id="experience" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              The treatment experience
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

      {/* Candidate + Results */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Who may be a good candidate?',
                body: 'Patients often explore microneedling with PRP or PRF when they want a regenerative, natural approach to texture, tone, early lines, acne scarring, or laxity, without surgery or synthetic fillers. A consultation is important to review candidacy, medical history, and realistic expectations.',
                bullets: ['You prefer a treatment that uses your own platelets rather than synthetic products', 'You want more correction than a standard facial can provide', 'You are comfortable with a small blood draw and a treatment series'],
              },
              {
                title: 'What results feel like',
                body: 'Many patients describe a refreshed glow within the first week, with more gradual improvement in smoothness and tone over the following weeks as the skin renews. Series treatments are commonly recommended when the goal is more meaningful change in texture, firmness, or scarring.',
                bullets: ['Early glow and refreshed skin appearance', 'Gradual improvement in texture and tone', 'Longer-term support with a maintenance plan'],
              },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl p-8" style={cardStyle}>
                <h3 className="mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400, margin: '0 0 12px' }}>{card.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>{card.body}</p>
                <ul className="space-y-3">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0 mt-1.5" style={{ boxShadow: '0 0 0 4px rgba(212,175,55,0.15)' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aftercare */}
      <section id="aftercare" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Aftercare &amp; recovery guidance
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Following post-care instructions carefully helps protect your results and support the renewal process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Immediately after treatment',
                body: 'It is normal to experience temporary redness, warmth, or a lightly flushed look after treatment. Because PRP or PRF has been applied to the skin, your provider will advise how long to leave it undisturbed before cleansing or applying other products.',
                bullets: ['Follow post-care instructions exactly as given by your provider', 'Avoid makeup, active skincare, and heavy sweating for the period advised', 'Prioritize hydration and diligent sun protection'],
              },
              {
                title: 'Planning your series',
                body: 'Microneedling with PRP or PRF is often not a one-and-done treatment when the goals involve scarring, laxity, or advanced rejuvenation. Building a thoughtful series and maintenance plan creates the most elegant, lasting outcome.',
                bullets: ['Many clients start with a 3-session series rather than a single treatment', 'Spacing is commonly 4–8 weeks based on skin goals and recovery response', 'Maintenance helps preserve visible texture and glow over time'],
              },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl p-8" style={cardStyle}>
                <h3 className="mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400, margin: '0 0 12px' }}>{card.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>{card.body}</p>
                <ul className="space-y-3">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0 mt-1.5" style={{ boxShadow: '0 0 0 4px rgba(212,175,55,0.15)' }} />
                      {b}
                    </li>
                  ))}
                </ul>
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
                Is microneedling with PRP right for you?
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                A consultation helps us review your skin goals and medical history, choose between RF and classic microneedling, PRP or PRF, and build a personalized treatment series around your timeline.
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
                Book your RF Microneedling + PRP consultation
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                Slynn Wellness offers a refined, welcoming environment for regenerative skin care in Pasadena. Book your consultation and receive a personalized treatment recommendation.
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
