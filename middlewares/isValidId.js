import { isValidObjectId } from "mongoose";

import { HttpError } from "../helpers/index.js";

export const isValidId = (req, _, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    next(HttpError(400, `${id} is not valid id`));
  }
  next();
};
