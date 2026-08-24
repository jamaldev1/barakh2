export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  category: string
  price: number
  unit: string
  packagingOptions?: string[]
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
    name: 'Premium-Quality Vermicompost',
    tagline: '100% Pure Earthworm Castings for Healthier Soil & Better Farming',
    category: 'Organic Fertilizers',
    price: 1400,
    unit: 'Bag (Available in 40 KG & 5 KG)',
    packagingOptions: ['40 KG Bag', '5 KG Bag'],
    rating: 4.9,
    reviewsCount: 142,
    inStock: true,
    badge: 'Core Product',
    shortDescription:
      'Premium-quality organic fertilizer produced through vermicomposting, enriched with natural nutrients and organic matter to improve soil health, enhance plant growth, and support sustainable agriculture.',
    fullDescription: `Al Barakh Premium-Quality Vermicompost is an elite, odor-free bio-organic fertilizer packed with plant-available nutrients, organic matter, and beneficial soil microbiology.
    
Produced through controlled earthworm digestion of organic biomass, our vermicompost introduces living microbial networks and humic acids that rebuild tired soil, enhance water retention, and deliver healthy crop yields across all grain, vegetable, cash crop, and orchard acreage in Pakistan.`,
    images: [
      '/images/hero-vermicompost.jpg',
      '/images/statssection.jpg',
      '/images/satisfiedfarmers.jpg',
    ],
    keyBenefits: [
      'Enriched with natural nutrients and high organic matter content',
      'Improves soil health, porosity, aeration, and moisture retention',
      'Enhances vigorous root growth, leaf health, and crop resistance',
      'Available in convenient 40 KG (commercial) and 5 KG (gardening) sizes',
      '100% pure, natural, weed-seed free, and chemical-free',
    ],
    specifications: [
      { label: 'Available Sizes', value: '40 KG Bag & 5 KG Bag' },
      { label: 'Moisture Content', value: '25% – 35%' },
      { label: 'Organic Carbon', value: '> 18.0%' },
      { label: 'pH Range', value: '6.8 – 7.4 (Neutral)' },
      { label: 'Packaging Type', value: 'Heavy-duty moisture-protected woven bags' },
      { label: 'Shelf Life', value: '12 Months (Stored in cool shade)' },
    ],
    applicationDosages: [
      { crop: 'Wheat, Cotton, Rice & Maize', dosage: '4 – 6 Bags (40 KG) / Acre', frequency: 'During land preparation & basal root application' },
      { crop: 'Orchards (Mango, Citrus, Guava)', dosage: '5 – 10 kg / Mature Tree', frequency: 'Applied twice a year (Pre-flowering & Post-harvest)' },
      { crop: 'Vegetables & Tunnels', dosage: '8 – 10 Bags (40 KG) / Acre', frequency: 'Bed preparation and root zone furrow' },
      { crop: 'Potted Plants & Kitchen Gardens', dosage: '5 KG Bag / 10-15 pots', frequency: 'Mix 20%-30% with potting soil or top-dress monthly' },
    ],
    faqs: [
      {
        question: 'What bag sizes are available for Vermicompost?',
        answer: 'We supply our Premium Vermicompost in two convenient standard sizes: 40 KG commercial bags for farms and orchards, and 5 KG bags for nurseries, kitchen gardens, and home growers.',
      },
      {
        question: 'Can vermicompost reduce chemical fertilizer costs?',
        answer: 'Yes! By restoring living soil biology and organic matter, farmers regularly cut expensive chemical fertilizers by 40% to 60% while boosting long-term harvest yields.',
      },
    ],
  },
  {
    id: 'red-wiggler-worms',
    slug: 'red-wiggler-worms',
    name: 'Red Wiggler Worms (Eisenia fetida)',
    tagline: 'Efficient Composting Worms for Fast Organic Waste Upcycling',
    category: 'Composting Earthworms',
    price: 2500,
    unit: '1 KG Active Starter Colony',
    packagingOptions: ['1 KG Starter Colony', 'Bulk Commercial Breeder Lots'],
    rating: 4.9,
    reviewsCount: 88,
    inStock: true,
    badge: 'Breeder Stock',
    shortDescription:
      'Efficient composting worms that convert organic waste into nutrient-rich vermicompost. Acclimatized, healthy starter colonies for on-farm beds, greenhouses, and kitchen waste recycling.',
    fullDescription: `Pure Eisenia fetida (Red Wiggler) colonies bred under optimal moisture, temperature, and feeding regimes at our Tando Ghulam Ali and Hyderabad facilities.
    
These voracious composting worms process farm residues, cow manure, and kitchen scraps with high reproductive rates, converting raw organic waste into premium biological vermicompost and liquid vermiwash right on your own land.`,
    images: [
      '/images/statssection.jpg',
      '/images/hero-vermicompost.jpg',
      '/images/farmer-training.jpg',
    ],
    keyBenefits: [
      'Fast-acting composting earthworms with high organic conversion efficiency',
      'Rapid reproduction and cocoon generation for expanding farm beds',
      'Acclimatized to Pakistani regional climate and farm conditions',
      'Supplied with bedding material and startup care guidelines',
      'Ideal for on-farm vermiculture setups, nurseries, and urban compost bins',
    ],
    specifications: [
      { label: 'Species', value: 'Eisenia fetida (Red Wiggler)' },
      { label: 'Colony Type', value: 'Mature worms, sub-adults, and viable cocoons' },
      { label: 'Bedding', value: 'Packed in live moist organic culture bedding' },
      { label: 'Dispatch', value: 'Safe aerated packaging with nationwide express delivery' },
    ],
    applicationDosages: [
      { crop: 'Standard Farm Bed (10ft x 3ft)', dosage: '2 – 3 kg Starter Worms', frequency: 'Single inoculation; colony doubles every 60-90 days' },
      { crop: 'Home / Rooftop Compost Bin', dosage: '0.5 – 1 kg Starter Worms', frequency: 'Continuous organic kitchen waste feeding' },
    ],
    faqs: [
      {
        question: 'How do Red Wiggler worms convert organic waste into compost?',
        answer: 'Red Wigglers feed on decomposed organic residues, microorganisms, and farm wastes, passing them through their digestive tract to excrete mineral-rich, bioactive earthworm castings.',
      },
      {
        question: 'How are live earthworms safely shipped?',
        answer: 'Worms are carefully packed inside breathable, moisture-buffered transit cartons with organic substrate to ensure 100% survival during transit across Pakistan.',
      },
    ],
  },
]

export interface UpcomingProduct {
  icon: string
  name: string
  status: string
  category: string
  description: string
}

export const upcomingProductsData: UpcomingProduct[] = [
  {
    icon: '💧',
    name: 'Organic Vermiwash (Liquid Bio-Extract)',
    status: 'In Development',
    category: 'Foliar Bio-Stimulant',
    description: 'Enriched liquid bio-fertilizer and foliar spray packed with growth-promoting enzymes, plant hormones, and beneficial micro-flora for crop vigor and blossom retention.',
  },
  {
    icon: '🔥',
    name: 'Agricultural Activated Biochar',
    status: 'In Research',
    category: 'Permanent Soil Conditioner',
    description: 'High-surface-area pure carbon matrix that permanently boosts moisture retention, microbial homes, and nutrient holding capacity in tired soils.',
  },
]
