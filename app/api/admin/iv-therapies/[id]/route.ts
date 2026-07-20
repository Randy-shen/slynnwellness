import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { data, error } = await supabase.from('iv_therapies').select('*').eq('id', id).single()
    if (error || !data) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const body = await request.json()
    const { id: _id, created_at, updated_at, ...updateData } = body
    const { data, error } = await supabase
      .from('iv_therapies')
      .update({ ...updateData, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()
    if (error) throw error
    revalidatePath('/', 'layout')
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const supabase = await createClient()
    const { error } = await supabase.from('iv_therapies').delete().eq('id', id)
    if (error) throw error
    revalidatePath('/', 'layout')
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 })
  }
}
