import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.MONGO_URI!, { dbName: "project0" });
  console.log("MongoDB connected");
} catch (error) {
  console.error("Error connecting to MongoDB", error);
  process.exit(1);
}
