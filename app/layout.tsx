import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Slynn Wellness | Luxury Medical Spa in Pasadena, CA",
    template: "%s | Slynn Wellness",
  },
  description:
    "Slynn Wellness is a luxury medical spa in Pasadena, CA offering Botox, dermal fillers, IV therapy, medical weight loss, HydraFacial, and more. Book your consultation today.",
  keywords: [
    "medical spa Pasadena",
    "luxury spa Pasadena CA",
    "Botox Pasadena",
    "dermal fillers Pasadena",
    "IV therapy Pasadena",
    "HydraFacial Pasadena",
    "medical weight loss Pasadena",
    "hormone replacement therapy",
    "Slynn Wellness",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.slynnwellness.com",
    siteName: "Slynn Wellness",
    title: "Slynn Wellness | Luxury Medical Spa in Pasadena, CA",
    description:
      "Experience the finest in medical aesthetics and wellness at Slynn Wellness in Pasadena, CA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slynn Wellness | Luxury Medical Spa in Pasadena, CA",
    description:
      "Experience the finest in medical aesthetics and wellness at Slynn Wellness in Pasadena, CA.",
  },
  alternates: {
    canonical: "https://www.slynnwellness.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalSpa",
  name: "Slynn Wellness",
  url: "https://www.slynnwellness.com",
  telephone: "(626) 555-0100",
  email: "info@slynnwellness.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 S Lake Ave, Suite 200",
    addressLocality: "Pasadena",
    addressRegion: "CA",
    postalCode: "91101",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.1478,
    longitude: -118.1445,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
