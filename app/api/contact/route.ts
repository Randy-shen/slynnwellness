import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { saveContactSubmission } from '@/lib/supabase/admin'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service_interest: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    const saved = await saveContactSubmission(data)

    if (!saved) {
      return NextResponse.json(
        { error: 'Failed to save your message. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
