import { TechKey } from '@/types/tech-keys';

export type Project = {
  name: string;
  description: string;
  demo: string;
  repository: string;
  stack: TechKey[];
  active: boolean;
};
