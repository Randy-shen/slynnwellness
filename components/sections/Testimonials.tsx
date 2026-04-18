'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    service: 'Botox & Dysport',
    rating: 5,
    content: 'Absolutely love Slynn Wellness! The staff is incredibly knowledgeable and the results from my Botox treatment were natural and beautiful. This is now my go-to spa in Pasadena.',
  },
  {
    name: 'Jennifer L.',
    service: 'HydraFacial',
    rating: 5,
    content: 'The HydraFacial was life-changing for my skin. I walked out glowing! The ambiance is so luxurious and peaceful. Highly recommend to anyone looking for quality skincare.',
  },
  {
    name: 'Michelle T.',
    service: 'Medical Weight Loss',
    rating: 5,
    content: "I've been doing the Medical Weight Loss program for 3 months and have lost 22 pounds. The team is supportive, professional, and truly invested in my success.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFAF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Client Stories
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            What Our Clients Say
          </h2>
          <div className="mt-4 w-16 h-px bg-[#D4AF37] mx-auto" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#FDF8F3] p-8 relative"
            >
              {/* Gold Quote Mark */}
              <span
                className="absolute top-4 right-6 text-6xl text-[#D4AF37] leading-none opacity-40"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-[#8B7355] leading-relaxed mb-6 relative z-10"
                style={{ fontFamily: 'Montserrat, sans-serif' }}>
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-medium text-[#2C2C2C]"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.125rem' }}>
                  {t.name}
                </p>
                <p className="text-xs text-[#B8A99A] mt-0.5"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {t.service}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
