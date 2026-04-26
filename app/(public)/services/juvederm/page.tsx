import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { getSiteSettings } from '@/lib/supabase/settings'

export const metadata: Metadata = {
  title: 'Juvederm Hyaluronic Acid Fillers in Pasadena, CA',
  description:
    'Juvederm HA fillers at Slynn Wellness in Pasadena, CA. Enhance lips, restore facial volume, and smooth deep lines with FDA-approved Allergan fillers. Serving Pasadena, Altadena, San Marino, Arcadia, Glendale, and the greater Los Angeles area.',
  keywords: [
    // Core
    'Juvederm Pasadena',
    'best Juvederm Pasadena',
    'Juvederm near me',
    'Juvederm medical spa Pasadena',
    'Juvederm injector Pasadena',
    'Juvederm RN Pasadena',
    'Juvederm clinic Pasadena',
    'Allergan Juvederm Pasadena',
    // Product line
    'Juvederm Voluma Pasadena',
    'Juvederm Vollure Pasadena',
    'Juvederm Volbella Pasadena',
    'Juvederm Volux Pasadena',
    'Juvederm Volux jawline',
    'Juvederm Voluma cheeks',
    'Juvederm Volbella lips',
    'Juvederm Vollure lines',
    'Juvederm Ultra Pasadena',
    'Juvederm Ultra Plus',
    'Juvederm XC Pasadena',
    // Pricing
    'Juvederm cost Pasadena',
    'Juvederm price Pasadena',
    'Juvederm per syringe',
    'Voluma cost Pasadena',
    'Volbella cost Pasadena',
    'Volux cost Pasadena',
    'Juvederm specials Pasadena',
    'Juvederm package Pasadena',
    'Allē rewards Juvederm',
    // Generic terms
    'dermal filler Pasadena',
    'HA filler Pasadena',
    'hyaluronic acid filler Pasadena',
    'lip filler Pasadena',
    'cheek filler Pasadena',
    'jawline filler Pasadena',
    'chin filler Pasadena',
    'tear trough filler Pasadena',
    'under eye filler Pasadena',
    'liquid facelift Pasadena',
    'non-surgical face lift',
    'facial volumization Pasadena',
    'face contouring Pasadena',
    // Treatment areas
    'lip augmentation Pasadena',
    'lip enhancement Pasadena',
    'lip plumping Pasadena',
    'lip lines treatment',
    'cheek augmentation Pasadena',
    'midface volumization',
    'jawline contouring Pasadena',
    'jaw definition Pasadena',
    'chin augmentation non-surgical',
    'nasolabial fold filler',
    'smile lines filler',
    'marionette lines filler',
    'temple filler Pasadena',
    'mouth corner filler',
    'perioral lines filler',
    // Comparison
    'Juvederm vs Restylane',
    'Juvederm vs Sculptra',
    'Voluma vs Lyft',
    'Volbella vs Kysse',
    'best filler Pasadena',
    'natural-looking lip filler',
    'subtle lip filler Pasadena',
    // Nearby cities
    'Juvederm Altadena',
    'Juvederm South Pasadena',
    'Juvederm San Marino',
    'Juvederm Arcadia',
    'Juvederm Sierra Madre',
    'Juvederm Monrovia',
    'Juvederm Temple City',
    'Juvederm San Gabriel',
    'Juvederm Alhambra',
    'Juvederm La Cañada',
    'Juvederm La Cañada Flintridge',
    'Juvederm La Canada',
    'Juvederm Flintridge',
    'Juvederm Glendale',
    'Juvederm Burbank',
    'Juvederm Eagle Rock',
    'Juvederm Highland Park',
    'Juvederm San Gabriel Valley',
    'Juvederm Los Angeles',
    // Brand
    'Slynn Wellness Juvederm',
    'luxury medical spa Pasadena',
  ],
}

const treatmentAreas = [
  {
    tag: '01',
    title: 'Lips',
    description: 'Add fullness, define the lip border, and smooth vertical lip lines for a naturally plump, balanced appearance.',
  },
  {
    tag: '02',
    title: 'Cheeks',
    description: 'Restore youthful cheek volume and lift midface contours for a sculpted, refreshed look.',
  },
  {
    tag: '03',
    title: 'Nasolabial Folds',
    description: 'Soften deep smile lines that run from the nose to the corners of the mouth.',
  },
  {
    tag: '04',
    title: 'Marionette Lines',
    description: 'Address lines that run downward from the corners of the mouth for a lifted, more youthful expression.',
  },
  {
    tag: '05',
    title: 'Jawline',
    description: 'Define and contour the jawline for a more structured, balanced facial profile.',
  },
  {
    tag: '06',
    title: 'Chin',
    description: 'Improve chin projection and facial harmony for better overall proportion and symmetry.',
  },
  {
    tag: '07',
    title: 'Under Eyes',
    description: 'Reduce hollowness and dark shadows under the eyes for a rested, refreshed appearance.',
  },
  {
    tag: '08',
    title: 'Personalized Areas',
    description: 'Your provider will assess your facial anatomy during consultation to recommend the areas best suited to your goals.',
  },
]

