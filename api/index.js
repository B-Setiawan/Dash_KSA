import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`Server is connected to mongoDB`);
  })
  .catch((error) => {
    console.log("error connection to database");
  });

app.listen(3000, () => {
  console.log("Server is ready..");
});

app.use("/api/user", userRoutes);
