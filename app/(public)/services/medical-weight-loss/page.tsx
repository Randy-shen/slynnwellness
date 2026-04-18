import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { getSiteSettings } from '@/lib/supabase/settings'

export const metadata: Metadata = {
  title: 'Medical Weight Loss | Slynn Wellness',
  description:
    'Achieve sustainable weight loss with FDA-cleared GLP-1 medications — Semaglutide and Tirzepatide — under physician supervision at Slynn Wellness in Pasadena, CA.',
}

// ─── Data ────────────────────────────────────────────────────────────────────

const programBenefits = [
  {
    title: 'Personalized Plans',
    description:
      'Each treatment plan is tailored to your body, goals, and lifestyle for comprehensive, sustainable progress.',
  },
  {
    title: 'Treatment Guidance',
    description:
      'Dedicated medical support and personalized treatment guidance throughout your wellness journey.',
  },
  {
    title: 'Medical Supervision',
    description:
      'Physician-supervised program ensuring safety, proper dosing, and confidence-focused outcomes.',
  },
  {
    title: 'Sustainable Results',
    description:
      'Long-term approach focused on maintaining healthy weight loss and improving overall wellbeing.',
  },
]

const steps = [
  {
    num: '1',
    title: 'Consultation',
    description: 'Medical history review and personalized goal-setting with your provider.',
  },
  {
    num: '2',
    title: 'Personalized Plan',
    description: 'Custom GLP-1 protocol tailored to your body, health profile, and goals.',
  },
  {
    num: '3',
    title: 'Ongoing Support',
    description: 'Regular check-ins, dose adjustments, and expert guidance along the way.',
  },
  {
    num: '4',
    title: 'Sustainable Progress',
    description: 'Long-term strategies to maintain your results and elevate your wellbeing.',
  },
]

const medications = [
  {
    name: 'Semaglutide',
    description:
      'A GLP-1 receptor agonist clinically proven to reduce appetite and support meaningful, lasting weight loss.',
    pricing: [
      { label: 'One-Time', price: 'From $79' },
      { label: '4 Weeks', price: 'From $189' },
      { label: '12 Weeks', price: 'From $559' },
    ],
  },
  {
    name: 'Tirzepatide',
    description:
      'Targets both GLP-1 and GIP receptors for enhanced appetite control and superior metabolic outcomes.',
    pricing: [
      { label: 'One-Time', price: 'From $99' },
      { label: '4 Weeks', price: 'From $249' },
      { label: '12 Weeks', price: 'From $729' },
    ],
  },
]

const faqs = [
  {
    q: 'What is a GLP-1 weight loss program?',
    a: 'A GLP-1 weight loss program is a physician-supervised medical approach using GLP-1 receptor agonist medications like Semaglutide or Tirzepatide. These medications help regulate appetite, improve metabolic function, and support gradual, sustainable fat loss as part of a comprehensive wellness plan.',
  },
  {
    q: 'How do I know if I am a candidate?',
    a: 'Most adults with a BMI of 27 or higher, or those who have struggled with weight management through lifestyle changes alone, may be candidates. A medical consultation is required to review your health history, medications, and goals before starting any program.',
  },
  {
    q: 'Is the treatment plan personalized?',
    a: 'Yes. Every program at Slynn Wellness is individually tailored. Your provider will recommend the appropriate medication, starting dose, and titration schedule based on your unique health profile, goals, and response to treatment.',
  },
  {
    q: 'How soon will I see results?',
    a: 'Most patients notice reduced appetite within the first 1–2 weeks. Meaningful weight changes typically begin within 4–8 weeks and continue progressively with consistent use and a supportive lifestyle. Individual results vary.',
  },
]

// ─── Shared style helpers ─────────────────────────────────────────────────────

const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.72)',
  border: '1px solid rgba(255,255,255,0.78)',
  borderRadius: '28px',
  boxShadow: '0 24px 60px rgba(47,43,40,0.12)',
}

const kickerStyle: React.CSSProperties = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '0.63rem',
  letterSpacing: '0.22em',
  textTransform: 'uppercase' as const,
  color: '#bca98a',
  marginBottom: '0.75rem',
  display: 'block',
}

const h2Style: React.CSSProperties = {
  fontFamily: 'Cormorant Garamond, serif',
  fontWeight: 400,
  fontSize: 'clamp(2rem, 3vw, 3.25rem)',
  color: '#2f2b28',
  margin: '0 0 2.5rem',
  lineHeight: 1.15,
}

