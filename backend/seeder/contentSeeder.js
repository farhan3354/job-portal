import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Blog from "../models/blogModel.js";
import Video from "../models/video.js";

dotenv.config();

const sampleBlogs = [
  {
    title: "How To Prepare For Your First Technical Interview",
    content:
      "Technical interviews become easier with structured preparation. Focus on core data structures, practice explaining your thinking, and run 3-4 timed mock interviews before your real interview.",
    author: "Jobzy Editorial Team",
    category: "career-tips",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Remote Work Habits That Help You Stay Consistent",
    content:
      "Create a fixed start routine, set one deep-work block, and share your daily priorities with your team. Consistency in communication and schedule improves both output and visibility.",
    author: "Jobzy Career Coach",
    category: "remote-work",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
];

const sampleVideos = [
  {
    title: "Top 10 Interview Questions and How To Answer Them",
    description:
      "A practical guide to common interview questions with clear answer frameworks.",
    type: "youtube",
    youtubeUrl: "https://www.youtube.com/watch?v=1mHjMNZZvFo",
    category: "interview-prep",
  },
  {
    title: "Build an ATS-Friendly Resume in 15 Minutes",
    description:
      "Learn how to structure your resume so recruiters and ATS systems can read it quickly.",
    type: "youtube",
    youtubeUrl: "https://www.youtube.com/watch?v=mnJz6Q6A5eQ",
    category: "resume-guide",
  },
];

const seedContent = async () => {
  try {
    await connectDB();

    const blogWrites = sampleBlogs.map((blog) => ({
      updateOne: {
        filter: { title: blog.title },
        update: { $set: blog },
        upsert: true,
      },
    }));

    const videoWrites = sampleVideos.map((video) => ({
      updateOne: {
        filter: { title: video.title },
        update: { $set: video },
        upsert: true,
      },
    }));

    const [blogResult, videoResult] = await Promise.all([
      Blog.bulkWrite(blogWrites),
      Video.bulkWrite(videoWrites),
    ]);

    console.log("Sample content seed completed.");
    console.log(
      `Blogs -> inserted: ${blogResult.upsertedCount}, updated: ${blogResult.modifiedCount}`,
    );
    console.log(
      `Videos -> inserted: ${videoResult.upsertedCount}, updated: ${videoResult.modifiedCount}`,
    );
  } catch (error) {
    console.error("Failed to seed sample content:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

seedContent();
