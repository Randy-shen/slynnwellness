import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .single()
    if (error) throw error
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const supabase = await createClient()
    const body = await request.json()
    const { id, updated_at, ...updateData } = body

    const { data, error } = await supabase
      .from('site_settings')
      .update({ ...updateData, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error

    // Settings render in the header/footer on every public page, so refresh
    // the entire route tree's cache. Without this, edits take up to an hour
    // (the ISR revalidate window) to appear on the live site.
    revalidatePath('/', 'layout')

    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 })
  }
}
