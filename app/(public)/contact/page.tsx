import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'
import { getSiteSettings } from '@/lib/supabase/settings'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Slynn Wellness in Pasadena, CA. Book an appointment, ask questions, or find our location. We\'d love to hear from you.',
}

export default async function ContactPage() {
  const settings = await getSiteSettings()

  const fullAddress = `${settings.address}, ${settings.city}, ${settings.state} ${settings.zip}`

  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-16"
        style={{
          background: 'linear-gradient(135deg, #FDF8F3 0%, #F5E1DA 50%, #D4AF37 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p
            className="text-xs font-medium tracking-[0.3em] uppercase text-white/80 mb-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            We&apos;d Love to Hear From You
          </p>
          <h1
            className="text-5xl lg:text-6xl font-light text-white mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Contact Us
          </h1>
          <div className="w-16 h-px bg-white/60 mx-auto" />
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-[#FFFAF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <p
                className="text-xs font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Send a Message
              </p>
              <h2
                className="text-3xl font-light text-[#2C2C2C] mb-8"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Get in Touch
              </h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div>
              <p
                className="text-xs font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Find Us
              </p>
              <h2
                className="text-3xl font-light text-[#2C2C2C] mb-8"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Visit {settings.business_name}
              </h2>

              {/* Map */}
              <div className="mb-8 h-64 bg-[#E8E0D8] overflow-hidden">
                {settings.google_maps_url ? (
                  <iframe
                    src={settings.google_maps_url}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${settings.business_name} location map`}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <MapPin className="h-10 w-10 text-[#D4AF37] mb-2" />
                    <p className="text-sm text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {fullAddress}
                    </p>
                  </div>
                )}
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F7E7CE] flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2C2C2C] mb-0.5" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}>
                      Address
                    </p>
                    <p className="text-xs text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F7E7CE] flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#2C2C2C] mb-0.5" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}>
                      Phone
                    </p>
                    <a
                      href={`tel:${settings.phone.replace(/\D/g, '')}`}
                      className="text-xs text-[#8B7355] hover:text-[#D4AF37] transition-colors"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
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
                    <p className="font-medium text-[#2C2C2C] mb-0.5" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}>
                      Email
                    </p>
                    <a
                      href={`mailto:${settings.email}`}
                      className="text-xs text-[#8B7355] hover:text-[#D4AF37] transition-colors"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
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
                    <p className="font-medium text-[#2C2C2C] mb-0.5" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}>
                      Hours
                    </p>
                    <div className="text-xs text-[#8B7355] space-y-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      <p>{settings.hours_weekday}</p>
                      <p>{settings.hours_saturday}</p>
                      <p>{settings.hours_sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
