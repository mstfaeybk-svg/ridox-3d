'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, hover = false, className = '' }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : {}}
      className={`rounded-xl border border-ridox-border dark:border-ridox-border-dark p-6 bg-ridox-white dark:bg-ridox-dark/50 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};