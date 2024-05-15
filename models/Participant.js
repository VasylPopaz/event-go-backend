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
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth required."],
    },
    dateOfRegistration: {
      type: Date,
      required: [true, "Date of registration required."],
    },
    eventAdvertisementSource: {
      type: String,
      enum: ["Social media", "Friends", "Found myself"],
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: Event,
      required: [true, "eventId is required."],
    },
  },
  { versionKey: false }
);

export const Participant = model("participant", participantSchema);
