'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import { SiteSettings, defaultSettings } from '@/lib/supabase/settings-types'

interface LocationPreviewProps {
  settings?: SiteSettings
}

export default function LocationPreview({ settings = defaultSettings }: LocationPreviewProps) {
  const fullAddress = `${settings.address}, ${settings.city}, ${settings.state} ${settings.zip}`
  const googleMapsUrl = settings.google_maps_url || ''

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
            Find Us
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-[#2C2C2C]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Visit Us
          </h2>
          <div className="mt-4 w-16 h-px bg-[#D4AF37] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-sm overflow-hidden">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-80 lg:h-full min-h-[400px] bg-[#E8E0D8] relative overflow-hidden"
          >
            {googleMapsUrl ? (
              <iframe
                src={googleMapsUrl}
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Slynn Wellness location map"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-[#E8E0D8] p-8">
                <MapPin className="h-16 w-16 text-[#D4AF37] mb-4" />
                <p className="text-center font-light text-[#8B7355] text-lg mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {settings.address}
                </p>
                <p className="text-center font-light text-[#8B7355] text-lg"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {settings.city}, {settings.state} {settings.zip}
                </p>
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 lg:p-14 flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F7E7CE] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="font-medium text-[#2C2C2C] mb-1"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem' }}>
                    Address
                  </p>
                  <p className="text-sm text-[#8B7355]">{settings.address}</p>
                  <p className="text-sm text-[#8B7355]">{settings.city}, {settings.state} {settings.zip}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F7E7CE] flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="font-medium text-[#2C2C2C] mb-1"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem' }}>
                    Phone
                  </p>
                  <a
                    href={`tel:${settings.phone.replace(/[^+\d]/g, '')}`}
                    className="text-sm text-[#8B7355] hover:text-[#D4AF37] transition-colors"
                  >
                    {settings.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F7E7CE] flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="font-medium text-[#2C2C2C] mb-1"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem' }}>
                    Email
                  </p>
                  <a
                    href={`mailto:${settings.email}`}
                    className="text-sm text-[#8B7355] hover:text-[#D4AF37] transition-colors"
                  >
                    {settings.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#F7E7CE] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="font-medium text-[#2C2C2C] mb-1"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem' }}>
                    Hours
                  </p>
                  <div className="text-sm text-[#8B7355] space-y-0.5">
                    <p>{settings.hours_weekday}</p>
                    <p>{settings.hours_saturday}</p>
                    <p>{settings.hours_sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={
                googleMapsUrl ||
                `https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] hover:text-[#B8960A] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Get Directions
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
