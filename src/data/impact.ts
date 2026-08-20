export interface ImpactMetric {
  label: string
  value: string
  subtext: string
  icon: string
}

export const impactMetricsData: ImpactMetric[] = [
  {
    label: 'Farmland Regenerated',
    value: '450+ Acres',
    subtext: 'Across Punjab, Sindh, KPK & Balochistan',
    icon: '🌱',
  },
  {
    label: 'Organic Waste Upcycled',
    value: '1,200+ Tons',
    subtext: 'Diverted from burning & open dumping',
    icon: '♻️',
  },
  {
    label: 'Chemical Fertilizers Saved',
    value: '45,000+ Bags',
    subtext: 'Reduced toxic runoff into groundwater',
    icon: '💧',
  },
  {
    label: 'Growers & Farmers Trained',
    value: '650+ Farmers',
    subtext: 'Through practical field workshops',
    icon: '👨‍🌾',
  },
]
