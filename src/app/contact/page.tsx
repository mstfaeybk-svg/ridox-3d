'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { HiSparkles, HiPhone, HiEnvelope, HiMapPin } from 'react-icons/hi2';
import toast from 'react-hot-toast';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // TODO: Implement API call
      console.log('Contact form submitted:', data);
      toast.success('Message sent! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message');
    }
  };

  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-ridox-border dark:border-ridox-border-dark">
        <div className="container">
          <AnimatedSection>
            <Badge variant="secondary" size="lg" className="mb-6 inline-block">
              <HiSparkles className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-ridox-gray dark:text-gray-400 max-w-2xl">
              Have questions or ready to start your project? We'd love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <AnimatedSection>
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ridox-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiEnvelope className="w-6 h-6 text-ridox-green" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-ridox-gray dark:text-gray-400 text-sm">info@ridox3d.com</p>
                    <p className="text-ridox-gray dark:text-gray-400 text-sm">support@ridox3d.com</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* Phone */}
            <AnimatedSection delay={0.1}>
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ridox-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiPhone className="w-6 h-6 text-ridox-green" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-ridox-gray dark:text-gray-400 text-sm">+1 (555) 123-4567</p>
                    <p className="text-ridox-gray dark:text-gray-400 text-sm text-xs mt-1">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* Address */}
            <AnimatedSection delay={0.2}>
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ridox-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HiMapPin className="w-6 h-6 text-ridox-green" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Address</h3>
                    <p className="text-ridox-gray dark:text-gray-400 text-sm">123 Innovation Drive</p>
                    <p className="text-ridox-gray dark:text-gray-400 text-sm">Tech City, TC 12345</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* WhatsApp */}
            <AnimatedSection delay={0.3}>
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ridox-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">WhatsApp</h3>
                    <p className="text-ridox-gray dark:text-gray-400 text-sm">+1 (555) 987-6543</p>
                    <p className="text-ridox-gray dark:text-gray-400 text-sm text-xs mt-1">Quick responses</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-2 border border-ridox-border dark:border-ridox-border-dark rounded-lg bg-ridox-white dark:bg-ridox-dark focus:outline-none focus:ring-2 focus:ring-ridox-green"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="w-full px-4 py-2 border border-ridox-border dark:border-ridox-border-dark rounded-lg bg-ridox-white dark:bg-ridox-dark focus:outline-none focus:ring-2 focus:ring-ridox-green"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-2 border border-ridox-border dark:border-ridox-border-dark rounded-lg bg-ridox-white dark:bg-ridox-dark focus:outline-none focus:ring-2 focus:ring-ridox-green"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-2 border border-ridox-border dark:border-ridox-border-dark rounded-lg bg-ridox-white dark:bg-ridox-dark focus:outline-none focus:ring-2 focus:ring-ridox-green"
                    placeholder="What is this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    className="w-full px-4 py-2 border border-ridox-border dark:border-ridox-border-dark rounded-lg bg-ridox-white dark:bg-ridox-dark focus:outline-none focus:ring-2 focus:ring-ridox-green h-32 resize-none"
                    placeholder="Your message here..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" isLoading={isSubmitting} className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="container mb-16">
        <Card>
          <div className="aspect-video bg-ridox-border dark:bg-ridox-border-dark rounded-lg flex items-center justify-center">
            <p className="text-ridox-gray dark:text-gray-400">Map integration coming soon</p>
          </div>
        </Card>
      </section>
    </>
  );
}