import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/usermodel.js";
import bcrypt from "bcrypt";

dotenv.config();

const freelancers = [
  {
    name: "Alice Dev",
    email: "alice@example.com",
    phone: "+1234567890",
    password: "Password123!",
    role: "job-seeker",
    isVerified: true,
    isFreelancer: true,
    freelanceService: "Software Development",
    freelanceRate: 60,
    freelanceRateType: "Hour",
    payeeMethod: "PayPal"
  },
  {
    name: "Bob Advisor",
    email: "bob@example.com",
    phone: "+1987654321",
    password: "Password123!",
    role: "job-seeker",
    isVerified: true,
    isFreelancer: true,
    freelanceService: "Computer Advisory",
    freelanceRate: 45,
    freelanceRateType: "Hour",
    payeeMethod: "PayPal"
  },
  {
    name: "Charlie Accountant",
    email: "charlie@example.com",
    phone: "+1122334455",
    password: "Password123!",
    role: "job-seeker",
    isVerified: true,
    isFreelancer: true,
    freelanceService: "Accounting",
    freelanceRate: 300,
    freelanceRateType: "Day",
    payeeMethod: "PayPal"
  },
  {
    name: "Dave Labourer",
    email: "dave@example.com",
    phone: "+1556677889",
    password: "Password123!",
    role: "job-seeker",
    isVerified: true,
    isFreelancer: true,
    freelanceService: "Labour Work",
    freelanceRate: 120,
    freelanceRateType: "Day",
    payeeMethod: "PayPal"
  }
];

const seedFreelancers = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/jobzy");
    console.log("Connected to MongoDB");

    for (const f of freelancers) {
      const existing = await User.findOne({ email: f.email });
      if (existing) {
        console.log(`User ${f.email} already exists, skipping...`);
        continue;
      }
      f.password = await bcrypt.hash(f.password, 10);
      await User.create(f);
      console.log(`Created freelancer: ${f.name}`);
    }

    console.log("Seeding completed!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding freelancers:", error);
    process.exit(1);
  }
};

seedFreelancers();
