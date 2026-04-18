import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getSiteSettings } from '@/lib/supabase/settings'
import ImageCarousel from '@/components/sections/ImageCarousel'

const carouselImages = [
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/skinvive-product.png', alt: 'SKINVIVE product' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/skin-2.png', alt: 'SKINVIVE treatment' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/skinvive-1.png', alt: 'SKINVIVE results' },
]

export const metadata: Metadata = {
  title: 'SKINVIVE | Slynn Wellness',
  description:
    'JUVÉDERM SKINVIVE™ by Allergan — an FDA-approved intradermal microdroplet HA treatment that improves skin hydration, smoothness, and natural glow at Slynn Wellness in Pasadena, CA.',
}

const treatmentAreas = [
  {
    tag: '01',
    title: 'Cheeks',
    description: 'FDA-approved primary treatment area. SKINVIVE microdroplets improve skin texture, hydration, and radiance in the cheeks with clinically proven results.',
  },
  {
    tag: '02',
    title: 'Full Face',
    description: 'Can be used across multiple facial zones for overall skin quality improvement, addressing hydration and smoothness throughout the face.',
  },
  {
    tag: '03',
    title: 'Neck',
    description: 'Improves skin hydration and texture in the neck area, helping to restore a smoother, more luminous appearance to this often-overlooked zone.',
  },
  {
    tag: '04',
    title: 'Décolletage',
    description: 'Addresses skin quality and hydration concerns on the chest, improving smoothness and radiance in areas prone to sun damage and dryness.',
  },
  {
    tag: '05',
    title: 'Under Eyes',
    description: 'Subtle improvement in skin quality and hydration around the delicate eye area, helping to reduce crepiness and improve overall skin tone.',
  },
  {
    tag: '06',
    title: 'Jawline & Lower Face',
    description: 'Enhances skin smoothness and glow in the lower facial zones, improving texture and hydration for a more refined, radiant appearance.',
  },
]

const timeline = [
  {
    step: 'Step 01',
    title: 'Consultation',
    description: 'A thorough skin assessment reviews your hydration levels, texture concerns, and candidacy. We discuss treatment area planning and what you can expect from your SKINVIVE results.',
  },
  {
    step: 'Step 02',
    title: 'Treatment',
    description: 'A series of tiny microdroplet injections are placed intradermally — into the skin itself, not beneath it. Each session takes approximately 15–30 minutes.',
  },
  {
    step: 'Step 03',
    title: 'Recovery',
    description: 'Small micro-bumps at injection sites are normal and resolve within 1–3 days. Most clients return to daily activities the same day. Skin begins to look more radiant shortly after.',
  },
  {
    step: 'Step 04',
    title: 'Results',
    description: 'Hydration and smoothness continue to improve over 4 weeks as the HA integrates. Results last approximately 6 months, with touch-up sessions recommended to maintain your glow.',
  },
]

const faqs = [
  {
    q: 'How is SKINVIVE different from fillers?',
    a: 'SKINVIVE is an intradermal treatment — the microdroplets of hyaluronic acid are injected into the skin itself, not beneath it. Traditional fillers are placed subdermally to add volume or lift. SKINVIVE does not add volume or change facial structure at all. Its sole focus is improving skin quality: hydration, smoothness, and glow.',
  },
  {
    q: 'How long do results last?',
    a: 'Results from SKINVIVE last approximately 6 months. After completing the initial two-session protocol, touch-up sessions are recommended to maintain your improved skin hydration and smoothness.',
  },
  {
    q: 'How many sessions do I need?',
    a: 'The optimal protocol is typically 2 sessions spaced 1 month apart. This two-session approach is what was used in the FDA clinical trials and delivers the best cumulative results for skin quality improvement.',
  },
  {
    q: 'Is there downtime?',
    a: 'Downtime is minimal. Small micro-bumps at the injection sites are expected and resolve within 1–3 days. Most clients feel comfortable returning to normal activities the same day as their treatment.',
  },
  {
    q: 'Can SKINVIVE be combined with other treatments?',
    a: 'Yes — SKINVIVE stacks beautifully with other treatments. It pairs especially well with Botox, dermal fillers, and facials. Because it works in the skin rather than beneath it, it complements volumizing and muscle-relaxing treatments without interference.',
  },
  {
    q: 'Who is a good candidate for SKINVIVE?',
    a: 'SKINVIVE is ideal for anyone wanting improved skin quality, hydration, smoothness, or a natural glow — without adding volume or altering their facial structure. It is a great option for those who feel their skin looks dull, dry, or rough despite good skincare.',
  },
]

