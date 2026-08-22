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
    badge: 'Available Now',
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
    icon: '🪱',
    name: 'Live Red Wigglers (Eisenia Fetida)',
    status: 'Coming Soon',
    category: 'Breeder Stock',
    description: 'Acclimatized, voracious composting earthworms bred under controlled conditions for on-farm composting colonies and recycling.',
  },
  {
    icon: '💧',
    name: 'Organic Vermiwash (Liquid Gold)',
    status: 'In Development',
    category: 'Foliar Bio-Stimulant',
    description: 'Liquid bio-fertilizer rich in plant growth hormones, amino acids, and micronutrients for foliar spray and fertigation.',
  },
  {
    icon: '🔥',
    name: 'Agricultural Activated Biochar',
    status: 'In Research',
    category: 'Soil Conditioner',
    description: 'Porous carbon matrix that permanently boosts moisture retention, microbial homes, and cation exchange in sandy soils.',
  },
  {
    icon: '🌱',
    name: 'Specialized Seedling Mix',
    status: 'In Formulation',
    category: 'Nursery Blend',
    description: 'Microbe-inoculated germination blend crafted specifically for plant nurseries, vegetable tunnels, and high-value crops.',
  },
]
