import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    toJSON: {
      virtuals: true,
      transform: function (doc) {
        const { __v, _id, ...plain } = doc.toObject();
        return plain;
      },
    },
    toObject: { virtuals: true },
  },
);
export default model("User", userSchema);
