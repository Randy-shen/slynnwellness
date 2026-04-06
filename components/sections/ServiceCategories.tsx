'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const categories = [
  {
    title: 'Medical Aesthetic',
    href: '/medical-aesthetic',
    gradient: 'linear-gradient(135deg, #F7E7CE 0%, #D4AF37 50%, #8B7355 100%)',
    services: ['Botox & Dysport', 'Dermal Fillers', 'Sculptra', 'Kybella'],
    description: 'Transform your appearance with expert injectable treatments that deliver natural, beautiful results.',
    bookHref: 'https://booking.aestheticrecord.com/slynn-wellness',
  },
  {
    title: 'Wellness',
    href: '/wellness',
    gradient: 'linear-gradient(135deg, #FDF8F3 0%, #F5E1DA 50%, #B8A99A 100%)',
    services: ['IV Vitamin Therapy', 'Medical Weight Loss', 'Hormone Replacement', 'Vitamin Injections'],
    description: 'Optimize your health from within through physician-supervised wellness and longevity programs.',
    bookHref: 'https://booking.aestheticrecord.com/slynn-wellness',
  },
  {
    title: 'Skin & Scalp Care',
    href: '/skin-scalp-care',
    gradient: 'linear-gradient(135deg, #F5E1DA 0%, #F7E7CE 50%, #D4AF37 100%)',
    services: ['HydraFacial', 'Microneedling', 'Chemical Peels', 'PRP Hair Restoration'],
    description: 'Reveal your most radiant skin with advanced clinical treatments tailored to your unique needs.',
    bookHref: 'https://booking.aestheticrecord.com/slynn-wellness',
  },
]

export default function ServiceCategories() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFFAF5]">
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
            Our Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Curated for Your Wellness
          </h2>
          <div className="mt-4 w-16 h-px bg-[#D4AF37] mx-auto" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-[#D4AF37]/30"
            >
              {/* Image Placeholder */}
              <div
                className="h-52 w-full"
                style={{ background: cat.gradient }}
              >
                <div className="h-full flex items-center justify-center">
                  <h3
                    className="text-2xl font-light text-white/80 tracking-wide"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <Link href={cat.href}>
                  <h3
                    className="text-2xl font-light text-[#2C2C2C] mb-2 group-hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {cat.title}
                  </h3>
                </Link>
                <p className="text-sm text-[#8B7355] mb-4 leading-relaxed"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {cat.description}
                </p>

                <ul className="space-y-1.5 mb-6">
                  {cat.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-2 text-xs text-[#B8A99A]"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#D4AF37] flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>

                <a
                  href={cat.bookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 bg-[#D4AF37] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#B8960A] transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
