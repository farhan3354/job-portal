import express from "express";
import { protect, employerMiddleware } from "../middlewares/authMiddleware.js";
import { createJob } from "../controllers/postJob.js";

const router = express.Router();

router.get("/apply", (req, res) => {
  res.send("Hello from apply");
});

router.post("/post-job", protect, employerMiddleware, createJob);

export default router;
