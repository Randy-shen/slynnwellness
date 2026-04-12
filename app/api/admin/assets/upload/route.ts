import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function getAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const filePath = formData.get('filePath') as string
    const name = formData.get('name') as string
    const fileType = formData.get('fileType') as string
    const folder = formData.get('folder') as string

    if (!file || !filePath || !name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const supabase = getAdminClient()

    // Upload file to storage using service role key
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const { error: uploadError } = await supabase.storage
      .from('media')
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: true,
      })

    if (uploadError) throw uploadError

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('media')
      .getPublicUrl(filePath)

    // Save to assets table
    const { data, error: dbError } = await supabase
      .from('assets')
      .insert({
        name,
        file_path: filePath,
        public_url: publicUrl,
        file_type: fileType,
        file_size: file.size,
        folder,
      })
      .select()
      .single()

    if (dbError) throw dbError

    return NextResponse.json(data)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Upload failed'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
