import express from "express";
import { userRut } from "../controlers/user.controller.js";

const router = express.Router();

router.get("/", userRut);

export default router;
