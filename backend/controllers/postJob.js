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

export const fetchjobs = async (req, res) => {
  try {
    const jobs = await Job.find().populate("postedBy", "name email");
    if (!jobs) {
      return res.status(404).json({ message: "Job not found" });
    }
    return res.status(200).json({ message: "Data fetch successfully", jobs });
  } catch (error) {
    return res.status(500).json({ message: "Error came in the server", error });
  }
};

export const fetchidjobs = async (req, res) => {
  try {
    const { id } = req.params.id;
    if (!id) {
      return res.status(404).json({ message: "Id is required" });
    }
    const jobs = await Job.findById(id).populate("postedBy", "name email");
    if (!jobs) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Data fetch successfully", jobs });
  } catch (error) {
    res.status(500).json({ message: "Error came in the server", error });
  }
};

export const editjob = async (req, res) => {
  try {
    const changejobdetail = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!changejobdetail) {
      return res.status(404).json({ message: "Job not found in the database" });
    }

    res
      .status(200)
      .json({ message: "Job updated successfully", changejobdetail });
  } catch (error) {
    console.log(`Error in editjob API:`, error);
    res.status(500).json({ message: "Server error updating job" });
  }
};
