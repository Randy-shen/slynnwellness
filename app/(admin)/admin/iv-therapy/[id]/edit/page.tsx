'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface FormState {
  name: string
  purpose: string
  ingredients: string
  infusion_time: string
  is_special: boolean
  note: string
  price: string
  display_order: number
  is_visible: boolean
}

export default function EditIVTherapyPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [form, setForm] = useState<FormState>({
    name: '',
    purpose: '',
    ingredients: '',
    infusion_time: '45–60 min',
    is_special: false,
    note: '',
    price: 'Starting at $150/session',
    display_order: 0,
    is_visible: true,
  })

  useEffect(() => {
    async function fetchTherapy() {
      try {
        const res = await fetch(`/api/admin/iv-therapies/${id}`)
        if (!res.ok) throw new Error('Not found')
        const data = await res.json()
        setForm({
          name: data.name ?? '',
          purpose: data.purpose ?? '',
          ingredients: Array.isArray(data.ingredients) ? data.ingredients.join('\n') : '',
          infusion_time: data.infusion_time ?? '45–60 min',
          is_special: data.is_special ?? false,
          note: data.note ?? '',
          price: data.price ?? 'Starting at $150/session',
          display_order: data.display_order ?? 0,
          is_visible: data.is_visible ?? true,
        })
      } catch {
        alert('Failed to load IV therapy.')
        router.push('/admin/iv-therapy')
      } finally {
        setIsFetching(false)
      }
    }
    fetchTherapy()
  }, [id, router])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const target = e.target
    const value =
      target instanceof HTMLInputElement && target.type === 'checkbox'
        ? target.checked
        : target.value
    setForm((prev) => ({ ...prev, [target.name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    try {
      const payload = {
        ...form,
        ingredients: form.ingredients
          .split('\n')
          .map((s) => s.trim())
          .filter((s) => s.length > 0),
        display_order: Number(form.display_order),
        note: form.note || null,
      }
      const res = await fetch(`/api/admin/iv-therapies/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to update')
      router.push('/admin/iv-therapy')
    } catch {
      alert('Failed to update IV therapy. Please check your connection.')
    } finally {
      setIsLoading(false)
    }
  }

  const labelClass = 'block text-xs font-semibold tracking-wider uppercase text-[#8B7355] mb-1.5'
  const inputClass =
    'w-full px-4 py-2.5 border border-[#E8DDD3] bg-[#FFFAF5] text-[#2C2C2C] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors'

  if (isFetching) {
    return (
      <div
        className="flex items-center justify-center py-20 text-sm text-[#8B7355]"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        Loading...
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/iv-therapy"
          className="inline-flex items-center gap-2 text-xs text-[#8B7355] hover:text-[#D4AF37] transition-colors mb-4"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to IV Therapy
        </Link>
        <h1
          className="text-3xl font-light text-[#2C2C2C]"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Edit IV Therapy
        </h1>
      </div>

      <div className="bg-white border border-[#F0E8DF] p-8 shadow-sm max-w-3xl">
        <form onSubmit={handleSubmit} style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className={labelClass}>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="e.g. Basic Wellness"
                className={inputClass}
              />
            </div>

            {/* Purpose */}
            <div>
              <label className={labelClass}>Purpose / Description</label>
              <textarea
                name="purpose"
                value={form.purpose}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Describe the benefits and goals of this drip..."
                className={inputClass}
              />
            </div>

            {/* Ingredients */}
            <div>
              <label className={labelClass}>Ingredients</label>
              <textarea
                name="ingredients"
                value={form.ingredients}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Enter each ingredient on a new line"
                className={inputClass}
              />
              <p className="text-xs text-[#B8A99A] mt-1">Enter each ingredient on a new line</p>
            </div>

            {/* Infusion Time */}
            <div>
              <label className={labelClass}>Infusion Time</label>
              <input
                type="text"
                name="infusion_time"
                value={form.infusion_time}
                onChange={handleChange}
                required
                placeholder="45–60 min"
                className={inputClass}
              />
            </div>

            {/* Price */}
            <div>
              <label className={labelClass}>Price</label>
              <input
                type="text"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Starting at $150/session"
                className={inputClass}
              />
            </div>

            {/* Display Order */}
            <div>
              <label className={labelClass}>Display Order</label>
              <input
                type="number"
                name="display_order"
                value={form.display_order}
                onChange={handleChange}
                min={0}
                className={inputClass}
              />
            </div>

            {/* Note */}
            <div>
              <label className={labelClass}>Note (optional)</label>
              <input
                type="text"
                name="note"
                value={form.note}
                onChange={handleChange}
                placeholder="e.g. Slow infusion required — 2 to 4 hours"
                className={inputClass}
              />
              <p className="text-xs text-[#B8A99A] mt-1">Shown below the card for special drips</p>
            </div>

            {/* Checkboxes */}
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="is_special"
                  checked={form.is_special}
                  onChange={handleChange}
                  className="w-4 h-4 accent-[#D4AF37]"
                />
                <span className="text-sm text-[#2C2C2C]">
                  Special / NAD+ type{' '}
                  <span className="text-xs text-[#8B7355]">(shows amber badge instead of gold)</span>
                </span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="is_visible"
                  checked={form.is_visible}
                  onChange={handleChange}
                  className="w-4 h-4 accent-[#D4AF37]"
                />
                <span className="text-sm text-[#2C2C2C]">Visible on public site</span>
              </label>
            </div>

            {/* Submit */}
            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-3 bg-[#D4AF37] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#B8960A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>
              <Link
                href="/admin/iv-therapy"
                className="px-8 py-3 border border-[#E8DDD3] text-[#8B7355] text-xs font-medium tracking-wider uppercase hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
              >
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
