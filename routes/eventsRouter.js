import express from "express";

import { createEventSchema } from "../schemas/eventsSchema.js";
import { validateBody } from "../middlewares/validateBody.js";
import eventsControllers from "../controllers/eventsControllers.js";

export const eventsRouter = express.Router();

eventsRouter.post(
  "/post",
  validateBody(createEventSchema),
  eventsControllers.createEvent
);
