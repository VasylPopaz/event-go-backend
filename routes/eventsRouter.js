import express from "express";

import { createEventSchema } from "../schemas/eventsSchema.js";
import { validateBody, isValidId } from "../middlewares/index.js";
import eventsControllers from "../controllers/eventsControllers.js";

export const eventsRouter = express.Router();

eventsRouter.post(
  "/",
  validateBody(createEventSchema),
  eventsControllers.createEvent
);

eventsRouter.get("/", eventsControllers.getEvents);

eventsRouter.get("/:id", isValidId, eventsControllers.getEventById);
