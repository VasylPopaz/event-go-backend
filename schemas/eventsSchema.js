import Joi from "joi";

export const createEventSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  date: Joi.date().required(),
  organizer: Joi.string().required(),
});
