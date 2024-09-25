import User from "../models/User.js";

export const findUser = (filter) => User.findOne(filter);

export const createUser = (data) => {
  return User.create(data);
};

export const listUsers = (filter) => User.find(filter);

export const getUserById = async (_id) => User.findById(_id);
