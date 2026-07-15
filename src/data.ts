import { Service, PortfolioItem, StatCard, ProcessStep, Testimonial } from './types';

export const services: Service[] = [
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'Custom, scalable, and highly memorable vector marks designed to serve as the timeless anchor of your brand presence.',
    iconName: 'PenTool'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: 'Comprehensive brand books, color systems, typography pairs, and visual asset packages that create a unified corporate narrative.',
    iconName: 'Compass'
  },
  {
    id: 'social-media',
    title: 'Social Media Creatives',
    description: 'Stunning, high-conversion template designs, custom grids, and interactive story assets that build engaged online communities.',
    iconName: 'Share2'
  },
  {
    id: 'posters-flyers',
    title: 'Posters & Flyers',
    description: 'High-impact print and digital visual posters crafted with bold layouts and luxury typography for event and brand promotions.',
    iconName: 'Sparkles'
  },
  {
    id: 'brochures-catalogues',
    title: 'Brochures & Catalogues',
    description: 'Editorial-grade multi-page print layouts, product catalogs, and corporate lookbooks designed with sleek, grid-aligned structures.',
    iconName: 'BookOpen'
  },
  {
    id: 'business-cards',
    title: 'Business Cards',
    description: 'Ultra-minimal and modern business cards featuring exquisite typography, premium material layout suggestions, and clean details.',
    iconName: 'CreditCard'
  },
  {
    id: 'packaging-design',
    title: 'Packaging Design',
    description: 'Luxury outer boxes, custom labels, and structural product containers that maximize tactile shelf appeal and brand prestige.',
    iconName: 'Package'
  },
  {
    id: 'presentation-design',
    title: 'Presentation Design',
    description: 'Polished pitch decks, sales materials, and keynotes designed on clean grids with dynamic diagrams to communicate impactfully.',
    iconName: 'Presentation'
  },
  {
    id: 'youtube-thumbnails',
    title: 'YouTube Thumbnails',
    description: 'Psychology-driven, high-CTR display graphics utilizing dramatic contrast, custom typography, and vibrant visual hierarchy.',
    iconName: 'Youtube'
  },
  {
    id: 'advertisement-creatives',
    title: 'Advertisement Creatives',
    description: 'Strategic, eye-catching ad banners and billboard designs optimized for digital campaign performance and brand recall.',
    iconName: 'Megaphone'
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Aura Luxury Branding Suite',
    category: 'Branding',
    imageUrl: '/src/assets/images/branding_identity_1784126201453.jpg',
    description: 'A comprehensive branding guidelines and stationery system designed for an upscale design atelier.',
    client: 'Aura Atelier',
    year: '2026'
  },
  {
    id: 'port-2',
    title: 'Nectar Cosmetics Outer Box',
    category: 'Packaging',
    imageUrl: '/src/assets/images/luxury_packaging_1784126215438.jpg',
    description: 'Premium glass bottle labeling and structural embossed outer cardboard sleeve featuring luxury gold leaf print details.',
    client: 'Nectar Botanicals',
    year: '2026'
  },
  {
    id: 'port-3',
    title: 'Vibe Social Grid Campaign',
    category: 'Social Media',
    imageUrl: '/src/assets/images/social_media_1784126233734.jpg',
    description: 'A dynamic, high-contrast typography and abstract liquid 3D asset series built for a major digital product launch.',
    client: 'Vibe Wearables',
    year: '2025'
  },
  {
    id: 'port-4',
    title: 'Symmetry Exhibition Posters',
    category: 'Print',
    imageUrl: '/src/assets/images/print_poster_1784126251702.jpg',
    description: 'Swiss-style modern exhibition flyers and art posters featuring strong layout structures and high-end typography.',
    client: 'Metropolitan Art Club',
    year: '2026'
  },
  {
    id: 'port-5',
    title: 'NexaTech Global Billboard Campaign',
    category: 'Advertising',
    imageUrl: '/src/assets/images/advertising_creative_1784126271294.jpg',
    description: 'Large-scale high-contrast digital out-of-home advertising system deployed in major capital cities.',
    client: 'NexaTech Corp',
    year: '2026'
  },
  {
    id: 'port-6',
    title: 'Veridian Investor Keynote Deck',
    category: 'Presentation Design',
    imageUrl: '/src/assets/images/presentation_design_1784126287073.jpg',
    description: 'A high-stakes corporate slide deck custom designed with modern layouts to secure Serie-B round venture capital.',
    client: 'Veridian Group',
    year: '2025'
  }
];

