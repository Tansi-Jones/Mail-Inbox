import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import router from "./routes/messages.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: false }));

app.use("/api", router);

app.get("/", (req, res) => {
  res.status(200).json({ status: "OK" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log("Databse Disconnected", error));

app.listen(process.env.PORT, () =>
  console.log("Server Listening on port ", process.env.PORT)
);
