import { getSiteSettings } from '@/lib/supabase/settings'
import { getServices } from '@/lib/supabase/admin'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NewsletterPopup from '@/components/sections/NewsletterPopup'

// Revalidate the cached HTML hourly. Public pages have no per-user data, so
// they can be served from CDN/edge cache. This makes Googlebot crawl
// aggressively (cache-control: public) instead of treating every request as
// dynamic per-user content.
export const revalidate = 3600

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [settings, medicalServices, wellnessServices, skinServices] = await Promise.all([
    getSiteSettings(),
    getServices('medical-aesthetic'),
    getServices('wellness'),
    getServices('skin-scalp-care'),
  ])

  const navServices = {
    medical: medicalServices.filter(s => s.is_visible).slice(0, 6).map(s => ({ label: s.name, href: `/services/${s.slug}` })),
    wellness: wellnessServices.filter(s => s.is_visible).slice(0, 6).map(s => ({ label: s.name, href: `/services/${s.slug}` })),
    skin: skinServices.filter(s => s.is_visible).slice(0, 6).map(s => ({ label: s.name, href: `/services/${s.slug}` })),
  }

  return (
    <>
      <Header
        bookingUrl="/book"
        navServices={navServices}
        address={`${settings.address}, ${settings.city}, ${settings.state} ${settings.zip}`}
        phone={settings.phone}
        email={settings.email}
      />
      <main className="flex-1">{children}</main>
      <Footer />
      <NewsletterPopup
        enabled={settings.popup_enabled}
        headline={settings.popup_headline}
        description={settings.popup_description}
      />
    </>
  )
}
