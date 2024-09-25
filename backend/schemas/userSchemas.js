import Joi from "joi";

import { emailRegexp, heardAbout } from "../constans/user-constans.js";

export const userRegisterSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().pattern(emailRegexp).required(),
  heardAbout: Joi.string()
    .valid(...heardAbout)
    .required(),
});
