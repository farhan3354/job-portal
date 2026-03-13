import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    type: {
      type: String,
      enum: ["youtube", "uploaded"],
      required: true,
    },
    // For YouTube videos
    youtubeUrl: { type: String },
    // For uploaded videos/thumbnails stored on Cloudinary
    videoUrl: { type: String },
    thumbnail: { type: String },
    category: {
      type: String,
      enum: [
        "career-tips",
        "interview-prep",
        "resume-guide",
        "industry-insights",
        "other",
      ],
      default: "other",
    },
  },
  { timestamps: true },
);

const Video = mongoose.model("Video", videoSchema);
export default Video;
