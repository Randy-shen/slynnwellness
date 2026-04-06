import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Share2, Users } from 'lucide-react'
import { getSiteSettings } from '@/lib/supabase/settings'

export default async function Footer() {
  const settings = await getSiteSettings()

  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div>
            <h3
              className="text-2xl font-light tracking-[0.2em] text-[#D4AF37] mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {settings.business_name.toUpperCase()}
            </h3>
            <p className="text-sm text-[#B8A99A] leading-relaxed mb-6">
              A luxury medical spa in {settings.city}, {settings.state} dedicated to helping you look and feel your best through personalized, results-driven treatments.
            </p>
            <div className="flex items-center gap-3">
              {settings.instagram_url && (
                <a
                  href={settings.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#B8A99A] rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                  aria-label="Instagram"
                >
                  <Share2 className="h-4 w-4" />
                </a>
              )}
              {settings.facebook_url && (
                <a
                  href={settings.facebook_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#B8A99A] rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                  aria-label="Facebook"
                >
                  <Users className="h-4 w-4" />
                </a>
              )}
              {/* Show placeholder social icons if none are configured */}
              {!settings.instagram_url && !settings.facebook_url && (
                <>
                  <a
                    href="#"
                    className="p-2 border border-[#B8A99A] rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                    aria-label="Instagram"
                  >
                    <Share2 className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 border border-[#B8A99A] rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
                    aria-label="Facebook"
                  >
                    <Users className="h-4 w-4" />
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4
              className="text-sm font-semibold tracking-widest uppercase text-[#D4AF37] mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Services
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Medical Aesthetic', href: '/medical-aesthetic' },
                { label: 'Wellness', href: '/wellness' },
                { label: 'Skin & Scalp Care', href: '/skin-scalp-care' },
                { label: 'IV Vitamin Therapy', href: '/services/iv-vitamin-therapy' },
                { label: 'Medical Weight Loss', href: '/services/medical-weight-loss' },
                { label: 'Botox & Dysport', href: '/services/botox-dysport' },
                { label: 'HydraFacial', href: '/services/hydrafacial' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#B8A99A] hover:text-[#D4AF37] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4
              className="text-sm font-semibold tracking-widest uppercase text-[#D4AF37] mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Procare Membership', href: '/membership' },
                { label: 'Price List', href: '/price-list' },
                { label: 'Shop', href: '/shop' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Book Appointment', href: settings.booking_url },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#B8A99A] hover:text-[#D4AF37] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              className="text-sm font-semibold tracking-widest uppercase text-[#D4AF37] mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <div className="text-sm text-[#B8A99A]">
                  <p>{settings.address}</p>
                  <p>{settings.city}, {settings.state} {settings.zip}</p>
                </div>
              </div>
              <a
                href={`tel:${settings.phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center gap-3 text-sm text-[#B8A99A] hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#D4AF37] flex-shrink-0" />
                {settings.phone}
              </a>
              <a
                href={`mailto:${settings.email}`}
                className="flex items-center gap-3 text-sm text-[#B8A99A] hover:text-[#D4AF37] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#D4AF37] flex-shrink-0" />
                {settings.email}
              </a>
              <div className="flex gap-3">
                <Clock className="h-4 w-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <div className="text-sm text-[#B8A99A]">
                  <p>{settings.hours_weekday}</p>
                  <p>{settings.hours_saturday}</p>
                  <p>{settings.hours_sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#B8A99A]">
            © {new Date().getFullYear()} {settings.business_name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-[#B8A99A] hover:text-[#D4AF37] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-[#B8A99A] hover:text-[#D4AF37] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
