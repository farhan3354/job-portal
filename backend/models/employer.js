import mongoose from "mongoose";

const employerProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    companylogo: { type: String },
    companyName: { type: String, required: true },
    companyWebsite: { type: String },
    industry: { type: String },
    location: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

const employer = mongoose.model("EmployerProfile", employerProfileSchema);

export default employer;
