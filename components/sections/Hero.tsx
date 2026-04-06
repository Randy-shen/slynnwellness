'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { defaultSettings } from '@/lib/supabase/settings-types'

interface HeroProps {
  videoUrl?: string
  posterUrl?: string
  tagline?: string
  bookingUrl?: string
}

export default function Hero({
  videoUrl,
  posterUrl,
  tagline = 'Rejuvenate. Restore. Radiate.',
  bookingUrl = defaultSettings.booking_url,
}: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={posterUrl || undefined}
        aria-hidden="true"
      >
        {videoUrl && <source src={videoUrl} type="video/mp4" />}
      </video>

      {/* Animated Gradient Fallback (visible when no video) */}
      <div className="hero-gradient absolute inset-0 w-full h-full" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs font-medium tracking-[0.4em] uppercase text-[#F7E7CE] mb-4"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Luxury Medical Spa · Pasadena, CA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-[0.15em] text-white mb-4"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          SLYNN WELLNESS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl font-light tracking-[0.2em] text-white/90 mb-10"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/#services"
            className="px-8 py-3.5 border border-white text-white text-xs font-medium tracking-wider uppercase hover:bg-white hover:text-[#2C2C2C] transition-all duration-300 min-w-[180px] text-center"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Explore Services
          </Link>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-[#D4AF37] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#B8960A] transition-all duration-300 min-w-[180px] text-center"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Book Appointment
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-6 w-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
