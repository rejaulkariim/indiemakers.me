import mongoose from 'mongoose';

// Get the MongoDB connection string from the environment variable
const MONGODB_URI = process.env.MONGODB_URI;

// Use a cached connection to avoid reconnecting on every function call
let cached = (global as any).mongoose || { conn: null, promise: null };

// Function to connect to the MongoDB database
export const connectToDatabase = async () => {
  // If a connection is already established, return the existing connection
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  // If there is no existing promise, create a new promise for database connection
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      // Specify the database name
      dbName: 'demo-appbrews',
      bufferCommands: false,
    });

  // Wait for the promise to resolve and store the connection in the cache
  cached.conn = await cached.promise;

  // Return the established connection
  return cached.conn;
};
