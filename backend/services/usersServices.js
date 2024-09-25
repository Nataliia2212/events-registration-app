import User from "../models/User.js";

export const findUser = (filter) => User.findOne(filter);

export const createUser = (data) => {
  return User.create(data);
};
