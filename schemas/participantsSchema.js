import Joi from "joi";

export const createParticipantSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  dateOfBith: Joi.date().required(),
  eventAdvertisementSource: Joi.string().valid(
    "Social media",
    "Friends",
    "Found myself"
  ),
});
