export interface TrainingSession {
  id: string
  title: string
  date: string
  location: string
  venue: string
  format: 'Farm Demonstration' | 'Practical Workshop' | 'Custom On-Demand' | 'Classroom / Campus'
  duration: string
  price: string
  seatsTotal: number
  seatsLeft: number
  instructor: string
  description: string
  curriculum: string[]
}

export interface FlipTopic {
  num: string
  title: string
  category: string
  summary: string
  takeaways: string[]
  impact: string
}

export interface TrainingPillar {
  pillarNumber: string
  badge: string
  title: string
  subtitle: string
  topics: FlipTopic[]
}

export const trainingPillars: TrainingPillar[] = [
  {
    pillarNumber: 'Pillar 01',
    badge: 'Biological Inputs & Soil Science',
    title: 'Soil Science & Biological Bio-Inputs',
    subtitle: 'Rebuilding living soil biology, biological earthworm digestion, and liquid bio-extracts.',
    topics: [
      {
        num: '01',
        title: 'Vermicomposting & Organic Fertilizers',
        category: 'Core Bio-Input',
        summary: 'Commercial earthworm biology, bed setup engineering, moisture routines & casting harvesting.',
        takeaways: [
          'Bed engineering, shade & temperature regulation',
          'Feeding cycles & 60-70% moisture control',
          'Harvesting, fine screening & packaging',
        ],
        impact: '100% natural bio-fertilizer replacing chemical dependence.',
      },
      {
        num: '02',
        title: 'Soil Health & Biological Restoration',
        category: 'Soil Agronomy',
        summary: 'Restoring depleted soil organic matter, microbial biomass, and balancing alkaline/saline pH.',
        takeaways: [
          'Raising soil Organic Matter above 2%',
          'Reintroducing beneficial bacteria & fungi',
          'Salinity management & moisture retention',
        ],
        impact: 'Cuts irrigation frequency by up to 30%.',
      },
      {
        num: '03',
        title: 'Integrated Nutrient Management',
        category: 'Fertilizer Economics',
        summary: 'Scientific blending of biological compost with targeted micronutrients to slash chemical costs.',
        takeaways: [
          'Optimal vermicompost basal blending ratios',
          'Targeted timing for vegetative & bloom stages',
          'Preventing nutrient leaching in sandy soils',
        ],
        impact: 'Slashes synthetic DAP/Urea costs by 40% to 60%.',
      },
      {
        num: '04',
        title: 'Vermiwash & Agricultural Biochar',
        category: 'Advanced Bio-Extracts',
        summary: 'Liquid foliar bio-stimulants and permanent carbon structures to boost root vitality.',
        takeaways: [
          'Gravity-feed Vermiwash collection units',
          '1:10 foliar spraying for pest & bloom boost',
          'Biochar inoculation for soil carbon sponge',
        ],
        impact: 'Liquid foliar growth & permanent carbon housing.',
      },
    ],
  },
  {
    pillarNumber: 'Pillar 02',
    badge: 'Regenerative Agriculture',
    title: 'Sustainable Farming & Waste Valorization',
    subtitle: 'Transforming farm residues into high-value biological assets and climate resilience.',
    topics: [
      {
        num: '05',
        title: 'Modern & Sustainable Agriculture',
        category: 'Methodology',
        summary: 'Adopting sustainable systems that increase farm productivity while conserving resources.',
        takeaways: [
          'Crop rotations fixing natural nitrogen',
          'Cover cropping preventing topsoil erosion',
          'Cost-efficiency & long-term soil health',
        ],
        impact: 'Increases crop productivity with lower farm inputs.',
      },
      {
        num: '06',
        title: 'Organic Farming Practices',
        category: 'Field Best Practices',
        summary: 'Natural pest deterrence, botanical extracts, non-chemical nutrition, and clean crop cycles.',
        takeaways: [
          'Botanical neem & garlic pest extracts',
          'Companion planting & agro-biodiversity',
          'Transitioning to chemical-free farming',
        ],
        impact: 'Chemical-free crops with higher market value.',
      },
      {
        num: '07',
        title: 'Composting & Organic Waste Management',
        category: 'Waste Valorization',
        summary: 'Transforming livestock manure, crop residues, and agro-wastes into high-grade compost.',
        takeaways: [
          'Pathogen-free pre-decomposition methods',
          'Optimizing Carbon-to-Nitrogen (C:N) ratios',
          'Aerobic windrow composting techniques',
        ],
        impact: 'Converts farm waste into odorless compost.',
      },
      {
        num: '08',
        title: 'Farm Waste to Farm Wealth',
        category: 'Agribusiness Economics',
        summary: 'Converting discarded farm biomass into profitable inputs and marketable organic fertilizers.',
        takeaways: [
          'On-farm composting vs. chemical cost ROI',
          'Commercial vermiculture byproduct streams',
          'Branded compost packaging & nursery sales',
        ],
        impact: 'Turns farm waste into a recurring income stream.',
      },
    ],
  },
  {
    pillarNumber: 'Pillar 03',
    badge: 'Community & Agribusiness',
    title: 'Field Practice, Inclusion & Agribusiness',
    subtitle: 'Hands-on bed fieldwork, empowering youth and women, and commercial agribusiness scaling.',
    topics: [
      {
        num: '09',
        title: 'Climate-Smart Agriculture',
        category: 'Climate Resilience',
        summary: 'Techniques to buffer crops against heatwaves, drought stress, and erratic weather patterns.',
        takeaways: [
          'Mulching & moisture preservation in heat',
          'Microbial buffers against drought stress',
          'Reclaiming degraded saline farm patches',
        ],
        impact: 'Buffers crop yields against extreme heatwaves.',
      },
      {
        num: '10',
        title: 'Women & Youth in Agriculture',
        category: 'Community Leadership',
        summary: 'Fostering agricultural leadership, skill building, and cottage entrepreneurship for women and youth.',
        takeaways: [
          'Cottage/backyard vermicomposting setups',
          'Packaging & local distribution skills',
          'Rural leadership & green entrepreneurship',
        ],
        impact: 'Household income and youth green jobs.',
      },
      {
        num: '11',
        title: 'Entrepreneurship in Agriculture',
        category: 'Enterprise Scaling',
        summary: 'Business planning, packaging, economics, and marketing for organic agribusiness startups.',
        takeaways: [
          'Unit economics, startup costs & ROI',
          'B2B branding & nursery retail networks',
          'Organic certification & quality standards',
        ],
        impact: 'Launch and scale profitable agribusinesses.',
      },
      {
        num: '12',
        title: 'Practical Farm Demonstrations',
        category: 'Hands-On Fieldwork',
        summary: 'Live on-bed handling of Eisenia fetida worms, screening, moisture checks, and field application.',
        takeaways: [
          'Direct handling of live worm colonies',
          'Moisture squeeze diagnostics & bed probes',
          'Live crop field application demonstrations',
        ],
        impact: '100% practical confidence for immediate setup.',
      },
    ],
  },
]

