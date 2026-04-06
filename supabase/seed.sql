-- Seed data for Slynn Wellness
-- Run after migrations

insert into services (slug, name, category, short_description, full_description, benefits, price, display_order, is_visible) values
-- Medical Aesthetic
(
  'botox-dysport',
  'Botox & Dysport',
  'medical-aesthetic',
  'Smooth fine lines and wrinkles with precision neuromodulator treatments.',
  'Our expert injectors use FDA-approved Botox and Dysport to relax facial muscles that cause dynamic wrinkles. These neuromodulator treatments are administered with precision to create natural-looking results that preserve your unique expressions while reducing the appearance of crow''s feet, forehead lines, frown lines, and more. Each treatment is customized to your facial anatomy for optimal outcomes.',
  array['Reduces fine lines', 'Prevents new wrinkles', 'Natural-looking results', 'No downtime'],
  'Starting at $12/unit',
  1,
  true
),
(
  'dermal-fillers',
  'Dermal Fillers',
  'medical-aesthetic',
  'Restore lost volume and sculpt beautiful facial contours.',
  'Hyaluronic acid fillers artfully placed to enhance lips, cheeks, jawline, and under-eye areas. Our skilled providers create balanced, harmonious results that complement your natural features. We use only premium FDA-approved fillers including Juvederm and Restylane product lines.',
  array['Instant volume restoration', 'Sculpted contours', 'Hydrated skin', 'Long-lasting results'],
  'Starting at $650/syringe',
  2,
  true
),
(
  'sculptra',
  'Sculptra',
  'medical-aesthetic',
  'Bio-stimulating collagen treatment for natural, gradual rejuvenation.',
  'Sculptra stimulates your body''s own collagen production for long-lasting results that develop gradually over time. Unlike immediate-effect fillers, Sculptra works with your biology to restore facial volume and improve skin quality from within. Results can last up to two years or more.',
  array['Stimulates natural collagen', 'Gradual, natural results', 'Lasts up to 2 years', 'Full face rejuvenation'],
  'Starting at $900/vial',
  3,
  true
),
(
  'kybella',
  'Kybella',
  'medical-aesthetic',
  'Permanently eliminate submental fat for a defined jawline.',
  'Kybella is the only FDA-approved injectable treatment for reducing submental fullness (double chin). The active ingredient deoxycholic acid naturally destroys fat cells, which are then eliminated by your body. Once destroyed, these cells cannot store fat again, making results permanent.',
  array['Permanent fat reduction', 'No surgery required', 'Defined jawline', 'FDA approved'],
  'Starting at $600/session',
  4,
  true
),
-- Wellness
(
  'iv-vitamin-therapy',
  'IV Vitamin Therapy',
  'wellness',
  'Replenish essential nutrients directly into your bloodstream for optimal wellness.',
  'Our customized IV vitamin drips deliver essential vitamins, minerals, and antioxidants directly into your bloodstream for 100% absorption. Unlike oral supplements, IV therapy bypasses the digestive system, ensuring your body receives every nutrient.',
  array['Instant nutrient absorption', 'Boosts energy levels', 'Strengthens immunity', 'Hydration'],
  'Starting at $150/session',
  1,
  true
),
(
  'medical-weight-loss',
  'Medical Weight Loss',
  'wellness',
  'Physician-supervised weight loss with Semaglutide and Tirzepatide.',
  'Our comprehensive medical weight loss program uses FDA-approved GLP-1 medications including Semaglutide and Tirzepatide under physician supervision. Our program includes initial medical consultation, ongoing monitoring, lifestyle coaching, and nutritional guidance for sustainable long-term results.',
  array['Clinically proven results', 'Physician supervised', 'Personalized program', 'Sustainable results'],
  'Starting at $299/month',
  2,
  true
),
(
  'hormone-replacement-therapy',
  'Hormone Replacement Therapy',
  'wellness',
  'Restore hormonal balance for improved energy, mood, and vitality.',
  'Our hormone optimization program addresses imbalances that affect quality of life for both men and women. We begin with comprehensive hormone panel testing to identify deficiencies or excesses, then create a personalized replacement protocol.',
  array['Improved energy', 'Better sleep quality', 'Enhanced mood', 'Increased libido'],
  'Consultation required',
  3,
  true
),
(
  'vitamin-injections',
  'Vitamin Injections',
  'wellness',
  'Quick booster shots for energy, immunity, and metabolism support.',
  'Our vitamin injection menu includes B12, Vitamin D, Lipo-B, and custom blends designed for specific wellness goals. Administered as a quick intramuscular injection, these shots offer faster absorption than oral supplements.',
  array['Fast absorption', 'Energy boost', 'Metabolism support', 'Quick treatment'],
  'Starting at $35/injection',
  4,
  true
),
-- Skin & Scalp Care
(
  'hydrafacial',
  'HydraFacial',
  'skin-scalp-care',
  'The signature resurfacing treatment that cleanses, extracts, and hydrates.',
  'HydraFacial is a patented 3-step treatment that cleanses, exfoliates, and infuses skin with nourishing serums. The Vortex-Fusion delivery system creates a vortex effect to dislodge impurities while simultaneously delivering hydrating, brightening, and anti-aging serums.',
  array['Deep cleansing', 'Hydration boost', 'Glowing skin', 'No downtime'],
  'Starting at $175/session',
  1,
  true
),
(
  'microneedling',
  'Microneedling',
  'skin-scalp-care',
  'Stimulate collagen production for smoother, firmer, rejuvenated skin.',
  'Our medical-grade microneedling creates controlled micro-injuries that trigger collagen and elastin production. This results in improved texture, reduced pore size, diminished scarring, and firmer, more youthful skin over a series of treatments.',
  array['Collagen stimulation', 'Reduces scarring', 'Minimizes pores', 'Skin tightening'],
  'Starting at $300/session',
  2,
  true
),
(
  'chemical-peels',
  'Chemical Peels',
  'skin-scalp-care',
  'Reveal brighter, smoother skin with our customized chemical peel treatments.',
  'We offer a range of chemical peels from gentle enzyme peels to deeper medical-grade options. Our estheticians and medical providers will assess your skin and recommend the appropriate peel depth and formulation for your concerns.',
  array['Exfoliates dead skin', 'Brightens complexion', 'Reduces hyperpigmentation', 'Smooths texture'],
  'Starting at $125/session',
  3,
  true
),
(
  'prp-hair-restoration',
  'PRP Hair Restoration',
  'skin-scalp-care',
  'Harness your body''s growth factors to combat hair loss and thinning.',
  'Platelet-Rich Plasma therapy uses your own blood''s growth factors to stimulate hair follicles and promote hair growth. A small amount of blood is drawn, processed in a centrifuge to concentrate the platelets, and then injected into areas of thinning or hair loss.',
  array['Natural treatment', 'Stimulates hair growth', 'Thickens existing hair', 'No downtime'],
  'Starting at $600/session',
  4,
  true
),
(
  'led-light-therapy',
  'LED Light Therapy',
  'skin-scalp-care',
  'Rejuvenate skin at the cellular level with targeted light wavelengths.',
  'LED light therapy uses specific wavelengths of light to stimulate cellular processes and promote skin rejuvenation. Red light stimulates collagen, blue light targets acne-causing bacteria, and near-infrared light enhances cellular repair and circulation.',
  array['Anti-aging effects', 'Reduces inflammation', 'Improves skin tone', 'Relaxing treatment'],
  'Starting at $75/session',
  5,
  true
);

-- Seed testimonials
insert into testimonials (client_name, rating, content, service, is_visible) values
(
  'Sarah M.',
  5,
  'Absolutely love Slynn Wellness! The staff is incredibly knowledgeable and the results from my Botox treatment were natural and beautiful. This is now my go-to spa in Pasadena.',
  'Botox & Dysport',
  true
),
(
  'Jennifer L.',
  5,
  'The HydraFacial was life-changing for my skin. I walked out glowing! The ambiance is so luxurious and peaceful. Highly recommend to anyone looking for quality skincare.',
  'HydraFacial',
  true
),
(
  'Michelle T.',
  5,
  'I''ve been doing the Medical Weight Loss program for 3 months and have lost 22 pounds. The team is supportive, professional, and truly invested in my success.',
  'Medical Weight Loss',
  true
);
