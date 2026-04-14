import { database } from '@/lib/db';
import { Skill } from '@/models/skill';
import type { Skill as SkillType } from '@/models/skill';

export async function getSkillsByCategory(): Promise<{
  frontend: SkillType[];
  backend: SkillType[];
  devops: SkillType[];
}> {
  await database.connect();
  const [frontend, backend, devops] = await Promise.all([
    Skill.find({ category: 'frontend' }).sort({ name: 1 }).lean<SkillType[]>(),
    Skill.find({ category: 'backend' }).sort({ name: 1 }).lean<SkillType[]>(),
    Skill.find({ category: 'devops' }).sort({ name: 1 }).lean<SkillType[]>(),
  ]);
  return { frontend, backend, devops };
}
