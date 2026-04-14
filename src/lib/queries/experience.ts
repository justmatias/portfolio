import { database } from '@/lib/db';
import { Experience } from '@/models/experience';
import type { WorkExperience } from '@/models/experience';

export async function getExperience(): Promise<WorkExperience[]> {
  await database.connect();
  return Experience.find({}).sort({ order: -1 }).lean<WorkExperience[]>();
}
