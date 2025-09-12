import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const AllApplicants = () => {
  const [jobs, setJobs] = useState([]);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:8000/get-jobs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJobs(res.data.jobs);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJobs();
  }, [token]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Your Posted Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold mb-1">{job.jobTitle}</h3>
                <p className="text-gray-600 mb-1">{job.location}</p>
                <p className="text-gray-600">{job.companyName}</p>
              </div>
              <Link
                to={`/employer-dashboard/job-applicants/${job._id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                See Applicants
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApplicants;
