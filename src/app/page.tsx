'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { GradientText } from '@/components/GradientText';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card } from '@/components/Card';
import { TRUST_BADGES, SERVICES_LIST } from '@/lib/constants';
import { HiArrowRight, HiSparkles, HiCubeTransparent, HiLightBulb, HiWrenchScrewdriver } from 'react-icons/hi2';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-40 md:pb-48">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-ridox-green/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-ridox-green/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-8"
          >
            <Badge variant="secondary" size="lg" className="mb-6 inline-block">
              <HiSparkles className="w-4 h-4 mr-2" />
              Next Generation Manufacturing
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight text-balance"
          >
            Precision <GradientText>3D Manufacturing</GradientText> for the Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-ridox-gray dark:text-gray-400 mb-12 max-w-2xl mx-auto text-balance"
          >
            Expert 3D printing, rapid prototyping, and custom digital manufacturing. From concept to production, we deliver precision parts with premium materials.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/quote">
              <Button size="lg" className="w-full sm:w-auto">
                Get a Quote <HiArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                View Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="container py-16 md:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {TRUST_BADGES.map((badge, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-ridox-green mb-2">
                {badge.value}
              </div>
              <p className="text-sm md:text-base text-ridox-gray dark:text-gray-400">
                {badge.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="section bg-ridox-border/5 dark:bg-ridox-border-dark/5">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title mb-4">Our Services</h2>
            <p className="text-lg text-ridox-gray dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive 3D manufacturing solutions tailored to your needs
            </p>
          </AnimatedSection>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {SERVICES_LIST.map((service, index) => {
              const iconMap: Record<string, React.ReactNode> = {
                printer: <HiCubeTransparent className="w-8 h-8" />,
                cog: <HiWrenchScrewdriver className="w-8 h-8" />,
                layers: <HiLightBulb className="w-8 h-8" />,
                wrench: <HiWrenchScrewdriver className="w-8 h-8" />,
              };

              return (
                <motion.div key={service.id} variants={itemVariants}>
                  <Card hover>
                    <div className="text-ridox-green mb-4">{iconMap[service.icon]}</div>
                    <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                    <p className="text-ridox-gray dark:text-gray-400 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-ridox-green rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Link href="/services">
              <Button variant="secondary" size="lg">
                Explore All Services <HiArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div>
              <h2 className="section-title mb-4">Featured Projects</h2>
              <p className="text-lg text-ridox-gray dark:text-gray-400">
                See what we've created for our clients
              </p>
            </div>
            <Link href="/portfolio">
              <Button variant="outline">
                View All Projects <HiArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Placeholder Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((item) => (
              <motion.div key={item} variants={itemVariants}>
                <div className="h-64 bg-gradient-to-br from-ridox-green/10 to-ridox-green/5 rounded-xl border border-ridox-border dark:border-ridox-border-dark flex items-center justify-center">
                  <p className="text-ridox-gray dark:text-gray-400">Project {item}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-ridox-green text-ridox-white">
        <div className="container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg opacity-90 mb-8">
              Get a free quote today and let's bring your design to life with precision manufacturing.
            </p>
            <Link href="/quote">
              <Button className="bg-ridox-white text-ridox-green hover:bg-gray-100">
                Get Started Now <HiArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}