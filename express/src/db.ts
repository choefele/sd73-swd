import mongoose from "mongoose";

export async function connectDb(mongoUri: string, mongoDb: string) {
  await mongoose.connect(mongoUri, {
    dbName: mongoDb,
  });
}

export async function disconnectDb() {
  await mongoose.disconnect();
}