const bodyStyle: React.CSSProperties = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '0.8rem',
  color: '#5a534d',
  lineHeight: 1.85,
  margin: 0,
}

const ctaButtonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '0.875rem 2.25rem',
  borderRadius: '9999px',
  background: 'linear-gradient(135deg, #cbbba0 0%, #bca98a 100%)',
  color: '#2f2b28',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '0.68rem',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  textDecoration: 'none',
  textAlign: 'center' as const,
  whiteSpace: 'nowrap' as const,
}

const outlineButtonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '0.75rem 1.75rem',
  borderRadius: '9999px',
  border: '1px solid #bca98a',
  color: '#bca98a',
  fontFamily: 'Montserrat, sans-serif',
  fontSize: '0.68rem',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  textDecoration: 'none',
  textAlign: 'center' as const,
  background: 'transparent',
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function MedicalWeightLossPage() {
  const settings = await getSiteSettings()

  return (
    <div
      style={{
        background:
          'radial-gradient(circle at top right, rgba(203,187,160,0.22), transparent 20%), linear-gradient(180deg, #f8f5f1 0%, #ece7e1 24%, #e1dbd5 48%, #f8f5f1 100%)',
        minHeight: '100vh',
        fontFamily: 'Montserrat, sans-serif',
      }}
    >

      {/* ══════════════════════════════════════════════════════════════════════
          SPANNING WRAPPER — Hero + GLP-1 explainer share the model photo
      ══════════════════════════════════════════════════════════════════════ */}
      <div style={{ position: 'relative' }}>

        {/* Model image — desktop only, spans full height of wrapper */}
        <div
          className="hidden lg:block"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '52%',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <img
            src="https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/weightloss-logo.png"
            alt="Medical Weight Loss"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
            }}
          />
        </div>

        {/* ── MOBILE IMAGE (shows above hero on small screens) ──────────────── */}
        <div
          className="block lg:hidden"
          style={{ width: '100%', maxHeight: '420px', overflow: 'hidden' }}
        >
          <img
            src="https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/weightloss-logo.png"
            alt="Medical Weight Loss"
            style={{ width: '100%', height: '420px', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
          />
        </div>

        {/* ── SECTION 1: HERO ───────────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: '5rem',
            paddingBottom: '3rem',
            background: 'linear-gradient(180deg, #f8f5f1 0%, #ece7e1 100%)',
          }}
        >
          <div
            style={{
              padding: '0 4vw',
              paddingRight: '55%',
            }}
          >
            {/* Back link */}
            <Link
              href="/wellness"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#bca98a',
                textDecoration: 'none',
                marginBottom: '2.25rem',
              }}
            >
              <ArrowLeft style={{ width: '0.8rem', height: '0.8rem' }} />
              Wellness
            </Link>

            {/* Eyebrow pill */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.35rem 1.1rem',
                  border: '1px solid rgba(188,169,138,0.45)',
                  borderRadius: '9999px',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.63rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#bca98a',
                  background: 'rgba(203,187,160,0.12)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                Personalized GLP-1 Weight Loss
              </span>
            </div>

            {/* H1 */}
            <h1
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 300,
                fontSize: 'clamp(2.8rem, 5vw, 5rem)',
                lineHeight: 1.0,
                color: '#2f2b28',
                margin: '0 0 1.5rem',
                letterSpacing: '-0.01em',
              }}
            >
              Medical Weight Loss,{' '}Refined for You
            </h1>

            {/* Lead */}
            <p
              style={{
                ...bodyStyle,
                fontSize: '0.85rem',
                maxWidth: '32rem',
                marginBottom: '2.25rem',
              }}
            >
              Discover a modern, elevated approach to weight loss through personalized GLP-1
              programs designed to support real progress, body confidence, and a more elevated
              wellness journey.
            </p>

            {/* CTA */}
            <a
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...ctaButtonStyle, fontSize: '0.7rem', padding: '0.95rem 2.5rem' }}
            >
              Book Your Consultation
            </a>
          </div>
        </section>

        {/* ── SECTION 2: WHAT IS GLP-1 ──────────────────────────────────────── */}
        <section
          style={{
            paddingTop: '4rem',
            paddingBottom: '5rem',
            background: '#ece7e1',
          }}
        >
          <div
            style={{
              padding: '0 4vw',
              paddingRight: '55%',
            }}
          >
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 400,
                fontSize: 'clamp(1.9rem, 3vw, 2.9rem)',
                color: '#2f2b28',
                margin: '0 0 1.25rem',
                lineHeight: 1.15,
              }}
            >
              What Is GLP-1 Weight Loss?
            </h2>
            <p
              style={{
                ...bodyStyle,
                maxWidth: '30rem',
                marginBottom: '1.75rem',
              }}
            >
              GLP-1 weight loss treatment is a medically guided approach that may support appetite
              control and confidence over time. These programs are designed to fit into a
              personalized wellness plan and often benefit patients looking for a more structured
              and effective way to manage weight.
            </p>
            <a href="#medications" style={outlineButtonStyle}>
              Learn More
            </a>
          </div>
        </section>

      </div>
      {/* ══ END SPANNING WRAPPER ══ */}

      {/* ── SECTION 3: WHY PATIENTS LOVE OUR PROGRAM ─────────────────────── */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1220px', margin: '0 auto' }}>
          {/* Centered heading */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={kickerStyle}>Why Choose Slynn Wellness</span>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 400,
                fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                color: '#2f2b28',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Why Patients Love Our Program
            </h2>
          </div>

          {/* 4 cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {programBenefits.map((b, i) => (
              <div
                key={b.title}
                style={{
                  ...cardStyle,
                  padding: '2.25rem 2rem',
                }}
              >
                {/* Number badge */}
                <div
                  style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #cbbba0 0%, #bca98a 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    color: '#2f2b28',
                    marginBottom: '1.25rem',
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 500,
                    fontSize: '1.35rem',
                    color: '#2f2b28',
                    margin: '0 0 0.65rem',
                    lineHeight: 1.25,
                  }}
                >
                  {b.title}
                </h3>
                <p
                  style={{
                    ...bodyStyle,
                    fontSize: '0.77rem',
                    lineHeight: 1.8,
                  }}
                >
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: OUR APPROACH ──────────────────────────────────────────── */}
      <section
        style={{
          padding: '5rem 2rem',
          background: 'linear-gradient(180deg, rgba(236,231,225,0.6) 0%, rgba(248,245,241,0.4) 100%)',
        }}
      >
        <div style={{ maxWidth: '1220px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={kickerStyle}>The Process</span>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 400,
                fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                color: '#2f2b28',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Our Approach
            </h2>
          </div>

          {/* Steps with connector */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0',
              position: 'relative',
            }}
          >
            {/* Horizontal connector line (desktop) */}
            <div
              className="hidden lg:block"
              style={{
                position: 'absolute',
                top: '1.375rem',
                left: 'calc(12.5% + 1.375rem)',
                right: 'calc(12.5% + 1.375rem)',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #cbbba0 15%, #bca98a 50%, #cbbba0 85%, transparent)',
                zIndex: 0,
              }}
            />

            {steps.map((s) => (
              <div
                key={s.num}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '0 1.5rem 0',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Circle badge */}
                <div
                  style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #cbbba0 0%, #bca98a 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: '#2f2b28',
                    marginBottom: '1.5rem',
                    boxShadow: '0 4px 18px rgba(188,169,138,0.45)',
                    flexShrink: 0,
                  }}
                >
                  {s.num}
                </div>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 500,
                    fontSize: '1.35rem',
                    color: '#2f2b28',
                    margin: '0 0 0.6rem',
                    lineHeight: 1.25,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    ...bodyStyle,
                    fontSize: '0.77rem',
                    lineHeight: 1.8,
                  }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: MEDICATIONS & PRICING ─────────────────────────────────── */}
      <section id="medications" style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1220px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={kickerStyle}>Medications &amp; Pricing</span>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 400,
                fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                color: '#2f2b28',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Choose Your Program
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {medications.map((med) => (
              <div
                key={med.name}
                style={{
                  ...cardStyle,
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                {/* Med name + description */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontWeight: 500,
                      fontSize: '1.9rem',
                      color: '#2f2b28',
                      margin: '0 0 0.75rem',
                      lineHeight: 1.15,
                    }}
                  >
                    {med.name}
                  </h3>
                  <p style={{ ...bodyStyle, fontSize: '0.78rem' }}>
                    {med.description}
                  </p>
                </div>

                {/* Pricing rows */}
                <div
                  style={{
                    borderTop: '1px solid rgba(203,187,160,0.3)',
                    paddingTop: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                  }}
                >
                  {med.pricing.map((row) => (
                    <div
                      key={row.label}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(248,245,241,0.9) 0%, rgba(236,231,225,0.9) 100%)',
                        border: '1px solid rgba(203,187,160,0.25)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Montserrat, sans-serif',
                          fontSize: '0.7rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: '#5a534d',
                          fontWeight: 500,
                        }}
                      >
                        {row.label}
                      </span>
                      <span
                        style={{
                          fontFamily: 'Cormorant Garamond, serif',
                          fontWeight: 600,
                          fontSize: '1.15rem',
                          color: '#2f2b28',
                        }}
                      >
                        {row.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...ctaButtonStyle, width: '100%', boxSizing: 'border-box' as const }}
                >
                  Book Consultation
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: FAQ + CTA side by side ────────────────────────────────── */}
      <section
        style={{
          padding: '5rem 2rem 6rem',
          background: 'linear-gradient(180deg, rgba(248,245,241,0.4) 0%, rgba(236,231,225,0.6) 100%)',
        }}
      >
        <div
          style={{
            maxWidth: '1220px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.75rem',
            alignItems: 'start',
          }}
        >
          {/* LEFT: FAQ card */}
          <div style={{ ...cardStyle, padding: '2.75rem' }}>
            <span style={kickerStyle}>Common Questions</span>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 400,
                fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)',
                color: '#2f2b28',
                margin: '0 0 2rem',
                lineHeight: 1.15,
              }}
            >
              Your Questions, Answered
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {faqs.map((faq, i) => (
                <div
                  key={faq.q}
                  style={{
                    borderTop: i === 0 ? '1px solid rgba(203,187,160,0.3)' : '1px solid rgba(203,187,160,0.3)',
                    padding: '1.25rem 0',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      marginBottom: '0.65rem',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontWeight: 500,
                        fontSize: '1.15rem',
                        color: '#2f2b28',
                        margin: 0,
                        lineHeight: 1.3,
                        flex: 1,
                      }}
                    >
                      {faq.q}
                    </h3>
                    <ChevronRight
                      style={{
                        width: '1rem',
                        height: '1rem',
                        color: '#bca98a',
                        flexShrink: 0,
                        marginTop: '0.2rem',
                      }}
                    />
                  </div>
                  <p
                    style={{
                      ...bodyStyle,
                      fontSize: '0.76rem',
                      lineHeight: 1.85,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
              {/* Bottom border */}
              <div style={{ borderTop: '1px solid rgba(203,187,160,0.3)' }} />
            </div>
          </div>

          {/* RIGHT: CTA card */}
          <div
            style={{
              borderRadius: '28px',
              background:
                'radial-gradient(circle at top right, rgba(255,255,255,0.14), transparent 50%), linear-gradient(135deg, #5a534d 0%, #8f8881 40%, #cbbba0 100%)',
              boxShadow: '0 24px 60px rgba(47,43,40,0.18)',
              padding: '3rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.63rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'rgba(248,245,241,0.65)',
                  marginBottom: '0.75rem',
                }}
              >
                Get Started Today
              </span>
              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 300,
                  fontSize: 'clamp(1.9rem, 2.8vw, 2.75rem)',
                  color: '#f8f5f1',
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Ready to Begin Your Weight Loss Journey?
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.8rem',
                color: 'rgba(248,245,241,0.78)',
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              Take the first step toward a lighter, more confident version of yourself. Our
              physician-supervised GLP-1 programs are personalized to your body, your goals, and
              your lifestyle — delivered in a refined, supportive environment.
            </p>

            {settings.phone && (
              <p
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.75rem',
                  color: 'rgba(248,245,241,0.65)',
                  margin: 0,
                }}
              >
                Questions? Call us at{' '}
                <a
                  href={`tel:${settings.phone}`}
                  style={{ color: '#f0e8da', textDecoration: 'none', fontWeight: 600 }}
                >
                  {settings.phone}
                </a>
              </p>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href="/book"
                target="_blank"
                rel="noopener noreferrer"
                style={ctaButtonStyle}
              >
                Schedule Your Consultation
              </a>
              <a
                href="#medications"
                style={{
                  display: 'inline-block',
                  padding: '0.875rem 2.25rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(248,245,241,0.45)',
                  color: '#f8f5f1',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  textAlign: 'center',
                  background: 'rgba(255,255,255,0.08)',
                }}
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
