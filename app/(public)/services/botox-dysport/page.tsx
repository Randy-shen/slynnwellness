import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getSiteSettings } from '@/lib/supabase/settings'
import { getServiceBySlug } from '@/lib/supabase/admin'
import ImageCarousel from '@/components/sections/ImageCarousel'
import ServiceSchema from '@/components/seo/ServiceSchema'

const carouselImages = [
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/botox.png', alt: 'Botox treatment' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/botox-2.png', alt: 'Botox results' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/botox-3.png', alt: 'Botox & Xeomin' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/xeomin-2.png', alt: 'Xeomin treatment' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/xeomin-1.png', alt: 'Xeomin results' },
]

export const metadata: Metadata = {
  title: 'Botox & Xeomin Wrinkle Relaxers in Pasadena, CA',
  description:
    'Botox & Xeomin neuromodulator injections at Slynn Wellness in Pasadena, CA. Smooth frown lines, forehead wrinkles, and crow\'s feet with precision RN dosing. Serving Pasadena, Altadena, San Marino, Arcadia, Glendale, and the greater Los Angeles area.',
  keywords: [
    // Brand + city core
    'Botox Pasadena',
    'Xeomin Pasadena',
    'best Botox Pasadena',
    'top Botox Pasadena',
    'Botox near me Pasadena',
    'Botox medical spa Pasadena',
    'Botox injector Pasadena',
    'Botox RN Pasadena',
    'Botox specialist Pasadena',
    // Pricing intent
    'Botox cost Pasadena',
    'Botox price Pasadena',
    'Xeomin cost Pasadena',
    'Botox specials Pasadena',
    'first time Botox Pasadena',
    'Botox consultation Pasadena',
    // Treatment philosophy
    'preventative Botox',
    'baby Botox Pasadena',
    'natural Botox results',
    // Generic terms
    'wrinkle relaxer Pasadena',
    'neuromodulator Pasadena',
    'anti-aging injection Pasadena',
    'anti-wrinkle treatment Pasadena',
    // Treatment areas
    'forehead lines Botox',
    'frown lines Botox',
    'glabellar lines Botox',
    '11 lines Botox',
    'crow\'s feet Botox',
    'bunny lines Botox',
    'gummy smile Botox',
    'lip flip Botox Pasadena',
    'masseter Botox Pasadena',
    'jawline slimming Botox',
    'Botox brow lift',
    'Botox lower face',
    'platysmal bands Botox',
    'neck band Botox',
    // Medical / off-label
    'TMJ Botox Pasadena',
    'hyperhidrosis Botox',
    'Botox underarm sweating',
    'migraine Botox',
    // Xeomin-specific
    'best Xeomin Pasadena',
    'Xeomin near me',
    'Xeomin injector Pasadena',
    'Xeomin medical spa',
    'pure neurotoxin Xeomin',
    'protein-free Botox alternative',
    'Xeomin forehead',
    'Xeomin frown lines',
    // Brand comparison
    'Botox vs Xeomin',
    'Xeomin alternative to Botox',
    'Allergan Botox',
    'Merz Xeomin',
    // Nearby cities (within ~10 miles)
    'Botox Altadena',
    'Botox South Pasadena',
    'Botox San Marino',
    'Botox Arcadia',
    'Botox Sierra Madre',
    'Botox Monrovia',
    'Botox Temple City',
    'Botox San Gabriel',
    'Botox Alhambra',
    'Botox La Cañada',
    'Botox La Cañada Flintridge',
    'Botox La Canada',
    'Botox La Canada Flintridge',
    'Botox Flintridge',
    'Botox Glendale',
    'Botox Burbank',
    'Botox Eagle Rock',
    'Botox Highland Park',
    'Botox East Los Angeles',
    'Botox San Gabriel Valley',
    'Botox Los Angeles',
    // Brand
    'Slynn Wellness Botox',
    'luxury medical spa Pasadena',
  ],
  alternates: { canonical: '/services/botox-dysport' },
}