export const stats: StatCard[] = [
  {
    id: 'stat-1',
    value: '250+',
    label: 'Projects Delivered',
    subtext: 'High-end vector graphic assets, custom logotypes, and total visual systems crafted with absolute care.',
    iconName: 'Briefcase'
  },
  {
    id: 'stat-2',
    value: '100+',
    label: 'Happy Clients',
    subtext: 'Niche startups, boutique brands, and global corporations trusting us to represent their brand voice.',
    iconName: 'Smile'
  },
  {
    id: 'stat-3',
    value: 'Fast Delivery',
    label: 'Rapid Execution',
    subtext: 'Meticulous design sprints delivering world-class visual drafts within your tightest schedules.',
    iconName: 'Clock'
  },
  {
    id: 'stat-4',
    value: 'Unique',
    label: 'Custom Concepts',
    subtext: 'Absolutely zero templates. Every outline, color pair, and layout structure built completely from scratch.',
    iconName: 'Sparkles'
  },
  {
    id: 'stat-5',
    value: 'Affordable',
    label: 'Transparent Rates',
    subtext: 'Elite-grade design craftsmanship accessible to ambitious growing businesses at fair rates.',
    iconName: 'Coins'
  },
  {
    id: 'stat-6',
    value: 'Unlimited',
    label: 'Perfect Revisions',
    subtext: 'We refine and polish endlessly until you are 100% in love with every detail of your design deliverables.',
    iconName: 'RefreshCw'
  }
];

export const processSteps: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Discussion',
    description: 'We host interactive alignment calls to extract your brand core, target user persona, and ultimate business objectives.',
    iconName: 'MessageSquareCode'
  },
  {
    stepNumber: 2,
    title: 'Research',
    description: 'Comprehensive analysis of visual competitors, market gaps, and contemporary aesthetic styles to frame a bold direction.',
    iconName: 'SearchCode'
  },
  {
    stepNumber: 3,
    title: 'Design',
    description: 'Our digital canvas comes alive. We model premium graphics, fine-tune font heights, and layout harmonious colors.',
    iconName: 'Palette'
  },
  {
    stepNumber: 4,
    title: 'Feedback',
    description: 'Review stages featuring shared interactive feedback tools. We implement your adjustment preferences in real-time.',
    iconName: 'GitPullRequest'
  },
  {
    stepNumber: 5,
    title: 'Delivery',
    description: 'We bundle high-resolution print vectors, web assets, style sheets, and raw development-ready source deliverables.',
    iconName: 'FileCheck'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Sarah Jenkins',
    company: 'Aura Luxury Wear',
    role: 'Founder & CEO',
    review: 'CMAC Graphics completely transformed our brand visual language. The packaging boxes and typography choices they designed instantly elevated our brand perception. We got listed in top boutiques within months of our launch.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 'test-2',
    clientName: 'David K.',
    company: 'NexaTech Solutions',
    role: 'Chief Marketing Officer',
    review: 'Their social media creatives are spectacular and drive serious engagement. We recorded a 45% lift in ad click-through rates after implementing their visual designs. Fast execution, pristine files, and incredible concepts.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 'test-3',
    clientName: 'Marcus Thorne',
    company: 'Thorne Media Channel',
    role: 'Executive Producer',
    review: 'The custom presentation decks and click-attracting YouTube thumbnails they design are unmatched. They have an expert eye for layout margins, whitespace, and visual depth. Partnering with them is a major growth catalyst.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 'test-4',
    clientName: 'Elena Rostova',
    company: 'Rostova Botanicals',
    role: 'Brand Manager',
    review: 'The option of unlimited revisions provided our team with extreme peace of mind, though they got the direction right from the very first draft. CMAC represents the gold standard of professional creative agency experiences.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120'
  }
];
