'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Edit, Trash2 } from 'lucide-react'

export default function IVTherapyActions({ id, name }: { id: string; name: string }) {
  const router = useRouter()

  async function handleDelete() {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return

    const res = await fetch(`/api/admin/iv-therapies/${id}`, { method: 'DELETE' })
    if (res.ok) {
      router.refresh()
    } else {
      alert('Failed to delete IV therapy.')
    }
  }

  return (
    <div className="flex items-center justify-end gap-2">
      <Link
        href={`/admin/iv-therapy/${id}/edit`}
        className="p-2 text-[#8B7355] hover:text-[#D4AF37] transition-colors"
        aria-label="Edit IV therapy"
      >
        <Edit className="h-4 w-4" />
      </Link>
      <button
        onClick={handleDelete}
        className="p-2 text-[#8B7355] hover:text-red-500 transition-colors"
        aria-label="Delete IV therapy"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  )
}
