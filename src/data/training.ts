export interface TrainingSession {
  id: string
  title: string
  date: string
  location: string
  venue: string
  format: 'In-Person Workshop' | 'Field Masterclass' | 'Hybrid Webinar'
  duration: string
  price: string
  seatsTotal: number
  seatsLeft: number
  instructor: string
  description: string
  curriculum: string[]
}

export const trainingSessionsData: TrainingSession[] = [
  {
    id: 'commercial-vermicomposting-masterclass',
    title: 'Commercial Vermiculture & Organic Waste Upcycling Masterclass',
    date: 'March 15, 2026',
    location: 'Lahore / Sheikhupura Farm Facility',
    venue: 'Al Barakh Central Research & Breeding Facility',
    format: 'In-Person Workshop',
    duration: 'Full Day (9:00 AM – 5:00 PM)',
    price: 'Rs. 4,500 (Includes Handbook, Lunch & 1kg Starter Worm Colony)',
    seatsTotal: 30,
    seatsLeft: 8,
    instructor: 'Agronomist Jamal Satti & Senior Soil Biologists',
    description: 'Comprehensive, practical field training covering raw biomass preparation, moisture and temperature control, Eisenia fetida breeding management, rotary screening, and vermiwash extraction.',
    curriculum: [
      'Raw substrate selection (cattle manure, crop residues, agro-waste pre-treatment)',
      'Designing low-cost shaded vermicomposting windrows vs. concrete bed infrastructure',
      'Breeding kinetics: cocoon production, hatching cycles, and mortality prevention',
      'Moisture management, temperature buffering, and predatory pest defense (ants, birds, moles)',
      'Mechanical and manual harvesting techniques for clean, debris-free castings',
      'Packaging, shelf-life stabilization, and marketing commercial organic fertilizer',
    ],
  },
  {
    id: 'orchard-soil-restoration-seminar',
    title: 'Orchard & High-Value Crop Soil Fertility Restoration',
    date: 'March 28, 2026',
    location: 'Sargodha Agro Hub',
    venue: 'Sargodha Citrus Growers Hall',
    format: 'Field Masterclass',
    duration: 'Half Day (10:00 AM – 3:00 PM)',
    price: 'Rs. 2,500 (Includes Dosage Guide & Farm Soil Assessment)',
    seatsTotal: 50,
    seatsLeft: 14,
    instructor: 'Senior Horticultural Soil Consultant',
    description: 'Focused specifically on citrus, mango, olive, and vegetable growers seeking to reverse soil salinity, cut chemical fertilizer dependency, and enhance fruit grading standards.',
    curriculum: [
      'Diagnosing root-zone compaction and micronutrient lockout in orchard soils',
      'Calculating precise vermicompost & biochar dosage per mature tree and furrow',
      'Foliar Vermiwash application protocols for pest suppression and blossom retention',
      'Economic modeling: How to reduce annual input budgets by 40% with biological nutrition',
    ],
  },
  {
    id: 'kitchen-gardening-urban-composting',
    title: 'Home & Kitchen Garden Organic Waste Recycling',
    date: 'April 5, 2026',
    location: 'Islamabad / Rawalpindi',
    venue: 'National Agricultural Center Seminar Hall',
    format: 'In-Person Workshop',
    duration: '3 Hours (2:00 PM – 5:00 PM)',
    price: 'Rs. 2,000 (Includes Home Worm Bin Kit & Manual)',
    seatsTotal: 40,
    seatsLeft: 19,
    instructor: 'Urban Agriculture Specialist',
    description: 'Learn how to set up an odor-free indoor or rooftop earthworm compost bin to convert household food scraps into living organic black gold for potted plants and kitchen gardens.',
    curriculum: [
      'Setting up compact indoor and balcony worm composting towers',
      'Safe vs. unsafe kitchen scraps (avoiding acidity and pest attraction)',
      'Harvesting castings for container plants and vegetable seed beds',
      'Troubleshooting moisture, odors, and fruit fly management',
    ],
  },
]
