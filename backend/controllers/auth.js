const register = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function signup(req, res) {
  try {
    const { name, email, password, phone } = req.body;
    const user = await register.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "Email already exit in the database",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const UserModel = new register({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    await UserModel.save();
    return res
      .status(201)
      .json({ message: "User added successfully", success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error ", success: false });
  }
}

async function login(req, res) {
  try {
    const { email, password, phone } = req.body;
    const user = await register.findOne({ email });
    if (!user) {
      return res.status(403).json({
        message: "Email or password is required",
        success: false,
      });
    }
    const hashpas = await bcrypt.compare(password, user.password);
    if (!hashpas) {
      return res.status(403).json({
        message: "Email or password is required",
        success: false,
      });
    }

    const jwttoken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.status(201).json({
      message: "Login successfully",
      success: true,
      jwttoken,
      email,
      name: user.name,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error ", success: false });
  }
}

module.exports = {
  signup,
  login,
};
