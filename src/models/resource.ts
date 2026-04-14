import mongoose, { InferSchemaType } from 'mongoose';

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String, required: true },
});

export type Resource = InferSchemaType<typeof schema>;
export const Resource =
  mongoose.models.Resource || mongoose.model('Resource', schema);
