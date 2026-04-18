import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getSiteSettings } from '@/lib/supabase/settings'
import { getServiceBySlug } from '@/lib/supabase/admin'
import ImageCarousel from '@/components/sections/ImageCarousel'

const carouselImages = [
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/restylane-1.webp', alt: 'RESTYLANE treatment' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/restylane-2.jpeg', alt: 'RESTYLANE results' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/restylane-2.webp', alt: 'RESTYLANE filler' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/restylane-4.png', alt: 'RESTYLANE natural volume' },
]

export const metadata: Metadata = {
  title: 'RESTYLANE | Slynn Wellness',
  description:
    'Restore volume, define contours, and enhance your natural beauty with RESTYLANE hyaluronic acid fillers at Slynn Wellness in Pasadena, CA.',
}

const treatmentAreas = [
  {
    tag: '01',
    title: 'Lips',
    description: 'Enhance lip volume, define the lip border, and smooth vertical lip lines for a naturally fuller, more youthful appearance.',
  },
  {
    tag: '02',
    title: 'Cheeks',
    description: 'Restore lost cheek volume, lift midface contours, and create a refined, sculpted facial structure.',
  },
  {
    tag: '03',
    title: 'Nasolabial Folds',
    description: 'Soften smile lines and deep creases that run from the nose to the corners of the mouth.',
  },
  {
    tag: '04',
    title: 'Under Eyes',
    description: 'Address hollowness and dark shadows under the eyes for a refreshed, well-rested appearance.',
  },
  {
    tag: '05',
    title: 'Jawline',
    description: 'Define and contour the jawline for a more structured, balanced facial profile.',
  },
  {
    tag: '06',
    title: 'Chin',
    description: 'Enhance chin projection and facial harmony for improved overall proportion and symmetry.',
  },
  {
    tag: '07',
    title: 'Temples',
    description: 'Restore volume to hollowed temples that contribute to a gaunt or aged appearance.',
  },
  {
    tag: '08',
    title: 'Personalized Areas',
    description: 'Your provider will assess your facial anatomy during consultation and recommend the areas best suited to your goals.',
  },
]

const timeline = [
  {
    step: 'Step 01',
    title: 'Consultation',
    description: 'We evaluate your facial anatomy, skin quality, and aesthetic goals to determine the right RESTYLANE product and treatment plan for you.',
  },
  {
    step: 'Step 02',
    title: 'Preparation',
    description: 'The treatment area is cleansed and a topical numbing cream may be applied for comfort. RESTYLANE products also contain lidocaine for added ease.',
  },
  {
    step: 'Step 03',
    title: 'Treatment',
    description: 'Your provider carefully injects RESTYLANE using precise technique to sculpt, volumize, and enhance your natural features with a balanced approach.',
  },
  {
    step: 'Step 04',
    title: 'Results',
    description: 'Results are visible immediately. Mild swelling or bruising may occur and typically resolves within a few days. Final results settle within 2 weeks.',
  },
]

const faqs = [
  {
    q: 'How long do RESTYLANE results last?',
    a: 'Results typically last 6 to 18 months depending on the area treated, the product used, and individual metabolism. Lip fillers generally last 6–12 months, while cheek and facial fillers can last up to 12–18 months.',
  },
  {
    q: 'Is RESTYLANE safe?',
    a: 'Yes. RESTYLANE is FDA-approved and made from hyaluronic acid — a substance naturally found in the body. It has an extensive safety record when administered by trained medical professionals.',
  },
  {
    q: 'Does the treatment hurt?',
    a: 'Most patients experience minimal discomfort. RESTYLANE products contain lidocaine, a local anesthetic, to improve comfort during treatment. A topical numbing cream can also be applied beforehand.',
  },
  {
    q: 'Is there downtime after treatment?',
    a: 'Downtime is minimal. Some swelling, redness, or bruising at the injection sites is normal and typically resolves within a few days. Most clients return to regular activities the same day.',
  },
  {
    q: 'Can RESTYLANE be reversed?',
    a: 'Yes — hyaluronic acid fillers like RESTYLANE can be dissolved using an enzyme called hyaluronidase if needed. This is one of the key safety advantages of HA-based fillers.',
  },
  {
    q: 'How is RESTYLANE different from other fillers?',
    a: 'RESTYLANE is a family of hyaluronic acid fillers each designed for specific areas and purposes — from fine lip definition to deep cheek volumization. Your provider will select the right product for your treatment goals.',
  },
]

