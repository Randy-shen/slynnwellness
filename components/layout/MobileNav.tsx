'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, ChevronDown, ChevronUp, Phone, Mail, MapPin } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

interface DropdownItem {
  label: string
  href: string
}

interface NavItem {
  label: string
  href: string
  dropdown?: DropdownItem[]
}

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
  bookingUrl: string
  address?: string
  phone?: string
  email?: string
}

export default function MobileNav({ isOpen, onClose, navItems, bookingUrl, address, phone, email }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const toggleExpanded = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-[#FFFAF5] overflow-y-auto"
        >
          <div className="flex flex-col min-h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#F0E8DF]">
              <span
                className="text-xl font-light tracking-[0.2em] text-[#2C2C2C]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                SLYNN WELLNESS
              </span>
              <button
                onClick={onClose}
                className="p-2 text-[#2C2C2C]"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-6 py-6">
              {navItems.map((item: NavItem) => (
                <div key={item.label} className="border-b border-[#F0E8DF] last:border-none">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleExpanded(item.label)}
                        className="flex items-center justify-between w-full py-4 text-[#2C2C2C] font-medium tracking-wide"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        <span>{item.label}</span>
                        {expandedItem === item.label ? (
                          <ChevronUp className="h-4 w-4 text-[#D4AF37]" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-[#D4AF37]" />
                        )}
                      </button>

                      <AnimatePresence>
                        {expandedItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 pl-4 space-y-2">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={onClose}
                                  className="block py-2 text-sm text-[#8B7355] hover:text-[#D4AF37] transition-colors"
                                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-4 text-[#2C2C2C] font-medium tracking-wide hover:text-[#D4AF37] transition-colors"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Book Now CTA */}
            <div className="px-6 py-6 border-t border-[#F0E8DF]">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-[#D4AF37] text-white text-center font-medium tracking-wider uppercase mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Book Appointment
              </a>

              {/* Contact Info */}
              <div className="space-y-3">
                {address && (
                  <div className="flex items-center gap-3 text-sm text-[#8B7355]">
                    <MapPin className="h-4 w-4 text-[#D4AF37] flex-shrink-0" />
                    <span>{address}</span>
                  </div>
                )}
                {phone && (
                  <a href={`tel:${phone.replace(/\D/g, '')}`} className="flex items-center gap-3 text-sm text-[#8B7355] hover:text-[#D4AF37]">
                    <Phone className="h-4 w-4 text-[#D4AF37] flex-shrink-0" />
                    <span>{phone}</span>
                  </a>
                )}
                {email && (
                  <a href={`mailto:${email}`} className="flex items-center gap-3 text-sm text-[#8B7355] hover:text-[#D4AF37]">
                    <Mail className="h-4 w-4 text-[#D4AF37] flex-shrink-0" />
                    <span>{email}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
