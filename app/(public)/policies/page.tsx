import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getSiteSettings } from '@/lib/supabase/settings'

export const metadata: Metadata = {
  title: 'Cancellation Policy | Slynn Wellness',
  description:
    'Appointment and cancellation policy for Slynn Wellness in Pasadena, CA. Please review our 48-hour cancellation requirement before booking.',
}

export default async function PoliciesPage() {
  const settings = await getSiteSettings()

  return (
    <div
      style={{
        background: 'radial-gradient(circle at top left, rgba(212,175,55,0.08), transparent 30%), radial-gradient(circle at top right, rgba(184,169,154,0.12), transparent 25%), linear-gradient(180deg, #FDF8F3 0%, #F7F1EA 40%, #FFFAF5 100%)',
        minHeight: '100vh',
        color: '#2C2C2C',
      }}
    >
      <div className="pt-20 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-[#8B7355] hover:text-[#D4AF37] transition-colors mb-10"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(233,221,209,0.9)', color: '#8B6340', fontFamily: 'Montserrat, sans-serif' }}
            >
              Slynn Wellness · Pasadena, CA
            </div>
            <h1
              className="font-light mb-4 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)', letterSpacing: '-0.01em' }}
            >
              Appointment &amp; Cancellation Policy
            </h1>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>
              Effective date: January 1, 2025 · Last updated: April 2025
            </p>
          </div>

          {/* Policy sections */}
          <div className="space-y-6">

            {/* Intro */}
            <div
              className="rounded-3xl p-8"
              style={{ background: 'rgba(255,250,245,0.88)', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 20px 60px rgba(90,66,44,0.08)' }}
            >
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#5a5148' }}>
                At Slynn Wellness, our treatments are performed by a licensed Registered Nurse whose time is scheduled exclusively for you. Because our clinical team's schedule is coordinated around each appointment, we ask that you provide adequate notice if you need to cancel or reschedule. This policy is designed to be fair to both our patients and our staff.
              </p>
            </div>

            {/* Cancellation Notice */}
            <div
              className="rounded-3xl p-8"
              style={{ background: 'rgba(255,250,245,0.88)', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 20px 60px rgba(90,66,44,0.08)' }}
            >
              <h2 className="mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400 }}>
                Cancellation &amp; Rescheduling
              </h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#5a5148' }}>
                <p>
                  We require at least <strong style={{ color: '#2C2C2C' }}>48 hours&apos; notice</strong> to cancel or reschedule an appointment at no charge. Cancellations made within this window allow us to offer your time slot to another patient.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    {
                      label: '48+ Hours Notice',
                      desc: 'No charge. Full cancellation or reschedule at no cost.',
                      highlight: false,
                    },
                    {
                      label: 'Less than 48 Hours',
                      desc: 'Late cancellation fee of $50 charged to the card on file.',
                      highlight: false,
                    },
                    {
                      label: 'No-Show',
                      desc: 'Missed appointment without notice — $75 fee charged to the card on file.',
                      highlight: true,
                    },
                    {
                      label: 'Prepaid Packages',
                      desc: 'Late cancellations or no-shows will result in forfeiture of one session from your package.',
                      highlight: false,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-4 rounded-2xl"
                      style={{
                        background: item.highlight ? 'rgba(212,175,55,0.08)' : 'rgba(255,255,255,0.72)',
                        border: item.highlight ? '1px solid rgba(212,175,55,0.25)' : '1px solid rgba(233,221,209,0.9)',
                      }}
                    >
                      <strong className="block mb-1.5" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', color: '#2C2C2C' }}>
                        {item.label}
                      </strong>
                      <span className="text-xs" style={{ color: '#7a6f66' }}>{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card on File */}
            <div
              className="rounded-3xl p-8"
              style={{ background: 'rgba(255,250,245,0.88)', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 20px 60px rgba(90,66,44,0.08)' }}
            >
              <h2 className="mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400 }}>
                Credit Card Requirement
              </h2>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#5a5148' }}>
                A valid credit or debit card is required to hold all appointments. By booking an appointment, you authorize Slynn Wellness to charge the applicable cancellation or no-show fee to the card on file in accordance with this policy. You will be notified by email or text prior to any charge being processed.
              </p>
            </div>

            {/* Emergencies */}
            <div
              className="rounded-3xl p-8"
              style={{ background: 'rgba(255,250,245,0.88)', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 20px 60px rgba(90,66,44,0.08)' }}
            >
              <h2 className="mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400 }}>
                Emergencies &amp; Extenuating Circumstances
              </h2>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#5a5148' }}>
                We understand that life happens. Cancellation fees may be waived at our sole discretion for documented medical emergencies or other serious extenuating circumstances. Please contact us as soon as possible at{' '}
                <a href={`tel:${settings.phone.replace(/[^+\d]/g, '')}`} className="text-[#D4AF37] hover:underline">{settings.phone}</a>
                {' '}or{' '}
                <a href={`mailto:${settings.email}`} className="text-[#D4AF37] hover:underline">{settings.email}</a>.
              </p>
            </div>

            {/* Late Arrivals */}
            <div
              className="rounded-3xl p-8"
              style={{ background: 'rgba(255,250,245,0.88)', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 20px 60px rgba(90,66,44,0.08)' }}
            >
              <h2 className="mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400 }}>
                Late Arrivals
              </h2>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#5a5148' }}>
                Please arrive on time for your scheduled appointment. Arriving more than <strong style={{ color: '#2C2C2C' }}>15 minutes late</strong> may result in a shortened treatment time or, at our discretion, rescheduling of your appointment. The full service fee may still apply. Late arrivals will not result in extended appointment times, as this would affect other patients.
              </p>
            </div>

            {/* Agreement */}
            <div
              className="rounded-3xl p-8"
              style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.2)', boxShadow: '0 20px 60px rgba(90,66,44,0.06)' }}
            >
              <h2 className="mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400 }}>
                Acknowledgement
              </h2>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#5a5148' }}>
                By booking an appointment with Slynn Wellness — whether online, by phone, or in person — you acknowledge that you have read, understood, and agree to this Appointment &amp; Cancellation Policy. This policy constitutes a binding agreement between you and Slynn Wellness and is governed by the laws of the State of California.
              </p>
            </div>

            {/* Contact */}
            <div
              className="rounded-3xl p-8 text-center"
              style={{ background: 'rgba(255,250,245,0.88)', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 20px 60px rgba(90,66,44,0.08)' }}
            >
              <h2 className="mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400 }}>
                Questions?
              </h2>
              <p className="text-sm mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>
                We are always happy to clarify our policies. Reach us at:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`tel:${settings.phone.replace(/[^+\d]/g, '')}`}
                  className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all hover:-translate-y-0.5 text-white"
                  style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C6A050 100%)', boxShadow: '0 10px 30px rgba(212,175,55,0.25)', fontFamily: 'Montserrat, sans-serif' }}
                >
                  {settings.phone}
                </a>
                <a
                  href={`mailto:${settings.email}`}
                  className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
                  style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(233,221,209,0.9)', color: '#2C2C2C', fontFamily: 'Montserrat, sans-serif' }}
                >
                  {settings.email}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
