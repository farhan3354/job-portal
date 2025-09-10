import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaFilePdf,
} from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { togglemode } from "../../../redux/slices/authslices/userslice";

export default function ProfileSetting() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/getprofile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Fetched profile:", response.data.profile);
        setProfile(response.data.profile);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex justify-center items-center h-64">
        <Link
          to={"create"}
          className="bg-blue-600 text-white text-sm md:text-base font-medium rounded-xl px-4 py-2 hover:bg-blue-700"
        >
          Add Profile
        </Link>
        <p className="text-red-600">No profile data found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <Link
            to={"edit"}
            onClick={() =>
              dispatch(togglemode({ mode: "edit", profileId: profile._id }))
            }
            className="bg-blue-600 text-white text-sm md:text-base font-medium rounded-xl px-4 py-2 hover:bg-blue-700"
          >
            Edit Profile
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
                <img
                  src={
                    profile.profileImage ||
                    "https://randomuser.me/api/portraits/men/1.jpg"
                  }
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-center">
                {profile.userId?.name}
              </h2>
              <p className="text-gray-600 text-center">{profile.headline}</p>
            </div>

            <div className="md:w-3/4">
              <h3 className="text-3xl font-bold mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <FaUser className="text-gray-500 mr-3" />
                  <span className="truncate">{profile.userId?.name}</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-gray-500 mr-3" />
                  <span className="truncate">{profile.userId?.email}</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-gray-500 mr-3" />
                  <span className="truncate"> {profile.userId?.phone}</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-gray-500 mr-3" />
                  <span className="truncate">{profile.location}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">About</h3>
              <p className="text-gray-700">{profile.about}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold flex items-center mb-4">
              <MdWork className="mr-2 text-blue-500" /> Experience
            </h3>
            <div className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
              <h4 className="font-semibold text-lg mb-2">
                Job Title:{" "}
                <span className="font-normal text-gray-800">
                  {profile.seekerjobstitle || "Not provided"}
                </span>
              </h4>

              <p className="text-gray-600 mb-1">
                <span className="font-medium">Last Company:</span>{" "}
                {profile.seekerjobscompany || "Not provided"}
              </p>

              <p className="text-gray-600 mb-3">
                <span className="font-medium">Location:</span>{" "}
                {profile.location || "Not provided"}
              </p>

              <p className="text-gray-700">
                <span className="font-medium">Description:</span>{" "}
                {profile.seekerjobdescripition || "No description available"}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold flex items-center mb-4">
              <MdSchool className="mr-2 text-blue-500" /> Education
            </h3>
            <div className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
              <h4 className="font-semibold text-lg mb-2">
                <span className="font-medium">Experience:</span>{" "}
                <span className="font-normal text-gray-800">
                  {profile.seekerexperience || "Not provided"}
                </span>
              </h4>

              <p className="text-gray-600 mb-1">
                <span className="font-medium">Degree:</span>{" "}
                {profile.seekerdegree || "Not provided"}
              </p>

              <p className="text-gray-600 mb-1">
                <span className="font-medium">Institute:</span>{" "}
                {profile.seekerinsitute || "Not provided"}
              </p>

              <p className="text-gray-600">
                <span className="font-medium">Education Level:</span>{" "}
                {profile.seekereducation || "Not provided"}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaBriefcase className="mr-2 text-blue-500" /> Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile.seekerskills && profile.seekerskills.length > 0 ? (
              profile.seekerskills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))
            ) : (
              <span className="text-gray-500">No skills added</span>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaFilePdf className="mr-2 text-red-500" /> Resume
          </h3>
          {profile.seekerresumeUrl ? (
            <iframe
              src={profile.seekerresumeUrl}
              title="Resume"
              className="w-full border rounded-lg"
            ></iframe>
          ) : (
            <p className="text-gray-500">No resume uploaded</p>
          )}
        </div>
      </div>
    </>
  );
}
