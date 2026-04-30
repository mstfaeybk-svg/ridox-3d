import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Analytics from '@/models/Analytics';
import QuoteRequest from '@/models/QuoteRequest';
import ContactMessage from '@/models/ContactMessage';
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

    // Get current stats
    const totalQuotes = await QuoteRequest.countDocuments();
    const totalMessages = await ContactMessage.countDocuments();
    const pendingQuotes = await QuoteRequest.countDocuments({ status: 'pending' });

    // Get analytics
    const analytics = await Analytics.findOne().sort({ date: -1 });

    const stats = {
      totalQuotes,
      totalMessages,
      pendingQuotes,
      conversionRate: analytics?.conversionRate || 0,
      pageViews: analytics?.pageViews || {},
    };

    return NextResponse.json({ success: true, data: stats });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}