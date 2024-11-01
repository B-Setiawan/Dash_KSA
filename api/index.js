import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
dotenv.config();

app.use(express.json());

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
app.use("/api/auth", authRoutes);

// middleware to handle error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode: 500,
    message,
  });
});
