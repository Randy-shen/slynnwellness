'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, CheckCircle } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service_interest: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const fallbackServiceOptions = [
  'Botox & Dysport',
  'Dermal Fillers',
  'Sculptra',
  'Kybella',
  'IV Vitamin Therapy',
  'Medical Weight Loss',
  'Hormone Replacement Therapy',
  'Vitamin Injections',
  'HydraFacial',
  'Microneedling',
  'Chemical Peels',
  'PRP Hair Restoration',
  'LED Light Therapy',
  'Procare Membership',
  'Other',
]

interface ContactFormProps {
  serviceOptions?: string[]
}

export default function ContactForm({ serviceOptions }: ContactFormProps) {
  const resolvedServiceOptions = serviceOptions && serviceOptions.length > 0
    ? serviceOptions
    : fallbackServiceOptions
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error((errorData as { error?: string }).error || 'Failed to submit form')
      }

      setIsSubmitted(true)
      reset()
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="h-16 w-16 text-[#D4AF37] mb-4" />
        <h3 className="text-2xl font-light text-[#2C2C2C] mb-2"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Thank You!
        </h3>
        <p className="text-sm text-[#8B7355] mb-6"
          style={{ fontFamily: 'Montserrat, sans-serif' }}>
          We&apos;ve received your message and will be in touch within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-xs text-[#D4AF37] hover:text-[#B8960A] underline"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-medium tracking-wider uppercase text-[#8B7355] mb-1.5"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-4 py-3 border border-[#F0E8DF] bg-[#FFFAF5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-medium tracking-wider uppercase text-[#8B7355] mb-1.5"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-3 border border-[#F0E8DF] bg-[#FFFAF5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-xs font-medium tracking-wider uppercase text-[#8B7355] mb-1.5"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className="w-full px-4 py-3 border border-[#F0E8DF] bg-[#FFFAF5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
          placeholder="(626) 555-0100"
        />
      </div>

      {/* Service Interest */}
      <div>
        <label
          htmlFor="service_interest"
          className="block text-xs font-medium tracking-wider uppercase text-[#8B7355] mb-1.5"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Service of Interest
        </label>
        <select
          id="service_interest"
          {...register('service_interest')}
          className="w-full px-4 py-3 border border-[#F0E8DF] bg-[#FFFAF5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
        >
          <option value="">Select a service...</option>
          {resolvedServiceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium tracking-wider uppercase text-[#8B7355] mb-1.5"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Message *
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          className="w-full px-4 py-3 border border-[#F0E8DF] bg-[#FFFAF5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
          placeholder="Tell us about your goals and any questions you have..."
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm">
          {submitError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[#D4AF37] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#B8960A] disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
