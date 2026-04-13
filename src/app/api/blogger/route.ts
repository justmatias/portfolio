import { NextResponse } from 'next/server';
import { database } from '@/database/database';
import { Blogger } from '@/models/blogger';

export async function GET(): Promise<NextResponse> {
  try {
    await database.connect();
    const bloggers = await Blogger.find({});
    return NextResponse.json(bloggers, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch bloggers data:', error);
    return NextResponse.json(
      { detail: 'Internal server error' },
      { status: 500 }
    );
  }
}
