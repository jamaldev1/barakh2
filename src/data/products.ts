export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  category: string
  price: number
  unit: string
  rating: number
  reviewsCount: number
  inStock: boolean
  badge?: string
  shortDescription: string
  fullDescription: string
  images: string[]
  keyBenefits: string[]
  specifications: { label: string; value: string }[]
  applicationDosages: { crop: string; dosage: string; frequency: string }[]
  faqs: { question: string; answer: string }[]
}

export const productsData: Product[] = [
  {
    id: 'organic-vermicompost',
    slug: 'organic-vermicompost',
    name: 'Premium Organic Vermicompost',
    tagline: '100% Pure Earthworm Castings for Supercharged Soil Health',
    category: 'Bio-Fertilizers',
    price: 1500,
    unit: '50 kg Bag',
    rating: 4.9,
    reviewsCount: 128,
    inStock: true,
    badge: 'Best Seller',
    shortDescription:
      'Field-tested, biologically active organic castings produced through controlled digestion of cow manure and organic biomass by pure Eisenia fetida earthworms. 100% free from weed seeds and synthetic chemicals.',
    fullDescription: `Al Barakh Premium Vermicompost is an elite, odor-free bio-organic fertilizer packed with plant-available nitrogen, phosphorus, potassium, calcium, magnesium, and essential trace minerals.

Unlike standard chemical fertilizers that deplete the soil microbiology, our vermicompost introduces billions of beneficial aerobic microorganisms, mycorrhizal fungi, and humic & fulvic acids that rebuild tired soil, enhance water retention by up to 40%, and deliver dramatic yield increases across all grain, cash, vegetable, and orchard crops.`,
    images: [
      '/images/hero-vermicompost.jpg',
      '/images/statssection.jpg',
      '/images/satisfiedfarmers.jpg',
    ],
    keyBenefits: [
      'Boosts root aeration, water holding capacity, and soil porosity',
      'Provides rich humic & fulvic acids for rapid nutrient uptake',
      'Will never burn plant roots or leaves, even if overdosed',
      'Increases crop disease resistance and suppresses soil-borne pathogens',
      'Certified 100% weed-seed free, chemical-free, and pathogen-free',
    ],
    specifications: [
      { label: 'Moisture Content', value: '25% – 35%' },
      { label: 'Organic Carbon', value: '> 18.0%' },
      { label: 'pH Range', value: '6.8 – 7.4 (Neutral)' },
      { label: 'C:N Ratio', value: '< 15:1' },
      { label: 'Packaging', value: '50 kg UV-resistant woven bags' },
      { label: 'Shelf Life', value: '12 Months (Stored in shade)' },
    ],
    applicationDosages: [
      { crop: 'Wheat, Rice & Maize', dosage: '4 – 6 Bags (200-300 kg) / Acre', frequency: 'During land preparation & basal dressing' },
      { crop: 'Citrus, Mango & Guava Orchards', dosage: '5 – 10 kg / Mature Tree', frequency: 'Applied twice a year (Pre-flowering & Post-harvest)' },
      { crop: 'Vegetables (Tomato, Chili, Potato)', dosage: '8 – 10 Bags (400-500 kg) / Acre', frequency: 'Bed preparation and root zone furrow' },
      { crop: 'Potted Plants & Kitchen Gardens', dosage: '20% to 30% ratio with soil', frequency: 'Monthly top-dressing (2-3 tablespoons)' },
    ],
    faqs: [
      {
        question: 'Can vermicompost replace chemical DAP and Urea?',
        answer: 'Yes! Progressive farmers gradually cut chemical fertilizer use by 50% in Year 1 and up to 80-100% in subsequent years as soil microbiology and natural organic fertility are restored.',
      },
      {
        question: 'How do you deliver bulk commercial orders across Pakistan?',
        answer: 'We dispatch through dedicated freight logistics (truckload & mini-trucks) with doorstep delivery across Punjab, Sindh, KPK, and Balochistan.',
      },
    ],
  },
  {
    id: 'live-red-wigglers',
    slug: 'live-red-wigglers',
    name: 'Live Red Wigglers (Eisenia Fetida)',
    tagline: 'High-Efficiency Breeder Colonies for Commercial & Farm-Level Composting',
    category: 'Breeder Stock',
    price: 3500,
    unit: '1 kg Live Colony with Bedding',
    rating: 5.0,
    reviewsCount: 94,
    inStock: true,
    badge: 'Fast Breeder',
    shortDescription:
      'Acclimatized, voracious composting earthworms (Eisenia fetida) bred under high-efficiency conditions. Rapid breeders capable of consuming their own body weight in organic waste every 24 hours.',
    fullDescription: `Kickstart your own farm-level or commercial vermicomposting system with Al Barakh’s pure, vigorous Eisenia fetida breeding stock.

Every colony is carefully hand-harvested with fertile cocoons, juvenile worms, and mature breeders nestled inside microbially rich habitat bedding to ensure 100% survival during transit. Perfect for recycling cattle manure, agricultural residues, agro-industrial waste, and household organic material.`,
    images: [
      '/images/statssection.jpg',
      '/images/hero-vermicompost.jpg',
      '/images/satisfiedfarmers.jpg',
    ],
    keyBenefits: [
      'High thermal tolerance acclimatized for Pakistani climate extremes',
      'Rapid reproduction cycle (cocoons hatch every 21 days)',
      'Consumes 50% to 100% of body weight in organic matter daily',
      'Includes active breeding cocoons & starter microbial inoculant',
      'Safe, temperature-controlled transit packaging with 100% live arrival guarantee',
    ],
    specifications: [
      { label: 'Species', value: 'Eisenia fetida (Pure Tiger Worms)' },
      { label: 'Population', value: '~1,000 to 1,200 worms + cocoons per kg' },
      { label: 'Feed Source', value: 'Aged cow dung, crop residue, shredded cardboard' },
      { label: 'Optimum Temp', value: '15°C – 32°C' },
      { label: 'Packaging', value: 'Ventilated breathable travel crates' },
    ],
    applicationDosages: [
      { crop: 'Standard Farm Composting Bed (30ft x 4ft)', dosage: '10 – 15 kg Starter Stock', frequency: 'Yields 1.5 - 2 tons vermicompost every 45-60 days' },
      { crop: 'Home / Kitchen Waste Bin', dosage: '1 – 2 kg Colony', frequency: 'Recycles 0.5 - 1 kg food scraps daily' },
    ],
    faqs: [
      {
        question: 'What do I feed the worms once they arrive?',
        answer: 'They thrive on pre-soaked aged cow dung, shredded cardboard, dry leaves, and non-citrus fruit/vegetable scraps. We provide a full beginner guide with every order.',
      },
      {
        question: 'Do you provide live arrival guarantee?',
        answer: 'Yes! We use specialized breathable, moisture-locked crates with express nationwide courier dispatch to ensure 100% live arrival.',
      },
    ],
  },
  {
    id: 'vermiwash-liquid-gold',
    slug: 'vermiwash-liquid-gold',
    name: 'Organic Vermiwash (Liquid Gold)',
    tagline: 'Microbial Foliar Tonic & Natural Bio-Pesticide Booster',
    category: 'Foliar Bio-Stimulants',
    price: 850,
    unit: '5 Liter Can',
    rating: 4.8,
    reviewsCount: 52,
    inStock: true,
    badge: 'Popular',
    shortDescription:
      'Liquid bio-stimulant extracted during the vermicomposting process. Rich in auxins, gibberellins, amino acids, and beneficial soil microbes for instant foliar absorption and disease immunity.',
    fullDescription: `Al Barakh Vermiwash is a clear, amber-colored liquid bio-fertilizer collected from active vermiculture systems.

Packed with plant growth-promoting hormones, water-soluble vitamins, enzymes, and live antagonistic microbes, it acts as both an invigorating foliar nutrition spray and an eco-friendly pest repellent against sucking insects, aphids, and powdery mildew.`,
    images: [
      '/images/satisfiedfarmers.jpg',
      '/images/statssection.jpg',
      '/images/hero-vermicompost.jpg',
    ],
    keyBenefits: [
      'Delivers instant micronutrient replenishment through leaf stomata',
      'Stimulates prolific flowering, reduces fruit drop, and boosts fruit size',
      'Acts as a natural bio-protectant against fungal and insect pests',
      '100% compatible with organic farming & drip irrigation fertigation',
    ],
    specifications: [
      { label: 'Form', value: 'Aqueous Liquid Bio-Tonic' },
      { label: 'Application Method', value: 'Foliar Spray or Drip Fertigation' },
      { label: 'Dilution Ratio', value: '1:10 (1 liter Vermiwash in 10 liters clean water)' },
      { label: 'Packaging', value: '5L & 20L HDPE Jerry Cans' },
    ],
    applicationDosages: [
      { crop: 'Vegetables & Cotton', dosage: '2 – 3 Liters / Acre (Diluted in 100L water)', frequency: 'Every 15 days during vegetative and flowering phases' },
      { crop: 'Fruit Orchards', dosage: '5 Liters / Acre', frequency: 'At bud burst, petal fall, and fruit development' },
    ],
    faqs: [
      {
        question: 'How is Vermiwash applied?',
        answer: 'Mix 1 liter of Vermiwash with 10 liters of water and spray on the foliage early morning or late afternoon for maximum leaf absorption.',
      },
    ],
  },
  {
    id: 'agricultural-biochar',
    slug: 'agricultural-biochar',
    name: 'Activated Agricultural Biochar',
    tagline: 'Permanent Carbon Soil Conditioner for Maximum Water Retention',
    category: 'Soil Conditioners',
    price: 2200,
    unit: '40 kg Sack',
    rating: 4.9,
    reviewsCount: 38,
    inStock: true,
    badge: 'Soil Enhancer',
    shortDescription:
      'High-surface-area pyrolyzed biomass biochar inoculated with beneficial microorganisms and vermicompost tea. Permanently amends sandy, saline, or degraded soils.',
    fullDescription: `Our Activated Biochar is an organic, stable carbon matrix engineered to reside in your soil for decades. 

It dramatically increases cation exchange capacity (CEC), locks in moisture during intense heatwaves, prevents fertilizer leaching, and creates millions of microscopic shelter pores for beneficial soil microbes to flourish.`,
    images: [
      '/images/statssection.jpg',
      '/images/hero-vermicompost.jpg',
      '/images/satisfiedfarmers.jpg',
    ],
    keyBenefits: [
      'Reduces irrigation frequency by holding up to 5x its weight in water',
      'Prevents nutrient wash-out in sandy soils',
      'Buffers soil salinity and neutralizes acidic/alkaline pH extremes',
      'Permanent one-time soil amendment lasting for years',
    ],
    specifications: [
      { label: 'Fixed Carbon', value: '> 75%' },
      { label: 'Surface Area', value: '> 300 m²/g' },
      { label: 'Inoculation', value: 'Pre-charged with live vermi-microbiology' },
      { label: 'Packaging', value: '40 kg Sacks' },
    ],
    applicationDosages: [
      { crop: 'Field Crops', dosage: '200 – 400 kg / Acre', frequency: 'One-time application during field preparation' },
      { crop: 'Fruit Trees', dosage: '2 – 3 kg / Tree pit', frequency: 'Mixed with soil during planting' },
    ],
    faqs: [
      {
        question: 'Does biochar need to be re-applied every year?',
        answer: 'No! Biochar does not decompose rapidly like raw biomass; it remains in the soil structure for decades, continually retaining water and nutrients.',
      },
    ],
  },
]
