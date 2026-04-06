'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const STORAGE_KEY = 'slynn_newsletter_dismissed'

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (dismissed) return

    const timer = setTimeout(() => setIsVisible(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, 'true')
    setIsVisible(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email }),
      })

      if (!res.ok) throw new Error()

      setStatus('success')
      localStorage.setItem(STORAGE_KEY, 'true')
      setTimeout(() => setIsVisible(false), 2500)
    } catch {
      setStatus('error')
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={dismiss}
          />

          {/* Modal — centered on desktop, bottom sheet on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed z-50 w-full sm:w-auto
              bottom-0 left-0 right-0
              sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
              sm:max-w-md"
          >
            <div className="bg-[#FFFAF5] sm:rounded-sm overflow-hidden shadow-2xl">
              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 text-[#B8A99A] hover:text-[#2C2C2C] transition-colors z-10"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Image strip */}
              <div
                className="h-32 w-full"
                style={{
                  background: 'linear-gradient(135deg, #F7E7CE 0%, #D4AF37 50%, #F5E1DA 100%)',
                }}
              />

              {/* Content */}
              <div className="px-8 py-7">
                {status === 'success' ? (
                  <div className="text-center py-4">
                    <p
                      className="text-3xl font-light text-[#2C2C2C] mb-2"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Thank You!
                    </p>
                    <p className="text-sm text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      You&apos;re on the list. Watch your inbox for exclusive offers.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2
                      className="text-3xl font-light text-[#2C2C2C] text-center mb-2"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Get in the Know
                    </h2>
                    <p
                      className="text-xs text-[#8B7355] text-center mb-6 leading-relaxed"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Get exclusive offers and up to date educational information when you sign up to receive our emails.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="First name"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        required
                        className="w-full px-4 py-3 text-sm border border-[#F0E8DF] bg-white text-[#2C2C2C] placeholder-[#B8A99A] focus:outline-none focus:border-[#D4AF37] transition-colors"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                      <input
                        type="text"
                        placeholder="Last name"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        required
                        className="w-full px-4 py-3 text-sm border border-[#F0E8DF] bg-white text-[#2C2C2C] placeholder-[#B8A99A] focus:outline-none focus:border-[#D4AF37] transition-colors"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                      <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 text-sm border border-[#F0E8DF] bg-white text-[#2C2C2C] placeholder-[#B8A99A] focus:outline-none focus:border-[#D4AF37] transition-colors"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />

                      {status === 'error' && (
                        <p className="text-xs text-red-500 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          Something went wrong. Please try again.
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full py-3 bg-[#2C2C2C] text-white text-xs font-medium tracking-widest uppercase hover:bg-[#D4AF37] transition-colors duration-300 disabled:opacity-60"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {status === 'loading' ? 'Joining...' : 'Join the List'}
                      </button>

                      <button
                        type="button"
                        onClick={dismiss}
                        className="w-full text-xs text-[#B8A99A] hover:text-[#8B7355] transition-colors py-1"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        No thanks
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
