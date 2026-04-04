import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, match: /[a-z]/ },
  description: { type: String },
  demo: { type: String },
  repository: { type: String },
  stack: { type: [String] },
  active: { type: Boolean, default: true },
});

export const Project =
  mongoose.models.Project || mongoose.model('Project', schema);
