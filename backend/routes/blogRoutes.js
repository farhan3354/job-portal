import express from "express";
import { createblog, getblog, getblogbyid } from "../controllers/blogController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/multermiddleware.js";

const router = express.Router();

router.post("/blogs/create", upload.single("blog"), createblog);

router.get("/api/blog", getblog);

router.get("/api/blog/:id", getblogbyid);
export default router;
