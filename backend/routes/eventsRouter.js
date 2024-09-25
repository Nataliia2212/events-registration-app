import express from "express";
import eventsControllers from "../controllers/eventsControllers.js";

import isEmptyBody from "../middlewares/isEmptyBody.js";

const eventsRouter = express.Router();

eventsRouter.get("/", eventsControllers.getAllEvents);

eventsRouter.get("/:id", eventsControllers.getOneEvent);

eventsRouter.delete("/:id", eventsControllers.deleteEvent);

eventsRouter.post("/", isEmptyBody, eventsControllers.createEvent);

export default eventsRouter;
