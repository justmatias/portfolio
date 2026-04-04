import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  title: { type: String },
  url: { type: String },
  description: { type: String },
  category: {
    type: String,
    enum: ['content', 'person'],
    default: 'content',
  },
});

export const Resource =
  mongoose.models.Resource || mongoose.model('Resource', schema);
