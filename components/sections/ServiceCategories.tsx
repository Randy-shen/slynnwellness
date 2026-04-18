'use client'

import { motion } from 'framer-motion'

interface ServicesByCategory {
  medical: string[]
  wellness: string[]
  skin: string[]
}

interface ServiceCategoriesProps {
  bookingUrl: string
  servicesByCategory: ServicesByCategory
}

const categories = [
  {
    title: 'Medical Aesthetic',
    kicker: 'Injectables & Fillers',
    gradient: 'linear-gradient(135deg, #3D2B1F 0%, #6B4A2A 35%, #C49A6C 70%, #E8D5B8 100%)',
    description: 'Transform your appearance with expert injectable treatments that deliver natural, beautiful results.',
  },
  {
    title: 'Wellness',
    kicker: 'IV Therapy & Weight Loss',
    gradient: 'linear-gradient(135deg, #2C1F0E 0%, #5C3D1E 35%, #B8865A 70%, #E8D0B0 100%)',
    description: 'Optimize your health from within through physician-supervised wellness and longevity programs.',
  },
  {
    title: 'Skin & Scalp Care',
    kicker: 'Facials & Treatments',
    gradient: 'linear-gradient(135deg, #352010 0%, #6B4520 35%, #C4956A 70%, #EAD8C0 100%)',
    description: 'Reveal your most radiant skin with advanced clinical treatments tailored to your unique needs.',
  },
]

export default function ServiceCategories({ bookingUrl, servicesByCategory }: ServiceCategoriesProps) {
  const allCategories = [
    { ...categories[0], services: servicesByCategory.medical },
    { ...categories[1], services: servicesByCategory.wellness },
    { ...categories[2], services: servicesByCategory.skin },
  ]

  return (
    <section
      id="services"
      style={{
        padding: 'clamp(48px, 8vw, 96px) 0',
        background: 'linear-gradient(180deg, #FDF8F3 0%, #F5EDE3 50%, #FDF8F3 100%)',
      }}
    >
      <div style={{ width: 'min(calc(100% - 32px), 1220px)', margin: '0 auto' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#bca98a', marginBottom: '12px', fontWeight: 600 }}>
            Our Services
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 400, color: '#2f2b28', margin: '0 0 16px' }}>
            Curated for Your Wellness
          </h2>
          <div style={{ width: '48px', height: '1px', background: '#bca98a', margin: '0 auto' }} />
        </motion.div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '24px' }}>
          {allCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                background: 'rgba(255,250,242,0.90)',
                border: '1px solid rgba(212,175,55,0.15)',
                borderRadius: '28px',
                boxShadow: '0 24px 60px rgba(139,99,64,0.10)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Image/Gradient area */}
              <div
                style={{
                  height: '200px',
                  background: cat.gradient,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  position: 'relative',
                }}
              >
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                  {cat.kicker}
                </p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 400, color: 'white', margin: 0, letterSpacing: '0.05em' }}>
                  {cat.title}
                </h3>
                <div style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.6)' }} />
              </div>

              {/* Content */}
              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.88rem', color: '#5a534d', lineHeight: 1.7, marginBottom: '20px' }}>
                  {cat.description}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  {cat.services.map((service) => (
                    <li
                      key={service}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Montserrat, sans-serif', fontSize: '0.82rem', color: '#7a6f66' }}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'linear-gradient(135deg, #cbbba0, #bca98a)', flexShrink: 0 }} />
                      {service}
                    </li>
                  ))}
                </ul>

                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '12px 24px',
                    borderRadius: '999px',
                    background: 'linear-gradient(135deg, #cbbba0 0%, #bca98a 100%)',
                    color: '#2f2b28',
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    boxShadow: '0 8px 20px rgba(188,169,138,0.30)',
                    alignSelf: 'flex-start',
                  }}
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
