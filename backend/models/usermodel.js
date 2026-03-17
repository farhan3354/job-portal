import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["admin", "job-seeker", "employer"],
      required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    otp: { type: String },
    otpExpires: { type: Date },
    resetPasswordOTP: { type: String },
    resetPasswordOTPExpires: { type: Date },
    isFreelancer: { type: Boolean, default: false },
    freelanceService: { 
      type: String, 
      enum: ["Software Development", "Computer Advisory", "Accounting", "Labour Work"] 
    },
    freelanceRate: { type: Number },
    freelanceRateType: { type: String, enum: ["Hour", "Day"] },
    payeeMethod: { type: String, default: "PayPal" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
