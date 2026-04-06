import Link from 'next/link'
import { getPriceList } from '@/lib/supabase/admin'
import { placeholderServices, getCategoryLabel } from '@/lib/content/placeholder-services'
import { Edit } from 'lucide-react'

interface PriceItem {
  id: string
  service_name: string
  category: string
  price: string
  description?: string
}

export default async function AdminPriceListPage() {
  let priceItems: PriceItem[] = []

  try {
    priceItems = await getPriceList()
  } catch {
    priceItems = placeholderServices.map((s) => ({
      id: s.id,
      service_name: s.name,
      category: s.category,
      price: s.price ?? 'Contact for pricing',
      description: s.short_description,
    }))
  }

  if (!priceItems || priceItems.length === 0) {
    priceItems = placeholderServices.map((s) => ({
      id: s.id,
      service_name: s.name,
      category: s.category,
      price: s.price ?? 'Contact for pricing',
      description: s.short_description,
    }))
  }

  const categories = ['medical-aesthetic', 'wellness', 'skin-scalp-care']
  const itemsByCategory = categories.map((cat) => ({
    category: cat,
    label: getCategoryLabel(cat),
    items: priceItems.filter((i) => i.category === cat),
  }))

  return (
    <div>
      <div className="mb-8">
        <h1
          className="text-3xl font-light text-[#2C2C2C]"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Price List
        </h1>
        <p className="text-sm text-[#8B7355] mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Manage service pricing across all categories
        </p>
      </div>

      <div className="space-y-10">
        {itemsByCategory.map(({ category, label, items }) => (
          <div key={category}>
            <div className="flex items-center gap-3 mb-4">
              <h2
                className="text-xl font-light text-[#2C2C2C]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {label}
              </h2>
              <span className="text-xs text-[#B8A99A] px-2 py-0.5 bg-[#F0E8DF]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {items.length}
              </span>
            </div>

            <div className="bg-white border border-[#F0E8DF] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#FDF8F3] border-b border-[#F0E8DF]">
                    <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider uppercase text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Service
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider uppercase text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Current Price
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-semibold tracking-wider uppercase text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-b border-[#F0E8DF] last:border-none hover:bg-[#FFFAF5]">
                      <td className="px-6 py-4">
                        <p className="font-medium text-[#2C2C2C]" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}>
                          {item.service_name}
                        </p>
                        {item.description && (
                          <p className="text-xs text-[#B8A99A] mt-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {item.description.substring(0, 60)}...
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-[#D4AF37]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {item.price}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end">
                          <Link
                            href={`/admin/services/${item.id}/edit`}
                            className="p-2 text-[#8B7355] hover:text-[#D4AF37] transition-colors"
                            aria-label="Edit price"
                          >
                            <Edit className="h-4 w-4" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-[#FDF8F3] border border-[#F0E8DF]">
        <p className="text-xs text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <strong>Note:</strong> Prices are managed through the service edit page. Connect Supabase to enable persistent price updates.
        </p>
      </div>
    </div>
  )
}
