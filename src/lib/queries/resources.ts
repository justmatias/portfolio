import { unstable_cache } from 'next/cache';
import { database } from '@/lib/db';
import { Resource } from '@/models/resource';
import type { Resource as ResourceType } from '@/models/resource';

export const getResources = unstable_cache(
  async (): Promise<ResourceType[]> => {
    await database.connect();
    return Resource.find({}).lean<ResourceType[]>();
  },
  ['resources'],
  { tags: ['resources'] }
);
