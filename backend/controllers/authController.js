import EmployerProfile from "../models/employer.js";
import User from "../models/usermodel.js";
import bcrypt from "bcrypt";

export const registeruser = async (req, res) => {
  try {
    const { role, name, email, phone, password, companyName } = req.body;

    if (!role || !name || !email || !phone || !password) {
      return res.status(400).json({ message: "All the fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      role,
      name,
      email,
      phone,
      password: hashedPassword,
    });

    if (role === "employer") {
      await EmployerProfile.create({
        userId: user._id,
        companyName,
      });
    }

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
