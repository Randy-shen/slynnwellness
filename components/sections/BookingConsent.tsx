'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BookingConsent({ bookingUrl }: { bookingUrl: string }) {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="space-y-6">
      {/* Policy summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { label: '48+ Hours Notice', desc: 'Cancel or reschedule at no charge.', icon: '✓' },
          { label: 'Less than 48 Hours', desc: '$50 late cancellation fee charged to card on file.', icon: '!' },
          { label: 'No-Show', desc: '$75 fee charged to card on file for missed appointments.', icon: '!' },
          { label: 'Prepaid Packages', desc: 'No-shows forfeit one session from your package.', icon: '!' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex gap-3 p-4 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(233,221,209,0.9)' }}
          >
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
              style={{
                background: item.icon === '✓' ? 'rgba(212,175,55,0.15)' : 'rgba(180,100,60,0.10)',
                color: item.icon === '✓' ? '#C6A050' : '#A0522D',
              }}
            >
              {item.icon}
            </span>
            <div>
              <strong className="block text-sm mb-0.5" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#2C2C2C' }}>
                {item.label}
              </strong>
              <span className="text-xs" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>{item.desc}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Late arrival note */}
      <p className="text-xs leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#9a8f86' }}>
        Arriving more than 15 minutes late may result in a shortened treatment or rescheduling. A valid credit card is required to hold all appointments.
      </p>

      {/* Checkbox agreement */}
      <label
        className="flex items-start gap-3 cursor-pointer p-5 rounded-2xl transition-colors"
        style={{
          background: agreed ? 'rgba(212,175,55,0.07)' : 'rgba(255,255,255,0.72)',
          border: agreed ? '1px solid rgba(212,175,55,0.35)' : '1px solid rgba(233,221,209,0.9)',
        }}
      >
        <div className="relative flex-shrink-0 mt-0.5">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="sr-only"
          />
          <div
            className="w-5 h-5 rounded flex items-center justify-center transition-all"
            style={{
              background: agreed ? 'linear-gradient(135deg, #D4AF37 0%, #C6A050 100%)' : 'rgba(255,255,255,0.9)',
              border: agreed ? 'none' : '1.5px solid rgba(184,169,154,0.8)',
              boxShadow: agreed ? '0 4px 12px rgba(212,175,55,0.3)' : 'none',
            }}
          >
            {agreed && (
              <svg width="11" height="8" viewBox="0 0 11 8" fill="none">
                <path d="M1 4L4 7L10 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        </div>
        <span className="text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#5a5148' }}>
          I have read and agree to the{' '}
          <Link href="/policies" className="underline hover:text-[#D4AF37] transition-colors" style={{ color: '#8B6340' }}>
            Appointment &amp; Cancellation Policy
          </Link>
          . I authorize Slynn Wellness to charge applicable fees to my card on file.
        </span>
      </label>

      {/* Proceed button */}
      <a
        href={agreed ? bookingUrl : undefined}
        target="_blank"
        rel="noopener noreferrer"
        onClick={!agreed ? (e) => e.preventDefault() : undefined}
        className="block w-full text-center py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          background: agreed
            ? 'linear-gradient(135deg, #D4AF37 0%, #C6A050 100%)'
            : 'rgba(220,210,200,0.6)',
          color: agreed ? 'white' : 'rgba(150,135,120,0.8)',
          boxShadow: agreed ? '0 10px 30px rgba(212,175,55,0.30)' : 'none',
          cursor: agreed ? 'pointer' : 'not-allowed',
          transform: agreed ? undefined : 'none',
        }}
      >
        {agreed ? 'Proceed to Booking →' : 'Please agree to continue'}
      </a>
    </div>
  )
}
