'use client';

import React from 'react';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/quote' },
    ],
    Company: [
      { label: 'About', href: '/#about' },
      { label: 'Blog', href: '/blog' },
      { label: 'References', href: '/references' },
    ],
    Support: [
      { label: 'Contact', href: '/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Documentation', href: '/docs' },
    ],
    Legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Cookies', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-ridox-dark text-ridox-white border-t border-ridox-border-dark">
      <div className="container py-16 md:py-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-ridox-green transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-ridox-green/10 border border-ridox-green/20 rounded-xl p-8 mb-12 glass-effect">
          <div className="max-w-2xl">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to bring your design to life?</h3>
            <p className="text-gray-400 mb-6">Get started with a free quote on your next 3D printing project.</p>
            <Link href="/quote" className="inline-flex items-center gap-2 btn-primary">
              Get Started <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-ridox-border-dark pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2 font-display font-bold text-xl">
              <div className="w-8 h-8 bg-ridox-green rounded-lg flex items-center justify-center text-sm font-bold">
                R3
              </div>
              <span>Ridox 3D</span>
            </div>
            <p className="text-gray-400 text-sm">Premium 3D Manufacturing & Digital Services</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-ridox-green/10 hover:bg-ridox-green/20 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-ridox-green/10 hover:bg-ridox-green/20 flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-ridox-green/10 hover:bg-ridox-green/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {currentYear} Ridox 3D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};