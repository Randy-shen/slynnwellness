'use client'

import { useState, useEffect, useCallback } from 'react'
import { SiteSettings } from '@/lib/supabase/settings-types'

type ToastState = { message: string; type: 'success' | 'error' } | null

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-6">
      <h2
        className="text-2xl font-light text-[#2C2C2C] mb-2"
        style={{ fontFamily: 'Cormorant Garamond, serif' }}
      >
        {title}
      </h2>
      <div className="h-px bg-[#D4AF37] w-full" />
    </div>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  hint,
}: {
  label: string
  name: string
  value: string
  onChange: (name: string, value: string) => void
  placeholder?: string
  type?: string
  hint?: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-medium tracking-wider uppercase text-[#8B7355] mb-1.5"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 text-sm border border-[#E8E0D8] bg-white text-[#2C2C2C] placeholder-[#C4B9AF] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      />
      {hint && (
        <p className="mt-1 text-xs text-[#B8A99A]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {hint}
        </p>
      )}
    </div>
  )
}

function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  label: string
  name: string
  value: string
  onChange: (name: string, value: string) => void
  placeholder?: string
  rows?: number
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-medium tracking-wider uppercase text-[#8B7355] mb-1.5"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-2.5 text-sm border border-[#E8E0D8] bg-white text-[#2C2C2C] placeholder-[#C4B9AF] focus:outline-none focus:border-[#D4AF37] transition-colors rounded-sm resize-none"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      />
    </div>
  )
}

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [toast, setToast] = useState<ToastState>(null)

  const showToast = useCallback((message: string, type: 'success' | 'error') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 4000)
  }, [])

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch('/api/admin/settings')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setSettings(data)
      } catch {
        showToast('Failed to load settings. Using defaults.', 'error')
      } finally {
        setLoading(false)
      }
    }
    fetchSettings()
  }, [showToast])

  function handleChange(name: string, value: string) {
    setSettings((prev) => (prev ? { ...prev, [name]: value } : prev))
  }

  function handleToggle(name: string, checked: boolean) {
    setSettings((prev) => (prev ? { ...prev, [name]: checked } : prev))
  }

  async function handleSave() {
    if (!settings) return
    setSaving(true)
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      })
      if (!res.ok) throw new Error('Failed to save')
      const data = await res.json()
      setSettings(data)
      showToast('Settings saved successfully.', 'success')
    } catch {
      showToast('Failed to save settings. Please try again.', 'error')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Loading settings...
          </p>
        </div>
      </div>
    )
  }

  if (!settings) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-sm text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Unable to load settings.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      {/* Page Header */}
      <div className="mb-10">
        <h1
          className="text-4xl font-light text-[#2C2C2C] mb-2"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Site Settings
        </h1>
        <p className="text-sm text-[#8B7355]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Manage your business information, hours, social links, and site content.
        </p>
      </div>

      <div className="space-y-12">
        {/* Business Info */}
        <section>
          <SectionHeading title="Business Info" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field
              label="Business Name"
              name="business_name"
              value={settings.business_name}
              onChange={handleChange}
              placeholder="Slynn Wellness"
            />
            <Field
              label="Tagline"
              name="tagline"
              value={settings.tagline}
              onChange={handleChange}
              placeholder="Rejuvenate. Restore. Radiate."
            />
            <div className="md:col-span-2">
              <Field
                label="Street Address"
                name="address"
                value={settings.address}
                onChange={handleChange}
                placeholder="123 S Lake Ave, Suite 200"
              />
            </div>
            <Field
              label="City"
              name="city"
              value={settings.city}
              onChange={handleChange}
              placeholder="Pasadena"
            />
            <div className="grid grid-cols-2 gap-5">
              <Field
                label="State"
                name="state"
                value={settings.state}
                onChange={handleChange}
                placeholder="CA"
              />
              <Field
                label="ZIP"
                name="zip"
                value={settings.zip}
                onChange={handleChange}
                placeholder="91101"
              />
            </div>
            <Field
              label="Phone"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              placeholder="(626) 555-0100"
              type="tel"
            />
            <Field
              label="Email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              placeholder="info@slynnwellness.com"
              type="email"
            />
          </div>
        </section>

        {/* Hours */}
        <section>
          <SectionHeading title="Business Hours" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Field
              label="Weekday Hours"
              name="hours_weekday"
              value={settings.hours_weekday}
              onChange={handleChange}
              placeholder="Mon–Fri: 9am–6pm"
            />
            <Field
              label="Saturday Hours"
              name="hours_saturday"
              value={settings.hours_saturday}
              onChange={handleChange}
              placeholder="Sat: 10am–5pm"
            />
            <Field
              label="Sunday Hours"
              name="hours_sunday"
              value={settings.hours_sunday}
              onChange={handleChange}
              placeholder="Sun: Closed"
            />
          </div>
        </section>

        {/* Booking */}
        <section>
          <SectionHeading title="Booking" />
          <div className="max-w-2xl">
            <Field
              label="Booking URL"
              name="booking_url"
              value={settings.booking_url}
              onChange={handleChange}
              placeholder="https://booking.aestheticrecord.com/slynn-wellness"
              type="url"
              hint="The URL used for the Book Appointment button throughout the site."
            />
          </div>
        </section>

        {/* Social Media */}
        <section>
          <SectionHeading title="Social Media" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field
              label="Instagram URL"
              name="instagram_url"
              value={settings.instagram_url}
              onChange={handleChange}
              placeholder="https://instagram.com/slynnwellness"
              type="url"
            />
            <Field
              label="Facebook URL"
              name="facebook_url"
              value={settings.facebook_url}
              onChange={handleChange}
              placeholder="https://facebook.com/slynnwellness"
              type="url"
            />
            <Field
              label="TikTok URL"
              name="tiktok_url"
              value={settings.tiktok_url}
              onChange={handleChange}
              placeholder="https://tiktok.com/@slynnwellness"
              type="url"
            />
            <Field
              label="Yelp URL"
              name="yelp_url"
              value={settings.yelp_url}
              onChange={handleChange}
              placeholder="https://yelp.com/biz/slynn-wellness"
              type="url"
            />
          </div>
        </section>

        {/* Hero Section */}
        <section>
          <SectionHeading title="Hero Section" />
          <div className="grid grid-cols-1 gap-5">
            <Field
              label="Hero Tagline"
              name="hero_tagline"
              value={settings.hero_tagline}
              onChange={handleChange}
              placeholder="Rejuvenate. Restore. Radiate."
              hint="Displayed below the business name in the hero section."
            />
            <Field
              label="Hero Video URL"
              name="hero_video_url"
              value={settings.hero_video_url}
              onChange={handleChange}
              placeholder="https://example.com/hero.mp4"
              type="url"
              hint="MP4 video URL for the hero background. Leave empty to show the gradient fallback."
            />
            <Field
              label="Hero Poster URL"
              name="hero_poster_url"
              value={settings.hero_poster_url}
              onChange={handleChange}
              placeholder="https://example.com/hero-poster.jpg"
              type="url"
              hint="Image shown while the hero video is loading."
            />
            <Field
              label="Google Maps Embed URL"
              name="google_maps_url"
              value={settings.google_maps_url}
              onChange={handleChange}
              placeholder="https://www.google.com/maps/embed?pb=..."
              type="url"
              hint="Google Maps embed URL for the Location section. Leave empty to show the address placeholder."
            />
          </div>
        </section>

        {/* Newsletter Popup */}
        <section>
          <SectionHeading title="Newsletter Popup" />
          <div className="space-y-5">
            {/* Toggle */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                role="switch"
                aria-checked={settings.popup_enabled}
                onClick={() => handleToggle('popup_enabled', !settings.popup_enabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 ${
                  settings.popup_enabled ? 'bg-[#D4AF37]' : 'bg-[#E8E0D8]'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 rounded-full bg-white shadow transform transition-transform ${
                    settings.popup_enabled ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span
                className="text-sm text-[#2C2C2C]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {settings.popup_enabled ? 'Popup is enabled' : 'Popup is disabled'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field
                label="Popup Headline"
                name="popup_headline"
                value={settings.popup_headline}
                onChange={handleChange}
                placeholder="Get in the Know"
              />
            </div>

            <TextAreaField
              label="Popup Description"
              name="popup_description"
              value={settings.popup_description}
              onChange={handleChange}
              placeholder="Get exclusive offers and up to date educational information when you sign up to receive our emails."
              rows={3}
            />
          </div>
        </section>
      </div>

      {/* Save Button */}
      <div className="mt-12 pt-8 border-t border-[#E8E0D8] flex items-center justify-between">
        <p className="text-xs text-[#B8A99A]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {settings.updated_at
            ? `Last saved: ${new Date(settings.updated_at).toLocaleString()}`
            : 'Not yet saved'}
        </p>
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-8 py-3 bg-[#D4AF37] text-white text-xs font-medium tracking-widest uppercase hover:bg-[#B8960A] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-3"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {saving && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-6 py-4 rounded-sm shadow-lg text-sm font-medium transition-all ${
            toast.type === 'success'
              ? 'bg-[#2C2C2C] text-[#D4AF37]'
              : 'bg-red-900 text-white'
          }`}
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {toast.message}
        </div>
      )}
    </div>
  )
}
