import { Participant } from "../models/Participant.js";

export const getAllParticipants = async () => {
  const participants = Participant.find({});

  return participants;
};

export const addParticipant = async (data) => {
  const newParticipant = await Participant.create(data);

  return newParticipant;
};
