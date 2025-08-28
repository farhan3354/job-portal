import express from "express";
import { registeruser, loginuser } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registeruser);

router.post("/login", loginuser);

router.get("/", (req, res) => {
  res.send("Hello from the server");
});

router.get("/verify", protect
  , (req, res) => {
  res.json({ message: "Token valid", user: req.user });
}
);

export default router;
