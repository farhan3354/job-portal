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

    if (jobId && token) {
      fetchApplicants();
    }
  }, [jobId, token]);

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
                  {applicants.map((applicant) => (
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
                {applicants.map((applicant) => {
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
        </div>
      </div>
    </>
  );
};

export default JobApplications;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const JobApplicants = () => {
// const { id: jobId } = useParams();
// const [applicants, setApplicants] = useState([]);
// const token = useSelector((state) => state.auth.token);

// useEffect(() => {
//   const fetchApplicants = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:8000/all-applicant/${jobId}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setApplicants(res.data.applicants);
//     } catch (err) {
//       console.error("Failed to fetch applicants:", err);
//     }
//   };
//   if (jobId && token) {
//     fetchApplicants();
//   }
// }, [jobId, token]);

// if (applicants.length === 0) {
//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-6">Applicants</h2>
//       <p>No applicants yet for this job.</p>
//     </div>
//   );
// }

//   return (
//     <div className="max-w-6xl mx-auto p-6 space-y-4">
//       <h2 className="text-2xl font-bold mb-6">Applicants</h2>
//       {applicants.map((applicant) => (
//         <div key={applicant._id} className="bg-white p-4 rounded-lg shadow">
//           <h3 className="text-lg font-semibold">{applicant.applicantId?.name}</h3>
//           <p className="text-gray-600">{applicant.applicantId?.email}</p>
//           <p className="text-gray-600">{applicant.applicantId?.phone}</p>
//           <p className="text-gray-600">Experience: {applicant.experience}</p>
//           <p className="text-gray-600">Cover Letter: {applicant.coverLetter}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default JobApplicants;
