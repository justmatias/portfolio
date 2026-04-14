import { database } from '@/lib/db';
import { Resource } from '@/models/resource';
import type { Resource as ResourceType } from '@/models/resource';

export async function getResources(): Promise<ResourceType[]> {
  await database.connect();
  return Resource.find({}).lean<ResourceType[]>();
}
