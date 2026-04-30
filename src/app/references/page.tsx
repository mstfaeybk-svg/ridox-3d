'use client';

import React from 'react';
import { Badge } from '@/components/Badge';
import { Card } from '@/components/Card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/Button';
import { HiSparkles, HiArrowRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'David Chen',
    company: 'TechFlow Systems',
    quote:
      'Ridox 3D transformed our prototyping process. Their precision and turnaround time are unmatched in the industry.',
    image: 'https://via.placeholder.com/80?text=David',
    rating: 5,
  },
  {
    id: 2,
    name: 'Elena Rodriguez',
    company: 'Innovative Designs Co.',
    quote:
      'Working with Ridox 3D has been a game-changer for our startup. They understand our needs and deliver exceptional quality.',
    image: 'https://via.placeholder.com/80?text=Elena',
    rating: 5,
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    company: 'Manufacturing Plus Inc.',
    quote:
      'Their expertise in materials and processes has helped us reduce production costs while improving product quality significantly.',
    image: 'https://via.placeholder.com/80?text=Marcus',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sophie Bernard',
    company: 'Creative Industries Ltd.',
    quote:
      'From concept to production, Ridox 3D handled everything professionally. Highly recommended for any manufacturing needs.',
    image: 'https://via.placeholder.com/80?text=Sophie',
    rating: 5,
  },
];

const clients = [
  { name: 'TechFlow', logo: '🚀' },
  { name: 'Innovative', logo: '💡' },
  { name: 'Manufacturing+', logo: '⚙️' },
  { name: 'CreativeInd', logo: '🎨' },
  { name: 'NextGen', logo: '🔧' },
  { name: 'ProTech', logo: '🏭' },
];

export default function References() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-ridox-border dark:border-ridox-border-dark">
        <div className="container">
          <AnimatedSection>
            <Badge variant="secondary" size="lg" className="mb-6 inline-block">
              <HiSparkles className="w-4 h-4 mr-2" />
              Our Clients
            </Badge>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">References & Testimonials</h1>
            <p className="text-lg text-ridox-gray dark:text-gray-400 max-w-2xl">
              See what our satisfied clients and partners have to say about working with Ridox 3D.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Client Logos */}
      <section className="container section border-b border-ridox-border dark:border-ridox-border-dark">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by Leading Companies</h2>
          <p className="text-ridox-gray dark:text-gray-400 mb-8">
            Partner with industry-leading organizations worldwide
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-32 flex items-center justify-center hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <p className="text-4xl mb-2">{client.logo}</p>
                  <p className="font-semibold text-sm">{client.name}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container section">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
          <p className="text-ridox-gray dark:text-gray-400">
            Real feedback from companies we've worked with
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg mb-6 italic text-ridox-gray dark:text-gray-400">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-ridox-gray dark:text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container section bg-gradient-to-r from-ridox-green/10 to-transparent rounded-2xl border border-ridox-border dark:border-ridox-border-dark p-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Network</h2>
          <p className="text-ridox-gray dark:text-gray-400 mb-6">
            Ready to experience the Ridox 3D difference? Let's discuss how we can support your manufacturing needs.
          </p>
          <Button>
            Get in Touch <HiArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
}