import { createClient } from '@/lib/supabase/server'
import { SiteSettings, defaultSettings } from '@/lib/supabase/settings-types'

export type { SiteSettings }
export { defaultSettings }

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .single()
    if (error || !data) return defaultSettings
    return data as SiteSettings
  } catch {
    return defaultSettings
  }
}
