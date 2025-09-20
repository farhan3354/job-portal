import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const AllApplicants = () => {
  const [jobs, setJobs] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const [loading, setloading] = useState(true);
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

  return (
    <>
      <div className="max-w-5xl mx-auto p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">
          Your Posted Jobs
        </h2>

        {activeJobs.length === 0 ? (
          <p className="text-gray-600 text-sm sm:text-base">
            No jobs posted yet.
          </p>
        ) : (
          <div className="space-y-4">
            {activeJobs.map((job) => (
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
    </>
  );
};

export default AllApplicants;
