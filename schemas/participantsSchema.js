import Joi from "joi";

export const createParticipantSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  dateOfBirth: Joi.date().required(),
  eventAdvertisementSource: Joi.string().valid(
    "Social media",
    "Friends",
    "Found myself"
  ),
});
