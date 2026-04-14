import mongoose, { InferSchemaType } from 'mongoose';
import type { TechKey } from '@/components/features/shared/logos';

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  category: {
    type: String,
    enum: ['frontend', 'backend', 'devops'],
    required: true,
  },
  url: { type: String, required: true },
  icon: { type: String, required: true },
});

export type Skill = Omit<InferSchemaType<typeof schema>, 'icon'> & {
  icon: TechKey;
};
export const Skill = mongoose.models.Skill || mongoose.model('Skill', schema);
