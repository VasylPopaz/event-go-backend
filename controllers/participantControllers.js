import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { Participant } from "../models/Participant.js";

const createParticipant = async (req, res) => {
  //   const result = await addContact({ ...req.body, owner });

  const newContact = await Participant.create(req.body);

  res.status(201).json(result);
};

export default {
  createParticipant: ctrlWrapper(createParticipant),
};
