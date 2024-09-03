import { Event } from "../models/Event.js";

export const getAllEvents = async (search = {}, query = {}, sort = null) => {
  const filter = search
    ? {
        $or: [
          { title: new RegExp(search, "i") },
          { description: new RegExp(search, "i") },
          { organizer: new RegExp(search, "i") },
        ],
      }
    : {};

  const sortOptions = Object.entries(sort).reduce((acc, [key, value]) => {
    if (key === "byTitle" || key === "byDate" || key === "byOrganizer") {
      acc[key.replace("by", "").toLowerCase()] = value === "true" ? 1 : -1;
    }
    return acc;
  }, {});

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
