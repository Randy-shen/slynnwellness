import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop Slynn Wellness Products & Memberships',
  description:
    'Shop premium skincare, wellness products, and treatment packages from Slynn Wellness in Pasadena, CA. Our online shop is launching soon — sign up to be notified.',
  alternates: { canonical: '/shop' },
}

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
