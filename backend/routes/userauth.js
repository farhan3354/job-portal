const express = require("express");
const ensureuser = require("../middleware/userauth");

const router = express.Router();

router.get("/", ensureuser, (req, res) => {
  res.status(200).json("Hello product");
});

module.exports = router;
