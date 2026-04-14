import mongoose, { InferSchemaType } from 'mongoose';

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String, required: true },
});

export type Person = InferSchemaType<typeof schema>;
export const Person =
  mongoose.models.Person || mongoose.model('Person', schema);
