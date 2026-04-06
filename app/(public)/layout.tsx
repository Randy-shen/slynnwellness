import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NewsletterPopup from '@/components/sections/NewsletterPopup'
import { getSiteSettings } from '@/lib/supabase/settings'

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSiteSettings()

  return (
    <>
      <Header bookingUrl={settings.booking_url} />
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
