import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Slynn Wellness — how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-16"
        style={{ background: 'linear-gradient(135deg, #FDF8F3 0%, #F5E1DA 50%, #D4AF37 100%)' }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1
            className="text-4xl lg:text-5xl font-light text-white"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/70 text-xs mt-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Last updated: January 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-[#FFFAF5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-sm max-w-none" style={{ fontFamily: 'Montserrat, sans-serif', color: '#2C2C2C' }}>

            <p className="text-sm text-[#8B7355] leading-relaxed mb-8">
              Slynn Wellness ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            {[
              {
                title: '1. Information We Collect',
                content: `We may collect the following types of information:

Personal Information: Name, email address, phone number, and other contact details you provide through our contact form or newsletter signup.

Health Information: Information you provide related to wellness consultations or service inquiries. This information is handled with the utmost confidentiality.

Usage Data: Information about how you use our website, including pages visited and time spent on the site.`,
              },
              {
                title: '2. How We Use Your Information',
                content: `We use the information we collect to:
• Respond to your inquiries and provide requested services
• Send appointment reminders and follow-up communications
• Send newsletters and promotional emails (only with your consent)
• Improve our website and services
• Comply with legal obligations`,
              },
              {
                title: '3. How We Share Your Information',
                content: `We do not sell, trade, or rent your personal information to third parties. We may share information with:
• Service providers who assist in operating our website (e.g., email services)
• Healthcare providers involved in your care
• Legal authorities when required by law`,
              },
              {
                title: '4. Data Security',
                content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.`,
              },
              {
                title: '5. Cookies',
                content: `Our website may use cookies to enhance your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you do not accept cookies, some portions of our website may not function properly.`,
              },
              {
                title: '6. Your Rights',
                content: `You have the right to:
• Access the personal information we hold about you
• Request correction of inaccurate information
• Request deletion of your personal information
• Opt out of marketing communications at any time`,
              },
              {
                title: '7. Contact Us',
                content: `If you have any questions about this Privacy Policy, please contact us at:

Slynn Wellness
info@slynnwellness.com
Pasadena, CA`,
              },
            ].map((section) => (
              <div key={section.title} className="mb-8">
                <h2
                  className="text-xl font-light text-[#2C2C2C] mb-3"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem' }}
                >
                  {section.title}
                </h2>
                <div className="w-8 h-px bg-[#D4AF37] mb-4" />
                <p className="text-sm text-[#8B7355] leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="mt-12 pt-8 border-t border-[#F0E8DF]">
              <Link
                href="/"
                className="text-xs text-[#D4AF37] hover:text-[#B8960A] transition-colors"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
