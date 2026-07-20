// app/lib/dbConnect.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Type assertion to tell TypeScript this is definitely a string
const uri: string = MONGODB_URI;

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    // Use the asserted string variable
    cached.promise = mongoose.connect(uri, opts).then((m) => {
      console.log('✅ MongoDB connected successfully');
      return m;
    }).catch((err) => {
      console.error('❌ MongoDB connection error:', err);
      cached.promise = null;
      throw err;
    });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;