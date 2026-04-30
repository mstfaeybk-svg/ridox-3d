'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/Badge';
import { Card } from '@/components/Card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/Button';
import { HiSparkles, HiArrowRight } from 'react-icons/hi2';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BLOG_CATEGORIES = ['All', '3D Printing Tips', 'Materials', 'Guides', 'Case Studies'];

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: number;
}

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with 3D Printing: A Beginner\'s Guide',
    excerpt: 'Learn the fundamentals of 3D printing technology and how to choose the right method for your project.',
    category: '3D Printing Tips',
    date: '2026-04-28',
    author: 'Sarah Chen',
    image: 'https://via.placeholder.com/400x250?text=3D+Printing',
    readTime: 5,
  },
  {
    id: 2,
    title: 'Comparing PLA vs PETG: Material Guide',
    excerpt: 'Understand the differences between popular 3D printing materials and when to use each one.',
    category: 'Materials',
    date: '2026-04-25',
    author: 'James Rodriguez',
    image: 'https://via.placeholder.com/400x250?text=Materials',
    readTime: 8,
  },
  {
    id: 3,
    title: 'Post-Processing Techniques for Better Results',
    excerpt: 'Discover professional post-processing methods to enhance the quality of your 3D printed parts.',
    category: 'Guides',
    date: '2026-04-22',
    author: 'Emma Wilson',
    image: 'https://via.placeholder.com/400x250?text=Post+Processing',
    readTime: 6,
  },
  {
    id: 4,
    title: 'Case Study: Manufacturing Custom Medical Device Components',
    excerpt: 'How we successfully produced precision medical device components for a leading healthcare company.',
    category: 'Case Studies',
    date: '2026-04-19',
    author: 'Michael Park',
    image: 'https://via.placeholder.com/400x250?text=Medical+Devices',
    readTime: 7,
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPosts = selectedCategory === 'All'
    ? mockPosts
    : mockPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-ridox-border dark:border-ridox-border-dark">
        <div className="container">
          <AnimatedSection>
            <Badge variant="secondary" size="lg" className="mb-6 inline-block">
              <HiSparkles className="w-4 h-4 mr-2" />
              Knowledge Base
            </Badge>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Blog</h1>
            <p className="text-lg text-ridox-gray dark:text-gray-400 max-w-2xl">
              Industry insights, tips, and best practices for 3D manufacturing and digital services.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-12 border-b border-ridox-border dark:border-ridox-border-dark">
        <div className="flex flex-wrap gap-3">
          {BLOG_CATEGORIES.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="container section">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                {/* Image */}
                <div className="aspect-video bg-ridox-border dark:bg-ridox-border-dark rounded-lg mb-4 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" size="sm">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-ridox-gray dark:text-gray-400">
                    {post.readTime} min read
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-ridox-green transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-ridox-gray dark:text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-ridox-border dark:border-ridox-border-dark">
                  <div>
                    <p className="text-sm font-medium">{post.author}</p>
                    <p className="text-xs text-ridox-gray dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" size="sm">
                      Read <HiArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-ridox-gray dark:text-gray-400">No posts found in this category.</p>
          </div>
        )}
      </section>
    </>
  );
}