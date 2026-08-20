export interface Testimonial {
  id: string
  name: string
  role: string
  farmName: string
  location: string
  avatar: string
  rating: number
  quote: string
  crop: string
  acreage: string
  yieldIncrease: string
}

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Chaudhry Tariq Mahmood',
    role: 'Commercial Citrus & Wheat Farmer',
    farmName: 'Mahmood Agro Estate',
    location: 'Sargodha, Punjab',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'We replaced 50% of our chemical fertilizers with Al Barakh Vermicompost across 80 acres of kinnow orchards. The fruit sizing is noticeably uniform, tree leaf yellowing stopped, and we saved over Rs. 350,000 on synthetic inputs this season alone.',
    crop: 'Kinnow & Wheat',
    acreage: '80 Acres',
    yieldIncrease: '+22% Yield',
  },
  {
    id: '2',
    name: 'Malik Zafar Iqbal',
    role: 'Tunnel Farm Vegetable Grower',
    farmName: 'Green Horizon Farms',
    location: 'Faisalabad, Punjab',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'Our bell pepper and cucumber crops in high-tunnel polyhouses showed tremendous root development. The biological activity in the soil prevented root rot, and our harvest extended by 4 extra weeks compared to last year.',
    crop: 'Tunnel Vegetables',
    acreage: '15 Acres',
    yieldIncrease: '+30% Extended Picking',
  },
  {
    id: '3',
    name: 'Dr. Shahbaz Alam',
    role: 'Organic Farm Director & Agronomist',
    farmName: 'Peshawar Valley Organics',
    location: 'Nowshera, KPK',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'The live Eisenia fetida starter stock arrived in prime condition with 100% viability. The colony reproduction is astonishing. We now produce our own on-farm fertilizer and vermiwash, completely eliminating imported chemical tonics.',
    crop: 'Bio-Organic System',
    acreage: '25 Acres',
    yieldIncrease: 'Zero-Chemical Cost',
  },
  {
    id: '4',
    name: 'Rana Noman Aslam',
    role: 'Cotton & Sugarcane Cultivator',
    farmName: 'Al-Madina Farms',
    location: 'Rahim Yar Khan, Punjab',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'Our sandy soil used to dry out within 3 days of irrigation. By incorporating Al Barakh biochar and vermicompost, our soil holds moisture for 6 to 7 days, cutting our tube-well diesel costs by almost half during peak summer.',
    crop: 'Cotton & Sugarcane',
    acreage: '50 Acres',
    yieldIncrease: '40% Water Savings',
  },
]
