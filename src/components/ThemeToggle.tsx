'use client';

import React from 'react';
import { useThemeStore } from '@/store/themeStore';
import { HiMoon, HiSun } from 'react-icons/hi2';

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-ridox-border dark:bg-ridox-border-dark hover:bg-ridox-green/10 dark:hover:bg-ridox-green/20 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <HiSun className="w-5 h-5 text-amber-500" />
      ) : (
        <HiMoon className="w-5 h-5 text-ridox-green" />
      )}
    </button>
  );
};