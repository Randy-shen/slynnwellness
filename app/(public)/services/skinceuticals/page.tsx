import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ServiceSchema from '@/components/seo/ServiceSchema'
import { getSiteSettings } from '@/lib/supabase/settings'
import ImageCarousel from '@/components/sections/ImageCarousel'

const carouselImages = [
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/skinceuticals-1.png', alt: 'SkinCeuticals treatment' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/skinceuticals-2.png', alt: 'SkinCeuticals products' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/skinceuticals-3.png', alt: 'SkinCeuticals facial' },
  { src: 'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/skinceuticals-4.png', alt: 'SkinCeuticals results' },
]

export const metadata: Metadata = {
  title: 'SKINCEUTICALS Advanced Facial | Slynn Wellness',
  description:
    'SKINCEUTICALS Advanced Facial at Slynn Wellness in Pasadena, CA. Medical-grade, science-backed skincare treatment delivering targeted correction, deep hydration, and a luminous, healthy glow.',
}

const concerns = [
  {
    tag: '01',
    title: 'Dullness & Lack of Radiance',
    description: 'High-potency antioxidants and brightening actives restore luminosity and skin vitality.',
  },
  {
    tag: '02',
    title: 'Fine Lines & Early Aging',
    description: 'Corrective serums stimulate collagen and support skin renewal for smoother, firmer texture.',
  },
  {
    tag: '03',
    title: 'Hyperpigmentation',
    description: 'Targeted brightening protocols address dark spots, uneven tone, and sun damage.',
  },
  {
    tag: '04',
    title: 'Dehydrated Skin',
    description: 'Medical-grade hyaluronic acid and barrier-repair ingredients deliver deep, lasting hydration.',
  },
  {
    tag: '05',
    title: 'Congestion & Enlarged Pores',
    description: 'Professional exfoliation clears buildup and minimizes the appearance of pores.',
  },
  {
    tag: '06',
    title: 'Sensitivity & Redness',
    description: 'Calming, antioxidant-rich formulations reduce inflammation and strengthen the skin barrier.',
  },
  {
    tag: '07',
    title: 'Environmental Damage',
    description: 'Vitamin C and antioxidant infusion neutralize free radicals and reverse oxidative stress.',
  },
  {
    tag: '08',
    title: 'Overall Skin Health',
    description: 'Regular treatments establish a foundation of healthy, resilient, well-protected skin.',
  },
]

const timeline = [
  {
    step: 'Step 01',
    title: 'Skin Analysis',
    description: 'Your provider performs a detailed skin assessment to identify your primary concerns and select the optimal SKINCEUTICALS treatment protocol.',
  },
  {
    step: 'Step 02',
    title: 'Cleanse & Prep',
    description: 'Thorough cleansing and gentle preparation to prime the skin for maximum serum absorption.',
  },
  {
    step: 'Step 03',
    title: 'Customized Treatment',
    description: 'Professional exfoliation, targeted SKINCEUTICALS serum application, and a corrective mask — all selected for your unique skin profile.',
  },
  {
    step: 'Step 04',
    title: 'Protect & Finish',
    description: 'Treatment concludes with antioxidant protection and SPF to preserve and extend your results.',
  },
]

const faqs = [
  {
    q: 'How is SKINCEUTICALS different from a regular facial?',
    a: 'SKINCEUTICALS uses medical-grade, clinically proven formulations with higher concentrations of active ingredients than retail or spa-grade products — delivering measurable, visible results.',
  },
  {
    q: 'How often should I get this treatment?',
    a: 'Monthly treatments are ideal. Regular sessions allow for progressive correction and maintenance of healthy skin.',
  },
  {
    q: 'Is there downtime?',
    a: 'No. The SKINCEUTICALS Advanced Facial has no downtime. You can apply makeup and resume normal activities immediately.',
  },
  {
    q: 'Is it suitable for sensitive skin?',
    a: 'Yes. Your provider customizes the treatment to your skin sensitivity. SKINCEUTICALS offers protocols specifically designed for reactive and sensitive skin types.',
  },
  {
    q: 'Can I combine this with other treatments?',
    a: 'Absolutely. SKINCEUTICALS Advanced Facial pairs beautifully with Botox, fillers, and other skin treatments. Your provider will advise on the best timing and sequence.',
  },
  {
    q: 'What should I do after my treatment?',
    a: 'Follow your provider\'s post-care recommendations. Generally: avoid direct sun exposure, use SPF daily, and continue with your recommended SKINCEUTICALS home care routine.',
  },
]

