import Event from "../models/Event.js";

export const listEvents = ({ filter = {}, fields, setting = {} }) =>
  Event.find(filter, fields, setting);

export const getEventById = async (_id) => Event.findById(_id);

export const removeEvent = async (id) => Event.findByIdAndDelete(id);

export const addEvent = (data) => Event.create(data);
