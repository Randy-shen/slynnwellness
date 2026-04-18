import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Slynn Wellness — the terms and conditions governing use of our website and services.',
}

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-white/70 text-xs mt-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Last updated: January 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-[#FFFAF5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ fontFamily: 'Montserrat, sans-serif', color: '#2C2C2C' }}>

            <p className="text-sm text-[#8B7355] leading-relaxed mb-8">
              Please read these Terms of Service carefully before using the Slynn Wellness website. By accessing or using our website, you agree to be bound by these terms.
            </p>

            {[
              {
                title: '1. Use of Website',
                content: `The content on this website is for general informational purposes only. It is not intended as medical advice and should not be used as a substitute for professional medical consultation, diagnosis, or treatment.

You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.`,
              },
              {
                title: '2. Medical Disclaimer',
                content: `The information provided on this website, including descriptions of treatments and services, is for informational purposes only. Individual results may vary. All medical and aesthetic treatments carry risks and should be discussed with a qualified healthcare provider.

Slynn Wellness providers are licensed medical professionals. Services are provided in compliance with applicable state and federal regulations.`,
              },
              {
                title: '3. Appointment & Cancellation Policy',
                content: `Appointments may be scheduled through our online booking system. We request at least 24 hours notice for cancellations or rescheduling.

Late cancellations or no-shows may be subject to a cancellation fee. Please contact us directly if you have questions about our cancellation policy.`,
              },
              {
                title: '4. Intellectual Property',
                content: `All content on this website, including text, images, graphics, and logos, is the property of Slynn Wellness and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.`,
              },
              {
                title: '5. Limitation of Liability',
                content: `Slynn Wellness shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services, to the fullest extent permitted by law.`,
              },
              {
                title: '6. Third-Party Links',
                content: `Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
              },
              {
                title: '7. Changes to Terms',
                content: `We reserve the right to modify these Terms of Service at any time. Changes will be effective upon posting to the website. Your continued use of the website after changes are posted constitutes your acceptance of the updated terms.`,
              },
              {
                title: '8. Contact Us',
                content: `If you have any questions about these Terms of Service, please contact us at:

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
