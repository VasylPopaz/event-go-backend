import { required } from "joi";
import { Schema, model } from "mongoose";

const participantSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique,
    },
    dateOfBith: {
      type: Date,
      required: [true, "Date of birth required."],
    },
    eventAdvertisementSource: {
      type: String,
      enum: ["Social media", "Friends", "Found myself"],
    },
    eventId: {
      type: Schema.Types.ObjectsId,
      ref: Event,
    },
  },
  { versionKey: false }
);

export const Participant = model("participant", participantSchema);
