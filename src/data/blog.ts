export interface BlogPost {
  id: string
  slug: string
  title: string
  date: string
  author: string
  category: string
  readTime: string
  image: string
  excerpt: string
  content: string
  tags: string[]
}

export const blogPostsData: BlogPost[] = [
  {
    id: '1',
    slug: 'rebuilding-pakistan-soil-organic-matter',
    title: 'How Restoring Soil Organic Matter Can Save Pakistani Agriculture',
    date: 'February 20, 2026',
    author: 'Jamal Satti (Founder & Agronomist)',
    category: 'Soil Health',
    readTime: '6 min read',
    image: '/images/hero-farm-landscape.jpg',
    excerpt: 'Over 80% of agricultural soils in Pakistan have organic matter levels below 1%. Discover how biological vermiculture restores natural fertility and reduces input costs.',
    tags: ['Soil Health', 'Vermicompost', 'Regenerative Agriculture'],
    content: `
Pakistani soils are enduring a silent crisis. Decades of heavy reliance on chemical DAP and Urea without returning organic biomass back to the land have starved soil microorganisms.

### The Low Organic Matter Trap
Healthy fertile soil should ideally contain between 2.5% and 4% organic matter. In most regions of Punjab, Sindh, and KPK, soil organic matter has dropped below 0.6%. When organic matter is this low:
- Soil loses its ability to absorb and hold water.
- Applied chemical fertilizers leach away into groundwater instead of feeding crops.
- Farmers are forced to buy more and more fertilizer every year just to maintain the same crop yield.

### The Biological Solution
Earthworm castings (Vermicompost) act as a living soil probiotic. Adding pure castings re-introduces the bacterial and fungal networks necessary to unlock insoluble soil minerals and deliver plant nutrition naturally.
    `,
  },
  {
    id: '2',
    slug: 'summer-management-red-wiggler-colonies',
    title: 'Essential Summer Care Tips for Live Red Wiggler (Eisenia Fetida) Colonies',
    date: 'February 12, 2026',
    author: 'Agricultural Operations Team',
    category: 'Breeding Guide',
    readTime: '5 min read',
    image: '/images/statssection.jpg',
    excerpt: 'Practical methods to safeguard your earthworm colonies from 45°C extreme heatwaves using shading, jute hessian covers, and evaporation cooling.',
    tags: ['Eisenia Fetida', 'Summer Care', 'Farm Operations'],
    content: `
During intense Pakistani summers when temperatures soar above 42°C, vermiculture beds require proactive temperature and moisture management to maintain rapid breeding rates.

### 1. The Power of Wet Hessian Sacks
Cover the surface of every worm bed with moist natural jute burlap bags (tat). This traps humidity, creates a cool dark surface zone, and allows worms to feed right at the top layer all day long.

### 2. Sprinkler & Micro-Misting Schedules
Install simple overhead micro-mister nozzles operating for 2 minutes every 3 hours during peak daylight (11 AM to 4 PM). The micro-droplets cool the air without waterlogging the bedding.
    `,
  },
  {
    id: '3',
    slug: 'vermiwash-foliar-spray-benefits',
    title: 'Vermiwash vs Synthetic Foliar Sprays: The Organic Advantage',
    date: 'January 28, 2026',
    author: 'Research & Field Trials Dept',
    category: 'Crop Nutrition',
    readTime: '7 min read',
    image: '/images/satisfiedfarmers.jpg',
    excerpt: 'Why progressive orchardists and vegetable growers are switching from expensive chemical foliar sprays to nutrient-dense liquid vermiwash.',
    tags: ['Vermiwash', 'Foliar Spray', 'Pest Defense'],
    content: `
Vermiwash is a potent biological liquid bio-stimulant collected from earthworm beds. It contains plant growth hormones (auxins, gibberellins, cytokinins), water-soluble minerals, and enzymes.

### Key Advantages:
1. **Blossom Retention:** Reduces fruit and flower drop by up to 30% in citrus, mango, chili, and tomato crops.
2. **Natural Defense:** Microorganisms present in Vermiwash colonize leaf surfaces, outcompeting fungal spores and repelling soft-bodied insect pests.
3. **Zero Toxicity:** 100% safe for pollinators, honeybees, farm workers, and consumer health.
    `,
  },
]
