import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  title: { type: String, match: /[a-z]/ },
  company: { type: String },
  description: { type: String },
  url: { type: String },
  since: { type: String },
  to: { type: String },
  labels: { type: [String] },
  order: { type: Number },
});

export const Experience =
  mongoose.models.Experience || mongoose.model('Experience', schema);
