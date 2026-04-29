import { createPublicReadClient } from '@/lib/supabase/public'

export interface IVTherapy {
  id: string
  name: string
  purpose: string
  ingredients: string[]
  infusion_time: string
  is_special: boolean
  note?: string
  price?: string
  display_order: number
  is_visible: boolean
}

export const placeholderIVTherapies: IVTherapy[] = [
  {
    id: '1',
    name: 'Basic Wellness',
    purpose: 'Replenish, rehydrate, and restore. Our foundational drip delivers essential fluids and vitamins to combat fatigue, dehydration, and the demands of everyday life.',
    ingredients: ['B-Complex', 'Magnesium 500mg–1g', 'Vitamin C 500mg–2g', 'Normal Saline 500mL–1L'],
    infusion_time: '45–60 min',
    is_special: false,
    price: 'Starting at $185/session',
    display_order: 1,
    is_visible: true,
  },
  {
    id: '2',
    name: 'Energy & Metabolism',
    purpose: 'Ignite your energy and sharpen your focus. This power-packed drip fuels your metabolism, enhances mental clarity, and supports sustained vitality throughout your day.',
    ingredients: ['L-Carnitine 500mg', 'Taurine 500mg', 'Vitamin B12 1000mcg', 'B-Complex', 'Alpha Lipoic Acid 300–600mg', 'Normal Saline 500mL–1L'],
    infusion_time: '45–60 min',
    is_special: false,
    display_order: 2,
    is_visible: true,
  },
  {
    id: '3',
    name: 'Immunity Shield',
    purpose: "Fortify your body's natural defenses. Whether fighting off illness, recovering from travel, or bouncing back from fatigue, this drip provides powerful immune support when you need it most.",
    ingredients: ['Vitamin C 2–5g', 'Zinc 5–10mg', 'B-Complex', 'Vitamin B12 1000mcg', 'Normal Saline 500mL–1L'],
    infusion_time: '45–60 min',
    is_special: false,
    display_order: 3,
    is_visible: true,
  },
  {
    id: '4',
    name: 'Recovery & Refresh',
    purpose: 'Bounce back fast. Our rapid recovery drip restores hydration, calms nausea, and flushes toxins — leaving you feeling refreshed and renewed.',
    ingredients: ['Ondansetron 4mg', 'Magnesium 1g', 'B-Complex', 'Glutathione 600mg Push', 'Normal Saline 500mL–1L'],
    infusion_time: '45–60 min',
    is_special: false,
    display_order: 4,
    is_visible: true,
  },
  {
    id: '5',
    name: 'Athletic Performance',
    purpose: 'Train harder. Recover faster. Engineered for peak performance, this drip replenishes amino acids and electrolytes to accelerate muscle recovery and reduce downtime.',
    ingredients: ['Amino Blend (Arginine · Glutamine · Lysine · Proline)', 'Magnesium 1g', 'B-Complex', "Normal Saline / Lactated Ringer's 500mL–1L"],
    infusion_time: '45–60 min',
    is_special: false,
    display_order: 5,
    is_visible: true,
  },
  {
    id: '6',
    name: 'Slim & Sculpt',
    purpose: 'Support your weight loss journey from the inside out. This targeted drip enhances fat metabolism, supports liver detoxification, and complements your wellness and fitness goals.',
    ingredients: ['MIC Blend (Methionine · Inositol · Choline)', 'Vitamin B12 1000mcg', 'L-Carnitine 500–1000mg', 'Normal Saline 500mL–1L'],
    infusion_time: '45–60 min',
    is_special: false,
    display_order: 6,
    is_visible: true,
  },
  {
    id: '7',
    name: 'Beauty & Glow',
    purpose: 'Radiate from within. This luxurious skin-brightening drip delivers a potent blend of antioxidants and collagen-supporting nutrients for luminous, healthy skin.',
    ingredients: ['Vitamin C 2g', 'Glutathione 1200mg IV Push', 'Biotin 2mg', 'Normal Saline 500mL–1L'],
    infusion_time: '45–60 min',
    is_special: false,
    display_order: 7,
    is_visible: true,
  },
  {
    id: '8',
    name: 'Detox & Cleanse',
    purpose: 'Reset and renew at the cellular level. This powerful antioxidant drip neutralizes free radicals, supports liver function, and helps your body restore its natural balance.',
    ingredients: ['Glutathione 600–1200mg IV Push', 'Vitamin C 1–2g', 'B-Complex', 'Normal Saline 500mL–1L'],
    infusion_time: '45–60 min',
    is_special: false,
    display_order: 8,
    is_visible: true,
  },
  {
    id: '9',
    name: 'NAD+ Infusion',
    purpose: 'The ultimate anti-aging and brain optimization therapy. NAD+ works at the cellular level to boost energy production, enhance mental clarity, and support longevity.',
    ingredients: ['NAD+ 100–250mg (Slow Infusion)', 'B-Complex', 'Magnesium 500mg', 'Normal Saline 500mL–1L'],
    infusion_time: '2–4 hours',
    is_special: true,
    note: 'Slow infusion required — 2 to 4 hours',
    display_order: 9,
    is_visible: true,
  },
]

export async function getIVTherapies(): Promise<IVTherapy[]> {
  try {
    const supabase = createPublicReadClient()
    const { data, error } = await supabase
      .from('iv_therapies')
      .select('*')
      .eq('is_visible', true)
      .order('display_order')
    if (error || !data || data.length === 0) return placeholderIVTherapies
    return data as IVTherapy[]
  } catch {
    return placeholderIVTherapies
  }
}
