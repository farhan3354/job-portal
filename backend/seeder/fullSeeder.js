import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import User from "../models/usermodel.js";
import Job from "../models/jobs.js";
import Application from "../models/application.js";
import Interview from "../models/interviewmodel.js";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/jobzy");
    console.log("Connected to MongoDB");

    // 1. Create Users
    const hashedPassword = await bcrypt.hash("Password123!", 10);
    
    const employerData = {
      name: "Global Tech Inc",
      email: "employer@example.com",
      phone: "1234567890",
      password: hashedPassword,
      role: "employer",
      isVerified: true
    };

    const seekerData = {
      name: "John Doe",
      email: "seeker@example.com",
      phone: "0987654321",
      password: hashedPassword,
      role: "job-seeker",
      isVerified: true
    };

    let employer = await User.findOne({ email: employerData.email });
    if (!employer) {
      employer = await User.create(employerData);
      console.log("Created Employer");
    }

    let seeker = await User.findOne({ email: seekerData.email });
    if (!seeker) {
      seeker = await User.create(seekerData);
      console.log("Created Job-Seeker");
    }

    // 2. Create Jobs
    const jobs = [
      {
        jobTitle: "Senior React Developer",
        companyName: "Global Tech Inc",
        jobDescription: "Looking for a React expert.",
        requirements: ["5+ years React", "Redux", "Typescript"],
        employmentType: "Full-time",
        industry: "Technology",
        location: "New York, NY",
        salary: "$120,000 - $150,000",
        skills: ["React", "CSS", "HTML"],
        applicationDeadline: new Date("2026-12-31"),
        contactEmail: "hr@globaltech.com",
        experienceLevel: "Senior",
        postedBy: employer._id,
        jobType: "Simple"
      },
      {
        jobTitle: "Logo Design for Startup",
        companyName: "PixelPerfect",
        jobDescription: "Need a modern logo for a new fintech app.",
        requirements: ["Portfolio required", "Adobe Illustrator"],
        employmentType: "Contract",
        industry: "Design",
        location: "Remote",
        salary: "$500",
        skills: ["Graphic Design", "Illustration"],
        applicationDeadline: new Date("2026-12-31"),
        contactEmail: "design@pixel.com",
        experienceLevel: "Entry level",
        postedBy: employer._id,
        jobType: "Freelance",
        priceType: "Fixed",
        price: 500,
        duration: "1 week"
      }
    ];

    const createdJobs = [];
    for (const j of jobs) {
      const existingJob = await Job.findOne({ jobTitle: j.jobTitle, postedBy: j.postedBy });
      if (!existingJob) {
        const newJob = await Job.create(j);
        createdJobs.push(newJob);
        console.log(`Created Job: ${j.jobTitle}`);
      } else {
        createdJobs.push(existingJob);
      }
    }

    // 3. Create Applications
    const applications = createdJobs.map(job => ({
      jobId: job._id,
      applicantId: seeker._id,
      availability: "Immediate",
      experience: "5 years",
      coverLetter: "I am very interested in this position.",
      status: "Interviewing"
    }));

    const createdApps = [];
    for (const app of applications) {
      const existingApp = await Application.findOne({ jobId: app.jobId, applicantId: app.applicantId });
      if (!existingApp) {
        const newApp = await Application.create(app);
        createdApps.push(newApp);
        console.log(`Created Application for Job: ${app.jobId}`);
      } else {
        createdApps.push(existingApp);
      }
    }

    // 4. Create Interviews
    const interviews = createdApps.map(app => ({
      candidateId: seeker._id,
      employerid: employer._id,
      date: "2026-04-10",
      time: "10:00 AM",
      interviewername: "James Bond",
      meetingurl: "https://zoom.us/j/123456789",
      notes: "First round interview",
      status: "scheduled"
    }));

    for (const intv of interviews) {
      const existingIntv = await Interview.findOne({ candidateId: intv.candidateId, date: intv.date, time: intv.time });
      if (!existingIntv) {
        await Interview.create(intv);
        console.log(`Scheduled Interview for candidate: ${intv.candidateId}`);
      }
    }

    console.log("Seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedData();
