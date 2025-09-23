import React from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiClock,
  FiUser,
  FiX,
  FiDownload,
} from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const JobApplications = () => {
  const { id: jobId } = useParams();
  const [applicants, setApplicants] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const [loading, setloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const applicantsPerPage = 10;

  const indexOfLastApplicant = currentPage * applicantsPerPage;
  const indexOfFirstApplicant = indexOfLastApplicant - applicantsPerPage;
  const currentApplicants = applicants.slice(
    indexOfFirstApplicant,
    indexOfLastApplicant
  );

  const totalPages = Math.ceil(applicants.length / applicantsPerPage);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/all-applicant/${jobId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setApplicants(res.data.applicants);
      } catch (err) {
        console.error("Failed to fetch applicants:", err);
      } finally {
        setloading(false);
      }
    };
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (jobId && token) {
      fetchApplicants();
    }
  }, [jobId, token, currentPage]);

  const isSameDay = (d1, d2) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  const today = new Date();

  const todaysApplicants = applicants.filter((applicant) =>
    isSameDay(new Date(applicant.createdAt), today)
  );

  const todaysApplicantsCount = todaysApplicants.length;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-5 py-5 sm:py-6 lg:py-8">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Job Applications
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
              Manage and review all job applications in one place
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8">
            <div className="bg-white rounded-lg shadow p-4 sm:p-5 lg:p-6">
              <div className="flex items-center">
                <div className="p-2 sm:p-3 rounded-full bg-blue-100 text-blue-600">
                  <FiUser className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {applicants.length}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Total Applicants
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 sm:p-5 lg:p-6">
              <div className="flex items-center">
                <div className="p-2 sm:p-3 rounded-full bg-green-100 text-green-600">
                  <FiClock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {todaysApplicantsCount}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    New Applications
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 sm:p-5 lg:p-6">
              <div className="flex items-center">
                <div className="p-2 sm:p-3 rounded-full bg-yellow-100 text-yellow-600">
                  <FiBriefcase className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {applicants.filter((a) => a.status === "Interview").length}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Interview Stage
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-4 sm:p-5 lg:p-6">
              <div className="flex items-center">
                <div className="p-2 sm:p-3 rounded-full bg-red-100 text-red-600">
                  <FiX className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {applicants.filter((a) => a.status === "Rejected").length}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">Rejected</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 hidden md:table">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Applicant
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Applied For
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date Applied
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentApplicants.map((applicant) => (
                    <tr key={applicant.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                              {applicant?.applicantId.name.charAt(0)}
                            </div>
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">
                              {applicant?.applicantId.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {applicant?.applicantId.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {applicant.jobId.jobTitle}
                        </div>
                        <div className="text-xs text-gray-500">
                          {applicant.experience} experience
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full
                        ${
                          applicant.status === "New"
                            ? "bg-blue-100 text-blue-800"
                            : ""
                        }
                        ${
                          applicant.status === "Reviewed"
                            ? "bg-green-100 text-green-800"
                            : ""
                        }
                        ${
                          applicant.status === "Interview"
                            ? "bg-yellow-100 text-yellow-800"
                            : ""
                        }
                        ${
                          applicant.status === "Rejected"
                            ? "bg-red-100 text-red-800"
                            : ""
                        }
                      `}
                        >
                          {applicant.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(applicant.createdAt).toLocaleString()}
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                        <Link
                          to={`/employer-dashboard/applicant/${applicant?.applicantId._id}`}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          Details
                        </Link>
                        <button className="text-gray-600 hover:text-gray-900">
                          <FiDownload className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="md:hidden">
                {currentApplicants.map((applicant) => {
                  <div
                    key={applicant._id}
                    className="border-b border-gray-200 p-4"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                            {applicant?.applicantId.name.charAt(0)}
                          </div>
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">
                            {applicant?.applicantId.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {applicant?.applicantId.email}
                          </div>
                          <div className="text-xs text-gray-500">
                            {applicant?.jobId.jobTitle}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-xs text-gray-500">Status</p>
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${
                          applicant.status === "New"
                            ? "bg-blue-100 text-blue-800"
                            : ""
                        }
                        ${
                          applicant.status === "Reviewed"
                            ? "bg-green-100 text-green-800"
                            : ""
                        }
                        ${
                          applicant.status === "Interview"
                            ? "bg-yellow-100 text-yellow-800"
                            : ""
                        }
                        ${
                          applicant.status === "Rejected"
                            ? "bg-red-100 text-red-800"
                            : ""
                        }
                      `}
                        >
                          {applicant.status}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Experience</p>
                        <p className="text-sm text-gray-900">
                          {applicant.experience}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Applied</p>
                        <p className="text-sm text-gray-900">
                          {new Date(applicant.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="text-sm text-gray-900">
                          {applicant.location}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
                      <Link
                        to={`/employer-dashboard/job-applicants/applicant/${applicant.id}`}
                        className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                      >
                        View Details
                      </Link>
                      <button
                        // onClick={() => handleDownload(applicant)}
                        className="text-gray-600 hover:text-gray-900 flex items-center text-sm"
                      >
                        <FiDownload className="h-4 w-4 mr-1" />
                        Resume
                      </button>
                    </div>
                  </div>;
                })}
              </div>
            </div>
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 border rounded ${
                  currentPage === 1
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-3 py-1 border rounded ${
                  currentPage === totalPages
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobApplications;
