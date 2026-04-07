import Link from 'next/link'
import { Plus } from 'lucide-react'
import { placeholderIVTherapies, IVTherapy } from '@/lib/supabase/iv-therapies'
import IVTherapyActions from '@/components/admin/IVTherapyActions'
import { createClient } from '@/lib/supabase/server'

async function getAllIVTherapies(): Promise<IVTherapy[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('iv_therapies')
      .select('*')
      .order('display_order')
    if (error || !data || data.length === 0) return placeholderIVTherapies
    return data as IVTherapy[]
  } catch {
    return placeholderIVTherapies
  }
}

export default async function AdminIVTherapyPage() {
  const therapies = await getAllIVTherapies()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1
            className="text-3xl font-light text-[#2C2C2C]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            IV Therapy
          </h1>
          <p className="text-sm text-[#8B7355] mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {therapies.length} drip{therapies.length !== 1 ? 's' : ''} total
          </p>
        </div>
        <Link
          href="/admin/iv-therapy/new"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#B8960A] transition-colors"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <Plus className="h-4 w-4" />
          Add New
        </Link>
      </div>

      <div className="bg-white border border-[#F0E8DF] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-[#FDF8F3] border-b border-[#F0E8DF]">
              <th
                className="px-6 py-3 text-left text-xs font-semibold tracking-wider uppercase text-[#8B7355]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Name
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-semibold tracking-wider uppercase text-[#8B7355]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Infusion Time
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-semibold tracking-wider uppercase text-[#8B7355]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Ingredients
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-semibold tracking-wider uppercase text-[#8B7355]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Special
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-semibold tracking-wider uppercase text-[#8B7355]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Visible
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-semibold tracking-wider uppercase text-[#8B7355]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Order
              </th>
              <th
                className="px-6 py-3 text-right text-xs font-semibold tracking-wider uppercase text-[#8B7355]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {therapies.map((therapy) => (
              <tr
                key={therapy.id}
                className="border-b border-[#F0E8DF] last:border-none hover:bg-[#FFFAF5]"
              >
                <td className="px-6 py-4">
                  <p
                    className="font-medium text-[#2C2C2C]"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}
                  >
                    {therapy.name}
                  </p>
                  {therapy.note && (
                    <p
                      className="text-xs text-[#B8A99A] mt-0.5"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {therapy.note}
                    </p>
                  )}
                </td>
                <td
                  className="px-6 py-4 text-sm text-[#8B7355]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {therapy.infusion_time}
                </td>
                <td
                  className="px-6 py-4 text-sm text-[#8B7355]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {therapy.ingredients.length} items
                </td>
                <td className="px-6 py-4">
                  {therapy.is_special ? (
                    <span
                      className="inline-flex items-center px-2 py-0.5 text-xs font-medium"
                      style={{
                        backgroundColor: '#FBF0E0',
                        color: '#9B6E28',
                        fontFamily: 'Montserrat, sans-serif',
                      }}
                    >
                      NAD+
                    </span>
                  ) : (
                    <span
                      className="text-xs text-[#B8A99A]"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      —
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 text-xs font-medium ${
                      therapy.is_visible
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {therapy.is_visible ? 'Visible' : 'Hidden'}
                  </span>
                </td>
                <td
                  className="px-6 py-4 text-sm text-[#8B7355]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {therapy.display_order}
                </td>
                <td className="px-6 py-4">
                  <IVTherapyActions id={therapy.id} name={therapy.name} />
                </td>
              </tr>
            ))}
            {therapies.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-8 text-center text-sm text-[#B8A99A]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  No IV therapies found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
