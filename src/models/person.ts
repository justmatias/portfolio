import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String },
  url: { type: String },
  description: { type: String },
});

export const Person =
  mongoose.models.Person || mongoose.model('Person', schema);
