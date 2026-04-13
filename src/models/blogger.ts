import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  authorName: { type: String },
  url: { type: String },
  description: { type: String },
  lastUpdated: { type: Date },
});

export const Blogger =
  mongoose.models.Blogger || mongoose.model('Blogger', schema);
