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

    const seekerskills = req.body.seekerskills
      ? JSON.parse(req.body.seekerskills)
      : [];

    if (!headline || !about || !location) {
      return res
        .status(400)
        .json({ message: "Headline, about, and location are required" });
    }

    console.log("Uploaded File:", req.file);

    const cvurl = req.file?.path || null;

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

export const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const profile = await JobSeekerProfile.findOne({
      userId: userId,
    }).populate("userId");

    if (!profile) {
      return res
        .status(404)
        .json({ success: false, message: "Profile not found" });
    }

    return res.status(200).json({ success: true, profile });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// update profile jobseeker

export const updateProfile = async (req, res) => {
  try {
    const profileId = req.params.id;

    const existingProfile = await JobSeekerProfile.findById(profileId);
    if (!existingProfile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    // if (existingProfile.userId.toString() !== req.user._id.toString()) {
    //   return res.status(403).json({
    //     success: false,
    //     message: "You are not authorized to update this profile",
    //   });
    // }

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

    const seekerskills = req.body.seekerskills
      ? JSON.parse(req.body.seekerskills)
      : [];

    if (!headline || !about || !location) {
      return res
        .status(400)
        .json({ message: "Headline, about, and location are required" });
    }

    const resumeUrl = req.file?.path || existingProfile.seekerresumeUrl;

    const updatedProfile = await JobSeekerProfile.findByIdAndUpdate(
      profileId,
      {
        profileImage: existingProfile.profileImage,
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
        seekerskills: seekerskills,
        seekerresumeUrl: resumeUrl,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      profile: updatedProfile,
    });
  } catch (error) {
    console.error("Update error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
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
