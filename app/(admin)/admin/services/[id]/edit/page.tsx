'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ServiceForm from '@/components/forms/ServiceForm'
import { useState, useEffect, use } from 'react'
import { Service } from '@/lib/content/placeholder-services'

interface Props {
  params: Promise<{ id: string }>
}

export default function EditServicePage({ params }: Props) {
  const { id } = use(params)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [service, setService] = useState<Service | null>(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    fetch(`/api/admin/services/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Not found')
        return res.json()
      })
      .then(data => setService(data))
      .catch(() => setNotFound(true))
  }, [id])

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
      const serviceData = {
        ...data,
        benefits: data.benefits.split('\n').filter((b) => b.trim() !== ''),
      }

      const res = await fetch(`/api/admin/services/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(serviceData),
      })

      if (!res.ok) throw new Error('Failed to update')
      router.push('/admin/services')
    } catch {
      alert('Failed to update service. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (notFound) {
    return (
      <div className="text-center py-16">
        <p className="text-[#B8A99A]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Service not found.
        </p>
        <Link href="/admin/services" className="text-[#D4AF37] hover:underline text-sm mt-4 block">
          Back to Services
        </Link>
      </div>
    )
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
          Edit Service
        </h1>
        {service && (
          <p className="text-sm text-[#8B7355] mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Editing: {service.name}
          </p>
        )}
      </div>

      <div className="bg-white border border-[#F0E8DF] p-8 shadow-sm max-w-3xl">
        {service ? (
          <ServiceForm
            service={service}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        ) : (
          <div className="text-center py-8">
            <div className="animate-spin w-6 h-6 border-2 border-[#D4AF37] border-t-transparent rounded-full mx-auto" />
          </div>
        )}
      </div>
    </div>
  )
}
