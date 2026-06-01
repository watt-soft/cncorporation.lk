export interface MachineItem {
  id: string;
  name: string;
  category: 'Plastic Recycling' | 'Food Waste Recycling' | 'Vehicle';
  image: string;
  shortDesc: string;
  features: string[];
}

export interface ExportProduct {
  id: string;
  name: string;
  image: string;
  description: string;
  applications: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  path: string;
  priority: 'high' | 'medium' | 'low';
}
