import { Schema, model } from "mongoose";
import { z } from "zod";

export const userInputSchema = z.strictObject({
  name: z
    .string({ error: "Name must be a string" })
    .min(1, { message: "Name is required" }),
});

export type UserInput = z.infer<typeof userInputSchema>;

const userSchema = new Schema<UserInput>(
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

export const UserModel = model("User", userSchema);
