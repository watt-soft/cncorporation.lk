export interface MachineSpec {
  model: string;
  dimensions: string;
  powerSupply: string;
  maxPower: string;
  processingVolume: string;
  weight: string;
}

export interface MachineDetails {
  overview: string;
  keyBenefits: { title: string; desc: string }[];
  processingSteps?: { step: number; title: string; desc: string }[];
  processableItems?: string[];
  nonProcessableItems?: string[];
  targetFacilities?: string[];
  systemOptions?: string[];
  specificationsTable?: MachineSpec[];
  diagramImage?: string;
  heroImage?: string;
}

export interface MachineItem {
  id: string;
  name: string;
  category: 'Plastic Recycling' | 'Food Waste Recycling' | 'Vehicle';
  image: string;
  shortDesc: string;
  features: string[];
  details?: MachineDetails;
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
