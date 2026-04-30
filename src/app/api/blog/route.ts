import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import BlogPost from '@/models/BlogPost';

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const posts = await BlogPost.find({ published: true })
      .sort({ createdAt: -1 })
      .limit(12);
    return NextResponse.json({ success: true, data: posts });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}