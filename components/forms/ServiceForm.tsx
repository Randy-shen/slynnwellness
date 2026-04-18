'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2 } from 'lucide-react'
import { Service } from '@/lib/content/placeholder-services'

const serviceSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  slug: z.string().min(2, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must be lowercase letters, numbers, and hyphens only'),
  category: z.enum(['medical-aesthetic', 'wellness', 'skin-scalp-care']),
  short_description: z.string().min(10, 'Short description is required'),
  full_description: z.string().min(20, 'Full description is required'),
  benefits: z.string().min(1, 'Benefits are required'),
  price: z.string().optional(),
  display_order: z.number().int().min(1),
  is_visible: z.boolean(),
})

type ServiceFormData = z.infer<typeof serviceSchema>

interface ServiceFormProps {
  service?: Service
  onSubmit: (data: ServiceFormData) => Promise<void>
  isLoading?: boolean
}

export default function ServiceForm({ service, onSubmit, isLoading }: ServiceFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ServiceFormData>({
    resolver: zodResolver(serviceSchema),
    defaultValues: service
      ? {
          name: service.name,
          slug: service.slug,
          category: service.category,
          short_description: service.short_description,
          full_description: service.full_description,
          benefits: service.benefits.join('\n'),
          price: service.price,
          display_order: service.display_order,
          is_visible: service.is_visible,
        }
      : {
          display_order: 1,
          is_visible: true,
        },
  })

  const inputClass = "w-full px-4 py-3 border border-[#F0E8DF] bg-white text-[#2C2C2C] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
  const labelClass = "block text-xs font-medium tracking-wider uppercase text-[#8B7355] mb-1.5"

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className={labelClass}>Service Name *</label>
          <input type="text" {...register('name')} className={inputClass} placeholder="e.g. Botox & Dysport" />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        {/* Slug */}
        <div>
          <label className={labelClass}>URL Slug *</label>
          <input type="text" {...register('slug')} className={inputClass} placeholder="e.g. botox-dysport" />
          {errors.slug && <p className="mt-1 text-xs text-red-500">{errors.slug.message}</p>}
        </div>

        {/* Category */}
        <div>
          <label className={labelClass}>Category *</label>
          <select {...register('category')} className={inputClass}>
            <option value="medical-aesthetic">Medical Aesthetic</option>
            <option value="wellness">Wellness</option>
            <option value="skin-scalp-care">Skin & Scalp Care</option>
          </select>
          {errors.category && <p className="mt-1 text-xs text-red-500">{errors.category.message}</p>}
        </div>

        {/* Price */}
        <div>
          <label className={labelClass}>Price</label>
          <input type="text" {...register('price')} className={inputClass} placeholder="e.g. Starting at $12/unit" />
        </div>

        {/* Display Order */}
        <div>
          <label className={labelClass}>Display Order *</label>
          <input type="number" {...register('display_order', { valueAsNumber: true })} className={inputClass} min={1} />
          {errors.display_order && <p className="mt-1 text-xs text-red-500">{errors.display_order.message}</p>}
        </div>

        {/* Visible */}
        <div className="flex items-center gap-3 pt-6">
          <input
            type="checkbox"
            id="is_visible"
            {...register('is_visible')}
            className="w-4 h-4 accent-[#D4AF37]"
          />
          <label htmlFor="is_visible" className="text-sm text-[#2C2C2C]">Visible on website</label>
        </div>
      </div>

      {/* Short Description */}
      <div>
        <label className={labelClass}>Short Description *</label>
        <textarea
          {...register('short_description')}
          rows={2}
          className={`${inputClass} resize-none`}
          placeholder="Brief description shown on service cards..."
        />
        {errors.short_description && <p className="mt-1 text-xs text-red-500">{errors.short_description.message}</p>}
      </div>

      {/* Full Description */}
      <div>
        <label className={labelClass}>Full Description *</label>
        <textarea
          {...register('full_description')}
          rows={6}
          className={`${inputClass} resize-none`}
          placeholder="Complete description shown on the service detail page..."
        />
        {errors.full_description && <p className="mt-1 text-xs text-red-500">{errors.full_description.message}</p>}
      </div>

      {/* Benefits */}
      <div>
        <label className={labelClass}>Benefits * (one per line)</label>
        <textarea
          {...register('benefits')}
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Reduces fine lines&#10;Prevents new wrinkles&#10;Natural-looking results&#10;No downtime"
        />
        {errors.benefits && <p className="mt-1 text-xs text-red-500">{errors.benefits.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="px-8 py-3 bg-[#D4AF37] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#B8960A] disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {isLoading ? 'Saving...' : service ? 'Update Service' : 'Create Service'}
      </button>
    </form>
  )
}
