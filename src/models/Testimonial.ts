import mongoose, { Schema, Document } from 'mongoose';

interface ITestimonial extends Document {
  clientName: string;
  clientCompany: string;
  clientImage?: string;
  quote: string;
  rating: number;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const testimonialSchema = new Schema<ITestimonial>(
  {
    clientName: {
      type: String,
      required: [true, 'Please provide client name'],
    },
    clientCompany: {
      type: String,
      required: [true, 'Please provide company name'],
    },
    clientImage: String,
    quote: {
      type: String,
      required: [true, 'Please provide a quote'],
      maxlength: [500, 'Quote cannot exceed 500 characters'],
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Testimonial = mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', testimonialSchema);

export default Testimonial;
export type { ITestimonial };