import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

import "dotenv/config";
import eventsRouter from "./routes/eventsRouter.js";
import userRouter from "./routes/usersRouter.js";

const app = express();
const { DB_HOST, PORT = 5000 } = process.env;

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/events", eventsRouter);

app.use("/api/events", userRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
