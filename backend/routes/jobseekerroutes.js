import express from "express";
import upload from "../middlewares/multermiddleware.js";
import {
  createProfile,
  getAllProfiles,
  getProfileById,
  updateProfile,
  deleteProfile,
} from "../controllers/jobseekercontroller.js";
import { jobSeekerMiddleware, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

//  create profile
router.post(
  "/createprofile",
  protect,
  jobSeekerMiddleware,
  upload.single("resume"),
  createProfile
);

// get all job seeker profile
router.get("/getprofile", protect, jobSeekerMiddleware, getAllProfiles);

// get the specific profile
router.get("/getoneuse/:id", protect, jobSeekerMiddleware, getProfileById);

// update the profile

router.put(
  "/update/:id",
  protect,
  jobSeekerMiddleware,
  upload.single("resume"),
  updateProfile
);

// delete the profile

router.delete(
  "/deleteprofile/:id",
  protect,
  jobSeekerMiddleware,
  deleteProfile
);

export default router;