const restylaneProducts = [
  { name: 'RESTYLANE-L', use: 'Moderate facial wrinkles and folds' },
  { name: 'RESTYLANE Kysse', use: 'Lip augmentation and lip lines' },
  { name: 'RESTYLANE Contour', use: 'Cheek augmentation and contouring' },
  { name: 'RESTYLANE Lyft', use: 'Cheeks, midface, and hands' },
  { name: 'RESTYLANE Defyne', use: 'Deep laugh lines and chin' },
  { name: 'RESTYLANE Refyne', use: 'Moderate laugh lines, natural movement' },
]

export default async function RESTYLANEFillerPage() {
  const [settings, service] = await Promise.all([
    getSiteSettings(),
    getServiceBySlug('dermal-fillers'),
  ])

  const description = 'RESTYLANE is a hyaluronic acid filler collection that helps restore volume, smooth facial lines, and enhance natural contours for refreshed, natural-looking results.'

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
                RESTYLANE
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
                  { value: '6–18 months', label: 'Typical results duration' },
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
              {/* Carousel */}
              <div className="rounded-2xl overflow-hidden" style={{ flex: '1 1 0', minHeight: '280px' }}>
                <ImageCarousel images={carouselImages} autoPlayInterval={3500} fillHeight />
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Best for', value: 'Lips, cheeks, face, jawline, under eyes' },
                  { label: 'Technology', value: 'FDA-approved hyaluronic acid filler' },
                  { label: 'Goal', value: 'Natural-looking volume and contour' },
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
              Pricing varies based on the area treated and the amount of product used. A consultation will determine the right plan for your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { area: 'Lips', price: '$299', note: 'Per area' },
              { area: 'Face', price: '$299 – $799', note: 'Per area' },
              { area: 'Cheeks', price: '$599 – $999', note: 'Per area' },
            ].map((item) => (
              <div
                key={item.area}
                className="rounded-2xl px-5 py-3 flex flex-col items-center text-center"
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
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/restylane-before-&-after.png',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/restylane-before-&-after-2.png',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/restylane-before-&-after-3.png',
            ].map((url, i) => (
              <div key={i} className="rounded-3xl overflow-hidden" style={cardStyle}>
                <img
                  src={url}
                  alt={`RESTYLANE result ${i + 1}`}
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
              RESTYLANE is a hyaluronic acid filler collection that helps restore volume, smooth facial lines, and enhance natural contours for refreshed, natural-looking results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: 'What is RESTYLANE?',
                body: "Dermal fillers are injection treatments used to diminish wrinkles, restore fullness, and make subtle facial changes. Hyaluronic acid (HA) is a naturally occurring substance in your skin that provides hydration, fullness, and elasticity — but it diminishes as we age, causing volume loss and the appearance of wrinkles and folds. RESTYLANE uses clear gel formulations of HA and was the original non-animal stabilized HA filler, designed to be closest to the body's own hyaluronic acid with minimal crosslinking. It was the first HA filler approved by the US FDA and has now been used in over 65 million treatments worldwide.",
                pills: [
                  { label: '#1 FDA Approved', value: 'Original HA filler in the US' },
                  { label: '65M+ Worldwide', value: 'Trusted globally' },
                  { label: 'Reversible', value: 'Dissolvable if needed' },
                ],
              },
              {
                title: 'The RESTYLANE family',
                body: "Unlike a one-size-fits-all approach, the RESTYLANE family offers specialized products engineered for specific facial zones — from delicate lip enhancement to deep cheek volumization. Your provider selects the right formula based on your anatomy, skin quality, and desired outcome.",
                pills: restylaneProducts.slice(0, 3).map(p => ({ label: p.name.replace('RESTYLANE ', ''), value: p.use })),
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

      {/* Treatment Areas */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Treatment areas
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              RESTYLANE can address multiple areas of the face in a single visit or as part of a staged treatment plan.
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
              From consultation to glowing results — here is what your RESTYLANE experience looks like at Slynn Wellness.
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
                Not sure which RESTYLANE treatment is right for you?
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                A consultation helps us assess your facial anatomy, understand your goals, and recommend the right product and treatment plan — so your results look natural, balanced, and beautifully yours.
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
                Book your RESTYLANE consultation
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                Slynn Wellness offers a refined, welcoming environment for aesthetic care in Pasadena. Book your consultation and receive a personalized filler recommendation tailored to your goals.
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
