const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
// const cors = require("cors");
const PORT = process.env.PORT || 8000;
const authrouter = require("./routes/auth");
const userrouter = require("./routes/userauth");

app.use(bodyParser.json());
// app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/users")
  .then(() => {
    console.log("mongo db connected successfully");
  })
  .catch((err) => {
    console.log("Error came", err);
  });

app.get("/", (req, res) => {
  res.send("Hello from the server");
  console.log(PORT);
});

app.use("/auth", authrouter);
app.use("/users", userrouter);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
