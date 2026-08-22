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
    title: 'Commercial Vermicomposting Bed Preparation Overview',
    location: 'Al Barakh Production Facility, Punjab',
    type: 'video',
    videoUrl: '/videos/Bed_Preparation_Overview.MP4',
    thumbnailUrl: '/images/poster-bed-prep.jpg',
    description: 'Practical walkthrough of raised vermicomposting bed construction, aeration base layers, and moisture optimization for high-density breeding.',
    tag: 'Bed Setup',
  },
  {
    id: '2',
    title: 'Biomass Mulching & Substrate Layering in Action',
    location: 'Sheikhupura Agro Research Site',
    type: 'video',
    videoUrl: '/videos/Biomass_Mulching_Layering.MP4',
    thumbnailUrl: '/images/poster-biomass-mulch.jpg',
    description: 'Demonstrating organic biomass mulching, cattle manure layering, and natural temperature buffering for optimal worm feeding activity.',
    tag: 'Mulching & Layering',
  },
  {
    id: '3',
    title: 'Field-Scale Vermiculture Infrastructure & Shading',
    location: 'Central Punjab Commercial Farm',
    type: 'video',
    videoUrl: '/videos/Field_Scale_Setup_Structure.MP4',
    thumbnailUrl: '/images/poster-field-infra.jpg',
    description: 'Overview of commercial-scale shaded windrow layouts designed for heavy organic waste upcycling and protection against climate extremes.',
    tag: 'Farm Infrastructure',
  },
  {
    id: '4',
    title: 'Organic Biomass Spreading & Bed Inoculation Phase',
    location: 'Sargodha Agricultural Hub',
    type: 'video',
    videoUrl: '/videos/Organic_Biomass_Spreading_Phase.MP4',
    thumbnailUrl: '/images/poster-biomass-spread.jpg',
    description: 'Field execution showing uniform organic matter spreading and introducing active Eisenia fetida colonies for rapid organic digestion.',
    tag: 'Bed Inoculation',
  },
]

