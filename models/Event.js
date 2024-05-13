import { Schema, model } from "mongoose";

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
    },
    description: {
      type: String,
      required: [true, "Description is required."],
    },
    date: {
      type: Date,
      required: [true, "Date is required."],
    },
    organizer: {
      type: String,
      required: [true, "Organizer is required."],
    },
  },
  { versionKey: false }
);

export const Event = model("event", eventSchema);
