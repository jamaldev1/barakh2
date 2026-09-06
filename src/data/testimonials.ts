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
    id: 'mumtaz-laghari',
    name: 'Mumtaz Nawaz Laghari',
    role: 'Local Grower',
    farmName: '',
    location: 'Ghulab Laghari City',
    avatar: '',
    rating: 5,
    quote: 'Vermicompost has been a game changer for my soil, our transplantation survival rate has increased, Plant colouring has been darker, flowering in tomato started earlier than my neighbors, soil became very soft resulting in ease of laborious work',
    crop: 'Tomato & Vegetables',
    acreage: 'Local Farmland',
    yieldIncrease: 'High Survival Rate & Early Flowering',
  },
  {
    id: 'hussain-khaskheli',
    name: 'Hussain Khaskheli',
    role: 'Papaya Nursery Grower',
    farmName: '',
    location: 'Tando Ghulam Ali',
    avatar: '',
    rating: 5,
    quote: 'Previously we used to purchase peatmoss for my papaya nursery setup and cost of that was a huge financial impact on us, shifting to vermicompost gave us a sigh of relief and plant health has been changed drastically, also overall immunity system of plant has become stronger',
    crop: 'Papaya Nursery',
    acreage: 'Nursery Setup',
    yieldIncrease: 'Stronger Immunity & Cost Savings',
  },
  {
    id: 'abdul-razzaq',
    name: 'Abdul Razzaq',
    role: 'Banana Cultivator',
    farmName: '',
    location: 'Tando Ghulam Ali',
    avatar: '',
    rating: 5,
    quote: 'We used to be heavily dependent on chemical fertilizers in our banana crop, we were hesitant in shifting to vermicompost but once we observed the result, we have already planned to shift our lands on vermicompost and also planning to setup our own too as guided by Al-Barakah organics team',
    crop: 'Banana Crop',
    acreage: 'Commercial Land',
    yieldIncrease: 'Organic Soil Transformation',
  },
]
