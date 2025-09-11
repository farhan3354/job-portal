import Application from "../models/application.js";

export const getApplicantsByJobId = async (req, res) => {
  try {
    const { id: jobId } = req.params; // Make sure param name matches

    const applications = await Application.find({ jobId }).populate(
      "applicantId",
      "name email phone"
    );

    if (!applications.length) {
      return res.status(200).json({ success: true, applicants: [] });
    }

    return res.status(200).json({ success: true, applicants: applications });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
