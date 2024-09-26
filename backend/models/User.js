import { Schema, model } from "mongoose";
import { handleSaveError } from "./hooks.js";
import { emailRegexp, heardAbout } from "../constans/user-constans.js";

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    birthDate: {
      type: String,
    },
    heardAbout: {
      type: String,
      enum: heardAbout,
      default: "Social media",
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "events",
    },
  },
  { versionKey: false }
);

userSchema.post("save", handleSaveError);

const User = model("users", userSchema);

export default User;
