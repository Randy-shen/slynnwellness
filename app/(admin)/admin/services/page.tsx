import Link from 'next/link'
import { getServices } from '@/lib/supabase/admin'
import { placeholderServices, getCategoryLabel, Service } from '@/lib/content/placeholder-services'
import { Plus, Edit, Trash2 } from 'lucide-react'

export default async function AdminServicesPage() {
  let services: Service[] = []

  try {
    services = await getServices()
  } catch {
    services = placeholderServices
  }

  if (!services || services.length === 0) {
    services = placeholderServices
  }

  const categories = ['medical-aesthetic', 'wellness', 'skin-scalp-care'] as const

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1
            className="text-3xl font-light text-[#2C2C2C]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Services
          </h1>
          <p className="text-sm text-[#8B7355] mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {services.length} services total
          </p>
        </div>
        <Link
          href="/admin/services/new"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#B8960A] transition-colors"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <Plus className="h-4 w-4" />
          Add New Service
        </Link>
      </div>

      {/* Category Tabs */}
      <div className="space-y-10">
        {categories.map((cat) => {
          const catServices = services.filter((s) => s.category === cat)
          return (
            <div key={cat}>
              <div className="flex items-center gap-3 mb-4">
                <h2
                  className="text-xl font-light text-[#2C2C2C]"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {getCategoryLabel(cat)}
                </h2>
                <span className="text-xs text-[#B8A99A] px-2 py-0.5 bg-[#F0E8DF]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {catServices.length}
                </span>
              </div>

              <div className="bg-white border border-[#F0E8DF] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#FDF8F3] border-b border-[#F0E8DF]">
                      <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider uppercase text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Service Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider uppercase text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider uppercase text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-semibold tracking-wider uppercase text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Order
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-semibold tracking-wider uppercase text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {catServices.map((service) => (
                      <tr key={service.id} className="border-b border-[#F0E8DF] last:border-none hover:bg-[#FFFAF5]">
                        <td className="px-6 py-4">
                          <p className="font-medium text-[#2C2C2C] text-sm" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}>
                            {service.name}
                          </p>
                          <p className="text-xs text-[#B8A99A] mt-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            /{service.slug}
                          </p>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {service.price || '—'}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 text-xs font-medium ${
                              service.is_visible
                                ? 'bg-green-50 text-green-700'
                                : 'bg-gray-100 text-gray-500'
                            }`}
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                          >
                            {service.is_visible ? 'Visible' : 'Hidden'}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {service.display_order}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              href={`/admin/services/${service.id}/edit`}
                              className="p-2 text-[#8B7355] hover:text-[#D4AF37] transition-colors"
                              aria-label="Edit service"
                            >
                              <Edit className="h-4 w-4" />
                            </Link>
                            <button
                              className="p-2 text-[#8B7355] hover:text-red-500 transition-colors"
                              aria-label="Delete service"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {catServices.length === 0 && (
                      <tr>
                        <td colSpan={5} className="px-6 py-8 text-center text-sm text-[#B8A99A]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          No services in this category
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
