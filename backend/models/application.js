import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    salary: {
      type: String,
    },
    resume: {
      type: String,
      required: true,
    },
    coverLetter: {
      type: String,
    },

    status: {
      type: String,
      enum: ["Pending", "Reviewed", "Shortlisted", "Rejected", "Accepted"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);
export default Application;
