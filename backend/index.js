import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/authroutes.js";
dotenv.config();
import cors from "cors";
const app = express();
const port = process.env.PORT || 4000;
app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json());

app.use("/", userRoutes);

connectDB();
app.listen(port, () => {
  console.log("Server started on port", port);
});
