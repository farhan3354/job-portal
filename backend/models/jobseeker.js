import mongoose from "mongoose";

const jobSeekerProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    profileImage: {
      type: String,
      default: "https://via.placeholder.com/150",
    },
    headline: { type: String },
    about: { type: String },
    experience: [
      {
        title: String,
        company: String,
        location: String,
        startDate: String,
        endDate: String,
        description: String,
      },
    ],
    education: [
      {
        degree: String,
        institution: String,
        year: String,
      },
    ],
    skills: [String],
    resumeUrl: { type: String },
  },
  { timestamps: true }
);

const jobseeker = mongoose.model("JobSeekerProfile", jobSeekerProfileSchema);
export default jobseeker;
