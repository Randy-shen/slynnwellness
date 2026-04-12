'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import MobileNav from './MobileNav'

interface DropdownItem {
  label: string
  href: string
}

interface NavItem {
  label: string
  href: string
  dropdown?: DropdownItem[]
}

interface NavServices {
  medical: DropdownItem[]
  wellness: DropdownItem[]
  skin: DropdownItem[]
}

interface HeaderProps {
  bookingUrl: string
  navServices: NavServices
}

export default function Header({ bookingUrl, navServices }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Medical Aesthetic',
      href: '/medical-aesthetic',
      dropdown: navServices.medical,
    },
    {
      label: 'Wellness',
      href: '/wellness',
      dropdown: navServices.wellness,
    },
    {
      label: 'Skin & Scalp Care',
      href: '/skin-scalp-care',
      dropdown: navServices.skin,
    },
    { label: 'Procare Membership', href: '/membership' },
    { label: 'Price List', href: '/price-list' },
    { label: 'Shop', href: '/shop' },
    { label: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClass = scrolled
    ? 'bg-[#FFFAF5] shadow-sm border-b border-[#F0E8DF]'
    : 'bg-[#FFFAF5]/80 backdrop-blur-md border-b border-[#F0E8DF]/50'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div
                className="flex items-center gap-3 transition-colors duration-300 text-[#2C2C2C]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {/* Desktop: side by side with divider */}
                <div className="hidden sm:flex items-center gap-3">
                  <span className="text-xl lg:text-2xl font-light tracking-[0.2em]">SLYNN</span>
                  <span className="w-px h-5 lg:h-6 bg-[#D4AF37] opacity-80" />
                  <span className="text-xl lg:text-2xl font-light tracking-[0.2em]">WELLNESS</span>
                </div>
                {/* Mobile: stacked */}
                <div className="flex sm:hidden flex-col items-start leading-none">
                  <span className="text-base font-light tracking-[0.2em]">SLYNN</span>
                  <span className="text-base font-light tracking-[0.2em]">WELLNESS</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navItems.map((item: NavItem) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center px-3 py-2 text-xs font-medium tracking-wider uppercase transition-colors duration-200 text-[#2C2C2C] hover:text-[#D4AF37]"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown className="ml-1 h-3 w-3" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 w-56 bg-[#FFFAF5] shadow-lg border border-[#F0E8DF] py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-xs text-[#2C2C2C] hover:bg-[#F7E7CE] hover:text-[#D4AF37] transition-colors"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Book Now CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[#D4AF37] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#B8960A] transition-colors duration-200"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden p-2 transition-colors text-[#2C2C2C]"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
        bookingUrl={bookingUrl}
      />
    </>
  )
}
