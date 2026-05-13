import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getSiteSettings } from '@/lib/supabase/settings'
import BookingConsent from '@/components/sections/BookingConsent'

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description: 'Book your appointment at Slynn Wellness in Pasadena, CA. Please review and agree to our cancellation policy before proceeding.',
  alternates: { canonical: '/book' },
}

export default async function BookPage() {
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
        <div className="max-w-xl mx-auto px-4 sm:px-6">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-[#8B7355] hover:text-[#D4AF37] transition-colors mb-10"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(233,221,209,0.9)', color: '#8B6340', fontFamily: 'Montserrat, sans-serif' }}
            >
              Slynn Wellness · Pasadena, CA
            </div>
            <h1
              className="font-light mb-3 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.01em' }}
            >
              Book an Appointment
            </h1>
            <p className="text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>
              Before proceeding to our booking portal, please review and acknowledge our cancellation policy below.
            </p>
          </div>

          {/* Consent card */}
          <div
            className="rounded-3xl p-8"
            style={{ background: 'rgba(255,250,245,0.88)', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 20px 60px rgba(90,66,44,0.08)' }}
          >
            <h2 className="mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 400 }}>
              Cancellation Policy
            </h2>
            <p className="text-xs mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#9a8f86' }}>
              Our treatments are performed by a licensed Registered Nurse scheduled exclusively for you.
            </p>

            <BookingConsent bookingUrl={settings.booking_url} />
          </div>

        </div>
      </div>
    </div>
  )
}
