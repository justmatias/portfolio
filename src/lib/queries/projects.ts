import { unstable_cache } from 'next/cache';
import { database } from '@/lib/db';
import { Project } from '@/models/project';
import type { Project as ProjectType } from '@/models/project';

export const getProjects = unstable_cache(
  async (): Promise<ProjectType[]> => {
    await database.connect();
    return Project.find({}).lean<ProjectType[]>();
  },
  ['projects'],
  { tags: ['projects'] }
);
