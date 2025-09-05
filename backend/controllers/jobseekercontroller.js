import JobSeekerProfile from "../models/jobseeker.js";

export const createProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const {
      headline,
      about,
      location,
      seekerjobstitle,
      seekerjobscompany,
      seekerjobdescripition,
      seekerexperience,
      seekerdegree,
      seekerinsitute,
      seekereducation,
    } = req.body;

    // parse skills safely
    const seekerskills = req.body.seekerskills
      ? JSON.parse(req.body.seekerskills)
      : [];

    if (
      !headline ||
      !about ||
      !location ||
      !seekerjobstitle ||
      !seekerjobscompany ||
      !seekerjobdescripition ||
      !seekerexperience ||
      !seekerdegree ||
      !seekerinsitute ||
      !seekereducation ||
      seekerskills.length === 0
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const cvurl = req.file?.path;
    if (!cvurl) {
      return res.status(400).json({ message: "CV is required" });
    }

    const newProfile = new JobSeekerProfile({
      userId,
      profileImage: req.body.profileImage || undefined,
      headline,
      about,
      location,
      seekerjobstitle,
      seekerjobscompany,
      seekerjobdescripition,
      seekerexperience,
      seekerdegree,
      seekerinsitute,
      seekereducation,
      seekerskills,
      seekerresumeUrl: cvurl,
    });

    await newProfile.save();

    return res.status(201).json({ success: true, profile: newProfile });
  } catch (error) {
    console.error("Error creating profile:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllProfiles = async (req, res) => {
  try {
    const profiles = await JobSeekerProfile.find().populate(
      "userId",
      "name email"
    );
    if (!profiles || profiles.length === 0) {
      return res.status(404).json({ message: "No profile are exist" });
    }

    return res.status(200).json({ success: true, profiles });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getProfileById = async (req, res) => {
  try {
    const profile = await JobSeekerProfile.findById(req.params.id).populate(
      "userId",
      "name email"
    );

    if (!profile) {
      return res
        .status(404)
        .json({ success: false, message: "Profile not found" });
    }

    return res.status(200).json({ success: true, profile });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.resumeUrl = req.file.path;
    }

    const profile = await JobSeekerProfile.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
      }
    );

    if (!profile) {
      return res
        .status(404)
        .json({ success: false, message: "Profile not found" });
    }

    return res.status(200).json({ success: true, profile });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteProfile = async (req, res) => {
  try {
    const profile = await JobSeekerProfile.findByIdAndDelete(req.params.id);

    if (!profile) {
      return res
        .status(404)
        .json({ success: false, message: "Profile not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Profile deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
