import * as usersService from "../services/usersServices.js";
import { getEventById } from "../services/eventsServices.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

import HttpError from "../helpers/HttpError.js";

const registerUser = async (req, res) => {
  const { email } = req.body;
  const user = await usersService.findUser({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }

  const newUser = await usersService.createUser(req.body);

  res.status(201).json(newUser);
};

const getAllUsers = async (req, res) => {
  const fields = "-__v ";
  const result = await usersService.listUsers({ fields });

  res.json(result);
};

const getAllUsersOnEvent = async (req, res) => {
  console.log(req);
  const { eventId } = req.params;

  console.log(req.params);
  console.log(eventId);

  const event = await getEventById(eventId);
  if (!event) {
    throw HttpError(404);
  }

  const result = await usersService.listUsers({ eventId });

  res.json(result);
};

const getOneUser = async (req, res) => {
  const { id } = req.params;
  const result = await usersService.getUserById(id);
  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

export default {
  registerUser: ctrlWrapper(registerUser),
  getAllUsers: ctrlWrapper(getAllUsers),
  getOneUser: ctrlWrapper(getOneUser),
  getAllUsersOnEvent: ctrlWrapper(getAllUsersOnEvent),
};
