import * as eventsService from "../services/eventsServices.js";

import ctrlWrapper from "../decorators/ctrlWrapper.js";

import HttpError from "../helpers/HttpError.js";

const getAllEvents = async (req, res) => {
  const fields = "-__v ";
  const result = await eventsService.listEvents({ fields });

  res.json(result);
};

const getOneEvent = async (req, res) => {
  const { id } = req.params;
  const result = await eventsService.getEventById(id);
  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;
  const result = await eventsService.removeEvent(id);
  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

const createEvent = async (req, res) => {
  const result = await eventsService.addEvent(req.body);

  res.status(201).json(result);
};

export default {
  getAllEvents: ctrlWrapper(getAllEvents),
  getOneEvent: ctrlWrapper(getOneEvent),
  deleteEvent: ctrlWrapper(deleteEvent),
  createEvent: ctrlWrapper(createEvent),
};
