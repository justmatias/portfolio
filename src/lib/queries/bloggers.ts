import { database } from '@/lib/db';
import { Blogger } from '@/models/blogger';
import type { Blogger as BloggerType } from '@/models/blogger';

export async function getBloggers(): Promise<BloggerType[]> {
  await database.connect();
  return Blogger.find({}).lean<BloggerType[]>();
}
