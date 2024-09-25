import { createUser, findUser } from "../services/usersServices.js";

import ctrlWrapper from "../decorators/ctrlWrapper.js";

import HttpError from "../helpers/HttpError.js";

const registerUser = async (req, res) => {
  const { email } = req.body;
  const user = await findUser({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }

  const newUser = await createUser(req.body);

  res.status(201).json(newUser);
};

export default {
  registerUser: ctrlWrapper(registerUser),
};
