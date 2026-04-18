export interface Service {
  id: string;
  slug: string;
  name: string;
  category: 'medical-aesthetic' | 'wellness' | 'skin-scalp-care';
  short_description: string;
  full_description: string;
  benefits: string[];
  price?: string;
  image_url: string | null;
  display_order: number;
  is_visible: boolean;
}

export const placeholderServices: Service[] = [
  // Medical Aesthetic (4 services)
  {
    id: '1',
    slug: 'botox-dysport',
    name: 'Botox & Dysport',
    category: 'medical-aesthetic',
    short_description: 'Smooth fine lines and wrinkles with precision neuromodulator treatments.',
    full_description: 'Our expert injectors use FDA-approved Botox and Dysport to relax facial muscles that cause dynamic wrinkles. These neuromodulator treatments are administered with precision to create natural-looking results that preserve your unique expressions while reducing the appearance of crow\'s feet, forehead lines, frown lines, and more. Each treatment is customized to your facial anatomy for optimal outcomes.',
    benefits: ['Reduces fine lines', 'Prevents new wrinkles', 'Natural-looking results', 'No downtime'],
    price: 'Starting at $12/unit',
    image_url: null,
    display_order: 1,
    is_visible: true,
  },
  {
    id: '2',
    slug: 'dermal-fillers',
    name: 'Dermal Fillers',
    category: 'medical-aesthetic',
    short_description: 'Restore lost volume and sculpt beautiful facial contours.',
    full_description: 'Hyaluronic acid fillers artfully placed to enhance lips, cheeks, jawline, and under-eye areas. Our skilled providers create balanced, harmonious results that complement your natural features. We use only premium FDA-approved fillers including Juvederm and Restylane product lines. Treatments are tailored to your goals, whether subtle enhancement or more dramatic contouring.',
    benefits: ['Instant volume restoration', 'Sculpted contours', 'Hydrated skin', 'Long-lasting results'],
    price: 'Starting at $650/syringe',
    image_url: null,
    display_order: 2,
    is_visible: true,
  },
  {
    id: '3',
    slug: 'sculptra',
    name: 'Sculptra',
    category: 'medical-aesthetic',
    short_description: 'Bio-stimulating collagen treatment for natural, gradual rejuvenation.',
    full_description: 'Sculptra stimulates your body\'s own collagen production for long-lasting results that develop gradually over time. Unlike immediate-effect fillers, Sculptra works with your biology to restore facial volume and improve skin quality from within. Results can last up to two years or more, making it an excellent investment in your appearance. A series of 2-3 treatments spaced 4-6 weeks apart is typically recommended for optimal outcomes.',
    benefits: ['Stimulates natural collagen', 'Gradual, natural results', 'Lasts up to 2 years', 'Full face rejuvenation'],
    price: 'Starting at $900/vial',
    image_url: null,
    display_order: 3,
    is_visible: true,
  },
  {
    id: '4',
    slug: 'kybella',
    name: 'Kybella',
    category: 'medical-aesthetic',
    short_description: 'Permanently eliminate submental fat for a defined jawline.',
    full_description: 'Kybella is the only FDA-approved injectable treatment for reducing submental fullness (double chin). The active ingredient deoxycholic acid naturally destroys fat cells, which are then eliminated by your body. Once destroyed, these cells cannot store fat again, making results permanent. Most patients require 2-4 treatment sessions spaced at least one month apart to achieve their desired profile.',
    benefits: ['Permanent fat reduction', 'No surgery required', 'Defined jawline', 'FDA approved'],
    price: 'Starting at $600/session',
    image_url: null,
    display_order: 4,
    is_visible: true,
  },
  // Wellness (4 services)
  {
    id: '5',
    slug: 'iv-vitamin-therapy',
    name: 'IV Vitamin Therapy',
    category: 'wellness',
    short_description: 'Replenish essential nutrients directly into your bloodstream for optimal wellness.',
    full_description: 'Our customized IV vitamin drips deliver essential vitamins, minerals, and antioxidants directly into your bloodstream for 100% absorption. Unlike oral supplements, IV therapy bypasses the digestive system, ensuring your body receives every nutrient. We offer a menu of targeted formulas including our Immunity Boost, Glow & Beauty, Athletic Recovery, Energy & Focus, and Hangover Relief drips, as well as fully customized blends.',
    benefits: ['Instant nutrient absorption', 'Boosts energy levels', 'Strengthens immunity', 'Hydration'],
    price: 'Starting at $150/session',
    image_url: null,
    display_order: 1,
    is_visible: true,
  },
  {
    id: '6',
    slug: 'medical-weight-loss',
    name: 'Medical Weight Loss',
    category: 'wellness',
    short_description: 'Physician-supervised weight loss with Semaglutide and Tirzepatide.',
    full_description: 'Our comprehensive medical weight loss program uses FDA-approved GLP-1 medications including Semaglutide (Ozempic/Wegovy) and Tirzepatide (Mounjaro) under physician supervision. These medications work by reducing appetite, slowing gastric emptying, and improving insulin sensitivity. Our program includes initial medical consultation, ongoing monitoring, lifestyle coaching, and nutritional guidance for sustainable long-term results.',
    benefits: ['Clinically proven results', 'Physician supervised', 'Personalized program', 'Sustainable results'],
    price: 'Starting at $299/month',
    image_url: null,
    display_order: 2,
    is_visible: true,
  },
  {
    id: '7',
    slug: 'hormone-replacement-therapy',
    name: 'Hormone Replacement Therapy',
    category: 'wellness',
    short_description: 'Restore hormonal balance for improved energy, mood, and vitality.',
    full_description: 'Our hormone optimization program addresses imbalances that affect quality of life for both men and women. We begin with comprehensive hormone panel testing to identify deficiencies or excesses, then create a personalized replacement protocol. Treatments may include bioidentical hormones delivered via creams, pellets, injections, or oral medications. Regular monitoring ensures optimal levels are maintained throughout therapy.',
    benefits: ['Improved energy', 'Better sleep quality', 'Enhanced mood', 'Increased libido'],
    price: 'Consultation required',
    image_url: null,
    display_order: 3,
    is_visible: true,
  },
  {
    id: '8',
    slug: 'vitamin-injections',
    name: 'Vitamin Injections',
    category: 'wellness',
    short_description: 'Quick booster shots for energy, immunity, and metabolism support.',
    full_description: 'Our vitamin injection menu includes B12, Vitamin D, Lipo-B, and custom blends designed for specific wellness goals. Administered as a quick intramuscular injection, these shots offer faster absorption than oral supplements and immediate availability to your cells. Popular options include our Skinny Shot (Lipo-B MIC) for metabolism support, B12 for energy and mood, and our custom immunity blend.',
    benefits: ['Fast absorption', 'Energy boost', 'Metabolism support', 'Quick treatment'],
    price: 'Starting at $35/injection',
    image_url: null,
    display_order: 4,
    is_visible: true,
  },
  // Skin & Scalp Care (5 services)
  {
    id: '9',
    slug: 'hydrafacial',
    name: 'HydraFacial',
    category: 'skin-scalp-care',
    short_description: 'The signature resurfacing treatment that cleanses, extracts, and hydrates.',
    full_description: 'HydraFacial is a patented 3-step treatment that cleanses, exfoliates, and infuses skin with nourishing serums. The Vortex-Fusion delivery system creates a vortex effect to dislodge impurities while simultaneously delivering hydrating, brightening, and anti-aging serums. Results are immediate with no downtime — skin looks cleaner, plumper, and more radiant after just one session. We offer Classic, Deluxe, and Platinum HydraFacial options.',
    benefits: ['Deep cleansing', 'Hydration boost', 'Glowing skin', 'No downtime'],
    price: 'Starting at $175/session',
    image_url: null,
    display_order: 1,
    is_visible: true,
  },
  {
    id: '10',
    slug: 'microneedling',
    name: 'Microneedling',
    category: 'skin-scalp-care',
    short_description: 'Stimulate collagen production for smoother, firmer, rejuvenated skin.',
    full_description: 'Our medical-grade microneedling creates controlled micro-injuries that trigger collagen and elastin production. Using the SkinPen or Morpheus8 device, fine needles create precise channels that stimulate the skin\'s natural healing response. This results in improved texture, reduced pore size, diminished scarring, and firmer, more youthful skin over a series of treatments. We offer standard microneedling as well as RF microneedling for enhanced tightening.',
    benefits: ['Collagen stimulation', 'Reduces scarring', 'Minimizes pores', 'Skin tightening'],
    price: 'Starting at $300/session',
    image_url: null,
    display_order: 2,
    is_visible: true,
  },
  {
    id: '11',
    slug: 'chemical-peels',
    name: 'Chemical Peels',
    category: 'skin-scalp-care',
    short_description: 'Reveal brighter, smoother skin with our customized chemical peel treatments.',
    full_description: 'We offer a range of chemical peels from gentle enzyme peels to deeper medical-grade options. Our estheticians and medical providers will assess your skin and recommend the appropriate peel depth and formulation for your concerns. Light peels require no downtime, while medium-depth peels may involve 3-7 days of peeling for more dramatic results. Popular options include VI Peel, Jessner\'s, TCA, and AHA/BHA blends for brightening and acne-prone skin.',
    benefits: ['Exfoliates dead skin', 'Brightens complexion', 'Reduces hyperpigmentation', 'Smooths texture'],
    price: 'Starting at $125/session',
    image_url: null,
    display_order: 3,
    is_visible: true,
  },
  {
    id: '12',
    slug: 'prp-hair-restoration',
    name: 'PRP Hair Restoration',
    category: 'skin-scalp-care',
    short_description: 'Harness your body\'s growth factors to combat hair loss and thinning.',
    full_description: 'Platelet-Rich Plasma therapy uses your own blood\'s growth factors to stimulate hair follicles and promote hair growth. A small amount of blood is drawn, processed in a centrifuge to concentrate the platelets, and then injected into areas of thinning or hair loss. PRP contains natural growth factors that rejuvenate dormant follicles and extend the anagen (growth) phase of the hair cycle. Best results are seen after 3-4 monthly treatments.',
    benefits: ['Natural treatment', 'Stimulates hair growth', 'Thickens existing hair', 'No downtime'],
    price: 'Starting at $600/session',
    image_url: null,
    display_order: 4,
    is_visible: true,
  },
  {
    id: '13',
    slug: 'led-light-therapy',
    name: 'LED Light Therapy',
    category: 'skin-scalp-care',
    short_description: 'Rejuvenate skin at the cellular level with targeted light wavelengths.',
    full_description: 'LED light therapy uses specific wavelengths of light to stimulate cellular processes and promote skin rejuvenation. Red light (630-700nm) penetrates deep to stimulate collagen and reduce inflammation. Blue light (415-445nm) targets acne-causing bacteria. Near-infrared light enhances cellular repair and circulation. Treatments are painless, relaxing, and have no downtime. LED therapy works beautifully as a standalone treatment or as an add-on to enhance results from other services.',
    benefits: ['Anti-aging effects', 'Reduces inflammation', 'Improves skin tone', 'Relaxing treatment'],
    price: 'Starting at $75/session',
    image_url: null,
    display_order: 5,
    is_visible: true,
  },
]

export const getServicesByCategory = (category: string): Service[] => {
  return placeholderServices.filter(s => s.category === category && s.is_visible)
    .sort((a, b) => a.display_order - b.display_order);
}

export const getServiceBySlug = (slug: string): Service | undefined => {
  return placeholderServices.find(s => s.slug === slug);
}

export const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    'medical-aesthetic': 'Medical Aesthetic',
    'wellness': 'Wellness',
    'skin-scalp-care': 'Skin & Scalp Care',
  };
  return labels[category] || category;
}
