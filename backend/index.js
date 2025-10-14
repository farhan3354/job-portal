import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/authroutes.js";
import userApply from "./routes/applicationroutes.js";
import postJob from "./routes/jobPost.js";
import employer from "./routes/employerroutes.js";
import blog from "./routes/blogRoutes.js";
import { v2 as cloudinary } from "cloudinary";
import profile from "./routes/jobseekerroutes.js";
import apllicant from "./routes/getapplicant.js";
import formdata from "./routes/testformroute.js";
import interviewrouter from "./routes/interview.js";
import query from "./routes/conactroutes.js";
import cors from "cors";

dotenv.config();

// ✅ Connect to MongoDB once on cold start
connectDB();

const app = express();

// ✅ Allow frontend access (Vercel will handle domain)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://jobzy-git-main-farhans-projects-541bb7ad.vercel.app/",
      "https://jobzy-seven.vercel.app/"
      ,
    ],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// ✅ Routes
app.use("/", userRoutes);
app.use("/", postJob);
app.use("/", userApply);
app.use("/", profile);
app.use("/", apllicant);
app.use("/", formdata);
app.use("/", interviewrouter);
app.use("/", employer);
app.use("/", blog);
app.use("/", query);

// ✅ Root route for testing
app.get("/", (req, res) => {
  res.status(200).send("Backend is live ✅ - Rentubuy API");
});

// ❌ REMOVE app.listen()
// ✅ EXPORT app for Vercel
export default app;
