import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getSiteSettings } from '@/lib/supabase/settings'
import { getServiceBySlug } from '@/lib/supabase/admin'

export const metadata: Metadata = {
  title: 'RF Microneedling (Candela Matrix Pro) | Slynn Wellness',
  description:
    'Lift, tighten, and renew your skin with Candela Matrix Pro RF Microneedling at Slynn Wellness in Pasadena, CA. Collagen-focused skin renewal for texture, laxity, and fine lines.',
}

const benefits = [
  {
    tag: '01',
    title: 'Fine Lines & Wrinkles',
    description: 'Supports smoother-looking skin and softens visible signs of aging with collagen-stimulating RF energy.',
  },
  {
    tag: '02',
    title: 'Texture & Pores',
    description: 'Often selected for rough texture, enlarged pores, and an overall skin-quality refresh.',
  },
  {
    tag: '03',
    title: 'Skin Laxity',
    description: 'Part of a nonsurgical plan to support firmer-looking skin on the face, jawline, and neck.',
  },
  {
    tag: '04',
    title: 'Acne Scars & Marks',
    description: 'Frequently chosen when patients want a more advanced treatment for textural acne scarring.',
  },
  {
    tag: '05',
    title: 'Under-Eye & Delicate Areas',
    description: 'May be discussed for select rejuvenation goals in delicate facial zones during consultation.',
  },
  {
    tag: '06',
    title: 'Post-Weight-Loss Skin',
    description: 'Can support patients looking to improve firmness and skin quality after facial volume changes.',
  },
  {
    tag: '07',
    title: 'Healthy Aging Plans',
    description: 'Works beautifully as a foundation treatment in long-term maintenance and skin renewal programs.',
  },
  {
    tag: '08',
    title: 'Custom Combinations',
    description: 'Can be paired with injectables, facials, or skincare as part of a broader aesthetic plan.',
  },
]

const timeline = [
  {
    step: 'Step 01',
    title: 'Consultation',
    description: 'We assess your skin quality, treatment history, lifestyle, and goals — then determine whether Matrix Pro is the right fit for your plan.',
  },
  {
    step: 'Step 02',
    title: 'Preparation',
    description: 'Your skin is cleansed and prepared. A numbing approach may be used based on the area being treated and the treatment intensity.',
  },
  {
    step: 'Step 03',
    title: 'Treatment',
    description: 'The device is passed strategically through the treatment area to deliver RF microneedling energy in a customized, precise pattern.',
  },
  {
    step: 'Step 04',
    title: 'Recovery',
    description: 'Most clients experience a short recovery window with temporary redness or warmth, followed by progressive skin renewal over weeks.',
  },
]

const faqs = [
  {
    q: 'How is Matrix Pro different from regular microneedling?',
    a: 'Matrix Pro adds radiofrequency energy to microneedling, allowing the treatment to support deeper skin renewal goals such as firmness, fine lines, and more advanced texture concerns.',
  },
  {
    q: 'How many treatments do I usually need?',
    a: 'Many patients are guided toward a treatment series rather than a single visit. The right number depends on whether the main concern is texture, laxity, scars, or overall skin rejuvenation.',
  },
  {
    q: 'Is there downtime?',
    a: 'Downtime is generally manageable. Temporary redness, warmth, or mild sensitivity is common early on. Most clients return to their regular routine within 24–48 hours.',
  },
  {
    q: 'When will I see results?',
    a: 'Some patients notice an early glow or tighter feel within days, while continued improvement becomes more visible over the following weeks as collagen response develops.',
  },
  {
    q: 'Can this be combined with Botox, filler, or facials?',
    a: 'Often yes — but timing and sequence matter. Combination planning should always be reviewed during consultation so your treatment calendar is intentional and safe.',
  },
  {
    q: 'Is Matrix Pro right for all skin tones?',
    a: 'Candela positions the Matrix system for diverse skin types and tones, but candidacy and settings should be determined by a qualified provider after evaluating your skin.',
  },
]

