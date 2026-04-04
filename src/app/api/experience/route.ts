import { NextResponse } from 'next/server';
import { database } from '@/database/database';
import { Experience } from '@/models/experience';

export async function GET(): Promise<NextResponse> {
  try {
    await database.connect();
    const experience = await Experience.find({}).sort({ order: -1 });
    return NextResponse.json(experience, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch experience data:', error);
    return NextResponse.json(
      { detail: 'Internal server error' },
      { status: 500 }
    );
  }
}
