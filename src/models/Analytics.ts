import mongoose, { Schema, Document } from 'mongoose';

interface IAnalytics extends Document {
  date: Date;
  pageViews: Record<string, number>;
  totalVisits: number;
  totalQuotes: number;
  totalMessages: number;
  conversionRate: number;
}

const analyticsSchema = new Schema<IAnalytics>(
  {
    date: {
      type: Date,
      default: new Date(),
      index: true,
    },
    pageViews: {
      type: Map,
      of: Number,
      default: new Map(),
    },
    totalVisits: {
      type: Number,
      default: 0,
    },
    totalQuotes: {
      type: Number,
      default: 0,
    },
    totalMessages: {
      type: Number,
      default: 0,
    },
    conversionRate: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Analytics = mongoose.models.Analytics || mongoose.model<IAnalytics>('Analytics', analyticsSchema);

export default Analytics;
export type { IAnalytics };