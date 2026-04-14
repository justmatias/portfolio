import mongoose, { InferSchemaType } from 'mongoose';

const schema = new mongoose.Schema({
  authorName: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String, required: true },
  lastUpdated: { type: Date },
});

export type Blogger = InferSchemaType<typeof schema>;
export const Blogger =
  mongoose.models.Blogger || mongoose.model('Blogger', schema);
