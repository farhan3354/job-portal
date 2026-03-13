import express from "express";
import {
  createVideo,
  getVideos,
  getVideoById,
  updateVideo,
  deleteVideo,
} from "../controllers/videoController.js";
import { protect, adminMiddleware } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/multermiddleware.js";

const router = express.Router();

const videoUpload = upload.fields([
  { name: "video", maxCount: 1 },
  { name: "thumbnail", maxCount: 1 },
]);

// Public
router.get("/api/videos", getVideos);
router.get("/api/videos/:id", getVideoById);

// Admin only
router.post(
  "/api/videos/create",
  protect,
  adminMiddleware,
  videoUpload,
  createVideo,
);
router.put(
  "/api/videos/:id",
  protect,
  adminMiddleware,
  videoUpload,
  updateVideo,
);
router.delete("/api/videos/:id", protect, adminMiddleware, deleteVideo);

export default router;
