import express from "express";

import { createEventSchema } from "../schemas/eventsSchema.js";
import { validateBody } from "../middlewares/validateBody.js";
import { isValidId } from "../middlewares/isValidId.js";
import eventsControllers from "../controllers/eventsControllers.js";

export const eventsRouter = express.Router();

eventsRouter.post(
  "/",
  validateBody(createEventSchema),
  eventsControllers.createEvent
);

eventsRouter.get("/", eventsControllers.getEvents);

eventsRouter.get("/:id", isValidId, eventsControllers.getEventById);
