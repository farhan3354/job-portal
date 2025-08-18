import React from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaClock,
  FaBookmark,
} from "react-icons/fa";

export default function LeftSidejob({
  bookmarkedJobs,
  toggleBookmark,
  setSelectedJob,
  selectedJob,
  isMobileView,
  filteredJobs,
}) {
  return (
    <>
      {/* Left Side - Job Listings */}
      <div
        className={`${selectedJob && !isMobileView ? "lg:w-1/2" : "w-full"} ${
          selectedJob && isMobileView ? "hidden" : "block"
        }`}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <h2 className="text-2xl font-bold text-gray-800">
            {filteredJobs.length} Available Positions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Sorted by: Most recent
          </p>
        </div>

        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className={`bg-white rounded-lg shadow-md p-4 sm:p-6 cursor-pointer transition-all hover:shadow-lg ${
                  selectedJob?.id === job.id && !isMobileView
                    ? "border-l-4 border-blue-500"
                    : ""
                }`}
                onClick={() => {
                  if (isMobileView) {
                    setSelectedJob(job);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    setSelectedJob(job);
                  }
                }}
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-600 hover:text-blue-800 truncate">
                      {job.title}
                    </h3>
                    <p className="text-gray-700 font-medium truncate">
                      {job.company}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleBookmark(job.id);
                    }}
                    className="text-gray-400 hover:text-yellow-500 transition flex-shrink-0"
                  >
                    <FaBookmark
                      className={
                        bookmarkedJobs.includes(job.id)
                          ? "text-yellow-500 fill-current"
                          : ""
                      }
                    />
                  </button>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
                    <span className="truncate">{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <FaBriefcase className="mr-2 flex-shrink-0" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMoneyBillWave className="mr-2 flex-shrink-0" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2 flex-shrink-0" />
                    <span>{job.posted}</span>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {job.skills?.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {job.skills?.length > 3 && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      +{job.skills.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <button
                    className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedJob(job);
                      if (isMobileView) {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    {isMobileView ? "View Details" : "Details"}
                  </button>
                  {job.remote && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded whitespace-nowrap">
                      Remote Available
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
