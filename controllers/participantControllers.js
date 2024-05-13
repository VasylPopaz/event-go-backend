import { Participant } from "../models/Participant.js";
import { ctrlWrapper, HttpError } from "../helpers/index.js";
import {
  addParticipant,
  getAllParticipants,
  findByFilter,
} from "../services/index.js";

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
  const { email, eventId } = req.body;

  const participants = await getAllParticipants({ email });

  if (participants.find((elem) => elem.eventId.toString() === eventId)) {
    throw HttpError(409, "Participant already registered for this event");
  }

  const result = await addParticipant(req.body);

  res.status(201).json(result);
};

export default {
  createParticipant: ctrlWrapper(createParticipant),
  getParticipants: ctrlWrapper(getParticipants),
  getParticipantById: ctrlWrapper(getParticipantById),
};
