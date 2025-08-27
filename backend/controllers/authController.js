import EmployerProfile from "../models/employer.js";
import User from "../models/usermodel.js";
import bcrypt from "bcrypt";

export const registeruser = async (req, res) => {
  try {
    const { role, name, email, phone, password } = req.body;

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

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Fill all the details" });
    }
    const checkuser = await User.findOne({ email });

    if (!checkuser) {
      return res.status(400).json({ message: "User do exist " });
    }

    const matchpassword = bcrypt.compare(password, checkuser.password);
    if (!matchpassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: checkuser._id, role: checkuser.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: checkuser._id,
        role: checkuser.role,
        Nmae: checkuser.name,
        Email: checkuser.email,
        Phone: checkuser.phone,
      },
    });
  } catch (err) {
    console.log(err);
  }

  // return res.send("successfull created");
};
