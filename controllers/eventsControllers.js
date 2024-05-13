import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { Event } from "../models/Event.js";
import { addEvent, getAllEvents } from "../services/eventsServices.js";
import { findByFilter } from "../services/findByFilterService.js";

export const getEvents = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const result = await getAllEvents({}, { skip, limit });

  res.json(result);
};

const getEventById = async (req, res) => {
  const { id } = req.params;

  const result = await findByFilter(Event, { _id: id });

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

export const createEvent = async (req, res) => {
  const result = await addEvent(req.body);

  res.status(201).json(result);
};

export default {
  getEvents: ctrlWrapper(getEvents),
  getEventById: ctrlWrapper(getEventById),
  createEvent: ctrlWrapper(createEvent),
};
