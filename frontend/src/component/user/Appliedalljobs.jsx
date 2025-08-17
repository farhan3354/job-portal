import React, { useState } from "react";
import {
  FaSearch,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaSpinner,
  FaTimesCircle,
} from "react-icons/fa";

const AppliedAllJobs = () => {
  // Sample applied jobs data
  const [appliedJobs, setAppliedJobs] = useState([
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA (Remote)",
      appliedDate: "2023-05-15",
      status: "interview", // 'applied', 'interview', 'offer', 'rejected'
      type: "Full-time",
      salary: "$120,000 - $150,000",
      description:
        "We are looking for an experienced frontend developer to join our team working with React and TypeScript.",
      interviewDate: "2023-06-10",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "DataSystems LLC",
      location: "New York, NY",
      appliedDate: "2023-05-20",
      status: "applied",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      description:
        "Join our backend team to build scalable APIs and microservices using Node.js and Python.",
    },
    {
      id: 3,
      title: "UX Designer",
      company: "CreativeMinds",
      location: "Austin, TX (Hybrid)",
      appliedDate: "2023-05-10",
      status: "offer",
      type: "Contract",
      salary: "$90 - $120/hr",
      description:
        "Looking for a talented UX designer to revamp our customer-facing applications.",
    },
    {
      id: 4,
      title: "DevOps Specialist",
      company: "CloudSolutions",
      location: "Remote",
      appliedDate: "2023-05-05",
      status: "rejected",
      type: "Full-time",
      salary: "$130,000 - $160,000",
      description:
        "Seeking a DevOps engineer to manage our AWS infrastructure and CI/CD pipelines.",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  // Filter jobs based on search and filters
  const filteredJobs = appliedJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    const matchesType =
      typeFilter === "all" ||
      job.type.toLowerCase() === typeFilter.toLowerCase();

    return matchesSearch && matchesStatus && matchesType;
  });

  // Get status icon and color
  const getStatusInfo = (status) => {
    switch (status) {
      case "applied":
        return {
          icon: <FaClock className="mr-1" />,
          color: "text-blue-500",
          text: "Applied",
        };
      case "interview":
        return {
          icon: <FaSpinner className="mr-1 animate-spin" />,
          color: "text-yellow-500",
          text: "Interview",
        };
      case "offer":
        return {
          icon: <FaCheckCircle className="mr-1" />,
          color: "text-green-500",
          text: "Offer",
        };
      case "rejected":
        return {
          icon: <FaTimesCircle className="mr-1" />,
          color: "text-red-500",
          text: "Rejected",
        };
      default:
        return { icon: null, color: "text-gray-500", text: "Unknown" };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Applied Jobs</h1>
        <p className="text-gray-600">
          Track all the jobs you've applied to and their current status
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search jobs or companies..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <div>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          {/* Job Type Filter */}
          <div>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>
      </div>

      {/* Applied Jobs List */}
      <div className="space-y-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{job.company}</p>

                    <div className="flex flex-wrap items-center gap-4 mt-3">
                      <div className="flex items-center text-gray-600">
                        <FaBriefcase className="mr-2 text-blue-500" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="mr-2 text-blue-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaCalendarAlt className="mr-2 text-blue-500" />
                        <span>
                          Applied on{" "}
                          {new Date(job.appliedDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start md:items-end">
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        getStatusInfo(job.status).color
                      } bg-${getStatusInfo(job.status).color.replace(
                        "text-",
                        "bg-"
                      )}/10 mb-3`}
                    >
                      {getStatusInfo(job.status).icon}
                      {getStatusInfo(job.status).text}
                    </div>
                    <p className="text-gray-700 font-medium">{job.salary}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 mb-4">{job.description}</p>

                  {job.status === "interview" && job.interviewDate && (
                    <div className="bg-blue-50 text-blue-800 px-4 py-3 rounded-md">
                      <p className="font-medium">
                        Interview scheduled for{" "}
                        {new Date(job.interviewDate).toLocaleDateString()}
                      </p>
                    </div>
                  )}

                  {job.status === "offer" && (
                    <div className="bg-green-50 text-green-800 px-4 py-3 rounded-md">
                      <p className="font-medium">
                        You've received an offer for this position!
                      </p>
                    </div>
                  )}

                  {job.status === "rejected" && (
                    <div className="bg-red-50 text-red-800 px-4 py-3 rounded-md">
                      <p className="font-medium">
                        This application was not successful
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedAllJobs;
