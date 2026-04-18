import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email } = await request.json()

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Check for duplicate email — silently succeed if already exists
    const { data: existing } = await supabase
      .from('newsletter_signups')
      .select('id')
      .eq('email', email)
      .single()

    if (existing) {
      return NextResponse.json({ success: true })
    }

    const { error } = await supabase
      .from('newsletter_signups')
      .insert({ first_name: firstName, last_name: lastName, email })

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
