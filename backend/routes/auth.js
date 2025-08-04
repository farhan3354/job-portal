const express = require("express");
const { registermiddleware, loginauth } = require("../middleware/auth");
const { signup, login } = require("../controllers/auth");

const router = express.Router();

router.post("/login", loginauth, login);

router.post("/signup", registermiddleware, signup);

module.exports = router;
