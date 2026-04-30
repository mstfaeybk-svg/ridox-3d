// Common Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationQuery {
  page: number;
  limit: number;
  skip: number;
}

// Portfolio Types
export interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  images: string[];
  thumbnailImage: string;
  category: 'mechanical' | 'prototype' | 'artistic' | 'functional';
  materials: string[];
  productionTime: number; // in days
  quantity: number;
  price?: number;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Blog Types
export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  categories: string[];
  coverImage: string;
  published: boolean;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

// Quote Types
export interface QuoteRequest {
  _id: string;
  fileName: string;
  fileUrl: string;
  material: string;
  quantity: number;
  deliveryTime: 'standard' | 'express' | 'expedited';
  estimatedCost?: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  message?: string;
  status: 'pending' | 'reviewed' | 'approved' | 'rejected';
  adminResponse?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Contact Types
export interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

// User/Admin Types
export interface AdminUser {
  _id: string;
  email: string;
  name: string;
  role: 'admin' | 'moderator';
  createdAt: Date;
  lastLogin: Date;
}

export interface JwtPayload {
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

// Service Types
export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  features: string[];
  price?: string;
}

// Testimonial Types
export interface Testimonial {
  _id: string;
  clientName: string;
  clientCompany: string;
  clientImage?: string;
  quote: string;
  rating: number; // 1-5
  featured: boolean;
  createdAt: Date;
}

// Analytics Types
export interface Analytics {
  totalVisits: number;
  totalQuotes: number;
  totalMessages: number;
  conversionRate: number;
  topPages: Array<{ path: string; visits: number }>;
}