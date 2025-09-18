import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaUserTimes,
  FaEnvelope,
  FaPhone,
  FaUserShield,
  FaPlus,
  FaCamera,
} from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { useSelector } from "react-redux";

export default function SeeProfile() {
  const [profileData, setProfileData] = useState(null);
  const token = useSelector((state) => state.auth.token);
  const [loading, setloading] = useState(true);

  const fetchdata = async () => {
    try {
      const repo = await axios.get("http://localhost:8000/admin", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfileData(repo.data.profile);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  if (!profileData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-6">
            <div className="relative inline-flex">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <FaUserTimes className="w-10 h-10 text-blue-600" />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Profile Not Found
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            It looks like you haven't created your professional profile yet.
            Let's get started and showcase your skills to potential employers!
          </p>

          <Link
            to={"/admin-dashboard/createprofile"}
            className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-xl bg-blue-600"
          >
            <FaPlus />
            Create Your Profile
          </Link>

          <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-700 flex items-center justify-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Complete your profile to increase your job opportunities
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-10">
            <div className="relative">
              <img
                src={
                  profileData?.profileImage || "https://via.placeholder.com/150"
                }
                alt="Admin Avatar"
                className="w-36 h-36 rounded-full border-4 border-blue-500 shadow-md object-cover"
              />
              <button className="absolute bottom-2 right-2 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition">
                <FaCamera className="text-gray-600" />
              </button>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {profileData?.userId?.name || "Admin Name"}
              </h2>
              <p className="mt-2 text-gray-600 max-w-lg italic">
                {profileData?.bio || "No bio provided yet..."}
              </p>
              <p className="mt-2 text-gray-600 max-w-lg italic">
                {profileData?.location || "Not specified"}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:shadow transition">
                <FaEnvelope className="text-green-500 text-xl" />
                <div>
                  <p className="font-semibold text-gray-700">Email</p>
                  <p className="text-gray-600">
                    {profileData?.userId?.email || "N/A"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:shadow transition">
                <FaPhone className="text-purple-500 text-xl" />
                <div>
                  <p className="font-semibold text-gray-700">Phone</p>
                  <p className="text-gray-600">
                    {profileData?.userId?.phone || "N/A"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:shadow transition">
                <FaUserShield className="text-blue-500 text-xl" />
                <div>
                  <p className="font-semibold text-gray-700">Role</p>
                  <p className="text-gray-600">
                    {profileData?.userId?.role || "N/A"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:shadow transition">
                <MdDateRange className="text-orange-500 text-xl" />
                <div>
                  <p className="font-semibold text-gray-700">Joined</p>
                  <p className="text-gray-600">
                    {profileData?.createdAt
                      ? new Date(profileData.createdAt).toDateString()
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
