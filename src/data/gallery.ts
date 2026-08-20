export interface GalleryItem {
  id: string
  title: string
  location: string
  type: 'video' | 'image'
  videoUrl?: string
  thumbnailUrl: string
  description: string
  tag: string
}

export const galleryData: GalleryItem[] = [
  {
    id: '1',
    title: 'Commercial Vermicomposting Bed Setup & Inoculation',
    location: 'Faisalabad Agro Farm, Punjab',
    type: 'video',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnailUrl: '/images/hero-vermicompost.jpg',
    description: 'Demonstrating temperature monitoring, moisture regulation, and biomass layer distribution for 50-ton monthly capacity beds.',
    tag: 'Farm Setup',
  },
  {
    id: '2',
    title: 'Harvesting Pure Castings & Mechanical Rotary Screening',
    location: 'Sargodha Research Station',
    type: 'video',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnailUrl: '/images/statssection.jpg',
    description: 'Continuous harvesting methodology separating live worm colonies from nutrient-dense granular organic vermicompost.',
    tag: 'Harvesting',
  },
  {
    id: '3',
    title: 'Grower Workshop: Hands-On Colony Management',
    location: 'Multan Agricultural Hub',
    type: 'video',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailUrl: '/images/satisfiedfarmers.jpg',
    description: 'Training 40+ citrus orchardists on making on-farm liquid vermiwash tonics to eliminate expensive synthetic chemical sprays.',
    tag: 'Training',
  },
  {
    id: '4',
    title: 'Field Results: Wheat & Corn Vigour Comparison',
    location: 'Sahiwal Farmland',
    type: 'video',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailUrl: '/images/hero-farm-landscape.jpg',
    description: 'Side-by-side root structure comparison of vermicompost-treated soil versus conventionally fertilized acreage.',
    tag: 'Field Impact',
  },
  {
    id: '5',
    title: 'Commercial Nursery Soil Bedding Transformation',
    location: 'Lahore Horticulture Facility',
    type: 'image',
    thumbnailUrl: '/images/serve-nurseries.jpg',
    description: 'Seedling germination rate improved by 35% using our custom organic potting mix.',
    tag: 'Horticulture',
  },
  {
    id: '6',
    title: 'High-Density Citrus Orchard Regeneration',
    location: 'Bhalwal Kinnow Belt',
    type: 'image',
    thumbnailUrl: '/images/serve-growers.jpg',
    description: 'Restoring yellowing kinnow trees through biological root zone feeding and biochar enrichment.',
    tag: 'Orchards',
  },
]
