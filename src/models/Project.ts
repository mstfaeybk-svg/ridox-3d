import mongoose, { Schema, Document } from 'mongoose';

interface IProject extends Document {
  title: string;
  slug: string;
  description: string;
  images: string[];
  thumbnailImage: string;
  category: 'mechanical' | 'prototype' | 'artistic' | 'functional';
  materials: string[];
  productionTime: number;
  quantity: number;
  price?: number;
  featured: boolean;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a project title'],
      maxlength: [120, 'Title cannot be more than 120 characters'],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
    },
    images: {
      type: [String],
      required: true,
      validate: {
        validator: function (v: string[]) {
          return v.length > 0;
        },
        message: 'At least one image is required',
      },
    },
    thumbnailImage: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['mechanical', 'prototype', 'artistic', 'functional'],
      required: true,
    },
    materials: {
      type: [String],
      required: true,
    },
    productionTime: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    price: Number,
    featured: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Project = mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema);

export default Project;
export type { IProject };