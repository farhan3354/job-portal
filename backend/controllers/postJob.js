import Job from "../models/jobs.js";

export const createJob = async (req, res) => {
  try {
    const {
      jobTitle,
      companyName,
      jobDescription,
      requirements,
      employmentType,
      industry,
      location,
      salary,
      applicationDeadline,
      contactEmail,
      contactPhone,
    } = req.body;

    if (
      !jobTitle ||
      !companyName ||
      !jobDescription ||
      !requirements ||
      !employmentType ||
      !industry ||
      !location ||
      !salary ||
      !applicationDeadline ||
      !contactEmail
    ) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled" });
    }

    const job = await Job.create({
      jobTitle,
      companyName,
      jobDescription,
      requirements,
      employmentType,
      industry,
      location,
      salary,
      applicationDeadline,
      contactEmail,
      contactPhone,
      postedBy: req.user.id,
    });

    return res.status(201).json({
      message: "Job posted successfully",
      job,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