const treatmentAreas = [
  {
    tag: '01',
    title: 'Frown Lines',
    description: 'Softens the "11s" between the brows for a more relaxed and refreshed appearance.',
  },
  {
    tag: '02',
    title: 'Forehead Lines',
    description: 'Targets horizontal forehead creasing while preserving balanced, natural movement.',
  },
  {
    tag: '03',
    title: "Crow's Feet",
    description: 'Helps smooth the fine lines at the outer corners of the eyes for a brighter look.',
  },
  {
    tag: '04',
    title: 'Personalized Areas',
    description:
      'During consultation, your injector reviews whether additional touchpoints align with your facial balance goals.',
  },
]

const expectations = [
  {
    tag: 'Consult',
    title: 'Assessment First',
    description:
      'We review facial movement, symmetry, and treatment goals — and determine whether Botox or Xeomin is the better fit for your visit.',
  },
  {
    tag: 'Treatment',
    title: 'Quick Appointment',
    description:
      'Injections are performed in-office in as little as 10–20 minutes, with a plan tailored to the areas being addressed.',
  },
  {
    tag: 'Recovery',
    title: 'Minimal Downtime',
    description:
      'Most clients return to their day immediately after. Mild tenderness at injection points may occur; aftercare is reviewed at your visit.',
  },
  {
    tag: 'Results',
    title: 'Subtle Refresh',
    description:
      'Results typically appear within 3–7 days. The goal is a smoother, more polished look that still feels naturally like you.',
  },
]

const faqs = [
  {
    q: 'How long does the appointment take?',
    a: 'Most wrinkle-relaxer visits take 10–20 minutes, though timing varies based on the number of areas treated and whether this is your first consultation.',
  },
  {
    q: 'Will I look frozen?',
    a: 'A thoughtful plan aims for a refreshed appearance, not an overdone one. Natural-looking results depend on dosing, facial anatomy, and injector technique.',
  },
  {
    q: 'Is there downtime afterward?',
    a: 'Most clients have minimal to no downtime. We provide detailed aftercare instructions and are available for any follow-up questions.',
  },
  {
    q: 'How do I choose between Botox and Xeomin?',
    a: "That decision is best made during consultation based on your treatment history, goals, and provider preference for your specific facial movement pattern.",
  },
  {
    q: 'How long do results last?',
    a: 'Results typically last 3–4 months, though this varies by individual. Regular maintenance treatments help sustain your results over time.',
  },
  {
    q: 'Is it safe?',
    a: 'Both Botox and Xeomin are FDA-approved and have extensive safety records when administered by trained medical professionals.',
  },
]

interface PriceRow {
  label: string
  perUnit?: string
  total?: string
  highlight?: boolean
}

const pricingProducts: { name: string; note?: string; rows: PriceRow[] }[] = [
  {
    name: 'Botox',
    note: 'The more units you purchase, the lower your per-unit rate.',
    rows: [
      { label: 'Standard', perUnit: '$13 / unit' },
      { label: '30 units', perUnit: '$12 / unit', total: '$360' },
      { label: '40 units', perUnit: '$11 / unit', total: '$440' },
      { label: '50 units', perUnit: '$10 / unit', total: '$500' },
      { label: 'Members', perUnit: '$9 / unit', highlight: true },
    ],
  },
  {
    name: 'Xeomin',
    rows: [
      { label: 'Standard', perUnit: '$9 / unit' },
      { label: '30 units', total: '$255' },
      { label: '40 units', total: '$320' },
      { label: '50 units', total: '$375' },
    ],
  },
]

