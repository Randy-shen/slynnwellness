import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { getSiteSettings } from '@/lib/supabase/settings'

export const metadata: Metadata = {
  title: 'Payment Plans & Financing in Pasadena, CA',
  description:
    'Flexible payment plans for med spa treatments at Slynn Wellness in Pasadena, CA. Apply with Cherry in minutes and split eligible treatments into monthly payments.',
  alternates: { canonical: '/payment-plans' },
}

const steps = [
  {
    step: 'Step 01',
    title: 'Apply Online',
    description: 'Tap Apply with Cherry and enter a few details. Most applications take only a couple of minutes to complete.',
  },
  {
    step: 'Step 02',
    title: 'See Your Options',
    description: 'Cherry uses a soft credit check to show the plans you qualify for. Checking your options does not affect your credit score.',
  },
  {
    step: 'Step 03',
    title: 'Choose a Plan',
    description: 'Review the payment schedule and terms, then pick the plan that fits your budget. Your exact terms are shown before you accept.',
  },
  {
    step: 'Step 04',
    title: 'Treat Now',
    description: 'Book your appointment and use your approved amount at checkout. Payments are then made to Cherry over time.',
  },
]

const treatments = [
  { name: 'Botox & Xeomin', slug: 'botox-dysport' },
  { name: 'Juvederm', slug: 'juvederm' },
  { name: 'Restylane', slug: 'dermal-fillers' },
  { name: 'Sculptra', slug: 'sculptra' },
  { name: 'Skinvive', slug: 'skinvive' },
  { name: 'HydraFacial', slug: 'hydrafacial' },
  { name: 'Candela Matrix Pro RF Microneedling', slug: 'microneedling' },
  { name: 'RF Microneedling + PRP', slug: 'rf-microneedling-prp' },
  { name: 'Rejuran', slug: 'rejuran' },
  { name: 'IV Vitamin Therapy', slug: 'iv-vitamin-therapy' },
  { name: 'NAD+ Infusion', slug: 'nad-infusion' },
  { name: 'Medical Weight Loss', slug: 'medical-weight-loss' },
]

const faqs = [
  {
    q: 'What is Cherry?',
    a: 'Cherry is a third-party financing company that partners with medical spas and aesthetic practices. It lets eligible patients split the cost of treatment into a series of payments instead of paying everything at once.',
  },
  {
    q: 'Does checking my options affect my credit score?',
    a: 'No. Cherry uses a soft credit check to show the plans you qualify for, and a soft check does not affect your credit score.',
  },
  {
    q: 'Which treatments can I finance?',
    a: 'Financing may be available for eligible treatments across our medical aesthetic, wellness, and skin and scalp care menus, including injectables, RF microneedling, PRP and PRF, HydraFacial, IV therapy, and medical weight loss programs. Eligibility is determined by Cherry when you apply.',
  },
  {
    q: 'Will I pay interest?',
    a: 'It depends on your approval. Some plans are offered without interest and others carry interest. Your exact payment schedule, APR, and total cost are shown by Cherry before you accept any plan.',
  },
  {
    q: 'How do I make payments?',
    a: 'Payments are made directly to Cherry on the schedule you chose, typically by automatic payment from a debit card or bank account. Slynn Wellness does not collect installment payments.',
  },
  {
    q: 'Can I combine financing with ProCare Membership pricing?',
    a: 'Yes. Financing applies to the amount due at checkout, including member pricing. Our front desk can confirm the final amount before you complete your Cherry plan.',
  },
]

