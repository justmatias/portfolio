import mongoose, { InferSchemaType } from 'mongoose';
import type { TechKey } from '@/components/features/shared/logos';

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  demo: { type: String },
  repository: { type: String, required: true },
  stack: { type: [String], required: true },
  active: { type: Boolean, default: true },
});

export type Project = Omit<InferSchemaType<typeof schema>, 'stack'> & {
  stack: TechKey[];
};
export const Project =
  mongoose.models.Project || mongoose.model('Project', schema);
