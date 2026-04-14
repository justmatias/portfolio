import { unstable_cache } from 'next/cache';
import { database } from '@/lib/db';
import { Blogger } from '@/models/blogger';
import type { Blogger as BloggerType } from '@/models/blogger';

export const getBloggers = unstable_cache(
  async (): Promise<BloggerType[]> => {
    await database.connect();
    return Blogger.find({}).lean<BloggerType[]>();
  },
  ['bloggers'],
  { tags: ['bloggers'] }
);
