import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

import "dotenv/config";

const app = express();
const { DB_HOST, PORT = 5000 } = process.env;

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.get("/events", (req, res) => {
  res.send("Hello from the backend!");
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