export default async function PaymentPlansPage() {
  const settings = await getSiteSettings()

  // Financing is switched on by entering the Cherry application URL in Admin → Settings.
  // Until then this page does not exist (404), and nothing on the site links to it.
  if (!settings.financing_url) {
    notFound()
  }

  const applyUrl = settings.financing_url

  const cardStyle = {
    background: 'rgba(255,250,245,0.85)',
    border: '1px solid rgba(233,221,209,0.9)',
    boxShadow: '0 20px 60px rgba(90,66,44,0.08)',
  }

  const tagStyle = {
    background: '#EFE5DB',
    color: '#8B6340',
    fontFamily: 'Montserrat, sans-serif',
  }

  const applyButtonStyle = {
    background: 'linear-gradient(135deg, #D4AF37 0%, #C6A050 100%)',
    boxShadow: '0 10px 30px rgba(212,175,55,0.30)',
    fontFamily: 'Montserrat, sans-serif',
  }

  return (
    <div style={{
      background: 'radial-gradient(circle at top left, rgba(212,175,55,0.08), transparent 30%), radial-gradient(circle at top right, rgba(184,169,154,0.12), transparent 25%), linear-gradient(180deg, #FDF8F3 0%, #F7F1EA 40%, #FFFAF5 100%)',
      minHeight: '100vh',
      color: '#2C2C2C',
    }}>
      {/* Hero */}
      <div className="pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-[#8B7355] hover:text-[#D4AF37] transition-colors mb-8"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
            {/* Left — copy */}
            <div
              className="lg:col-span-3 rounded-3xl p-10 relative overflow-hidden"
              style={{ ...cardStyle, background: 'rgba(255,250,245,0.88)', boxShadow: '0 20px 60px rgba(90,66,44,0.10)' }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(233,221,209,0.9)', color: '#8B6340', fontFamily: 'Montserrat, sans-serif' }}
              >
                Flexible Financing
              </div>

              <h1
                className="font-light mb-4 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', letterSpacing: '-0.01em' }}
              >
                Payment Plans
              </h1>

              <p
                className="text-sm leading-relaxed mb-8 max-w-xl"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}
              >
                Investing in your skin and wellness should fit your life. Slynn Wellness partners with Cherry so eligible patients can split the cost of treatment into manageable payments, with a quick online application and your options shown up front.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href={applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white transition-all hover:-translate-y-0.5"
                  style={applyButtonStyle}
                >
                  Apply with Cherry
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="/book"
                  className="px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
                  style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(233,221,209,0.9)', color: '#2C2C2C', fontFamily: 'Montserrat, sans-serif' }}
                >
                  Book Consultation
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: 'Minutes', label: 'Typical time to apply' },
                  { value: 'Soft Check', label: 'Seeing options does not affect your score' },
                  { value: 'Pay Over Time', label: 'Plans shown before you accept' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(233,221,209,0.9)' }}>
                    <strong className="block mb-1" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem' }}>{stat.value}</strong>
                    <span className="text-xs" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — detail card */}
            <div
              className="lg:col-span-2 rounded-3xl p-8 flex flex-col justify-between gap-6"
              style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,248,242,0.90))', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 20px 60px rgba(90,66,44,0.10)' }}
            >
              <div>
                <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5" style={tagStyle}>
                  Treat Now. Pay Over Time.
                </span>
                <h2 className="mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', fontWeight: 400, margin: '0 0 12px' }}>
                  Why patients choose Cherry
                </h2>
                <ul className="space-y-3">
                  {[
                    'Quick online application you can complete from your phone',
                    'A soft credit check to see your options, with no effect on your credit score',
                    'Clear payment schedules shown before you commit',
                    'Available for eligible treatments across our full menu',
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0 mt-1.5" style={{ boxShadow: '0 0 0 4px rgba(212,175,55,0.15)' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Provider', value: 'Cherry, third-party patient financing' },
                  { label: 'Apply', value: 'Online, before or after your consultation' },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between items-center gap-4 px-4 py-3.5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(233,221,209,0.9)' }}>
                    <strong className="text-sm flex-shrink-0" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}>{row.label}</strong>
                    <span className="text-xs text-right" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66' }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <section id="how-it-works" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              How it works
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Four simple steps from application to treatment. You can apply before your visit or at the front desk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((item) => (
              <div key={item.step} className="rounded-3xl p-6" style={cardStyle}>
                <strong className="block text-xs font-bold tracking-widest uppercase mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#8B6340' }}>{item.step}</strong>
                <h3 className="mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 400, margin: '0 0 8px' }}>{item.title}</h3>
                <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible treatments */}
      <section id="treatments" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Finance your favorite treatments
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Financing may be available for eligible treatments across our menu. Eligibility is determined by Cherry when you apply.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {treatments.map((t) => (
              <Link
                key={t.slug}
                href={`/services/${t.slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl px-5 py-4 transition-all hover:-translate-y-0.5"
                style={{ background: 'rgba(255,250,245,0.85)', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 10px 30px rgba(90,66,44,0.06)' }}
              >
                <span className="text-sm group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem' }}>{t.name}</span>
                <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-[#B8A99A] group-hover:text-[#D4AF37] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            style={{ background: 'linear-gradient(135deg, rgba(255,250,245,0.95), rgba(247,239,230,0.98))', border: '1px solid rgba(233,221,209,0.9)', boxShadow: '0 20px 60px rgba(90,66,44,0.10)' }}
          >
            <div>
              <h3 className="mb-3 font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', margin: '0 0 12px' }}>
                Ready to see your options?
              </h3>
              <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
                Checking takes a couple of minutes and uses a soft credit check. If you have questions about financing a specific treatment, our team is happy to walk you through it.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white transition-all hover:-translate-y-0.5"
                style={applyButtonStyle}
              >
                Apply with Cherry
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <Link
                href="/contact"
                className="w-full text-center px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
                style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(233,221,209,0.9)', color: '#2C2C2C', fontFamily: 'Montserrat, sans-serif' }}
              >
                Contact Us
              </Link>
              <a
                href={`tel:${settings.phone?.replace(/\D/g, '')}`}
                className="w-full text-center px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
                style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(233,221,209,0.9)', color: '#2C2C2C', fontFamily: 'Montserrat, sans-serif' }}
              >
                {settings.phone || 'Call Us'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <h2 className="font-light" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', margin: 0 }}>
              Frequently asked questions
            </h2>
            <p className="text-sm lg:max-w-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}>
              Have more questions? Our team is happy to walk you through everything during your consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl p-7" style={cardStyle}>
                <strong className="block mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', fontWeight: 500 }}>{faq.q}</strong>
                <p className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0, lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="py-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8" style={{ background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(233,221,209,0.9)' }}>
            <p className="text-xs leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', color: '#9a8f86', margin: 0 }}>
              Payment plans are provided by Cherry, a third-party financing company. Slynn Wellness does not issue loans or set financing terms. Financing is subject to approval. Terms, APR, and availability vary by applicant and offer, and not all services or patients qualify. Please review Cherry&apos;s official disclosures before applying.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
