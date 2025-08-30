import express from "express";
import { protect, employerMiddleware } from "../middlewares/authMiddleware.js";
import { createJob, fetchjobs, editjob, fetchidjobs } from "../controllers/postJob.js";

const router = express.Router();

router.get("/apply", (req, res) => {
  res.send("Hello from apply");
});

router.post("/post-job", protect, employerMiddleware, createJob);

router.get("/get-jobs",  fetchjobs);

router.get("/get-jobs/:id",  fetchidjobs);
router.get("/get-jobs/:id",  fetchidjobs);
router.get("/edit-job/:id", protect, employerMiddleware, editjob);


export default router;
