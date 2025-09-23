import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const AllApplicants = () => {
  const [jobs, setJobs] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const [loading, setloading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:8000/get-jobs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJobs(res.data.jobs);
      } catch (err) {
        console.error(err);
      } finally {
        setloading(false);
      }
    };
    fetchJobs();
  }, [token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  const activeJobs = jobs.filter((job) => job.status !== "Closed");
  const totalPages = Math.ceil(activeJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = activeJobs.slice(startIndex, startIndex + jobsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="max-w-5xl mx-auto p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">
          Your Posted Jobs
        </h2>

        {currentJobs.length === 0 ? (
          <p className="text-gray-600 text-sm sm:text-base">
            No jobs posted yet.
          </p>
        ) : (
          <div className="space-y-4">
            {currentJobs.map((job) => (
              <div
                key={job._id}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:shadow-md transition"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                    {job.jobTitle}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-0.5">
                    {job.location}
                  </p>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {job.companyName}
                  </p>
                </div>

                <Link
                  to={`/employer-dashboard/job-applicants/${job._id}`}
                  className="inline-flex justify-center items-center px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  See Applicants
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 border rounded ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default AllApplicants;
