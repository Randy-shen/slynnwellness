import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { getSiteSettings } from '@/lib/supabase/settings'

function InstagramIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <path fill="url(#ig-gradient)" fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1877F2" fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

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
                <span>SLYNN</span>
              <span className="inline-block w-px h-5 bg-[#D4AF37] opacity-80 mx-2 align-middle" />
              <span>WELLNESS</span>
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
                  className="p-2 border border-[#B8A99A] rounded-full hover:border-white transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              )}
              {settings.facebook_url && (
                <a
                  href={settings.facebook_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#B8A99A] rounded-full hover:border-white transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
              )}
              {settings.google_business_url && (
                <a
                  href={settings.google_business_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#B8A99A] rounded-full hover:border-white transition-colors"
                  aria-label="Google Business"
                >
                  <GoogleIcon />
                </a>
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
