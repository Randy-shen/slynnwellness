'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ServiceForm from '@/components/forms/ServiceForm'
import { useState } from 'react'

export default function NewServicePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (data: {
    name: string
    slug: string
    category: 'medical-aesthetic' | 'wellness' | 'skin-scalp-care'
    short_description: string
    full_description: string
    benefits: string
    price?: string
    display_order: number
    is_visible: boolean
  }) => {
    setIsLoading(true)
    try {
      const { createService } = await import('@/lib/supabase/admin')
      const serviceData = {
        ...data,
        benefits: data.benefits.split('\n').filter((b) => b.trim() !== ''),
        image_url: null,
      }
      await createService(serviceData)
      router.push('/admin/services')
    } catch (error) {
      console.error('Failed to create service:', error)
      alert('Failed to create service. Please check your Supabase connection.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/services"
          className="inline-flex items-center gap-2 text-xs text-[#8B7355] hover:text-[#D4AF37] transition-colors mb-4"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>
        <h1
          className="text-3xl font-light text-[#2C2C2C]"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Add New Service
        </h1>
      </div>

      <div className="bg-white border border-[#F0E8DF] p-8 shadow-sm max-w-3xl">
        <ServiceForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  )
}
