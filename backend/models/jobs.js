import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    companyName: { type: String, required: true },
    jobDescription: { type: String, required: true },
    requirements: { type: String, required: true },
    employmentType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Internship", "Remote"],
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    location: { type: String, required: true },
    salary: { type: String, required: true },
    applicationDeadline: { type: Date, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applicants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;
