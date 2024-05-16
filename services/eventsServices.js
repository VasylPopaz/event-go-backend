import { Event } from "../models/Event.js";

export const getAllEvents = async (filter = {}, query = {}, sort = null) => {
  let sortOptions = {};

  if (sort) {
    if (sort.byTitle) {
      sortOptions.title = sort.byTitle === "true" ? 1 : -1;
    }
    if (sort.byDate) {
      sortOptions.date = sort.byDate === "true" ? 1 : -1;
    }
    if (sort.byOrganizer) {
      sortOptions.organizer = sort.byOrganizer === "true" ? 1 : -1;
    }
  }

  const events = await Event.find(
    filter,
    "title description date organizer",
    query
  )
    .sort(sortOptions)
    .exec();

  const totalEvents = await Event.countDocuments();

  return { events, totalEvents };
};

export const addEvent = async (data) => {
  const newEvent = await Event.create(data);

  return newEvent;
};
