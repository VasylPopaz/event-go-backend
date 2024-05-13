import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { Participant } from "../models/Participant.js";
import {
  addParticipant,
  getAllParticipants,
} from "../services/participantsServices.js";
import { findByFilter } from "../services/findByFilterService.js";

const getParticipants = async (_, res) => {
  const result = await getAllParticipants();

  res.json(result);
};

const getParticipantById = async (req, res) => {
  const { id } = req.params;

  const result = await findByFilter(Participant, { _id: id });

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

const createParticipant = async (req, res) => {
  const result = await addParticipant(req.body);

  res.status(201).json(result);
};

export default {
  createParticipant: ctrlWrapper(createParticipant),
  getParticipants: ctrlWrapper(getParticipants),
  getParticipantById: ctrlWrapper(getParticipantById),
};
