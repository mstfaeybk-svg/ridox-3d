import mongoose, { Schema, Document } from 'mongoose';

interface IQuoteRequest extends Document {
  fileName: string;
  fileUrl: string;
  material: string;
  quantity: number;
  deliveryTime: 'standard' | 'express' | 'expedited';
  estimatedCost?: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  message?: string;
  status: 'pending' | 'reviewed' | 'approved' | 'rejected';
  adminResponse?: string;
  createdAt: Date;
  updatedAt: Date;
}

const quoteRequestSchema = new Schema<IQuoteRequest>(
  {
    fileName: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: [true, 'Please select a material'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please specify quantity'],
      min: 1,
    },
    deliveryTime: {
      type: String,
      enum: ['standard', 'express', 'expedited'],
      required: true,
      default: 'standard',
    },
    estimatedCost: Number,
    customerName: {
      type: String,
      required: [true, 'Please provide your name'],
    },
    customerEmail: {
      type: String,
      required: [true, 'Please provide your email'],
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
    },
    customerPhone: {
      type: String,
      required: [true, 'Please provide your phone number'],
    },
    message: String,
    status: {
      type: String,
      enum: ['pending', 'reviewed', 'approved', 'rejected'],
      default: 'pending',
    },
    adminResponse: String,
  },
  { timestamps: true }
);

const QuoteRequest = mongoose.models.QuoteRequest || mongoose.model<IQuoteRequest>('QuoteRequest', quoteRequestSchema);

export default QuoteRequest;
export type { IQuoteRequest };