export interface ResourceItem {
  id: string
  slug: string
  title: string
  category: string
  type: string
  date: string
  fileSize?: string
  readTime: string
  image: string
  summary: string
  excerpt: string
  content: string
  keyTakeaways?: string[]
}

export interface DownloadableBrochure {
  id: string
  title: string
  subtitle: string
  category: string
  format: string
  fileSize: string
  description: string
  icon: string
  downloadUrl: string
  fileName: string
}

export const downloadableBrochuresData: DownloadableBrochure[] = [
  {
    id: 'al-barakh-product-catalogue',
    title: 'Al Barakh Organics — Official Product Brochure',
    subtitle: 'Vermicompost (40 KG & 5 KG), Red Wigglers, Facilities & Consultancy',
    category: 'Product Catalogue',
    format: 'PDF Guide',
    fileSize: '3.2 MB',
    description: 'Comprehensive overview covering pure vermicompost specifications, 40 KG & 5 KG sizes, earthworm colonies, 220+ bed facilities, and modern farming consultancy.',
    icon: '📄',
    downloadUrl: '/docs/al-barakh-product-catalogue.pdf',
    fileName: 'Al-Barakh-Product-Catalogue.pdf',
  },
  {
    id: 'vermicompost-application-dosage-guide',
    title: 'Farmer’s Application & Crop Dosage Guide',
    subtitle: 'Field Application Rates for Wheat, Cotton, Rice, Orchards & Vegetables',
    category: 'Agronomy Chart',
    format: 'PDF Handbook',
    fileSize: '2.4 MB',
    description: 'Practical charts detailing exact per-acre application rates, timing schedules, and instructions to cut chemical fertilizer expenditures by 40% to 60%.',
    icon: '🌾',
    downloadUrl: '/docs/vermicompost-application-dosage-guide.pdf',
    fileName: 'Farmer-Application-Crop-Dosage-Guide.pdf',
  },
  {
    id: 'zaraat-kachheri-training-syllabus',
    title: 'Zaraat Kach’heri — Training Programme Syllabus',
    subtitle: '12 Core Topics, Hands-On Field Modules & Institutional Booking Guidelines',
    category: 'Training Syllabus',
    format: 'PDF Document',
    fileSize: '1.8 MB',
    description: 'Detailed syllabus of our agricultural training sessions, covering soil restoration, bed setups, farm economics, and custom workshops for farmers & universities.',
    icon: '🎓',
    downloadUrl: '/docs/zaraat-kachheri-training-syllabus.pdf',
    fileName: 'Zaraat-Kachheri-Training-Syllabus.pdf',
  },
  {
    id: 'on-farm-vermiculture-handbook',
    title: 'On-Farm Vermiculture & Worm Bed Setup Handbook',
    subtitle: 'Complete Manual for Commercial and Smallholder Composting Beds',
    category: 'Technical Manual',
    format: 'PDF Guide',
    fileSize: '2.9 MB',
    description: 'Bed construction guidelines, moisture control routines, substrate pre-composting steps, and summer heat protection for live Eisenia fetida colonies.',
    icon: '🪱',
    downloadUrl: '/docs/on-farm-vermiculture-handbook.pdf',
    fileName: 'On-Farm-Vermiculture-Handbook.pdf',
  },
]

