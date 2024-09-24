import { Schema, model } from "mongoose";
import { handleSaveError } from "./hooks.js";

const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max: 100,
    },
    description: {
      type: String,
      required: true,
      max: 1000,
    },
    date: {
      type: String,
      required: true,
    },
    organizer: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

eventSchema.post("save", handleSaveError);

const Event = model("event", eventSchema);

export default Event;
