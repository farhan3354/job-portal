import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Transporter
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = (name, email, otp) => ({
  from: `"Your Website" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "Verify your account - OTP",
  html: `
        <h2>Hello ${name},</h2>
        <p>Your OTP for account verification is:</p>
        <h1>${otp}</h1>
        <p>This code will expire in 5 minutes.</p>
      `,
});

// Dynamic mail options
// export const mailOptions = (email, name) => ({
//   from: `"Your Website" <${process.env.EMAIL_USER}>`,
//   to: email,
//   subject: "Welcome to Our Website!",
//   html: `
//     <h2>Hello ${name},</h2>
//     <p>Thank you for registering on our website.</p>
//     <p>We're excited to have you on board! 🎉</p>
//   `,
// });