export const resourcesData: ResourceItem[] = [
  {
    id: 'what-is-vermicompost',
    slug: 'what-is-vermicompost',
    title: 'What is Vermicompost? Everything You Need to Know',
    category: 'Vermicompost',
    type: 'Guide',
    date: 'February 18, 2026',
    readTime: '6 min read',
    image: '/images/hero-vermicompost.jpg',
    summary: 'Discover how organic vermiculture transforms organic farm waste into nutrient-dense black gold that revitalizes depleted soil and boosts natural plant immunity.',
    excerpt: 'Discover how organic vermiculture transforms organic farm waste into nutrient-dense black gold that revitalizes depleted soil and boosts natural plant immunity.',
    keyTakeaways: [
      'Pure organic castings containing billions of beneficial soil microbes',
      'High concentrations of humic acids, fulvic acids, and plant growth auxins',
      'Improves water retention in sandy and arid soils by up to 40%',
      'Completely non-toxic, weed-seed-free, and safe for all crops',
    ],
    content: `
### What is Vermicompost?

Vermicompost (also known as worm castings or black gold) is the end-product of the breakdown of organic matter by specialized species of earthworms, primarily *Eisenia fetida* (Red Wigglers). 

Unlike standard thermal compost, vermicomposting is a cold biological process where earthworms digest organic waste along with soil microorganisms. As material passes through the worm's digestive tract, it is enriched with beneficial enzymes, friendly bacteria, and essential plant nutrients in water-soluble, immediately plant-available forms.

### Why Vermicompost is Superior to Traditional FYM (Farm Yard Manure)

Traditional raw farmyard manure often contains weed seeds, pathogen spores (like *E. coli* or *Salmonella*), and excessive ammonia that can burn plant roots. In contrast, pure vermicompost offers:

1. **Rich Microbial Diversity:** Contains active colonies of nitrogen-fixing bacteria, mycorrhizal fungi, and actinomycetes that suppress soil-borne fungal diseases like *Fusarium* and *Pythium*.
2. **Slow-Release Balanced Nutrition:** Packed with essential macronutrients (NPK) and micronutrients (Zinc, Iron, Calcium, Boron, Magnesium) that do not leach away with irrigation water.
3. **High Humus Content:** Restores soil structure, aerates compact clay soils, and increases the water-holding capacity of sandy soils by up to 40%.
4. **Natural Growth Hormones:** Contains natural plant growth regulators including auxins, gibberellins, and cytokinins that accelerate seed germination and root branching.

### How to Apply Vermicompost on Your Farm & Garden

- **Field Crops (Wheat, Rice, Cotton, Maize):** Apply 4 to 6 bags (40 KG) per acre during land preparation or basal furrow dressing.
- **Fruit Orchards (Mango, Citrus, Guava):** Apply 5 to 10 kg around the drip line of each mature tree twice a year before flowering and post-harvest.
- **Vegetables & Kitchen Gardens:** Mix 20% to 30% vermicompost into potting soil or apply a 1-inch top dressing around plants every 3 to 4 weeks.
    `,
  },
  {
    id: 'benefits-of-natural-fertilizers',
    slug: 'benefits-of-natural-fertilizers',
    title: 'Benefits of Natural Fertilizers for Sustainable Agriculture',
    category: 'Natural Fertilizers',
    type: 'Article',
    date: 'February 15, 2026',
    readTime: '7 min read',
    image: '/images/satisfiedfarmers.jpg',
    summary: 'Explore the long-term biological, environmental, and financial benefits of switching from chemical DAP and Urea to natural organic amendments.',
    excerpt: 'Explore the long-term biological, environmental, and financial benefits of switching from chemical DAP and Urea to natural organic amendments.',
    keyTakeaways: [
      'Restores native soil biodiversity and reverses chemical soil salinity',
      'Reduces long-term farm input costs by eliminating fertilizer dependency',
      'Significantly improves produce taste, shelf-life, and export quality',
      'Enhances soil resilience during extreme heatwaves and dry spells',
    ],
    content: `
### The Need for Sustainable Soil Nutrition

Decades of intensive chemical farming with synthetic fertilizers like DAP and Urea have led to a severe degradation of agricultural land across Pakistan. Soil organic matter in most farming belts has dropped below 0.6%, leading to hardpan soil crusting, declining fertilizer response, and increased pest vulnerability.

Transitioning to natural, biological fertilizers provides a permanent solution to soil regeneration while safeguarding farmer profitability.

### Key Benefits of Natural Organic Fertilizers

#### 1. Long-Term Soil Fertility & Structure Regeneration
Synthetic fertilizers provide temporary chemical spikes but kill beneficial soil organisms and increase soil salinity. Natural fertilizers feed the soil biology, creating sponge-like crumb structures that allow roots to penetrate deeper and breathe freely.

#### 2. Substantial Reduction in Water Requirements
Soils rich in organic matter and worm humus retain moisture up to 48 hours longer under 40°C+ summer conditions. This drastically reduces canal and tube-well irrigation requirements, saving precious diesel and electricity costs.

#### 3. Higher Crop Resilience & Natural Pest Suppression
Plants nourished with natural organic nutrients develop thicker cellular walls and balanced internal sugar-to-mineral ratios. This natural vigor makes crops naturally resistant to sucking pests, aphids, and fungal root infections without heavy pesticide usage.

#### 4. Premium Market Value & Export-Grade Quality
Produce grown with organic amendments has higher Brix (sugar content), richer flavor, higher nutritional density, and significantly longer post-harvest shelf-life, qualifying growers for premium export and organic market pricing.

### Conclusion

Switching to natural organic fertilizers is not just an environmental choice—it is a smart economic strategy for every forward-thinking Pakistani farmer.
    `,
  },
  {
    id: 'rebuilding-pakistan-soil-organic-matter',
    slug: 'rebuilding-pakistan-soil-organic-matter',
    title: 'How Restoring Soil Organic Matter Can Save Pakistani Agriculture',
    category: 'Soil Health',
    type: 'Article',
    date: 'February 10, 2026',
    readTime: '6 min read',
    image: '/images/hero-farm-landscape.jpg',
    summary: 'Over 80% of agricultural soils in Pakistan have organic matter levels below 1%. Discover how biological vermiculture restores natural fertility and reduces input costs.',
    excerpt: 'Over 80% of agricultural soils in Pakistan have organic matter levels below 1%. Discover how biological vermiculture restores natural fertility and reduces input costs.',
    keyTakeaways: [
      'Why low organic matter causes fertilizer response failure',
      'How earthworm humus acts as a biological probiotic for depleted fields',
      'Cost-benefit comparisons between chemical inputs and organic enrichment',
    ],
    content: `
### The Low Organic Matter Crisis in Pakistan

Over 80% of arable soils across Punjab, Sindh, and Khyber Pakhtunkhwa have organic matter levels hovering below 0.6%, whereas fertile agricultural soil requires at least 2.5% to 4.0%. 

When soil organic matter is this low:
- Applied chemical fertilizers leach away into the groundwater before roots can absorb them.
- Soil compacts into a rock-hard crust that prevents water penetration.
- Farmers are forced to increase chemical dosages every season just to achieve baseline yields.

### The Biological Solution with Vermiculture

Earthworm castings act as living inoculants that jumpstart the natural soil food web. By integrating pure vermicompost into basal soil preparation, growers reintroduce millions of beneficial microbes that unlock bound phosphorus and potassium native to Pakistani soils.
    `,
  },
  {
    id: 'summer-management-red-wiggler-colonies',
    slug: 'summer-management-red-wiggler-colonies',
    title: 'Essential Summer Care Tips for Live Red Wiggler Colonies',
    category: 'Breeding Guide',
    type: 'Guide',
    date: 'January 28, 2026',
    readTime: '5 min read',
    image: '/images/farmer-training.jpg',
    summary: 'Practical methods to safeguard your earthworm colonies from 45°C extreme heatwaves using shading, jute hessian covers, and evaporation cooling.',
    excerpt: 'Practical methods to safeguard your earthworm colonies from 45°C extreme heatwaves using shading, jute hessian covers, and evaporation cooling.',
    keyTakeaways: [
      'Moist natural jute burlap covers trap humidity and cool bed surface',
      'Micro-misting schedules for peak daylight hours (11 AM to 4 PM)',
      'Optimal shade architecture using 75% agricultural green nets',
    ],
    content: `
### Safeguarding Earthworms in Extreme Summer Heat

During peak summer months in Pakistan when ambient temperatures exceed 42°C, vermiculture beds require deliberate climate management to keep earthworms active, feeding, and breeding.

### Key Management Practices:

1. **Jute Hessian Burlap Covers:** Keep damp natural jute sacks over the entire bed surface. This creates a cool, dark microclimate where worms can feed right at the surface.
2. **Micro-Misting System:** Install low-cost overhead mister nozzles set on a timer for 2-3 minutes every few hours during peak afternoon heat.
3. **Bed Height Control:** Keep bed depth below 1.5 feet to prevent internal anaerobic heat buildup.
    `,
  },
  {
    id: 'vermiwash-foliar-spray-benefits',
    slug: 'vermiwash-foliar-spray-benefits',
    title: 'Vermiwash vs Synthetic Foliar Sprays: The Organic Advantage',
    category: 'Crop Nutrition',
    type: 'Article',
    date: 'January 20, 2026',
    readTime: '7 min read',
    image: '/images/statssection.jpg',
    summary: 'Why progressive orchardists and vegetable growers are switching from expensive chemical foliar sprays to nutrient-dense liquid vermiwash.',
    excerpt: 'Why progressive orchardists and vegetable growers are switching from expensive chemical foliar sprays to nutrient-dense liquid vermiwash.',
    keyTakeaways: [
      'Reduces flower and fruit drop by up to 30% in citrus and mangoes',
      'Suppresses fungal leaf spores naturally without chemical toxicity',
      'Completely safe for honeybees, pollinators, and farm workers',
    ],
    content: `
### What is Vermiwash?

Vermiwash is a nutrient-rich liquid extract collected from earthworm beds. It contains plant growth hormones, water-soluble micro-nutrients, vitamins, and natural anti-fungal enzymes.

### Key Benefits for Orchards and Vegetables:
- **Reduces Blossom Drop:** Natural auxins and cytokinins strengthen stem connections and prevent premature fruit shedding.
- **Foliar Disease Defense:** Beneficial microorganisms coat leaf surfaces and block fungal pathogen spores from taking hold.
- **Safe for Pollinators:** 100% organic and gentle on bees, beneficial predatory insects, and soil life.
    `,
  },
]
