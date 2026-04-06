export interface SiteSettings {
  id: string
  business_name: string
  tagline: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  email: string
  hours_weekday: string
  hours_saturday: string
  hours_sunday: string
  booking_url: string
  instagram_url: string
  facebook_url: string
  tiktok_url: string
  yelp_url: string
  hero_video_url: string
  hero_poster_url: string
  hero_tagline: string
  google_maps_url: string
  popup_enabled: boolean
  popup_headline: string
  popup_description: string
  updated_at: string
}

export const defaultSettings: SiteSettings = {
  id: '',
  business_name: 'Slynn Wellness',
  tagline: 'Rejuvenate. Restore. Radiate.',
  address: '123 S Lake Ave, Suite 200',
  city: 'Pasadena',
  state: 'CA',
  zip: '91101',
  phone: '(626) 555-0100',
  email: 'info@slynnwellness.com',
  hours_weekday: 'Mon–Fri: 9am–6pm',
  hours_saturday: 'Sat: 10am–5pm',
  hours_sunday: 'Sun: Closed',
  booking_url: 'https://booking.aestheticrecord.com/slynn-wellness',
  instagram_url: '',
  facebook_url: '',
  tiktok_url: '',
  yelp_url: '',
  hero_video_url: '',
  hero_poster_url: '',
  hero_tagline: 'Rejuvenate. Restore. Radiate.',
  google_maps_url: '',
  popup_enabled: true,
  popup_headline: 'Get in the Know',
  popup_description:
    'Get exclusive offers and up to date educational information when you sign up to receive our emails.',
  updated_at: '',
}
