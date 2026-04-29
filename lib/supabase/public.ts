import { createClient as createSupabaseClient } from '@supabase/supabase-js'

// Cookie-free Supabase client for public read-only data on public pages.
// Using this avoids forcing Next.js into dynamic rendering, which lets
// public routes return cacheable HTML (cache-control: public, ...) so Google
// can crawl them aggressively.
export function createPublicReadClient() {
  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  )
}
