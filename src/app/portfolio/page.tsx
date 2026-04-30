'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { PROJECT_CATEGORIES } from '@/lib/constants';
import { HiSparkles } from 'react-icons/hi2';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Mock data - replace with API call
  const projects = [
    {
      id: 1,
      title: 'Mechanical Drone Parts',
      category: 'mechanical',
      image: 'https://via.placeholder.com/400x300?text=Drone+Parts',
      description: 'High-precision drone frame components',
    },
    {
      id: 2,
      title: 'Product Prototype',
      category: 'prototype',
      image: 'https://via.placeholder.com/400x300?text=Prototype',
      description: 'Functional product prototype for testing',
    },
    {
      id: 3,
      title: 'Artistic Sculpture',
      category: 'artistic',
      image: 'https://via.placeholder.com/400x300?text=Art+Sculpture',
      description: 'Custom artistic 3D printed sculpture',
    },
    {
      id: 4,
      title: 'Custom Bracket',
      category: 'functional',
      image: 'https://via.placeholder.com/400x300?text=Bracket',
      description: 'Functional mounting bracket',
    },
  ];

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects;

  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-ridox-border dark:border-ridox-border-dark">
        <div className="container">
          <AnimatedSection>
            <Badge variant="secondary" size="lg" className="mb-6 inline-block">
              <HiSparkles className="w-4 h-4 mr-2" />
              Our Work
            </Badge>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Portfolio</h1>
            <p className="text-lg text-ridox-gray dark:text-gray-400 max-w-2xl">
              Explore our collection of completed projects showcasing precision manufacturing and design excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter */}
      <section className="container py-12">
        <div className="flex flex-wrap gap-3">
          <Button
            variant={selectedCategory === null ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            All Projects
          </Button>
          {PROJECT_CATEGORIES.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="container pb-32">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                <div className="aspect-video bg-ridox-border dark:bg-ridox-border-dark rounded-lg mb-4 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Badge variant="secondary" size="sm" className="mb-3">
                  {PROJECT_CATEGORIES.find((c) => c.id === project.category)?.label}
                </Badge>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-ridox-gray dark:text-gray-400 mb-4">{project.description}</p>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}