import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const formatDate = (date: Date | string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const calculateEstimatePrice = (weight: number, material: string, deliveryTime: string, quantity: number) => {
  const basePricePerGram = 0.15;
  const materialMultiplier = getMaterialMultiplier(material);
  const deliveryMultiplier = getDeliveryMultiplier(deliveryTime);
  const quantityDiscount = quantity > 10 ? 0.9 : quantity > 5 ? 0.95 : 1;
  
  const baseCost = weight * basePricePerGram * materialMultiplier * deliveryMultiplier * quantityDiscount;
  const markup = baseCost * 0.2; // 20% markup
  
  return baseCost + markup;
};

const getMaterialMultiplier = (material: string): number => {
  const multipliers: Record<string, number> = {
    pla: 1,
    abs: 1.1,
    petg: 1.2,
    nylon: 1.5,
    tpu: 1.3,
    resin: 2,
    metal: 5,
    titanium: 8,
  };
  return multipliers[material] || 1;
};

const getDeliveryMultiplier = (deliveryTime: string): number => {
  const multipliers: Record<string, number> = {
    standard: 1,
    express: 1.5,
    expedited: 2.5,
  };
  return multipliers[deliveryTime] || 1;
};

export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validateFileType = (fileName: string): boolean => {
  const allowed = ['.stl', '.obj', '.step', '.stp', '.iges', '.igs'];
  const ext = '.' + fileName.split('.').pop()?.toLowerCase();
  return allowed.includes(ext);
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};