'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, ShoppingBag } from 'lucide-react'

const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type EmailFormData = z.infer<typeof emailSchema>

export default function ShopPage() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  })

  const onSubmit = async (data: EmailFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.log('Email signup:', data)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero-style header */}
      <div
        className="relative pt-16"
        style={{
          background: 'linear-gradient(135deg, #FDF8F3 0%, #F7E7CE 50%, #F5E1DA 100%)',
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ShoppingBag className="h-12 w-12 text-white/80 mx-auto mb-4" />
          <h1
            className="text-5xl lg:text-6xl font-light text-white mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Shop
          </h1>
        </div>
      </div>

      {/* Coming Soon */}
      <section className="py-24 bg-[#FFFAF5]">
        <div className="max-w-lg mx-auto text-center px-4">
          <p
            className="text-xs font-medium tracking-[0.3em] uppercase text-[#D4AF37] mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Coming Soon
          </p>
          <h2
            className="text-4xl font-light text-[#2C2C2C] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Our Online Shop is Almost Here
          </h2>
          <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />
          <p
            className="text-sm text-[#8B7355] leading-relaxed mb-10"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            We&apos;re carefully curating a collection of premium skincare, wellness
            products, and treatment packages for you to enjoy at home. Be the first
            to know when we launch — sign up below.
          </p>

          <div className="bg-white border border-[#F0E8DF] p-8">
            <p
              className="text-xs font-medium tracking-wider uppercase text-[#8B7355] mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Expected Launch: Summer 2025
            </p>

            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-4">
                <CheckCircle className="h-10 w-10 text-[#D4AF37]" />
                <p className="text-sm text-[#2C2C2C]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  You&apos;re on the list! We&apos;ll notify you at launch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 border border-[#F0E8DF] bg-[#FFFAF5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 text-left">{errors.email.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-[#D4AF37] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#B8960A] disabled:opacity-60 transition-colors whitespace-nowrap"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {isSubmitting ? 'Joining...' : 'Notify Me'}
                </button>
              </form>
            )}
          </div>

          <p
            className="mt-8 text-sm text-[#8B7355]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            In the meantime,{' '}
            <a href="/contact" className="text-[#D4AF37] hover:underline">
              contact us
            </a>{' '}
            to purchase skincare products during your visit.
          </p>
        </div>
      </section>
    </>
  )
}
