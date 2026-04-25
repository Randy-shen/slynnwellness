import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.slynnwellness.com"),
  title: {
    default: "Slynn Wellness | Luxury Medical Spa in Pasadena, CA",
    template: "%s | Slynn Wellness",
  },
  description:
    "Luxury medical spa in Pasadena, CA. Botox, Restylane, Juvederm, Sculptra, HydraFacial, microneedling, IV therapy, medical weight loss, and more — performed by licensed RNs. Serving Pasadena, San Marino, Arcadia, Glendale, and the greater Los Angeles area.",
  keywords: [
    "medical spa Pasadena",
    "med spa Pasadena CA",
    "luxury medical spa Los Angeles",
    "Botox Pasadena",
    "Xeomin Pasadena",
    "Restylane Pasadena",
    "Juvederm Pasadena",
    "Sculptra Pasadena",
    "Skinvive Pasadena",
    "dermal fillers Pasadena",
    "IV therapy Pasadena",
    "NAD infusion Pasadena",
    "HydraFacial Pasadena",
    "Rejuran Pasadena",
    "Candela microneedling Pasadena",
    "medical weight loss Pasadena",
    "scalp treatment Pasadena",
    "anti-aging facial Pasadena",
    "Slynn Wellness",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.slynnwellness.com",
    siteName: "Slynn Wellness",
    title: "Slynn Wellness | Luxury Medical Spa in Pasadena, CA",
    description:
      "Experience the finest in medical aesthetics and wellness at Slynn Wellness in Pasadena, CA. Botox, fillers, IV therapy, weight loss, facials and more.",
    images: [
      {
        url: "https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Slynn Wellness — Luxury Medical Spa in Pasadena, CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slynn Wellness | Luxury Medical Spa in Pasadena, CA",
    description:
      "Experience the finest in medical aesthetics and wellness at Slynn Wellness in Pasadena, CA.",
    images: [
      "https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/logo.png",
    ],
  },
  alternates: {
    canonical: "https://www.slynnwellness.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalSpa",
  "@id": "https://www.slynnwellness.com/#medicalspa",
  name: "Slynn Wellness",
  legalName: "Slynn Wellness",
  url: "https://www.slynnwellness.com",
  logo: "https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/logo.png",
  image: "https://bcpbkzcpkxvvuasgpbgs.supabase.co/storage/v1/object/public/media/images/logo.png",
  telephone: "+1-626-421-6955",
  email: "info@slynnwellness.com",
  description:
    "Luxury medical spa in Pasadena, CA offering Botox, dermal fillers, IV therapy, medical weight loss, HydraFacial, microneedling, and other medical aesthetic and wellness services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "903 E Del Mar Blvd",
    addressLocality: "Pasadena",
    addressRegion: "CA",
    postalCode: "91106",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.139,
    longitude: -118.13,
  },
  hasMap:
    "https://www.google.com/maps/search/?api=1&query=Slynn+Wellness+903+E+Del+Mar+Blvd+Pasadena+CA",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 34.139,
      longitude: -118.13,
    },
    geoRadius: "80000",
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
  sameAs: [
    "https://www.google.com/search?kgmid=/g/11z161pzyb",
  ],
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
