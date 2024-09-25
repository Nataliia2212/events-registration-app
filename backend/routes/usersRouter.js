import express from "express";

import usersControllers from "../controllers/usersControllers.js";

import isEmptyBody from "../middlewares/isEmptyBody.js";

import { userRegisterSchema } from "../schemas/userSchemas.js";

import validateBody from "../decorators/validateBody.js";

const userRouter = express.Router();

userRouter.post(
  "/register",
  isEmptyBody,
  validateBody(userRegisterSchema),
  usersControllers.registerUser
);

userRouter.get("/", usersControllers.getAllUsers);

userRouter.get("/:eventId", usersControllers.getAllUsersOnEvent);

userRouter.get("/:id", usersControllers.getOneUser);

export default userRouter;
