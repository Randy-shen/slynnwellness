import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = await createClient()

    const { data: services, error: servicesError } = await supabase
      .from('services')
      .select('id, name, category')
      .limit(5)

    const { data: testimonials, error: testimonialsError } = await supabase
      .from('testimonials')
      .select('id, client_name')
      .limit(3)

    if (servicesError || testimonialsError) {
      return NextResponse.json({
        status: 'error',
        servicesError: servicesError?.message,
        testimonialsError: testimonialsError?.message,
      }, { status: 500 })
    }

    return NextResponse.json({
      status: 'connected',
      services_count: services?.length ?? 0,
      services_sample: services,
      testimonials_count: testimonials?.length ?? 0,
      testimonials_sample: testimonials,
    })
  } catch (err) {
    return NextResponse.json({
      status: 'error',
      message: err instanceof Error ? err.message : 'Unknown error',
    }, { status: 500 })
  }
}