export const trainingFormats = [
  { num: '01', title: 'Farm Visits & Bed Demonstrations', desc: 'Hands-on practical exposure right on active vermicomposting beds.' },
  { num: '02', title: 'Interactive Field Workshops', desc: 'Step-by-step masterclasses with personalized Q&A and soil diagnostics.' },
  { num: '03', title: 'Classroom & Campus Seminars', desc: 'Academic and institutional lectures tailored for universities and colleges.' },
  { num: '04', title: 'Online & Distance Learning', desc: 'Interactive webinars and digital advisory for growers across remote areas.' },
  { num: '05', title: 'Custom On-Site Corporate Training', desc: 'Tailored on-site capacity building designed for large agribusinesses.' },
]

export const trainingSessionsData: TrainingSession[] = [
  {
    id: 'zaraat-kachheri-tando-ghulam-ali',
    title: 'Zaraat Kach’heri — Tando Ghulam Ali Field Masterclass',
    date: 'Upcoming Batch (Weekly Schedule)',
    location: 'Tando Ghulam Ali (Main Branch)',
    venue: 'Al Barakh Main Facility (200+ Beds Setup)',
    format: 'Practical Workshop',
    duration: 'Full Day Session',
    price: 'Open for Farmers & Growers (Registration Required)',
    seatsTotal: 40,
    seatsLeft: 12,
    instructor: 'Mr. Sohaib Ahmed Khatti & Agronomy Specialists',
    description: 'Hands-on practical training at our main 200+ bed facility. Learn biological vermicomposting, soil regeneration, and cost-reduction farming methods.',
    curriculum: [
      'Live demonstration of 200+ bed management, feeding, and watering schedules',
      'Eisenia fetida breeding, cocoon generation, and harvesting techniques',
      'Diagnostic methods to restore exhausted soil and reduce chemical fertilizer costs',
      'Open Zaraat Kach’heri dialogue: solving local grower challenges together',
    ],
  },
  {
    id: 'zaraat-kachheri-hyderabad',
    title: 'Zaraat Kach’heri — Hyderabad Regional Training Session',
    date: 'Monthly Regular Session',
    location: 'Hyderabad Branch Facility',
    venue: 'Al Barakh Hyderabad Regional Center',
    format: 'Practical Workshop',
    duration: 'Half Day Session',
    price: 'Open for Farmers, Nurseries & Students',
    seatsTotal: 30,
    seatsLeft: 9,
    instructor: 'Al Barakh Technical Agronomy Team',
    description: 'Regional training session covering organic soil inputs, composting setups for nurseries and orchards, and modern sustainable agriculture practices.',
    curriculum: [
      'Urban and commercial vermiculture unit design',
      'Foliar Vermiwash and Biochar application protocols for high-value crops',
      'Farm Waste to Farm Wealth: commercial economics and recycling',
      'Open Q&A and technical guidance for local farm managers',
    ],
  },
  {
    id: 'on-demand-institutional-training',
    title: 'On-Demand & Custom Training (Farm / Educational Institution)',
    date: 'Flexible / Scheduled on Request',
    location: 'On-Site at Your Farm or Educational Campus (All Over Pakistan)',
    venue: 'Your Farm, Agribusiness Facility, or University Campus',
    format: 'Custom On-Demand',
    duration: 'Custom Duration (1 to 3 Days)',
    price: 'Custom Institutional & Corporate Package',
    seatsTotal: 100,
    seatsLeft: 50,
    instructor: 'Al Barakh Master Trainers & Specialists',
    description: 'Customized on-site agricultural training delivered directly at your farm, corporate agribusiness, school, or university anywhere in Pakistan.',
    curriculum: [
      'Custom curriculum tailored to your specific crops, soil type, and team size',
      'On-site field assessment and customized vermicompost facility planning',
      'Dedicated sessions for university students, research teams, or corporate growers',
      'Ongoing technical backstopping and WhatsApp advisory post-training',
    ],
  },
]
