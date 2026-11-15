import Link from 'next/link'
import { ArrowUpRight, CreditCard } from 'lucide-react'

interface FinancingNoteProps {
  /** Cherry application URL from Admin → Settings → Financing. Renders nothing when empty. */
  financingUrl?: string
  /** Optional extra line, e.g. an Alle Payment Plans note on Allergan product pages. */
  note?: string
  /** Override the eyebrow heading (default suits a service page). */
  heading?: string
  /** Override the body copy (default refers to "this treatment"). */
  body?: string
}

/**
 * Slim "pay over time" strip shown directly below a service page's Pricing section.
 * Financing is switched on site-wide by entering the Cherry URL in the admin; until then
 * this component renders null so nothing changes on the page.
 */
export default function FinancingNote({
  financingUrl,
  note,
  heading = 'Pay over time with Cherry',
  body = 'Split the cost of this treatment into monthly payments. Checking your options takes a couple of minutes and uses a soft credit check that does not affect your credit score. Subject to approval.',
}: FinancingNoteProps) {
  if (!financingUrl) return null

  return (
    <section className="pb-10 -mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl px-6 py-5 flex flex-col lg:flex-row lg:items-center gap-5"
          style={{
            background: 'linear-gradient(135deg, rgba(255,250,245,0.95), rgba(247,239,230,0.98))',
            border: '1px solid rgba(212,175,55,0.35)',
            boxShadow: '0 10px 30px rgba(90,66,44,0.06)',
          }}
        >
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.3)' }}
          >
            <CreditCard className="h-5 w-5" style={{ color: '#D4AF37' }} />
          </div>

          <div className="flex-grow">
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#8B6340', margin: '0 0 4px' }}
            >
              {heading}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: 'Montserrat, sans-serif', color: '#7a6f66', margin: 0 }}
            >
              {body}
            </p>
            {note && (
              <p
                className="text-xs leading-relaxed mt-2"
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#9a8f86', margin: '8px 0 0' }}
              >
                {note}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              href="/payment-plans"
              className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors"
              style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(233,221,209,0.9)', color: '#2C2C2C', fontFamily: 'Montserrat, sans-serif' }}
            >
              See payment plans
            </Link>
            <a
              href={financingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #D4AF37 0%, #C6A050 100%)', boxShadow: '0 10px 30px rgba(212,175,55,0.30)', fontFamily: 'Montserrat, sans-serif' }}
            >
              Apply with Cherry
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