export default async function BotoxXeominPage() {
  const [settings, service] = await Promise.all([
    getSiteSettings(),
    getServiceBySlug('botox-dysport'),
  ])

  const price = service?.price || 'Starting at $13/unit'
  const description = service?.short_description || 'Smooth fine lines and wrinkles with precision neuromodulator treatments.'

  return (
    <div style={{
      background: 'radial-gradient(circle at top left, rgba(212,175,55,0.08), transparent 30%), radial-gradient(circle at top right, rgba(184,169,154,0.12), transparent 25%), linear-gradient(180deg, #FDF8F3 0%, #F7F1EA 40%, #FFFAF5 100%)',
      minHeight: '100vh',
      color: '#2C2C2C',
    }}>
      <ServiceSchema
        slug="botox-dysport"
        name="Botox & Xeomin"
        description={`${description} Slynn Wellness offers natural-looking Botox and Xeomin wrinkle-relaxer treatments in Pasadena, CA — precision dosing tailored to your facial anatomy and goals.`}
        category="Medical Aesthetic"
        faqs={faqs}
        priceRange="$$"
        image="https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/botox.png"
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
              style={{
                background: 'rgba(255,250,245,0.85)',
                border: '1px solid rgba(233,221,209,0.9)',
                boxShadow: '0 20px 60px rgba(90,66,44,0.10)',
              }}
            >
              {/* Eyebrow */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                style={{
                  background: 'rgba(255,255,255,0.8)',
                  border: '1px solid rgba(233,221,209,0.9)',
                  color: '#8B6340',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Pasadena Aesthetic Injections
              </div>

              <h1
                className="font-light mb-4 leading-tight"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                  letterSpacing: '-0.01em',
                }}
              >
                Botox & Xeomin
              </h1>

              <p
                className="text-sm leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
              >
                {description}
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #D4AF37 0%, #C6A050 100%)',
                    boxShadow: '0 10px 30px rgba(212,175,55,0.30)',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Book Consultation
                </a>
                <a
                  href="#overview"
                  className="px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(233,221,209,0.9)',
                    color: '#2C2C2C',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  Explore Treatment
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '10–20 min', label: 'Typical appointment' },
                  { value: 'Minimal', label: 'Downtime required' },
                  { value: 'Custom plan', label: 'Botox or Xeomin' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-2xl"
                    style={{
                      background: 'rgba(255,255,255,0.72)',
                      border: '1px solid rgba(233,221,209,0.9)',
                    }}
                  >
                    <strong
                      className="block mb-1 text-base"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem' }}
                    >
                      {stat.value}
                    </strong>
                    <span
                      className="text-xs"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — detail card */}
            <div
              className="lg:col-span-2 rounded-3xl p-6 flex flex-col gap-5"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,248,242,0.90))',
                border: '1px solid rgba(233,221,209,0.9)',
                boxShadow: '0 20px 60px rgba(90,66,44,0.10)',
              }}
            >
              {/* Carousel */}
              <div className="rounded-2xl overflow-hidden" style={{ flex: '1 1 0', minHeight: '280px' }}>
                <ImageCarousel images={carouselImages} autoPlayInterval={3500} fillHeight />
              </div>

              {/* Quick facts */}
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Best for', value: "Forehead lines, frown lines, crow's feet" },
                  { label: 'Consultation', value: 'Customized dosing and facial balance review' },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center gap-4 px-4 py-3.5 rounded-2xl"
                    style={{
                      background: 'rgba(255,255,255,0.72)',
                      border: '1px solid rgba(233,221,209,0.9)',
                    }}
                  >
                    <strong
                      className="text-sm flex-shrink-0"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}
                    >
                      {row.label}
                    </strong>
                    <span
                      className="text-xs text-right"
                      style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
                    >
                      {row.value}
                    </span>
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
              Pricing is based on units used. Your provider will recommend the right amount during consultation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pricingProducts.map((product) => {
              const hasTotals = product.rows.some((r) => r.perUnit && r.total)
              return (
              <div key={product.name} className="rounded-2xl p-5 flex flex-col" style={{ background: 'rgba(255,250,245,0.85)', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 10px 30px rgba(90,66,44,0.06)' }}>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', margin: 0 }}>{product.name}</h3>
                </div>
                {/* Always render this line (empty for products without a note) so both cards'
                    headers are the same height and their pricing rows align across columns. */}
                <p className="text-xs mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#9a8f86', margin: '0 0 12px', minHeight: '1.1em' }}>{product.note || ' '}</p>
                <div className="w-full h-px mb-3" style={{ background: 'rgba(233,221,209,0.9)' }} />
                <div className="flex flex-col gap-2 mb-4 flex-grow">
                  {product.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between py-2.5 px-4 rounded-xl"
                      style={{
                        background: row.highlight ? 'rgba(212,175,55,0.12)' : 'rgba(255,255,255,0.72)',
                        border: row.highlight ? '1px solid rgba(212,175,55,0.4)' : '1px solid rgba(233,221,209,0.9)',
                      }}
                    >
                      <span className="text-xs font-medium" style={{ fontFamily: 'Montserrat, sans-serif', color: row.highlight ? '#8B6340' : '#7a6f66' }}>
                        {row.label}
                      </span>
                      <span className="flex items-baseline justify-end gap-3">
                        <span className="font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: '#2C2C2C' }}>
                          {row.perUnit || row.total}
                        </span>
                        {hasTotals && (
                          <span className="text-xs text-right" style={{ fontFamily: 'Montserrat, sans-serif', color: '#9a8f86', minWidth: '2.75rem', display: 'inline-block' }}>
                            {row.perUnit && row.total ? row.total : ''}
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                <a href="/book" className="block w-full text-center px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C6A050 100%)', fontFamily: 'Montserrat, sans-serif' }}>
                  Book Now
                </a>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2
              className="font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}
            >
              Before & After
            </h2>
            <p
              className="text-sm lg:max-w-sm"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}
            >
              Individual results may vary. Photos shown with patient consent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/slynn-botox-xeomin-set-1.jpg',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/slynn-botox-xeomin-set-2.jpg',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/slynn-botox-xeomin-set-3.jpg',
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
                  alt={`Botox & Xeomin result ${i + 1}`}
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
            <h2
              className="font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}
            >
              A refined approach to wrinkle relaxers
            </h2>
            <p
              className="text-sm lg:max-w-sm"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}
            >
              Both Botox and Xeomin are FDA-approved neuromodulators. Your provider will recommend the best option during consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: 'What is Botox?',
                body: "Botox Cosmetic is a trusted injectable treatment used to temporarily soften dynamic facial lines caused by repeated muscle movement. It is the most widely used neuromodulator in the world, known for its precision and predictable, natural-looking results.",
                pills: [
                  { label: 'Look', value: 'Smooths expression lines' },
                  { label: 'Feel', value: 'Fast, comfortable treatment' },
                  { label: 'Plan', value: 'Customized to your anatomy' },
                ],
              },
              {
                title: 'What is Xeomin?',
                body: "Xeomin is a refined wrinkle-relaxing injectable used to temporarily improve the appearance of upper facial lines. It contains only the active neurotoxin component, making it an excellent choice for patients seeking precise, clean results.",
                pills: [
                  { label: 'Focus', value: 'Upper facial line softening' },
                  { label: 'Visit', value: 'Convenient appointment' },
                  { label: 'Style', value: 'Balanced, refreshed look' },
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl p-8 flex flex-col"
                style={{
                  background: 'rgba(255,250,245,0.85)',
                  border: '1px solid rgba(233,221,209,0.9)',
                  boxShadow: '0 20px 60px rgba(90,66,44,0.08)',
                }}
              >
                <h3
                  className="mb-4"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400, margin: '0 0 12px' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6 flex-grow"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
                >
                  {card.body}
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {card.pills.map((pill) => (
                    <div
                      key={pill.label}
                      className="p-4 rounded-2xl"
                      style={{
                        background: 'rgba(255,255,255,0.72)',
                        border: '1px solid rgba(233,221,209,0.9)',
                      }}
                    >
                      <strong
                        className="block mb-1.5 text-sm"
                        style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}
                      >
                        {pill.label}
                      </strong>
                      <span
                        className="text-xs"
                        style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
                      >
                        {pill.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section id="areas" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2
              className="font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}
            >
              Common treatment areas
            </h2>
            <p
              className="text-sm lg:max-w-sm"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}
            >
              Treatment is adjusted based on movement patterns, muscle strength, and your aesthetic goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {treatmentAreas.map((area) => (
              <div
                key={area.tag}
                className="rounded-3xl p-6"
                style={{
                  background: 'rgba(255,250,245,0.85)',
                  border: '1px solid rgba(233,221,209,0.9)',
                  boxShadow: '0 20px 60px rgba(90,66,44,0.08)',
                }}
              >
                <span
                  className="inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
                  style={{
                    background: '#EFE5DB',
                    color: '#8B6340',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {area.tag}
                </span>
                <h4
                  className="mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 400, margin: '0 0 8px' }}
                >
                  {area.title}
                </h4>
                <p
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}
                >
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section id="process" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2
              className="font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}
            >
              What to expect
            </h2>
            <p
              className="text-sm lg:max-w-sm"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}
            >
              From your first consultation to seeing results, here is what the experience looks like at Slynn Wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {expectations.map((item) => (
              <div
                key={item.tag}
                className="rounded-3xl p-6"
                style={{
                  background: 'rgba(255,250,245,0.85)',
                  border: '1px solid rgba(233,221,209,0.9)',
                  boxShadow: '0 20px 60px rgba(90,66,44,0.08)',
                }}
              >
                <span
                  className="inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
                  style={{
                    background: '#EFE5DB',
                    color: '#8B6340',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {item.tag}
                </span>
                <h4
                  className="mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 400, margin: '0 0 8px' }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}
                >
                  {item.description}
                </p>
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
            style={{
              background: 'linear-gradient(135deg, rgba(255,250,245,0.95), rgba(247,239,230,0.98))',
              border: '1px solid rgba(233,221,209,0.9)',
              boxShadow: '0 20px 60px rgba(90,66,44,0.10)',
            }}
          >
            <div>
              <h3
                className="mb-3 font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', margin: '0 0 12px' }}
              >
                Not sure whether Botox or Xeomin is right for you?
              </h3>
              <p
                className="text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}
              >
                A consultation helps you compare both options, review target areas, and build a natural-looking treatment plan that fits your goals and timeline.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white transition-all hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #C6A050 100%)',
                  boxShadow: '0 10px 30px rgba(212,175,55,0.30)',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Book Consultation
              </a>
              <Link
                href="/contact"
                className="w-full text-center px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(233,221,209,0.9)',
                  color: '#2C2C2C',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Contact Us
              </Link>
              <a
                href={`tel:${settings.phone?.replace(/\D/g, '')}`}
                className="w-full text-center px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(233,221,209,0.9)',
                  color: '#2C2C2C',
                  fontFamily: 'Montserrat, sans-serif',
                }}
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
            <h2
              className="font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}
            >
              Frequently asked questions
            </h2>
            <p
              className="text-sm lg:max-w-sm"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}
            >
              Have more questions? Our team is happy to walk you through everything during your consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl p-7"
                style={{
                  background: 'rgba(255,250,245,0.85)',
                  border: '1px solid rgba(233,221,209,0.9)',
                  boxShadow: '0 20px 60px rgba(90,66,44,0.08)',
                }}
              >
                <strong
                  className="block mb-3"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 500 }}
                >
                  {faq.q}
                </strong>
                <p
                  className="text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0, lineHeight: 1.7 }}
                >
                  {faq.a}
                </p>
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
            style={{
              background: 'linear-gradient(135deg, rgba(255,250,245,0.95), rgba(247,239,230,0.98))',
              border: '1px solid rgba(233,221,209,0.9)',
              boxShadow: '0 20px 60px rgba(90,66,44,0.10)',
            }}
          >
            <div>
              <h3
                className="mb-3 font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', margin: '0 0 12px' }}
              >
                Book your Botox or Xeomin consultation
              </h3>
              <p
                className="text-sm"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}
              >
                Slynn Wellness offers a refined, welcoming environment for aesthetic care in Pasadena. Book your consultation and receive a customized treatment recommendation.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/book"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white transition-all hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #C6A050 100%)',
                  boxShadow: '0 10px 30px rgba(212,175,55,0.30)',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Book Now
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(233,221,209,0.9)',
                  color: '#2C2C2C',
                  fontFamily: 'Montserrat, sans-serif',
                }}
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
