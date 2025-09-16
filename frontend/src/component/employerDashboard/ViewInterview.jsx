// src/components/interview/ViewInterview.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiUser,
  FiVideo,
} from "react-icons/fi";
import { MdEmail } from "react-icons/md";

import axios from "axios";
import { useSelector } from "react-redux";
import { LuNotebookPen } from "react-icons/lu";

const ViewInterview = () => {
  const navigate = useNavigate();

  const [interviews, setinterview] = useState([]);
  const [loading, setloading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const fetchdata = async () => {
    try {
      const respo = await axios.get(`http://localhost:8000/getinterview`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setinterview(respo.data.intervi || null);
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

  function Editinterview() {
    alert("You want to edit the interview");
  }
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors duration-200"
            >
              <FiArrowLeft className="mr-2 h-5 w-5" /> Back
            </button>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Interview Details
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              View the scheduled interview information
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviews.map((intervie) => (
              <div
                key={intervie._id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-200"
              >
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                  Candidate:{" "}
                  <span className="text-black">
                    {intervie.candidateId?.name}
                  </span>
                </h2>

                <div className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <p className="flex items-center">
                    <MdEmail className="mr-2 text-black" />
                    <span className="truncate">
                      {intervie.candidateId?.email}
                    </span>
                  </p>
                  <p className="flex items-center">
                    <FiCalendar className="mr-2 text-black" />
                    {new Date(intervie.date).toLocaleDateString()}
                  </p>
                  <p className="flex items-center">
                    <FiClock className="mr-2 text-black" />
                    {intervie.time}
                  </p>
                  <p className="flex items-center">
                    <FiUser className="mr-2 text-black" />
                    {intervie.interviewername}
                  </p>
                  <p className="flex items-center break-words">
                    <FiVideo className="mr-2 text-black" />
                    <a
                      href={intervie.meetingurl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:underline"
                    >
                      Join Meeting
                    </a>
                  </p>
                  <p className="flex items-start">
                    <LuNotebookPen className="mr-2 text-black mt-1" />
                    <span>{intervie.notes || "No notes added"}</span>
                  </p>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <Link
                    to={`/employer-dashboard/edit-interview/${intervie._id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewInterview;
