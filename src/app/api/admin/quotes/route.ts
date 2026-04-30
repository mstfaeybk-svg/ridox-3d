import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import QuoteRequest from '@/models/QuoteRequest';
import { extractToken, verifyToken } from '@/lib/auth';

function isAuthenticated(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  const token = extractToken(authHeader);
  if (!token) return false;
  return verifyToken(token) !== null;
}

export async function GET(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    await connectDB();
    const quotes = await QuoteRequest.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: quotes });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  if (!isAuthenticated(req)) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    await connectDB();
    const { quoteId, status, adminResponse } = await req.json();

    const quote = await QuoteRequest.findByIdAndUpdate(
      quoteId,
      { status, adminResponse, updatedAt: new Date() },
      { new: true }
    );

    return NextResponse.json({ success: true, data: quote });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}