import { unstable_cache } from 'next/cache';
import { database } from '@/lib/db';
import { Experience } from '@/models/experience';
import type { WorkExperience } from '@/models/experience';

export const getExperience = unstable_cache(
  async (): Promise<WorkExperience[]> => {
    await database.connect();
    return Experience.find({}).sort({ order: -1 }).lean<WorkExperience[]>();
  },
  ['experience'],
  { tags: ['experience'] }
);
