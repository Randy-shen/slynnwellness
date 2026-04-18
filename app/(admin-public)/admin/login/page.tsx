'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, AlertCircle } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

type LoginFormData = z.infer<typeof loginSchema>

const hasSupabaseConfig = !!(
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your-supabase-url'
)

export default function AdminLoginPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    setError(null)

    if (!hasSupabaseConfig) {
      // Demo mode
      if (data.email === 'admin@slynnwellness.com' && data.password === 'demo') {
        router.push('/admin')
      } else {
        setError('Demo mode: Use admin@slynnwellness.com / demo')
      }
      return
    }

    try {
      const { createClient } = await import('@/lib/supabase/client')
      const supabase = createClient()
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })

      if (authError) throw authError
      router.push('/admin')
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen bg-[#FFFAF5] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <h1
            className="text-3xl font-light tracking-[0.2em] text-[#2C2C2C] mb-1"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            SLYNN WELLNESS
          </h1>
          <p className="text-xs text-[#B8A99A] tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Admin Portal
          </p>
        </div>

        {/* Demo Mode Notice */}
        {!hasSupabaseConfig && (
          <div className="mb-6 p-4 bg-[#F7E7CE] border border-[#D4AF37]/30 flex gap-3">
            <AlertCircle className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-medium text-[#8B7355] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Demo Mode
              </p>
              <p className="text-xs text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Supabase is not configured. Use: <strong>admin@slynnwellness.com</strong> / <strong>demo</strong>
              </p>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="bg-white border border-[#F0E8DF] p-8 shadow-sm">
          <h2
            className="text-2xl font-light text-[#2C2C2C] mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Sign In
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium tracking-wider uppercase text-[#8B7355] mb-1.5"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full px-4 py-3 border border-[#F0E8DF] bg-[#FFFAF5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="admin@slynnwellness.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium tracking-wider uppercase text-[#8B7355] mb-1.5"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register('password')}
                className="w-full px-4 py-3 border border-[#F0E8DF] bg-[#FFFAF5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
              )}
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-[#D4AF37] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#B8960A] disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-[#B8A99A]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          © 2024 Slynn Wellness. Admin access only.
        </p>
      </div>
    </div>
  )
}