export default async function SKINCEUTICALSPage() {
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
        slug="skinceuticals"
        name="SKINCEUTICALS Advanced Facial"
        description="SKINCEUTICALS Advanced Facial at Slynn Wellness in Pasadena, CA. Medical-grade, science-backed skincare treatment delivering targeted correction, deep hydration, and a luminous, healthy glow."
        category="Skin & Scalp Care"
        faqs={faqs}
        priceRange="$$"
        image="https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/skinceuticals-1.png"
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
                Medical-Grade Skincare Treatment
              </div>

              <h1
                className="font-light mb-4 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', letterSpacing: '-0.01em' }}
              >
                SKINCEUTICALS Advanced Facial
              </h1>

              <p
                className="text-sm leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
              >
                Experience the power of medical-grade skincare with our SKINCEUTICALS Advanced Facial — a customized, science-backed treatment that delivers targeted correction, deep hydration, and a luminous, healthy glow.
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
                  { value: 'Medical-Grade', label: 'Professional SKINCEUTICALS formulations' },
                  { value: 'No Downtime', label: 'Return to activities immediately' },
                  { value: 'Customized', label: 'Tailored to your specific skin concerns' },
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
                  { label: 'Best for', value: 'Dullness, fine lines, hyperpigmentation, dehydration, skin health' },
                  { label: 'Technology', value: 'Medical-grade SKINCEUTICALS professional serums' },
                  { label: 'Goal', value: 'Corrected, protected, and radiant skin' },
                  { label: 'Pricing', value: '$159 / session' },
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
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/skinceuticals-bf%26af-1.png',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/skinceuticals-bf%26af-2.png',
              'https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/skinceuticals-bf%26af-3.png',
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
                    Patient {i + 1} · SKINCEUTICALS Advanced Facial
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
              SKINCEUTICALS bridges the gap between professional skincare and clinical dermatology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {[
              {
                title: 'What is SKINCEUTICALS?',
                body: 'SKINCEUTICALS is a professional skincare brand with over 25 years of clinical research. Founded on the principle of Prevention, Protection, and Correction, their formulations are developed in partnership with leading dermatologists and backed by published clinical studies. The Advanced Facial Treatment harnesses their most powerful professional-grade products — exclusive to licensed medical providers.',
                pills: [
                  { label: 'Clinical Research', value: '25+ years of published studies' },
                  { label: 'Vitamin C', value: 'Landmark antioxidant science' },
                  { label: 'Dermatologist Developed', value: 'Built with leading experts' },
                ],
              },
              {
                title: 'The Advanced Facial Experience',
                body: 'Your treatment begins with a thorough skin analysis to identify your primary concerns. Your provider then selects the optimal SKINCEUTICALS professional protocol — combining targeted exfoliation, corrective serums, and restorative masking. Every step is customized to your skin type, sensitivity, and goals for a result that is both immediately visible and progressively beneficial with regular treatments.',
                pills: [
                  { label: 'Customized', value: 'Tailored to your skin' },
                  { label: 'Corrective', value: 'Targeted active ingredients' },
                  { label: 'Results-Driven', value: 'Cumulative improvement' },
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

      {/* What SKINCEUTICALS Addresses */}
      <section id="concerns" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              What This Treatment Can Address
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              SKINCEUTICALS&apos; medical-grade formulations target a wide range of skin concerns with clinical precision.
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
              From skin analysis to a luminous finish — here is what your SKINCEUTICALS session looks like at Slynn Wellness.
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

      {/* Why SKINCEUTICALS */}
      <section id="why" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Why SKINCEUTICALS?
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Not all skincare is created equal. SKINCEUTICALS is the gold standard in medical-grade professional treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                tag: 'Clinical',
                title: '25+ Years of Research',
                description: 'SKINCEUTICALS formulations are backed by over 25 years of published clinical studies and dermatology research — not marketing claims.',
              },
              {
                tag: 'Exclusive',
                title: 'Medical Provider Only',
                description: 'Professional SKINCEUTICALS treatments are exclusively available through licensed medical providers, ensuring proper use and maximum results.',
              },
              {
                tag: 'Results',
                title: 'Visible & Cumulative',
                description: 'Clients see immediate improvement in radiance and hydration, with progressively deeper correction achieved through regular monthly treatments.',
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
                Ready for Medical-Grade Skin Transformation?
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                A consultation with our skin care team helps us select the optimal SKINCEUTICALS protocol for your skin concerns and goals.
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
                Book Your SKINCEUTICALS Facial
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                Slynn Wellness is proud to offer professional SKINCEUTICALS treatments in Pasadena. Let our skin care experts create a customized treatment plan for your healthiest, most radiant skin.
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
