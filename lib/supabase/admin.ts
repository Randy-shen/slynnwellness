import { placeholderServices, Service } from '@/lib/content/placeholder-services'

interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  service_interest?: string;
  message: string;
}

interface PriceItem {
  id: string;
  service_name: string;
  category: string;
  price: string;
  description?: string;
}

interface Testimonial {
  id: string;
  client_name: string;
  rating: number;
  content: string;
  service?: string;
  created_at: string;
}

function hasSupabaseConfig(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your-supabase-url' &&
    process.env.SUPABASE_SERVICE_ROLE_KEY &&
    process.env.SUPABASE_SERVICE_ROLE_KEY !== 'your-service-role-key'
  )
}

async function getSupabaseAdmin() {
  if (!hasSupabaseConfig()) return null
  try {
    const { createClient } = await import('@supabase/supabase-js')
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
  } catch {
    return null
  }
}

export async function getServices(category?: string): Promise<Service[]> {
  const supabase = await getSupabaseAdmin()
  if (!supabase) {
    if (category) {
      return placeholderServices.filter(s => s.category === category && s.is_visible)
        .sort((a, b) => a.display_order - b.display_order)
    }
    return placeholderServices.filter(s => s.is_visible)
  }

  try {
    let query = supabase.from('services').select('*').eq('is_visible', true).order('display_order')
    if (category) {
      query = query.eq('category', category)
    }
    const { data, error } = await query
    if (error) throw error
    return (data as Service[]) || []
  } catch {
    return placeholderServices.filter(s => !category || s.category === category)
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const supabase = await getSupabaseAdmin()
  if (!supabase) {
    return placeholderServices.find(s => s.slug === slug) || null
  }

  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('slug', slug)
      .single()
    if (error) throw error
    return data as Service
  } catch {
    return placeholderServices.find(s => s.slug === slug) || null
  }
}

export async function createService(serviceData: Omit<Service, 'id'>): Promise<Service | null> {
  const supabase = await getSupabaseAdmin()
  if (!supabase) return null

  try {
    const { data, error } = await supabase
      .from('services')
      .insert(serviceData)
      .select()
      .single()
    if (error) throw error
    return data as Service
  } catch {
    return null
  }
}

export async function updateService(id: string, serviceData: Partial<Service>): Promise<Service | null> {
  const supabase = await getSupabaseAdmin()
  if (!supabase) return null

  try {
    const { data, error } = await supabase
      .from('services')
      .update(serviceData)
      .eq('id', id)
      .select()
      .single()
    if (error) throw error
    return data as Service
  } catch {
    return null
  }
}

export async function deleteService(id: string): Promise<boolean> {
  const supabase = await getSupabaseAdmin()
  if (!supabase) return false

  try {
    const { error } = await supabase
      .from('services')
      .delete()
      .eq('id', id)
    if (error) throw error
    return true
  } catch {
    return false
  }
}

export async function getPriceList(): Promise<PriceItem[]> {
  const supabase = await getSupabaseAdmin()
  if (!supabase) {
    return placeholderServices.map(s => ({
      id: s.id,
      service_name: s.name,
      category: s.category,
      price: s.price ?? 'Contact for pricing',
      description: s.short_description,
    }))
  }

  try {
    const { data, error } = await supabase
      .from('price_list')
      .select('*')
      .order('category, display_order')
    if (error) throw error
    return (data as PriceItem[]) || []
  } catch {
    return placeholderServices.map(s => ({
      id: s.id,
      service_name: s.name,
      category: s.category,
      price: s.price ?? 'Contact for pricing',
      description: s.short_description,
    }))
  }
}

export async function updatePrice(id: string, data: Partial<PriceItem>): Promise<PriceItem | null> {
  const supabase = await getSupabaseAdmin()
  if (!supabase) return null

  try {
    const { data: updated, error } = await supabase
      .from('price_list')
      .update(data)
      .eq('id', id)
      .select()
      .single()
    if (error) throw error
    return updated as PriceItem
  } catch {
    return null
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = await getSupabaseAdmin()
  if (!supabase) {
    return [
      {
        id: '1',
        client_name: 'Sarah M.',
        rating: 5,
        content: 'Absolutely love Slynn Wellness! The staff is incredibly knowledgeable and the results from my Botox treatment were natural and beautiful. This is now my go-to spa.',
        service: 'Botox & Dysport',
        created_at: new Date().toISOString(),
      },
      {
        id: '2',
        client_name: 'Jennifer L.',
        rating: 5,
        content: 'The HydraFacial was life-changing for my skin. I walked out glowing! The ambiance is so luxurious and peaceful. Highly recommend to anyone looking for quality skincare.',
        service: 'HydraFacial',
        created_at: new Date().toISOString(),
      },
      {
        id: '3',
        client_name: 'Michelle T.',
        rating: 5,
        content: 'I\'ve been doing the Medical Weight Loss program for 3 months and have lost 22 pounds. The team is supportive, professional, and truly invested in my success.',
        service: 'Medical Weight Loss',
        created_at: new Date().toISOString(),
      },
    ]
  }

  try {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) throw error
    return (data as Testimonial[]) || []
  } catch {
    return []
  }
}

export async function saveContactSubmission(data: ContactSubmission): Promise<boolean> {
  const supabase = await getSupabaseAdmin()
  if (!supabase) {
    console.log('Contact submission (no DB):', data)
    return true
  }

  try {
    const { error } = await supabase
      .from('contact_submissions')
      .insert(data)
    if (error) throw error
    return true
  } catch {
    return false
  }
}
