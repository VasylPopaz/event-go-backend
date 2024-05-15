import { Event } from "../models/Event.js";

export const getAllEvents = async (filter = {}, query = {}) => {
  const events = await Event.find(
    filter,
    "title description date organizer",
    query
  );

  const totalEvents = await Event.countDocuments();

  return { events, totalEvents };
};

export const addEvent = async (data) => {
  const newEvent = await Event.create(data);

  return newEvent;
};
