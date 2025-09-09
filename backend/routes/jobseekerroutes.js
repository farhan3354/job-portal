import express from "express";
import upload from "../middlewares/multermiddleware.js";
import {
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile,
  getAllProfiles,
} from "../controllers/jobseekercontroller.js";
import {
  employerMiddleware,
  jobSeekerMiddleware,
  protect,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

//  create profile
router.post(
  "/createprofile",
  protect,
  jobSeekerMiddleware,
  upload.single("resume"),
  createProfile
);

// get  job seeker profile
router.get("/getprofile", protect, jobSeekerMiddleware, getProfile);

// get all job seeker
router.get("/all-profies", getAllProfiles);

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
