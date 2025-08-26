import express from "express";
import { registeruser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registeruser);

router.get("/", (req, res) => {
  res.send("Helllo from the server");
});

export default router;
