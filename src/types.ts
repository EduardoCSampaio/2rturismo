export interface Tour {
  id: string;
  title: string;
  subtitle: string;
  category: 'imperdiveis' | 'aventura' | 'compras_noite' | 'familia';
  categoryLabel: string;
  image: string;
  duration: string;
  badge?: string;
  description: string;
  highlights: string[];
  tips?: string;
  destination: 'Brasil' | 'Argentina' | 'Paraguai' | 'Tríplice Fronteira';
  estimatedPrice?: string;
}

export interface TravelPackage {
  id: string;
  title: string;
  days: string;
  tag: string;
  popular?: boolean;
  image: string;
  description: string;
  includedTours: string[];
  idealFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  origin: string;
  comment: string;
  rating: number;
  tourTaken: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  location: string;
  tag: string;
}

export interface InstagramStory {
  id: string;
  title: string;
  iconName: string;
  image: string;
}
