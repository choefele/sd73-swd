import { Schema, model } from "mongoose";

export interface User {
  name: string;
}

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true, trim: true },
  },
  {
    toJSON: {
      virtuals: true,
      transform: function (_doc, ret) {
        const serialized = ret as { __v?: unknown; _id?: unknown };
        delete serialized.__v;
        delete serialized._id;
        return ret;
      },
    },
    toObject: { virtuals: true },
  },
);

export default model("User", userSchema);
