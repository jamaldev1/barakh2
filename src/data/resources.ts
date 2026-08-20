export interface ResourceItem {
  id: string
  slug: string
  title: string
  category: string
  type: 'PDF Guide' | 'Application Chart' | 'Research Paper' | 'Field Manual'
  fileSize: string
  readTime: string
  summary: string
  content: string
  downloadUrl?: string
  keyTakeaways: string[]
}

export const resourcesData: ResourceItem[] = [
  {
    id: 'vermicomposting-handbook',
    slug: 'vermicomposting-handbook',
    title: 'Complete Pakistani Farmer’s Vermiculture & Composting Handbook',
    category: 'Field Manuals',
    type: 'Field Manual',
    fileSize: '4.2 MB PDF',
    readTime: '15 min read',
    summary: 'A step-by-step practical manual on constructing shaded beds, feeding Eisenia fetida, regulating summer moisture, and harvesting high-grade castings in local climate conditions.',
    keyTakeaways: [
      'Optimal bed dimensions and low-cost green net shading architecture',
      'Step-by-step raw manure pre-treatment to prevent bed overheating',
      'Moisture benchmark (squeeze test) and aeration schedule',
      'Cost-benefit breakdown for 5-acre to 50-acre setups',
    ],
    content: `
# Complete Pakistani Farmer’s Vermiculture & Composting Handbook

## Introduction
Vermicomposting is the bioconversion of organic waste into nutrient-dense humus through earthworm digestion. In Pakistan's agricultural landscape, soils suffer from critically low organic matter (often below 0.5%). This handbook provides actionable instructions for commercial growers and smallholders alike.

### 1. Species Selection
The only earthworm species recommended for Pakistani climatic resilience is *Eisenia fetida* (Red Wigglers). They tolerate ambient temperatures between 15°C and 35°C and reproduce rapidly in aged manure.

### 2. Bed Construction
- **Width:** 3 to 4 feet (allows easy reaching from both sides without stepping on the bed).
- **Height:** 1.5 to 2 feet (deeper beds accumulate excessive internal heat).
- **Length:** 20 to 50 feet depending on available space and shade.
- **Location:** Under dense tree canopy or 75% agricultural green shade netting.

### 3. Feedstock Preparation
Never introduce fresh, hot cattle dung directly into worm beds. Raw manure produces excessive methane and thermal spikes (exceeding 50°C) which kill worms. Pre-soak and turn the manure for 10-14 days until temperature stabilizes under 28°C.
    `,
  },
  {
    id: 'crop-dosage-application-guide',
    slug: 'crop-dosage-application-guide',
    title: 'Crop-Wise Application & Dosage Charts for Organic Fertigation',
    category: 'Dosage Charts',
    type: 'Application Chart',
    fileSize: '2.1 MB PDF',
    readTime: '8 min read',
    summary: 'Comprehensive scientific dosage tables for wheat, cotton, rice, sugarcane, citrus, mangoes, potatoes, and vegetables covering both basal and foliar stages.',
    keyTakeaways: [
      'Basal furrow dressing versus broadcast spreading ratios per acre',
      'Orchard pit filling versus post-harvest ring application methods',
      'Foliar Vermiwash dilution protocols for peak blossom and fruit set phases',
    ],
    content: `
# Crop-Wise Application & Dosage Charts for Organic Fertigation

## Summary Dosage Table

| Crop Category | Vermicompost (Per Acre) | Application Timing | Foliar Vermiwash |
| :--- | :--- | :--- | :--- |
| **Wheat / Grains** | 4 – 6 Bags (200-300 kg) | Land Preparation / 1st Irrigation | 2L/acre at Tillering |
| **Cotton / Cash Crops** | 6 – 8 Bags (300-400 kg) | Furrow Sowing & 2nd Irrigation | 3L/acre before Flowering |
| **Citrus & Mango Orchards** | 5 – 10 kg / Mature Tree | Twice Yearly (Jan & July) | 5L/acre during Fruit Set |
| **Vegetables & Tunnels** | 8 – 10 Bags (400-500 kg) | Raised Bed Preparation | 2L/acre every 15 days |

## Maximizing Microbial Efficiency
Always apply vermicompost into moist soil and incorporate lightly within the top 2-4 inches to shield beneficial microbes from direct UV sunlight.
    `,
  },
  {
    id: 'soil-microbiology-yield-study',
    slug: 'soil-microbiology-yield-study',
    title: 'Comparative Study: Organic Humus vs Chemical Fertilizers on Soil Health',
    category: 'Scientific Studies',
    type: 'Research Paper',
    fileSize: '1.8 MB PDF',
    readTime: '12 min read',
    summary: 'A multi-season field study demonstrating a 40% increase in water holding capacity and significant suppression of Fusarium wilt in soils enriched with earthworm castings.',
    keyTakeaways: [
      'Chemical fertilizer run-off reduced by 65%',
      'Cation exchange capacity (CEC) elevated from 12 to 28 meq/100g',
      'Dramatic proliferation of beneficial nitrogen-fixing Azotobacter colonies',
    ],
    content: `
# Comparative Study: Organic Humus vs Chemical Fertilizers on Soil Health

## Abstract
Continuous application of synthetic fertilizers without organic matter supplementation degrades soil microbial biodiversity and accelerates soil salinization in arid and semi-arid zones. This paper highlights experimental results from trials conducted across 12 commercial farms in central Punjab.

## Key Findings
1. **Soil Structure:** Bulk density decreased significantly, allowing root penetration depths to increase by 32%.
2. **Moisture Retention:** Treated acreage retained plant-available water 48 hours longer under 42°C summer heat stress.
3. **Biological Disease Suppression:** Incidence of root-knot nematodes and fungal root rot was suppressed by 55% due to chitinase-producing actinomycetes native to vermicompost.
    `,
  },
]
