export interface ImpactMetric {
  label: string
  value: string
  subtext: string
  icon: string
}

export const impactMetricsData: ImpactMetric[] = [
  {
    label: 'Farmland Supported',
    value: '3,000+ Acres',
    subtext: 'Farmers of 3000+ acres are part of our community',
    icon: '🌱',
  },
  {
    label: 'Organic Bags Supplied',
    value: '10,000+ Bags',
    subtext: 'Premium vermicompost delivered across Pakistan',
    icon: '📦',
  },
  {
    label: 'Trainings Conducted',
    value: '100+ Sessions',
    subtext: 'Zaraat Kach’heri & hands-on farmer workshops',
    icon: '🎓',
  },
  {
    label: 'Farmers Empowered',
    value: '500+ Growers',
    subtext: 'Upskilled in practical sustainable agriculture',
    icon: '👨‍🌾',
  },
]
