import express from "express";
import { getApplicantsByJobId } from "./../controllers/getapplicantcontroller.js";
const router = express.Router();
import { employerMiddleware, protect } from "../middlewares/authMiddleware.js";

router.get(
  "/all-applicant/:id",
  protect,
  employerMiddleware,
  getApplicantsByJobId
);

export default router;