const timeline = [
  {
    step: 'Step 01',
    title: 'Consultation',
    description: 'We assess your facial structure, skin quality, and aesthetic goals to determine the right JUVEDERM product and personalized treatment plan.',
  },
  {
    step: 'Step 02',
    title: 'Preparation',
    description: 'The treatment area is cleansed and a topical numbing cream may be applied. JUVEDERM products contain lidocaine for added comfort during treatment.',
  },
  {
    step: 'Step 03',
    title: 'Treatment',
    description: 'Your provider carefully injects JUVEDERM using precise technique to add volume, smooth lines, and enhance your features naturally.',
  },
  {
    step: 'Step 04',
    title: 'Results',
    description: 'Results are visible immediately and continue to settle over 2 weeks. Mild swelling or bruising may occur and typically resolves within a few days.',
  },
]

const faqs = [
  {
    q: 'How long do JUVEDERM results last?',
    a: 'Results typically last 9 to 24 months depending on the product used, the area treated, and individual factors. JUVEDERM Voluma for cheeks can last up to 2 years, while lip fillers generally last 9–12 months.',
  },
  {
    q: 'Is JUVEDERM safe?',
    a: 'Yes. JUVEDERM is FDA-approved and made from hyaluronic acid — a substance naturally found in the body. It has an extensive safety record when administered by trained medical professionals.',
  },
  {
    q: 'How is JUVEDERM different from Restylane?',
    a: 'Both are hyaluronic acid filler families, but they differ in formulation and texture. JUVEDERM tends to have a smoother, more cohesive gel that works well for lips and soft tissue areas, while the choice between the two depends on the treatment area and your provider\'s recommendation.',
  },
  {
    q: 'Does the treatment hurt?',
    a: 'Most patients experience minimal discomfort. All JUVEDERM products contain lidocaine, a local anesthetic, to improve comfort during treatment. A topical numbing cream can also be applied beforehand.',
  },
  {
    q: 'Is there downtime after treatment?',
    a: 'Downtime is minimal. Some swelling, redness, or bruising at the injection sites is normal and typically resolves within a few days. Most clients return to regular activities the same day.',
  },
  {
    q: 'Can JUVEDERM be reversed?',
    a: 'Yes — hyaluronic acid fillers like JUVEDERM can be dissolved using an enzyme called hyaluronidase if needed. This is one of the key safety advantages of HA-based fillers.',
  },
]

const juvedermProducts = [
  { name: 'JUVEDERM Ultra XC', use: 'Lip augmentation and perioral lines' },
  { name: 'JUVEDERM Volbella XC', use: 'Subtle lip enhancement and fine lines' },
  { name: 'JUVEDERM Vollure XC', use: 'Moderate to severe facial folds' },
  { name: 'JUVEDERM Voluma XC', use: 'Cheek augmentation and midface volume' },
  { name: 'JUVEDERM Volux XC', use: 'Jawline and chin definition' },
  { name: 'JUVEDERM Ultra Plus XC', use: 'Deep folds and volume restoration' },
]

