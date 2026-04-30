'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { AnimatedSection } from '@/components/AnimatedSection';
import { MATERIALS, DELIVERY_TIMES } from '@/lib/constants';
import { Badge } from '@/components/Badge';
import { HiSparkles, HiDocumentArrowUp } from 'react-icons/hi2';
import toast from 'react-hot-toast';

interface QuoteFormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  fileName: string;
  material: string;
  quantity: number;
  deliveryTime: string;
  message?: string;
}

export default function GetQuote() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<QuoteFormData>();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onSubmit = async (data: QuoteFormData) => {
    if (!uploadedFile) {
      toast.error('Please upload a file');
      return;
    }

    try {
      // TODO: Implement API call
      toast.success('Quote request submitted! We\'ll get back to you soon.');
    } catch (error) {
      toast.error('Failed to submit quote request');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = ['.stl', '.obj', '.step', '.stp'];
      const fileName = file.name.toLowerCase();
      const hasValidType = validTypes.some((type) => fileName.endsWith(type));

      if (!hasValidType) {
        toast.error('Invalid file type. Supported: STL, OBJ, STEP');
        return;
      }

      if (file.size > 50 * 1024 * 1024) {
        toast.error('File size too large. Maximum 50MB');
        return;
      }

      setUploadedFile(file);
      toast.success(`File ${file.name} uploaded successfully`);
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
              Get Started
            </Badge>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Request a Quote</h1>
            <p className="text-lg text-ridox-gray dark:text-gray-400 max-w-2xl">
              Upload your 3D file and get a professional quote within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="container section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="p-8 lg:p-12 h-fit">
            <h2 className="text-2xl font-bold mb-6">Your Project Details</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  {...register('customerName', { required: 'Name is required' })}
                  className="w-full px-4 py-2 border border-ridox-border dark:border-ridox-border-dark rounded-lg bg-ridox-white dark:bg-ridox-dark focus:outline-none focus:ring-2 focus:ring-ridox-green"
                  placeholder="John Doe"
                />
                {errors.customerName && (
                  <p className="text-red-500 text-sm mt-1">{errors.customerName.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  {...register('customerEmail', { required: 'Email is required' })}
                  className="w-full px-4 py-2 border border-ridox-border dark:border-ridox-border-dark rounded-lg bg-ridox-white dark:bg-ridox-dark focus:outline-none focus:ring-2 focus:ring-ridox-green"
                  placeholder="john@example.com"
                />
                {errors.customerEmail && (
                  <p className="text-red-500 text-sm mt-1">{errors.customerEmail.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  {...register('customerPhone', { required: 'Phone is required' })}
                  className="w-full px-4 py-2 border border-ridox-border dark:border-ridox-border-dark rounded-lg bg-ridox-white dark:bg-ridox-dark focus:outline-none focus:ring-2 focus:ring-ridox-green"
                  placeholder="+1 234 567 8900"
                />
                {errors.customerPhone && (
                  <p className="text-red-500 text-sm mt-1">{errors.customerPhone.message}</p>
                )}
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">3D File</label>
                <label className="relative block border-2 border-dashed border-ridox-border dark:border-ridox-border-dark rounded-lg p-6 text-center cursor-pointer hover:border-ridox-green transition-colors">
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    accept=".stl,.obj,.step,.stp"
                    className="hidden"
                  />
                  <div className="flex flex-col items-center gap-2">
                    <HiDocumentArrowUp className="w-8 h-8 text-ridox-green" />
                    {uploadedFile ? (
                      <>
                        <p className="font-medium">{uploadedFile.name}</p>
                        <p className="text-sm text-ridox-gray">Click to change file</p>
                      </>
                    ) : (
                      <>
                        <p className="font-medium">Drop your file here</p>
                        <p className="text-sm text-ridox-gray">STL, OBJ, STEP (max 50MB)</p>
                      </>
                    )}
                  </div>
                </label>
              </div>

              {/* Material */}
              <div>
                <label className="block text-sm font-medium mb-2">Material</label>
                <select
                  {...register('material', { required: 'Material is required' })}
                  className="w-full px-4 py-2 border border-ridox-border dark:border-ridox-border-dark rounded-lg bg-ridox-white dark:bg-ridox-dark focus:outline-none focus:ring-2 focus:ring-ridox-green"
                >
                  <option value="">Select material...</option>
                  {MATERIALS.map((mat) => (
                    <option key={mat.id} value={mat.id}>
                      {mat.name}
                    </option>
                  ))}
                </select>
                {errors.material && (
                  <p className="text-red-500 text-sm mt-1">{errors.material.message}</p>
                )}
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <input
                  type="number"
                  {...register('quantity', { required: 'Quantity is required', min: 1 })}
                  className="w-full px-4 py-2 border border-ridox-border dark:border-ridox-border-dark rounded-lg bg-ridox-white dark:bg-ridox-dark focus:outline-none focus:ring-2 focus:ring-ridox-green"
                  placeholder="1"
                />
                {errors.quantity && (
                  <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
                )}
              </div>

              {/* Delivery Time */}
              <div>
                <label className="block text-sm font-medium mb-2">Delivery Time</label>
                <select
                  {...register('deliveryTime', { required: 'Delivery time is required' })}
                  className="w-full px-4 py-2 border border-ridox-border dark:border-ridox-border-dark rounded-lg bg-ridox-white dark:bg-ridox-dark focus:outline-none focus:ring-2 focus:ring-ridox-green"
                >
                  <option value="">Select delivery time...</option>
                  {DELIVERY_TIMES.map((time) => (
                    <option key={time.id} value={time.id}>
                      {time.label}
                    </option>
                  ))}
                </select>
                {errors.deliveryTime && (
                  <p className="text-red-500 text-sm mt-1">{errors.deliveryTime.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Additional Notes</label>
                <textarea
                  {...register('message')}
                  className="w-full px-4 py-2 border border-ridox-border dark:border-ridox-border-dark rounded-lg bg-ridox-white dark:bg-ridox-dark focus:outline-none focus:ring-2 focus:ring-ridox-green h-24 resize-none"
                  placeholder="Any special requirements or notes..."
                />
              </div>

              <Button type="submit" isLoading={isSubmitting} className="w-full">
                Submit Quote Request
              </Button>
            </form>
          </Card>

          {/* Info */}
          <div className="space-y-8">
            <AnimatedSection>
              <Card>
                <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
                <ol className="space-y-4">
                  {[
                    'You submit your 3D file and project details',
                    'Our team reviews your specifications',
                    'We provide a detailed quote within 24 hours',
                    'You can approve and place your order',
                    'We manufacture and ship your parts',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-ridox-green text-ridox-white rounded-full flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <h3 className="text-2xl font-bold mb-4">Supported Formats</h3>
                <ul className="space-y-2">
                  {['.STL', '.OBJ', '.STEP', '.IGES'].map((format) => (
                    <li key={format} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-ridox-green rounded-full"></span>
                      {format}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}