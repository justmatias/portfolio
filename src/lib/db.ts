import mongoose, { Mongoose } from 'mongoose';

const DATABASE_URI = process.env.DATABASE_URI || '';
const DATABASE_NAME = process.env.DATABASE_NAME || '';

class Database {
  private session: Mongoose | null;

  public constructor() {
    this.session = null;
  }

  public async init(): Promise<void> {
    this.session = await mongoose.connect(DATABASE_URI, {
      dbName: DATABASE_NAME,
    });
    console.log('MongoDB connected');
  }

  public async connect(): Promise<Mongoose> {
    if (!this.session) {
      try {
        await this.init();

        if (!this.session) {
          throw new Error('MongoDB session is null after trying to connect.');
        }
        return this.session;
      } catch (error) {
        console.error('Error connecting to the database:', error);
        throw new Error('Failed to connect to the database.');
      }
    }
    return this.session;
  }
}

export const database = new Database();
