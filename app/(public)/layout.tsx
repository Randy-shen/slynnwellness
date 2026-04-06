import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import NewsletterPopup from '@/components/sections/NewsletterPopup'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <NewsletterPopup />
    </>
  )
}
