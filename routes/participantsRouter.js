import express from "express";

import { createParticipantSchema } from "../schemas/participantsSchema.js";
import { validateBody, isValidId } from "../middlewares/index.js";
import participantControllers from "../controllers/participantControllers.js";

export const participantsRouter = express.Router();

participantsRouter.post(
  "/",
  validateBody(createParticipantSchema),
  participantControllers.createParticipant
);

participantsRouter.get("/", participantControllers.getParticipants);

participantsRouter.get(
  "/:id",
  isValidId,
  participantControllers.getParticipantById
);
