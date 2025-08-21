import React, { useState } from "react";
import { FaEdit, FaTrash, FaUsers } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

export default function EmployerAllPostedJobs() {
  // Sample jobs data (you can fetch from API later)
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "Remote",
      type: "Full-Time",
      applicants: 24,
      postedDate: "2025-08-15",
      status: "Active",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "New York, USA",
      type: "Part-Time",
      applicants: 10,
      postedDate: "2025-08-12",
      status: "Closed",
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "Cloud Corp",
      location: "Berlin, Germany",
      type: "Contract",
      applicants: 18,
      postedDate: "2025-08-10",
      status: "Active",
    },
  ]);

  const handleDelete = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };
  return (
    <>
      <div className="p-6 min-h-screen">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          All Posted Jobs
        </h2>

        <div className="grid gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-md rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-lg transition"
            >
              {/* Job Info */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <MdOutlineWork className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {job.company} • {job.location}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Type: <span className="font-medium">{job.type}</span>
                  </p>
                  <p className="text-sm text-gray-400">
                    Posted on: {new Date(job.postedDate).toDateString()}
                  </p>
                </div>
              </div>

              {/* Right Side Actions */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 md:mt-0">
                {/* Applicants */}
                <div className="flex items-center gap-2 text-gray-600">
                  <FaUsers className="text-gray-500" />
                  <span>{job.applicants} Applicants</span>
                </div>

                {/* Status */}
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    job.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {job.status}
                </span>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(job.id)}
                    className="p-2 bg-red-100 rounded-full text-red-600 hover:bg-red-200 transition"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
    </>
  );
}
