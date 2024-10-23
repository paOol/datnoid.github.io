// app/api/market/route.js or route.ts

import { NextResponse } from 'next/server';

export async function GET(request: any) {
  try {
    const response = await fetch('https://app.datnoid.com/api/market/all');
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
