import { ctrlWrapper } from "../helpers/ctrlWrapper.js";

export const createEvent = async (req, res) => {
  const newEvent = await Event.create(req.body);

  res.status(201).json();
};

export default {
  createEvent: ctrlWrapper(createEvent),
};
