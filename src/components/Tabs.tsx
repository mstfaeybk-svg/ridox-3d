'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TabsProps {
  tabs: Array<{ label: string; content: React.ReactNode }>
  defaultIndex?: number;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div>
      <div className="flex gap-2 border-b border-ridox-border dark:border-ridox-border-dark mb-6">
        {tabs.map((tab, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeIndex === index
                ? 'border-b-2 border-ridox-green text-ridox-green'
                : 'text-ridox-gray hover:text-ridox-dark dark:hover:text-ridox-white'
            }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {tabs[activeIndex].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};