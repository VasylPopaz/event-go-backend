import { Event } from "../models/Event.js";
import { ctrlWrapper, HttpError } from "../helpers/index.js";
import { addEvent, getAllEvents, findByFilter } from "../services/index.js";

export const getEvents = async (req, res) => {
  const { page = 1, limit = 9, ...queryParams } = req.query;

  const query = req.query.query || "";

  const sort = Object.keys(queryParams)
    .filter(
      (key) => key === "byTitle" || key === "byDate" || key === "byOrganizer"
    )
    .reduce((obj, key) => {
      obj[key] = queryParams[key];
      return obj;
    }, {});

  const skip = (page - 1) * limit;

  const result = await getAllEvents(query, { skip, limit }, sort);

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
  const { title } = req.body;
  const event = await findByFilter(Event, { title });

  if (event) {
    throw HttpError(409, "Event with same name already exists.");
  }

  const result = await addEvent(req.body);

  res.status(201).json(result);
};

export default {
  getEvents: ctrlWrapper(getEvents),
  getEventById: ctrlWrapper(getEventById),
  createEvent: ctrlWrapper(createEvent),
};
