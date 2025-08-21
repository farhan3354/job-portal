import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaUserShield } from "react-icons/fa";
import { MdDateRange, MdEdit, MdLock } from "react-icons/md";

export default function SeeProfile() {
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-6">
          <img
            src="https://via.placeholder.com/120"
            alt="Admin Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-500"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Admin Name</h2>
            <p className="text-gray-500 flex items-center gap-2">
              <FaUserShield className="text-blue-500" /> Super Admin
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Managing job portal activities and users
            </p>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <FaUser className="text-blue-500" />
              <p>
                <span className="font-semibold">Name:</span> Admin Name
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-500" />
              <p>
                <span className="font-semibold">Email:</span> admin@email.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-purple-500" />
              <p>
                <span className="font-semibold">Phone:</span> +123 456 789
              </p>
            </div>
            <div className="flex items-center gap-3">
              <MdDateRange className="text-orange-500" />
              <p>
                <span className="font-semibold">Joined:</span> Jan 2024
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
              <MdEdit /> Edit Profile
            </button>
            <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600">
              <MdLock /> Change Password
            </button>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Activity Summary</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-xl text-center shadow">
              <h4 className="text-2xl font-bold text-blue-600">120</h4>
              <p className="text-gray-600">Employers</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl text-center shadow">
              <h4 className="text-2xl font-bold text-green-600">450</h4>
              <p className="text-gray-600">Job Seekers</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl text-center shadow">
              <h4 className="text-2xl font-bold text-purple-600">75</h4>
              <p className="text-gray-600">Active Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