export default async function MicroneedlingPage() {
  const [settings, service] = await Promise.all([
    getSiteSettings(),
    getServiceBySlug('microneedling'),
  ])

  const price = service?.price || 'Starting at $300/session'
  const description = service?.short_description || 'Stimulate collagen production for smoother, firmer, rejuvenated skin.'

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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/skin-scalp-care"
            className="inline-flex items-center gap-2 text-xs text-[#8B7355] hover:text-[#D4AF37] transition-colors mb-8"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Skin & Scalp Care
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
                Candela Skin Renewal Technology
              </div>

              <h1
                className="font-light mb-4 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', letterSpacing: '-0.01em' }}
              >
                RF Microneedling
              </h1>

              <p
                className="text-sm leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
              >
                {description} Our Candela Matrix Pro approach is elegant, collagen-focused, and designed around natural-looking skin renewal.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href={settings.booking_url}
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
                  { value: '2–3 sessions', label: 'Often recommended in a series' },
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
                  backgroundImage: 'url(https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/candela_microneedling.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 40%, rgba(0,0,0,0.30) 100%)', borderRadius: 'inherit' }} />
                <span className="relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase self-start" style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)', color: '#8B6340', fontFamily: 'Montserrat, sans-serif', border: '1px solid rgba(233,221,209,0.8)' }}>
                  Collagen · Texture · Tightness
                </span>
                <span className="relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase self-start" style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(10px)', color: '#8B6340', fontFamily: 'Montserrat, sans-serif', border: '1px solid rgba(233,221,209,0.8)' }}>
                  Candela Matrix Pro
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { label: 'Best for', value: 'Texture, fine lines, acne scars, laxity, pores' },
                  { label: 'Technology', value: 'RF microneedling with customized energy delivery' },
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

      {/* Overview */}
      <section id="overview" className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              A complete approach to skin renewal
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              RF microneedling appeals to patients who want more than a surface-level facial but are not ready for surgery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'What is Candela Matrix Pro?',
                body: "Matrix Pro is Candela's RF microneedling treatment designed to support skin renewal by delivering radiofrequency energy through ultra-fine microneedles. It is commonly used in treatment plans focused on collagen support, texture refinement, and visible skin tightening.",
                pills: [
                  { label: 'Renew', value: 'Supports healthier, smoother skin' },
                  { label: 'Refine', value: 'Targets texture and pores' },
                  { label: 'Refresh', value: 'Natural-looking rejuvenation' },
                ],
              },
              {
                title: 'Why patients love RF microneedling',
                body: "RF microneedling fits beautifully into healthy-aging treatment plans because it addresses multiple concerns at once — fine lines, scars, laxity, and overall skin quality. It can be used on the face, jawline, neck, and select body areas.",
                pills: [
                  { label: 'Collagen', value: 'Deep collagen stimulation' },
                  { label: 'Series', value: 'Gradual, natural improvement' },
                  { label: 'Versatile', value: 'Face, neck & body areas' },
                ],
              },
            ].map((card) => (
              <div key={card.title} className="rounded-3xl p-8" style={cardStyle}>
                <h3 className="mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400, margin: '0 0 12px' }}>{card.title}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>{card.body}</p>
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

      {/* Benefits */}
      <section id="benefits" className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              What Matrix Pro can help address
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              RF microneedling is one of the most versatile nonsurgical treatments available for skin renewal.
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

      {/* Why this technology */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Why this technology stands out
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Patients appreciate understanding why RF microneedling delivers more than a basic facial or standard microneedling alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { tag: 'Candela', title: 'RF + Microneedling', desc: 'Matrix Pro combines radiofrequency energy with microneedling to support deeper, more comprehensive skin renewal than superficial treatments alone.' },
              { tag: 'Customization', title: 'Personalized Depth & Energy', desc: 'The Matrix platform is built around customizable treatment delivery, helping providers tailor each session to your unique skin and goals.' },
              { tag: 'Comfort', title: 'Designed for Efficiency', desc: 'Patients are drawn to the balance of visible results, comfortable treatment design, and manageable recovery compared to more aggressive options.' },
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Who may be a good candidate?',
                body: 'Patients often explore Matrix Pro when they want a more advanced rejuvenation treatment for visible aging, texture, acne scars, pore concerns, or laxity — but still want a nonsurgical path. A consultation is important to review candidacy and realistic expectations.',
                bullets: ['You want more correction than a standard facial can provide', 'You are interested in collagen support and gradual, natural-looking improvement', 'You are comfortable with a treatment series for stronger results'],
              },
              {
                title: 'What results feel like',
                body: 'Patients often describe a visible glow and a tighter feel within days, with more progressive improvement over the following weeks as new collagen develops. Series treatments are commonly recommended when the goal is more meaningful change in texture, firmness, or scarring.',
                bullets: ['Early glow and refreshed skin appearance', 'Gradual improvement in smoothness and skin quality', 'Longer-term support for firmness and texture with maintenance'],
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Aftercare & recovery guidance
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Following post-care instructions carefully helps protect your results and support the renewal process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Immediately after treatment',
                body: 'It is normal to experience temporary redness, warmth, or a lightly flushed look after treatment. Depending on settings and the area treated, mild sensitivity or dryness may occur during early recovery.',
                bullets: ['Follow post-care instructions exactly as given by your provider', 'Keep skincare simple and gentle during early recovery', 'Prioritize hydration and diligent sun protection'],
              },
              {
                title: 'Planning your series',
                body: 'Matrix Pro is often not a one-and-done treatment when the goals involve laxity, scarring, or advanced rejuvenation. Building a thoughtful series and maintenance plan creates the most elegant, lasting outcome.',
                bullets: ['Many clients start with a series rather than a single treatment', 'Spacing is commonly based on skin goals and recovery response', 'Maintenance helps preserve visible firmness and glow over time'],
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            style={{ background: 'linear-gradient(135deg, rgba(255,250,245,0.95), rgba(247,239,230,0.98))', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 20px 60px rgba(90,66,44,0.10)' }}
          >
            <div>
              <h3 className="mb-3 font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', margin: '0 0 12px' }}>
                Is Matrix Pro RF Microneedling right for you?
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                A consultation helps us review your skin goals, treatment history, and whether Matrix Pro fits your plan — then build a personalized treatment series around your timeline.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={settings.booking_url}
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            style={{ background: 'linear-gradient(135deg, rgba(255,250,245,0.95), rgba(247,239,230,0.98))', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 20px 60px rgba(90,66,44,0.10)' }}
          >
            <div>
              <h3 className="mb-3 font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', margin: '0 0 12px' }}>
                Book your Matrix Pro consultation
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                Slynn Wellness offers a refined, welcoming environment for advanced skin care in Pasadena. Book your consultation and receive a personalized treatment recommendation.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={settings.booking_url}
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
