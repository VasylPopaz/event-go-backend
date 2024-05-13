import { Participant } from "../models/Participant.js";

export const getAllParticipants = async (filter = {}) => {
  const participants = Participant.find(filter);

  return participants;
};

export const addParticipant = async (data) => {
  const newParticipant = await Participant.create(data);

  return newParticipant;
};
