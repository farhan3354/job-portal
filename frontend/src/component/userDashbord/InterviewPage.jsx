import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiCalendar, FiClock, FiUser, FiVideo, FiMapPin } from "react-icons/fi";
import { useSelector } from "react-redux";

const InterviewPage = () => {
  const [interview, setinterview] = useState([]);
  const [loading, setloading] = useState(true);
  const token = useSelector((state) => state.auth.token);
  const fetchdata = async () => {
    try {
      const respo = await axios.get("http://localhost:8000/getjobseeker", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setinterview(respo.data.jobseekerinter || null);
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

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            My Interviews
          </h1>

          {!interview || interview.length === 0 ? (
            <p className="text-gray-600">No interviews scheduled yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 transition-transform transform hover:scale-[1.02] hover:shadow-lg">
                <div className="mb-4">
                  <h2 className="text-lg font-bold text-gray-800">
                    Name: {interview?.candidateId?.name || "Unknown Candidate"}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Email:{" "}
                    {interview?.candidateId?.email || "No Email Provided"}
                  </p>
                </div>

                <div className="space-y-3 text-gray-700 text-sm">
                  <p className="flex items-center">
                    <FiCalendar className="mr-2 text-black" />
                    <span className="font-medium">Date:</span>&nbsp;
                    {interview?.date}
                  </p>
                  <p className="flex items-center">
                    <FiClock className="mr-2 text-black" />
                    <span className="font-medium">Time:</span>&nbsp;
                    {interview?.time}
                  </p>
                  <p className="flex items-center">
                    <FiUser className="mr-2 text-black" />
                    <span className="font-medium">Interviewer:</span>&nbsp;
                    {interview?.interviewername}
                  </p>
                  <p className="flex items-center">
                    <FiVideo className="mr-2 text-black" />
                    <span className="font-medium">Meeting URL:</span>&nbsp;
                    <a
                      href={interview?.meetingurl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline break-all"
                    >
                      {interview?.meetingurl}
                    </a>
                  </p>
                </div>

                {interview?.notes && (
                  <div className="mt-4 p-3  ">
                    <p className="text-gray-600 text-sm">
                      <span className="font-semibold text-gray-700">
                        Notes:
                      </span>{" "}
                      {interview?.notes}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InterviewPage;
