import mongoose from "mongoose";

export async function connectDb() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is required");
  }

  await mongoose.connect(mongoUri, {
    dbName: process.env.MONGO_DB || "project0",
  });

  console.log("MongoDB connected");
}

export async function disconnectDb() {
  await mongoose.disconnect();
}
