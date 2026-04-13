import { NextResponse } from 'next/server';
import { database } from '@/database/database';
import { Person } from '@/models/person';

export async function GET(): Promise<NextResponse> {
  try {
    await database.connect();
    const people = await Person.find({});
    return NextResponse.json(people, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch people data:', error);
    return NextResponse.json(
      { detail: 'Internal server error' },
      { status: 500 }
    );
  }
}
