import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import QuoteRequest from '@/models/QuoteRequest';
import { calculateEstimatePrice } from '@/lib/utils';

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();
    const file = formData.get('file') as File;
    const material = formData.get('material') as string;
    const quantity = parseInt(formData.get('quantity') as string);
    const deliveryTime = formData.get('deliveryTime') as string;
    const customerName = formData.get('customerName') as string;
    const customerEmail = formData.get('customerEmail') as string;
    const customerPhone = formData.get('customerPhone') as string;
    const message = formData.get('message') as string;

    if (!file || !material || !quantity || !deliveryTime || !customerName || !customerEmail || !customerPhone) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Upload file to cloud storage (AWS S3, etc.)
    // For now, just store the file name
    const fileUrl = `/uploads/${file.name}`;

    // Calculate estimated price based on file size
    const estimatedWeight = file.size / 1000; // Rough estimate
    const estimatedCost = calculateEstimatePrice(estimatedWeight, material, deliveryTime, quantity);

    const quoteRequest = await QuoteRequest.create({
      fileName: file.name,
      fileUrl,
      material,
      quantity,
      deliveryTime,
      estimatedCost,
      customerName,
      customerEmail,
      customerPhone,
      message,
      status: 'pending',
    });

    return NextResponse.json(
      { success: true, data: quoteRequest },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Quote request error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
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