import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/usermodel.js";
import Job from "../models/jobs.js";
import Application from "../models/application.js";
import Interview from "../models/interviewmodel.js";

dotenv.config();

const verifyData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/jobzy");
    console.log("Connected to MongoDB");

    const userCount = await User.countDocuments();
    const jobCount = await Job.countDocuments();
    const appCount = await Application.countDocuments();
    const intvCount = await Interview.countDocuments();

    console.log(`Users: ${userCount}`);
    console.log(`Jobs: ${jobCount}`);
    console.log(`Applications: ${appCount}`);
    console.log(`Interviews: ${intvCount}`);

    const sampleJob = await Job.findOne({ jobTitle: "Senior React Developer" });
    if (sampleJob) {
      console.log(`Found job: ${sampleJob.jobTitle}, Type: ${sampleJob.jobType}`);
    }

    const sampleApp = await Application.findOne();
    if (sampleApp) {
      console.log(`Found application for Job ID: ${sampleApp.jobId}`);
    }

    const sampleIntv = await Interview.findOne();
    if (sampleIntv) {
      console.log(`Found interview at: ${sampleIntv.date} ${sampleIntv.time}`);
    }

    process.exit(0);
  } catch (error) {
    console.error("Error verifying data:", error);
    process.exit(1);
  }
};

verifyData();
