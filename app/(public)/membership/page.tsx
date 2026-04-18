import type { Metadata } from 'next'
import { Check } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { getSiteSettings } from '@/lib/supabase/settings'

export const metadata: Metadata = {
  title: 'ProCare Membership',
  description:
    'Join the Slynn Wellness ProCare Membership for exclusive benefits, priority booking, and savings on all treatments. Choose from Silver, Gold, or Platinum tiers.',
}

const tiers = [
  {
    name: 'ProSkin',
    price: '$99',
    period: '/month',
    description: 'Elevate your skin health with monthly treatments and exclusive savings.',
    color: '#B8A99A',
    popular: false,
    freeLabel: 'Choose One Free Each Month:',
    freeOptions: [
      'Vitamin Shot',
      'Anti-Aging Facial Treatment',
    ],
    perksLabel: 'Member Perks:',
    perks: [
      '10% off Candela Matrix Pro Microneedling',
      '10% off Sculptra',
      '10% off Juvederm Fillers (all areas)',
    ],
  },
  {
    name: 'ProWellness',
    price: '$179',
    period: '/month',
    description: 'Our most comprehensive membership for total mind and body wellness.',
    color: '#D4AF37',
    popular: true,
    freeLabel: 'Choose One Free Each Month:',
    freeOptions: [
      'IV Therapy (excluding NAD+)',
      'Signature HydraFacial Treatment',
      'Scalp Treatment',
      'Sublime Treatment',
    ],
    perksLabel: 'Member Perks:',
    perks: [
      '10% off Candela Matrix Pro Microneedling',
      '10% off Sculptra',
      '10% off Juvederm Fillers (all areas)',
    ],
  },
]

const faqs = [
  {
    question: 'Can I cancel my membership at any time?',
    answer:
      'Yes, you can cancel your membership with 30 days written notice. There are no long-term contracts. Any unused treatments for the current month will remain valid for 30 days after cancellation.',
  },
  {
    question: 'Can I share my membership benefits with a family member?',
    answer:
      'Memberships are individual and non-transferable. However, we do offer a family discount program — ask our team for details when you join.',
  },
  {
    question: 'Do unused treatments roll over?',
    answer:
      'Monthly treatments do not roll over to the next month. However, unused treatments have a 30-day grace period after the billing cycle ends.',
  },
  {
    question: 'When does my membership start?',
    answer:
      'Your membership begins on the date of enrollment and renews on the same date each month. You\'ll have immediate access to all membership benefits.',
  },
  {
    question: 'Can I upgrade or downgrade my tier?',
    answer:
      'Absolutely! You can change your membership tier at any time. Upgrades take effect immediately, and downgrades take effect on your next billing cycle.',
  },
  {
    question: 'Are there any additional fees?',
    answer:
      'Your membership covers the listed benefits. Additional services are available at the discounted member rate. Some premium add-ons may have additional costs.',
  },
]

export default async function MembershipPage() {
  const settings = await getSiteSettings()
  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-16"
        style={{
          background: 'linear-gradient(135deg, #2C2C2C 0%, #8B7355 50%, #D4AF37 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p
            className="text-xs font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-3"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Exclusive Membership
          </p>
          <h1
            className="text-5xl lg:text-6xl font-light text-white mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            ProCare Membership
          </h1>
          <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />
          <p
            className="max-w-2xl mx-auto text-white/80 text-sm leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Unlock exclusive benefits, priority access, and significant savings with our ProCare Membership program. Choose the tier that fits your wellness journey.
          </p>
        </div>
      </div>

      {/* Membership Tiers */}
      <section className="py-20 bg-[#FFFAF5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white border-2 ${
                  tier.popular ? 'border-[#D4AF37] shadow-xl' : 'border-[#F0E8DF]'
                } p-8 flex flex-col`}
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D4AF37] text-white text-xs font-medium tracking-wider uppercase"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3
                    className="text-3xl font-medium mb-2"
                    style={{ fontFamily: 'Cormorant Garamond, serif', color: tier.color }}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-light text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {tier.price}
                    </span>
                    <span className="text-sm text-[#B8A99A]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-xs text-[#8B7355] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {tier.description}
                  </p>
                </div>

                {/* Free options */}
                <div className="mb-5">
                  <p className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {tier.freeLabel}
                  </p>
                  <ul className="space-y-2">
                    {tier.freeOptions.map((option) => (
                      <li key={option} className="flex items-start gap-3">
                        <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#D4AF37]" />
                        <span className="text-xs text-[#2C2C2C] font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {option}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#F0E8DF] mb-5" />

                {/* Perks */}
                <div className="flex-1 mb-8">
                  <p className="text-xs font-semibold tracking-wider uppercase text-[#8B7355] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {tier.perksLabel}
                  </p>
                  <ul className="space-y-2">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3">
                        <Check className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: tier.color }} />
                        <span className="text-xs text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 text-center text-xs font-medium tracking-wider uppercase transition-colors ${
                    tier.popular
                      ? 'bg-[#D4AF37] text-white hover:bg-[#B8960A]'
                      : 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white'
                  }`}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Join {tier.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#FDF8F3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-light text-[#2C2C2C]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Frequently Asked Questions
            </h2>
            <div className="mt-4 w-16 h-px bg-[#D4AF37] mx-auto" />
          </div>

          <Accordion className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-[#F0E8DF] px-6"
              >
                <AccordionTrigger
                  className="text-sm font-medium text-[#2C2C2C] hover:text-[#D4AF37] py-4"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className="text-sm text-[#8B7355] leading-relaxed pb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2C2C2C]">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2
            className="text-4xl font-light text-white mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Ready to Join the ProCare Family?
          </h2>
          <p
            className="text-sm text-[#B8A99A] mb-8 leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Contact us to enroll in a membership or ask any questions about our program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#D4AF37] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#B8960A] transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Enroll Now
            </a>
            <a
              href="tel:+16265550100"
              className="px-8 py-4 border border-white/30 text-white text-xs font-medium tracking-wider uppercase hover:border-white transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
