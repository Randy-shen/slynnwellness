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

    // Save to Supabase
    const saved = await saveContactSubmission(data)
    if (!saved) {
      return NextResponse.json(
        { error: 'Failed to save your message. Please try again.' },
        { status: 500 }
      )
    }

    // Send email notification via Resend
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'your-resend-key') {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(process.env.RESEND_API_KEY)

        await resend.emails.send({
          from: 'Slynn Wellness <info@slynnwellness.com>',
          to: process.env.CONTACT_EMAIL || 'info@slynnwellness.com',
          replyTo: data.email,
          subject: `New Contact Form Submission — ${data.name}`,
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #FFFAF5;">
              <h2 style="font-size: 24px; font-weight: 300; color: #2C2C2C; border-bottom: 1px solid #D4AF37; padding-bottom: 12px; margin-bottom: 24px;">
                New Contact Form Submission
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #8B7355; font-size: 12px; font-family: Arial, sans-serif; width: 140px;">NAME</td>
                  <td style="padding: 8px 0; color: #2C2C2C; font-size: 14px; font-family: Arial, sans-serif;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #8B7355; font-size: 12px; font-family: Arial, sans-serif;">EMAIL</td>
                  <td style="padding: 8px 0; color: #2C2C2C; font-size: 14px; font-family: Arial, sans-serif;">${data.email}</td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding: 8px 0; color: #8B7355; font-size: 12px; font-family: Arial, sans-serif;">PHONE</td>
                  <td style="padding: 8px 0; color: #2C2C2C; font-size: 14px; font-family: Arial, sans-serif;">${data.phone}</td>
                </tr>` : ''}
                ${data.service_interest ? `
                <tr>
                  <td style="padding: 8px 0; color: #8B7355; font-size: 12px; font-family: Arial, sans-serif;">SERVICE</td>
                  <td style="padding: 8px 0; color: #2C2C2C; font-size: 14px; font-family: Arial, sans-serif;">${data.service_interest}</td>
                </tr>` : ''}
              </table>
              <div style="margin-top: 24px; padding: 16px; background: #FDF8F3; border-left: 3px solid #D4AF37;">
                <p style="color: #8B7355; font-size: 12px; font-family: Arial, sans-serif; margin: 0 0 8px 0;">MESSAGE</p>
                <p style="color: #2C2C2C; font-size: 14px; font-family: Arial, sans-serif; margin: 0; line-height: 1.6;">${data.message}</p>
              </div>
              <p style="margin-top: 24px; font-size: 11px; color: #B8A99A; font-family: Arial, sans-serif;">
                Reply directly to this email to respond to ${data.name}.
              </p>
            </div>
          `,
        })
      } catch (emailError) {
        // Log but don't fail — submission is already saved to Supabase
        console.error('Email send failed:', emailError)
      }
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}
