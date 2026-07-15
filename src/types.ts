export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Branding' | 'Social Media' | 'Print' | 'Packaging' | 'Advertising' | 'Presentation Design';
  imageUrl: string;
  description: string;
  client: string;
  year: string;
}

export interface StatCard {
  id: string;
  value: string;
  label: string;
  subtext: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  review: string;
  rating: number;
  avatarUrl: string;
}
