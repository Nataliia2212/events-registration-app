import { Schema, model } from "mongoose";
import { handleSaveError } from "./hooks.js";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    fullName: {
      type: String,
      required: [true, "Name is required"],
    },
    heardAbout: {
      type: String,
      required: [true, "Where did you hear about this event?"],
      default: "Social media",
    },
  },
  { versionKey: false }
);

userSchema.post("save", handleSaveError);

const User = model("user", userSchema);

export default User;
