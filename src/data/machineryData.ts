import type { MachineItem } from '../types';

export const machineryData: MachineItem[] = [
  {
    id: 'm1',
    name: 'JP-Plast 5000',
    category: 'Plastic Recycling',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDesc: 'High-capacity industrial plastic shredder and granulator.',
    features: ['500kg/h processing capacity', 'Low noise operation', 'Energy-efficient motor', 'CE & ISO Certified'],
  },
  {
    id: 'm2',
    name: 'EcoFood Processor X1',
    category: 'Food Waste Recycling',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Commercial food waste compost machine with deodorization.',
    features: ['Reduces waste volume by 90%', 'Odorless processing', 'Produces high-grade compost in 24h', 'Compact footprint'],
  },
  {
    id: 'm3',
    name: 'Triton PET Recycler',
    category: 'Plastic Recycling',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Advanced PET bottle washing and flaking line.',
    features: ['Hot wash capability', 'Friction washer included', 'Output purity > 99%', 'Automated control panel'],
  },
  {
    id: 'm4',
    name: 'Hino Dutro Cargo',
    category: 'Vehicle',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Reliable Japanese commercial truck for heavy logistics.',
    features: ['High payload capacity', 'Fuel efficient diesel engine', 'Durable chassis', 'Imported directly from Japan'],
  }
];
