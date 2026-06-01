import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 's1',
    title: 'Recycling Machinery',
    icon: 'Factory',
    path: '/import',
    priority: 'high',
  },
  {
    id: 's2',
    title: 'Agricultural Exports',
    icon: 'Leaf',
    path: '/export',
    priority: 'medium',
  },
  {
    id: 's3',
    title: 'Visa & Work Permits',
    icon: 'Globe',
    path: '/visa-services',
    priority: 'low',
  },
  {
    id: 's4',
    title: 'Vehicle Import',
    icon: 'Car',
    path: '/import',
    priority: 'low',
  }
];
