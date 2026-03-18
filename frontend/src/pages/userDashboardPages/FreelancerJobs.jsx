import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave, FaClock, FaBuilding, FaSearch, FaFilter, FaCalendarAlt, FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import LeftSidejob from "../../component/userDashbord/LeftSideJob";

export default function FreelancerJobs() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const fetchFreelancerJobs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/get-alljobs");
      const allJobs = response.data.jobs || [];
      // Filter for Freelance jobs only
      const freelancerJobs = allJobs.filter(job => job.jobType === "Freelance");
      setJobs(freelancerJobs);
      setFilteredJobs(freelancerJobs);
      if (freelancerJobs.length > 0) {
        setSelectedJob(freelancerJobs[0]);
      }
    } catch (error) {
      console.log("Server error", error);
    }
  };

  useEffect(() => {
    fetchFreelancerJobs();
  }, []);

  useEffect(() => {
    let results = jobs.filter(
      (job) => job.status !== "Closed" && job.status !== "Inactive"
    );

    if (searchTerm) {
      results = results.filter(
        (job) =>
          job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.skills.some((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    if (locationFilter) {
      results = results.filter((job) =>
        job.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (dateFilter) {
      const today = new Date();
      const filterDate = new Date();

      switch (dateFilter) {
        case "last24h": filterDate.setDate(today.getDate() - 1); break;
        case "last3days": filterDate.setDate(today.getDate() - 3); break;
        case "lastWeek": filterDate.setDate(today.getDate() - 7); break;
        case "lastMonth": filterDate.setMonth(today.getMonth() - 1); break;
        default: break;
      }

      results = results.filter((job) => new Date(job.createdAt) >= filterDate);
    }

    setFilteredJobs(results);

    if (selectedJob && !results.find((job) => job._id === selectedJob._id)) {
      setSelectedJob(results.length > 0 ? results[0] : null);
    }
  }, [searchTerm, locationFilter, dateFilter, jobs, selectedJob]);

  const clearFilters = () => {
    setSearchTerm("");
    setLocationFilter("");
    setDateFilter("");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Freelance Marketplace</h1>
        
        <div className="mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search freelance tasks by title or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <FaFilter />
                  <span>Filters</span>
                </button>
              </div>
            </div>

            {showFilters && (
              <div className="border-t pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Filter by location..."
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Any time</option>
                  <option value="last24h">Last 24 hours</option>
                  <option value="lastWeek">Last week</option>
                  <option value="lastMonth">Last month</option>
                </select>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <LeftSidejob selectedJob={selectedJob} setSelectedJob={setSelectedJob} jobs={filteredJobs} />

          {selectedJob ? (
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4 border-t-4 border-green-600">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedJob.jobTitle}</h2>
                    <div className="flex items-center text-gray-600 mt-1">
                      <FaBuilding className="mr-2" />
                      <span>{selectedJob.companyName}</span>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold">
                    {selectedJob.freelanceType || "Freelance"}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-gray-100 mb-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Budget</p>
                    <p className="font-semibold text-gray-800">
                      {selectedJob.freelanceType === "Fixed" 
                        ? `$${selectedJob.budget}` 
                        : `$${selectedJob.hourlyRange?.min}-$${selectedJob.hourlyRange?.max}/hr`}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Duration</p>
                    <p className="font-semibold text-gray-800">{selectedJob.projectDuration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Scope</p>
                    <p className="font-semibold text-gray-800">{selectedJob.projectScope}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Experience</p>
                    <p className="font-semibold text-gray-800">{selectedJob.experienceLevel}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Description</h3>
                  <p className="text-gray-700 whitespace-pre-line">{selectedJob.jobDescription}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Skills Needed</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills?.map((skill, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t font-semibold">
                  <Link
                    to={`/user-dashboard/apply/${selectedJob._id}`}
                    className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition"
                  >
                    Apply Now
                  </Link>
                  <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <FaBookmark className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 text-center py-20 bg-white rounded-lg shadow-sm">
              <p className="text-gray-500">No freelance jobs found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
