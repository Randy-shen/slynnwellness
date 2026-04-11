import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const supabase = await createClient()

    // Get asset record first
    const { data: asset, error: fetchError } = await supabase
      .from('assets')
      .select('file_path')
      .eq('id', id)
      .single()

    if (fetchError || !asset) {
      return NextResponse.json({ error: 'Asset not found' }, { status: 404 })
    }

    // Delete from storage
    await supabase.storage.from('media').remove([asset.file_path])

    // Delete DB record
    const { error: deleteError } = await supabase.from('assets').delete().eq('id', id)
    if (deleteError) throw deleteError

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete asset' }, { status: 500 })
  }
}
