// src/components/interview/ViewInterview.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiUser,
  FiVideo,
  FiMapPin,
  FiFileText,
} from "react-icons/fi";

const ViewInterview = () => {
  const navigate = useNavigate();

  const interviews = [
    {
      id: 1,
      candidate: "John Doe",
      date: "2025-08-30",
      time: "10:00 AM",
      duration: "30 minutes",
      type: "Video Call",
      interviewer: "Jane Smith",
      location: "https://meet.google.com/abc-defg-hij",
    },
    {
      id: 2,
      candidate: "Alice Johnson",
      date: "2025-09-01",
      time: "2:30 PM",
      duration: "45 minutes",
      type: "In-Person",
      interviewer: "Mark Wilson",
      location: "123 Main St, Office 402",
    },
  ];
  function deleteinterview() {
    alert("You want to delete the interview");
  }
  function Editinterview() {
    alert("You want to edit the interview");
  }
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-full mx-auto">
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <FiArrowLeft className="mr-2" /> Back
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Interview Details
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            View the scheduled interview information
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-3">
          {interviews.map((intervie) => (
            <div
              className="bg-white rounded-2xl shadow-md border border-gray-100 p-6"
              key={intervie.id}
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Candidate: {intervie.candidate}
              </h2>

              <div className="space-y-3 text-gray-700 text-sm">
                <p className="flex items-center">
                  <FiCalendar className="mr-2 text-indigo-500" />
                  {intervie.date}
                </p>
                <p className="flex items-center">
                  <FiClock className="mr-2 text-indigo-500" />
                  {intervie.time} • {intervie.duration}
                </p>
                <p className="flex items-center">
                  <FiUser className="mr-2 text-indigo-500" />
                  {intervie.interviewer}
                </p>
                <p className="flex items-center">
                  {intervie.type === "In-Person" ? (
                    <FiMapPin className="mr-2 text-indigo-500" />
                  ) : (
                    <FiVideo className="mr-2 text-indigo-500" />
                  )}
                  {intervie.location}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={Editinterview}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={deleteinterview}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Cancel Interview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewInterview;
