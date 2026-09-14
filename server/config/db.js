import mongoose from 'mongoose';

export let isConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/techofay_db';
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 4000,
    });
    isConnected = true;
    console.log(`[MongoDB] Connected successfully to ${uri}`);
  } catch (error) {
    isConnected = false;
    console.warn(`[MongoDB Warning] Could not connect to MongoDB at ${uri}: ${error.message}`);
    console.warn(`[MongoDB Notice] Server will operate seamlessly using the resilient in-memory data store.`);
  }
};
