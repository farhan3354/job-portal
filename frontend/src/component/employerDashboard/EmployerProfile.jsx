import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaUsers,
  FaRegUserCircle,
  FaUserTimes,
  FaPlus,FaEdit 
} from "react-icons/fa";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function EmployerProfile() {
  const token = useSelector((state) => state.auth.token);
  const [profile, setProfile] = useState(null);
  const [loading, setloading] = useState(true);
  const fetchprofile = async () => {
    try {
      const repo = await axios.get("http://localhost:8000/getprofileemployer", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(repo.data.user || null);
    } catch (error) {
      console("Server Error", error);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchprofile();
  }, [token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  if (!profile) {
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
            to={"/employer-dashboard/createprofile"}
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
    <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={profile.companylogo || "https://via.placeholder.com/120"}
          alt="Company Logo"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-blue-500 object-cover"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            {profile.companyName}
          </h1>

          <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2 mt-1 text-sm sm:text-base">
            <FaEnvelope className="text-blue-500" /> {profile.userId?.email}
          </p>
          <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
            <FaMapMarkerAlt className="text-blue-500" /> {profile.location}
          </p>
          <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
            <FaRegUserCircle className="text-blue-500" /> {profile.userId?.name}
          </p>
        </div>
        <Link
          to={"/employer-dashboard/editprofile"}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 w-full md:w-auto"
        >
          Edit Profile
        </Link>
        <Link
          to="/employer-dashboard/change-password"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FaEdit className="mr-2" />
          Change Password
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 mt-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          Company Information
        </h2>
        <div className="space-y-3 text-sm sm:text-base">
          <p className="flex items-center gap-2 text-gray-700">
            <FaBuilding className="text-blue-500" /> Industry:{" "}
            {profile.industry}
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            <FaUsers className="text-blue-500" /> Company Size:{" "}
            {profile.companysize} Employees
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            <FaGlobe className="text-blue-500" /> Website:{" "}
            <a
              href={profile.companyWebsite}
              className="text-blue-600 hover:underline"
            >
              {profile.companyWebsite}{" "}
            </a>
          </p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 mt-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          About Us
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {profile.description}
        </p>
      </div>
    </div>
  );
}

{
  /* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
        <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 text-center">
          <h3 className="text-base sm:text-lg font-semibold text-gray-600">
            Jobs Posted
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-blue-600 mt-2">
            24
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 text-center">
          <h3 className="text-base sm:text-lg font-semibold text-gray-600">
            Active Jobs
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-green-600 mt-2">
            5
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 text-center">
          <h3 className="text-base sm:text-lg font-semibold text-gray-600">
            Total Applicants
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-purple-600 mt-2">
            128
          </p>
        </div>
      </div> */
}
