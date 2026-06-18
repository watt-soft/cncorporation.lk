import type { ExportProduct } from '../types';
import { getAssetPath } from '../utils/assetPath';

export const exportData: ExportProduct[] = [
  {
    id: 'e1',
    name: 'Coir Fibre (Thanthu)',
    image: getAssetPath('/export_product_hero.jpeg'),
    description: 'High-quality natural fibre extracted from coconut husks, processed in our Sri Lankan facilities to meet international standards.',
    applications: [
      'Mattress and upholstery manufacturing',
      'Rope and twine production',
      'Erosion control and geotextiles',
      'Industrial brush manufacturing'
    ],
  },
  {
    id: 'e2',
    name: 'Coco Peat',
    image: getAssetPath('/export_product_hero.jpeg'),
    description: 'A 100% natural, eco-friendly growing medium with excellent water retention and aeration properties, ideal for horticulture.',
    applications: [
      'Commercial greenhouse farming',
      'Hydroponics and soil-less agriculture',
      'Potting mixes and soil conditioning',
      'Mushroom cultivation'
    ],
  }
];
