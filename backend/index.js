import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/authroutes.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use("/", userRoutes);

connectDB();
app.listen(port, () => {
  console.log("Server started on port", port);
});
