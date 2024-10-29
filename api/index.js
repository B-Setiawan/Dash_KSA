import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

//MONGO_URI = mongodb+srv://gayaruangkita:zQKiQOEzmG7NvMf3@cluster0.luabs.mongodb.net/Kanayama?retryWrites=true&w=majority&appName=Cluster0
