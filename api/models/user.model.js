import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "String",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
