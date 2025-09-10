import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
import axios from "axios";

export default function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);

  const getAllJobs = async () => {
    try {
      const resp = await axios.get("http://localhost:8000/get-alljobs");
      setJobs(resp.data.jobs || []);
    } catch (error) {
      console.log("Error getting data", error);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Jobs</h2>
          <Link
            to="/userdashboard/jobs"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            View all jobs <FaArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
