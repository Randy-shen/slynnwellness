import Link from 'next/link'
import { placeholderServices } from '@/lib/content/placeholder-services'
import { Sparkles, DollarSign, ArrowRight, AlertCircle } from 'lucide-react'

const hasSupabaseConfig = !!(
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your-supabase-url'
)

export default function AdminDashboardPage() {
  const totalServices = placeholderServices.length
  const visibleServices = placeholderServices.filter((s) => s.is_visible).length
  const categories = ['medical-aesthetic', 'wellness', 'skin-scalp-care']

  return (
    <div>
      <div className="mb-8">
        <h1
          className="text-3xl font-light text-[#2C2C2C]"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Dashboard
        </h1>
        <p className="text-sm text-[#8B7355] mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Welcome to the Slynn Wellness admin portal
        </p>
      </div>

      {/* Database Status */}
      {!hasSupabaseConfig && (
        <div className="mb-8 p-4 bg-[#F7E7CE] border border-[#D4AF37]/30 flex gap-3">
          <AlertCircle className="h-5 w-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Demo Mode — Supabase Not Connected
            </p>
            <p className="text-xs text-[#8B7355] mt-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Configure your Supabase environment variables to enable database features. Currently showing placeholder data.
            </p>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Total Services', value: totalServices, icon: Sparkles, color: '#D4AF37' },
          { label: 'Visible Services', value: visibleServices, icon: Sparkles, color: '#8B7355' },
          { label: 'Categories', value: categories.length, icon: DollarSign, color: '#B8A99A' },
          { label: 'Membership Tiers', value: 3, icon: DollarSign, color: '#2C2C2C' },
        ].map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="bg-white border border-[#F0E8DF] p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <Icon className="h-5 w-5" style={{ color: stat.color }} />
                </div>
              </div>
              <p
                className="text-3xl font-light text-[#2C2C2C]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-[#B8A99A] mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {stat.label}
              </p>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-[#F0E8DF] p-6 shadow-sm">
          <h2
            className="text-xl font-light text-[#2C2C2C] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Manage Services
          </h2>
          <p className="text-xs text-[#8B7355] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Add, edit, or remove services from your website.
          </p>
          <div className="space-y-2">
            <Link
              href="/admin/services"
              className="flex items-center justify-between p-3 bg-[#FDF8F3] hover:bg-[#F7E7CE] transition-colors text-sm text-[#2C2C2C]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              View All Services
              <ArrowRight className="h-4 w-4 text-[#D4AF37]" />
            </Link>
            <Link
              href="/admin/services/new"
              className="flex items-center justify-between p-3 bg-[#FDF8F3] hover:bg-[#F7E7CE] transition-colors text-sm text-[#2C2C2C]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Add New Service
              <ArrowRight className="h-4 w-4 text-[#D4AF37]" />
            </Link>
          </div>
        </div>

        <div className="bg-white border border-[#F0E8DF] p-6 shadow-sm">
          <h2
            className="text-xl font-light text-[#2C2C2C] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Quick Links
          </h2>
          <p className="text-xs text-[#8B7355] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Navigate to key areas of the admin portal.
          </p>
          <div className="space-y-2">
            <Link
              href="/admin/price-list"
              className="flex items-center justify-between p-3 bg-[#FDF8F3] hover:bg-[#F7E7CE] transition-colors text-sm text-[#2C2C2C]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Manage Price List
              <ArrowRight className="h-4 w-4 text-[#D4AF37]" />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="flex items-center justify-between p-3 bg-[#FDF8F3] hover:bg-[#F7E7CE] transition-colors text-sm text-[#2C2C2C]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              View Public Website
              <ArrowRight className="h-4 w-4 text-[#D4AF37]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
