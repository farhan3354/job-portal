import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiDownload,
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiUser,
  FiFileText,
} from "react-icons/fi";

const ScheduleInterview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    duration: "30",
    interviewer: "",
    interviewType: "video",
    location: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Interview scheduled for ${formData.date} at ${formData.time}`);
    navigate(`/employer-dashboard/view-interviews`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(`/applicant/${id}`)}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <FiArrowLeft className="mr-2" /> Back to Applicant Details
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Schedule Interview
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Set up an interview with the candidate
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Interview Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiCalendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Time */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Interview Time
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiClock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Duration */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (minutes)
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">60 minutes</option>
                  <option value="90">90 minutes</option>
                </select>
              </div>

              {/* Interviewer */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Interviewer
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="interviewer"
                    value={formData.interviewer}
                    onChange={handleChange}
                    placeholder="Interviewer name"
                    className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Interview Type */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Interview Type
                </label>
                <select
                  name="interviewType"
                  value={formData.interviewType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="video">Video Call</option>
                  <option value="phone">Phone Call</option>
                  <option value="in-person">In-Person</option>
                </select>
              </div>

              {/* Location/URL */}
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {formData.interviewType === "in-person"
                    ? "Location"
                    : "Meeting URL"}
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder={
                    formData.interviewType === "in-person"
                      ? "Office address"
                      : "https://meet.example.com/room"
                  }
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes/Agenda
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <FiFileText className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Add any notes or agenda items for the interview..."
                    className="pl-10 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="mt-8 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => navigate(`/employer-dashboard/applicants`)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Schedule Interview
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleInterview;