export default async function JUVEDERMPage() {
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
        slug="juvederm"
        name="JUVEDERM Dermal Fillers"
        description="Enhance lips, restore facial volume, and smooth deep lines with JUVEDERM hyaluronic acid dermal fillers at Slynn Wellness in Pasadena, CA. FDA-approved fillers from the Allergan family of products."
        category="Medical Aesthetic"
        faqs={faqs}
        priceRange="$$$"
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
                Hyaluronic Acid Fillers
              </div>

              <h1
                className="font-light mb-4 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', letterSpacing: '-0.01em' }}
              >
                JUVEDERM
              </h1>

              <p
                className="text-sm leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
              >
                JUVEDERM is a premium hyaluronic acid filler collection designed to smooth lines, restore facial volume, and enhance natural contours — delivering immediate, long-lasting, natural-looking results.
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
                  { value: 'Immediate', label: 'Visible results after treatment' },
                  { value: '9–24 months', label: 'Typical results duration' },
                  { value: 'Reversible', label: 'Can be dissolved if needed' },
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
                  backgroundImage: 'url(https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/juvederm-1.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)', borderRadius: 'inherit' }} />
                <span
                  className="relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                  style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)', color: '#8B6340', fontFamily: 'Montserrat, sans-serif', border: '1px solid rgba(233,221,209,0.8)' }}
                >
                  Natural volume & contour
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Best for', value: 'Lips, cheeks, face, jawline, deep folds' },
                  { label: 'Technology', value: 'FDA-approved hyaluronic acid filler' },
                  { label: 'Goal', value: 'Long-lasting, natural-looking volume' },
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
              Pricing varies based on the area treated and amount of product used. A consultation will determine the right plan for your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { area: 'Lips', price: '$399', note: 'Per area' },
              { area: 'Face', price: '$399 – $899', note: 'Per area' },
              { area: 'Cheeks', price: '$699 – $1,299', note: 'Per area' },
            ].map((item) => (
              <div
                key={item.area}
                className="rounded-2xl px-5 py-3"
                style={{ background: 'rgba(255,250,245,0.85)', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 10px 30px rgba(90,66,44,0.06)' }}
              >
                <div className="flex items-center justify-between w-full gap-4">
                  <h3 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', margin: 0 }}>{item.area}</h3>
                  <div className="flex flex-col items-end">
                    <span className="font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: '#D4AF37' }}>{item.price}</span>
                    <span className="text-xs" style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8A99A' }}>{item.note}</span>
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
              Before & After
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Individual results may vary. Photos shown with patient consent.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/juvederm-bf-&-af-1.png',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/juvederm-bf-&-af-2.png',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/juvederm-bf-&-af-3.png',
            ].map((url, i) => (
              <div key={i} className="rounded-3xl overflow-hidden" style={cardStyle}>
                <img
                  src={url}
                  alt={`JUVEDERM result ${i + 1}`}
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
              JUVEDERM is a premium hyaluronic acid filler collection that delivers immediate, long-lasting results across multiple facial areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: 'What is JUVEDERM?',
                body: "JUVEDERM is a family of FDA-approved hyaluronic acid (HA) dermal fillers developed by Allergan. Known for its smooth, cohesive gel formulation, JUVEDERM integrates naturally with facial tissue to deliver soft, long-lasting results. Each product in the family is specifically engineered for different treatment areas and aesthetic goals.",
                pills: [
                  { label: 'Smooth', value: 'Cohesive gel formulation' },
                  { label: 'Lasting', value: 'Up to 24 months' },
                  { label: 'Reversible', value: 'FDA approved & dissolvable' },
                ],
              },
              {
                title: 'The JUVEDERM collection',
                body: "The JUVEDERM collection offers specialized products for each area of the face — from subtle lip enhancement to deep cheek volumization and jawline definition. Your provider selects the right formula based on your anatomy, skin quality, and the results you want to achieve.",
                pills: juvedermProducts.slice(0, 3).map(p => ({ label: p.name.replace('JUVEDERM ', ''), value: p.use })),
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

      {/* The JUVEDERM Collection */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              The JUVEDERM Collection
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              JUVÉDERM® is the #1 chosen dermal filler collection in the US, with 6 unique fillers designed for 10 specific areas of the face.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                name: 'JUVÉDERM® VOLUMA® XC',
                desc: 'For deep injection in the cheek area to correct age-related volume loss, for augmentation of the chin region to improve the chin profile, and for augmentation of the temple region to improve moderate to severe temple hollowing in adults over 21.',
              },
              {
                name: 'JUVÉDERM® VOLUX® XC',
                desc: 'For deep injection to improve moderate to severe loss of jawline definition in adults over the age of 21.',
              },
              {
                name: 'JUVÉDERM® VOLLURE® XC, Ultra Plus XC & Ultra XC',
                desc: 'For injection into the facial tissue for the correction of moderate to severe facial wrinkles and folds, such as nasolabial folds. JUVÉDERM® Ultra XC is also for injection into the lips and perioral area for lip augmentation in adults over 21.',
              },
              {
                name: 'JUVÉDERM® VOLBELLA® XC',
                desc: 'For injection into the lips for lip augmentation and correction of perioral lines, and for injection into the undereye hollows to improve the appearance of undereye hollows in adults over the age of 21.',
              },
            ].map((product) => (
              <div
                key={product.name}
                className="rounded-2xl p-6"
                style={{ background: 'rgba(255,250,245,0.85)', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 10px 30px rgba(90,66,44,0.06)' }}
              >
                <h3 className="font-medium mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', color: '#D4AF37', margin: '0 0 10px' }}>
                  {product.name}
                </h3>
                <p className="text-xs leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                  {product.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs mt-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#B8A99A' }}>
            * Based on the number of units sold in the US in 2023.
          </p>
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
              JUVEDERM can address multiple facial areas in a single visit or as part of a staged treatment plan.
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
              From consultation to glowing results — here is what your JUVEDERM experience looks like at Slynn Wellness.
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
                Not sure which JUVEDERM treatment is right for you?
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                A consultation helps us assess your facial anatomy, understand your goals, and recommend the right product and treatment plan — so your results look natural, balanced, and beautifully yours.
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
                Book your JUVEDERM consultation
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                Slynn Wellness offers a refined, welcoming environment for aesthetic care in Pasadena. Book your consultation and receive a personalized JUVEDERM treatment recommendation tailored to your goals.
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
