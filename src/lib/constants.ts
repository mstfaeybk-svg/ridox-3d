export const SITE_CONFIG = {
  name: 'Ridox 3D',
  description: 'Premium 3D Printing & Digital Manufacturing Services',
  url: 'https://ridox3d.com',
  ogImage: 'https://ridox3d.com/og-image.jpg',
  locale: 'en-US',
  author: 'Ridox 3D Team',
};

export const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/quote', label: 'Get a Quote' },
  { href: '/blog', label: 'Blog' },
  { href: '/references', label: 'References' },
  { href: '/contact', label: 'Contact' },
];

export const MATERIALS = [
  { id: 'pla', name: 'PLA', density: 1.24 },
  { id: 'abs', name: 'ABS', density: 1.04 },
  { id: 'petg', name: 'PETG', density: 1.27 },
  { id: 'nylon', name: 'Nylon', density: 1.14 },
  { id: 'tpu', name: 'TPU', density: 1.21 },
  { id: 'resin', name: 'Resin', density: 1.15 },
  { id: 'metal', name: 'Aluminum', density: 2.70 },
  { id: 'titanium', name: 'Titanium', density: 4.51 },
];

export const DELIVERY_TIMES = [
  { id: 'standard', label: '10-15 days', multiplier: 1 },
  { id: 'express', label: '5-7 days', multiplier: 1.5 },
  { id: 'expedited', label: '2-3 days', multiplier: 2.5 },
];

export const PRICE_PER_GRAM = 0.15; // Base price in USD

export const PROJECT_CATEGORIES = [
  { id: 'mechanical', label: 'Mechanical Parts' },
  { id: 'prototype', label: 'Prototypes' },
  { id: 'artistic', label: 'Artistic Prints' },
  { id: 'functional', label: 'Functional Items' },
];

export const SERVICES_LIST = [
  {
    id: '3d-printing',
    name: '3D Printing',
    icon: 'printer',
    description: 'High-precision 3D printing using state-of-the-art equipment and materials.',
    features: ['FDM/FFF', 'SLA/DLP', 'Multi-material', 'Post-processing'],
  },
  {
    id: 'reverse-engineering',
    name: 'Reverse Engineering',
    icon: 'cog',
    description: 'Convert physical objects into digital models for reproduction and modification.',
    features: ['3D scanning', 'CAD modeling', 'Surface optimization', 'Quality assurance'],
  },
  {
    id: 'prototyping',
    name: 'Prototyping',
    icon: 'layers',
    description: 'Fast iteration and rapid prototyping for product development.',
    features: ['Quick turnaround', 'Multiple iterations', 'Material testing', 'Functional validation'],
  },
  {
    id: 'custom-manufacturing',
    name: 'Custom Manufacturing',
    icon: 'wrench',
    description: 'Bespoke solutions tailored to your specific requirements.',
    features: ['Custom designs', 'Bulk orders', 'Quality control', 'Flexible materials'],
  },
];

export const TRUST_BADGES = [
  { label: '500+ Projects', value: '500+' },
  { label: 'Happy Clients', value: '150+' },
  { label: 'Materials Used', value: '20+' },
  { label: 'Years Experience', value: '8+' },
];

export const API_ENDPOINTS = {
  // Public
  portfolio: '/api/portfolio',
  projects: '/api/projects',
  blog: '/api/blog',
  contact: '/api/contact',
  quote: '/api/quote',
  testimonials: '/api/testimonials',
  
  // Admin
  admin: '/api/admin',
  auth: '/api/auth',
  adminPortfolio: '/api/admin/portfolio',
  adminBlog: '/api/admin/blog',
  adminQuotes: '/api/admin/quotes',
  adminMessages: '/api/admin/messages',
  adminAnalytics: '/api/admin/analytics',
  adminMedia: '/api/admin/media',
};