import mongoose, { InferSchemaType } from 'mongoose';

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  since: { type: String, required: true },
  to: { type: String, required: true },
  labels: { type: [String], required: true },
  order: { type: Number, required: true },
});

export type WorkExperience = InferSchemaType<typeof schema>;
export const Experience =
  mongoose.models.Experience || mongoose.model('Experience', schema);
