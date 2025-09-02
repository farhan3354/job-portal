import express from "express";
import { protect, employerMiddleware } from "../middlewares/authMiddleware.js";
import {
  createJob,
  getalljobs,
  getjobsbyid,
  deletejob,
  editjob,
  getidjob,
} from "../controllers/postJob.js";

const router = express.Router();

router.get("/apply", (req, res) => {
  res.send("Hello from apply");
});

router.post("/post-job", protect, employerMiddleware, createJob);

router.get("/get-alljobs", getalljobs);

router.get("/get-jobs", protect, employerMiddleware, getjobsbyid);

router.get("/get-job/:id", protect, employerMiddleware, getidjob);

router.delete("/remove/:id", protect, employerMiddleware, deletejob);

router.put("/edit-job/:id", protect, employerMiddleware, editjob);

export default router;