export default async function SKINVIVEPage() {
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
                JUVÉDERM SKINVIVE™ by Allergan
              </div>

              <h1
                className="font-light mb-4 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', letterSpacing: '-0.01em' }}
              >
                SKINVIVE
              </h1>

              <p
                className="text-sm leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
              >
                SKINVIVE is an FDA-approved intradermal microdroplet treatment that improves skin hydration, smoothness, and natural glow — without adding volume or altering facial structure.
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
                  { value: '~6 months', label: 'Results duration' },
                  { value: '2 sessions', label: 'Optimal protocol' },
                  { value: 'Minimal', label: 'Downtime' },
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
                  { label: 'Best for', value: 'Skin hydration, smoothness, glow, skin quality' },
                  { label: 'Technology', value: 'Intradermal microdroplet HA injection' },
                  { label: 'Goal', value: 'Healthier, more radiant skin from within' },
                  { label: 'Pricing', value: 'Starting at $599/session' },
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
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/skinvive-1.jpg',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/skinvive-2.jpg',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/skinvive-3.jpg',
            ].map((url, i) => (
              <div key={i} className="rounded-3xl overflow-hidden" style={cardStyle}>
                <img
                  src={url}
                  alt={`SKINVIVE result ${i + 1}`}
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
              SKINVIVE works in the skin, not beneath it — improving quality, hydration, and glow without adding volume or changing your facial structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: 'What is SKINVIVE?',
                body: "JUVÉDERM SKINVIVE™ by Allergan is an FDA-approved intradermal microdroplet hyaluronic acid (HA) treatment. Unlike traditional fillers, SKINVIVE is not designed to add volume or lift — it works by injecting tiny microdroplets of HA directly into the skin itself. This improves the skin's intrinsic hydration, softness, and radiance from within. It is FDA-approved for improving cheek skin smoothness, with results lasting approximately 6 months.",
                pills: [
                  { label: 'Hydrates', value: 'Improves skin moisture from within' },
                  { label: 'Smooths', value: 'Refines skin texture and feel' },
                  { label: 'Glows', value: 'Enhances natural radiance' },
                ],
              },
              {
                title: 'How is it different from fillers?',
                body: "Traditional fillers are placed beneath the skin to add volume, lift, or structural support. SKINVIVE is placed intradermally — within the skin itself — and has no volumizing effect whatsoever. It focuses entirely on skin quality. This makes it a uniquely complementary treatment: it stacks beautifully with Botox, fillers, and facials, addressing the one thing those treatments cannot — the quality of the skin itself.",
                pills: [
                  { label: 'Intradermal', value: 'In the skin, not beneath it' },
                  { label: 'Glow', value: 'Skin quality, not volume' },
                  { label: 'Stackable', value: 'Pairs with Botox and fillers' },
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
              SKINVIVE can address multiple areas focused on skin quality and hydration — not volume or structure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
              SKINVIVE is a quick, low-downtime treatment — here is what your experience looks like at Slynn Wellness.
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
                Ready to experience skin that glows from within?
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                A consultation lets us assess your skin quality, discuss your goals, and create a personalized SKINVIVE plan — so you can move forward with confidence.
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
                Book your SKINVIVE consultation
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                Slynn Wellness offers a refined, welcoming environment for aesthetic care in Pasadena. Book your consultation and receive a personalized SKINVIVE treatment plan tailored to your skin quality goals and lifestyle.
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
