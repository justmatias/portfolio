import { database } from '@/lib/db';
import { Project } from '@/models/project';
import type { Project as ProjectType } from '@/models/project';

export async function getProjects(): Promise<ProjectType[]> {
  await database.connect();
  return Project.find({}).lean<ProjectType[]>();
}
