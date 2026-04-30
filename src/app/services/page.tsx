'use client';

import React from 'react';
import { Badge } from '@/components/Badge';
import { Card } from '@/components/Card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SERVICES_LIST } from '@/lib/constants';
import { HiSparkles } from 'react-icons/hi2';

const iconMap: Record<string, React.ReactNode> = {
  printer: '🖨️',
  cog: '⚙️',
  layers: '📚',
  wrench: '🔧',
};

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-ridox-border dark:border-ridox-border-dark">
        <div className="container">
          <AnimatedSection>
            <Badge variant="secondary" size="lg" className="mb-6 inline-block">
              <HiSparkles className="w-4 h-4 mr-2" />
              What We Offer
            </Badge>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Services</h1>
            <p className="text-lg text-ridox-gray dark:text-gray-400 max-w-2xl">
              Comprehensive 3D manufacturing solutions tailored to meet your specific needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="container section">
        <div className="space-y-16">
          {SERVICES_LIST.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <Card className="p-8 md:p-12">
                <div className="text-5xl mb-6">📦</div>
                <h2 className="text-4xl font-bold mb-4">{service.name}</h2>
                <p className="text-lg text-ridox-gray dark:text-gray-400 mb-8">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-ridox-green rounded-full mt-2 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-ridox-green/10 dark:bg-ridox-green/5 rounded-lg p-6 flex items-center justify-center min-h-[200px]">
                    <p className="text-center text-ridox-gray dark:text-gray-400">
                      Ready to get started with {service.name}?
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}