import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Testimonial from '@/models/Testimonial';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const testimonials = await Testimonial.find({ featured: true }).limit(6);
    return NextResponse.json({ success: true, data: testimonials });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}