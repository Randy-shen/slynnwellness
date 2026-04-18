'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  Sparkles,
  Droplets,
  ImageIcon,
  Settings,
  LogOut,
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Services', href: '/admin/services', icon: Sparkles },
  { label: 'IV Therapy', href: '/admin/iv-therapy', icon: Droplets },
  { label: 'Assets', href: '/admin/assets', icon: ImageIcon },
  { label: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const { createClient } = await import('@/lib/supabase/client')
      const supabase = createClient()
      await supabase.auth.signOut()
    } catch {
      // Ignore errors during logout
    }
    router.push('/admin/login')
  }

  return (
    <aside className="w-64 bg-[#1A1A1A] min-h-screen flex flex-col">
      {/* Logo */}
      <div className="px-6 py-8 border-b border-white/10">
        <div
          className="flex items-center gap-2 text-[#D4AF37]"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          <span className="text-lg font-light tracking-[0.2em]">SLYNN</span>
          <span className="w-px h-4 bg-[#D4AF37] opacity-60" />
          <span className="text-lg font-light tracking-[0.2em]">WELLNESS</span>
        </div>
        <p
          className="text-xs text-[#B8A99A] mt-1 tracking-wider"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Admin Portal
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = item.href === '/admin'
            ? pathname === '/admin'
            : pathname === item.href || pathname.startsWith(item.href + '/')
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[#D4AF37]/10 text-[#D4AF37] border-l-2 border-[#D4AF37]'
                  : 'text-[#B8A99A] hover:text-white hover:bg-white/5'
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <Icon className="h-4 w-4 flex-shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-6 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-sm font-medium text-[#B8A99A] hover:text-white hover:bg-white/5 transition-colors"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  )
}
