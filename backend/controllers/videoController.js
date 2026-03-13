import Video from "../models/video.js";
import { v2 as cloudinary } from "cloudinary";

// Create a video (YouTube or uploaded)
export const createVideo = async (req, res) => {
  try {
    const { title, description, type, youtubeUrl, category } = req.body;

    if (!title || !type) {
      return res
        .status(400)
        .json({ success: false, message: "Title and type are required" });
    }

    const videoData = { title, description, type, category };

    if (type === "youtube") {
      if (!youtubeUrl) {
        return res
          .status(400)
          .json({ success: false, message: "YouTube URL is required" });
      }
      videoData.youtubeUrl = youtubeUrl;
    } else if (type === "uploaded") {
      if (!req.files || !req.files.video || !req.files.video[0]) {
        return res
          .status(400)
          .json({ success: false, message: "Video file is required" });
      }
      videoData.videoUrl = req.files.video[0].path;

      if (req.files.thumbnail && req.files.thumbnail[0]) {
        videoData.thumbnail = req.files.thumbnail[0].path;
      }
    }

    const video = await Video.create(videoData);
    return res.status(201).json({ success: true, video });
  } catch (error) {
    console.error("Create video error:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get all videos
export const getVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, videos });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Get video by ID
export const getVideoById = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video) {
      return res
        .status(404)
        .json({ success: false, message: "Video not found" });
    }
    return res.status(200).json({ success: true, video });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Update a video
export const updateVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video) {
      return res
        .status(404)
        .json({ success: false, message: "Video not found" });
    }

    const { title, description, type, youtubeUrl, category } = req.body;

    const updateData = {
      title: title || video.title,
      description: description || video.description,
      type: type || video.type,
      category: category || video.category,
    };

    const effectiveType = type || video.type;

    if (effectiveType === "youtube") {
      updateData.youtubeUrl = youtubeUrl || video.youtubeUrl;
      updateData.videoUrl = undefined;
      updateData.thumbnail = undefined;
    } else if (effectiveType === "uploaded") {
      if (req.files && req.files.video && req.files.video[0]) {
        // Delete old video from cloudinary if exists
        if (video.videoUrl) {
          try {
            const publicId = video.videoUrl.split("/").pop().split(".")[0];
            await cloudinary.uploader.destroy(`videos/${publicId}`, {
              resource_type: "video",
            });
          } catch (e) {
            console.error("Failed to delete old video:", e);
          }
        }
        updateData.videoUrl = req.files.video[0].path;
      }

      if (req.files && req.files.thumbnail && req.files.thumbnail[0]) {
        if (video.thumbnail) {
          try {
            const publicId = video.thumbnail.split("/").pop().split(".")[0];
            await cloudinary.uploader.destroy(`images/${publicId}`);
          } catch (e) {
            console.error("Failed to delete old thumbnail:", e);
          }
        }
        updateData.thumbnail = req.files.thumbnail[0].path;
      }
      updateData.youtubeUrl = undefined;
    }

    const updatedVideo = await Video.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      message: "Video updated successfully",
      video: updatedVideo,
    });
  } catch (error) {
    console.error("Update video error:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Delete a video
export const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (!video) {
      return res
        .status(404)
        .json({ success: false, message: "Video not found" });
    }

    // Clean up cloudinary resources
    if (video.videoUrl) {
      try {
        const publicId = video.videoUrl.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(`videos/${publicId}`, {
          resource_type: "video",
        });
      } catch (e) {
        console.error("Failed to delete video from cloudinary:", e);
      }
    }
    if (video.thumbnail) {
      try {
        const publicId = video.thumbnail.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(`images/${publicId}`);
      } catch (e) {
        console.error("Failed to delete thumbnail from cloudinary:", e);
      }
    }

    await Video.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Video deleted successfully",
    });
  } catch (error) {
    console.error("Delete video error:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};
