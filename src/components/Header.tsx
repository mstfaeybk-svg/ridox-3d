'use client';

import React from 'react';
import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/constants';
import { ThemeToggle } from './ThemeToggle';
import { HiMenu, HiXMark } from 'react-icons/hi2';
import { useState } from 'react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-ridox-white/80 dark:bg-ridox-dark/80 backdrop-blur-md border-b border-ridox-border dark:border-ridox-border-dark">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-2xl">
          <div className="w-8 h-8 bg-ridox-green rounded-lg flex items-center justify-center text-ridox-white text-sm font-bold">
            R3
          </div>
          <span className="hidden sm:inline">Ridox 3D</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-ridox-green transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="hidden md:inline btn-primary text-sm">
            Get a Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-ridox-border dark:hover:bg-ridox-border-dark rounded-lg transition-colors"
          >
            {isOpen ? (
              <HiXMark className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-ridox-border dark:border-ridox-border-dark">
          <nav className="container py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-ridox-green transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="btn-primary w-full text-sm mt-4">
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};