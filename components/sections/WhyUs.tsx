'use client'

import { motion } from 'framer-motion'
import { Heart, Award, Star, TrendingUp } from 'lucide-react'

const differentiators = [
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Every treatment plan is thoughtfully crafted for your unique anatomy, goals, and lifestyle. We take the time to truly understand you.',
  },
  {
    icon: Award,
    title: 'Expert Providers',
    description: 'Our team of board-certified physicians and licensed medical aestheticians bring years of specialized training and artistry to every service.',
  },
  {
    icon: Star,
    title: 'Luxury Experience',
    description: 'From your first consultation to post-treatment follow-up, enjoy a serene, sophisticated environment designed for your comfort.',
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven',
    description: 'We use only FDA-approved treatments and evidence-based protocols to ensure you achieve safe, effective, and lasting results.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#FDF8F3]">
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
            The Slynn Difference
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Why Choose Slynn Wellness
          </h2>
          <div className="mt-4 w-16 h-px bg-[#D4AF37] mx-auto" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-sm leading-relaxed text-[#8B7355] max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            At Slynn Wellness Medical Spa, our strong medical team provides the expert clinical guidance and technical support behind every treatment we offer. We carefully select the latest aesthetic technologies, advanced devices, and effective medical-grade products for you, with strict attention to quality, safety, and results. From technology and treatment planning to product selection and competitive pricing, we are committed to delivering the best combination of innovation, value, and personalized care to meet each client&apos;s unique needs.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F7E7CE] mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
                  <Icon className="h-7 w-7 text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3
                  className="text-xl font-medium text-[#2C2C2C] mb-3"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[#8B7355] leading-relaxed"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
