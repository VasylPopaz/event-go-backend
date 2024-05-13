import express from "express";

import { createParticipantSchema } from "../schemas/participantsSchema.js";
import { validateBody } from "../middlewares/validateBody.js";
import participantControllers from "../controllers/participantControllers.js";

export const participantsRouter = express.Router();

participantsRouter.post(
  "/post",
  validateBody(createParticipantSchema),
  participantControllers.createParticipant
);
