import { database } from '@/lib/db';
import { Person } from '@/models/person';
import type { Person as PersonType } from '@/models/person';

export async function getPeople(): Promise<PersonType[]> {
  await database.connect();
  return Person.find({}).lean<PersonType[]>();
}
