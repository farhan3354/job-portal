import React from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaRegBookmark,
  FaBookmark,
  FaSearch,
} from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { Link } from "react-router-dom";

export default function RecommendedJobs({ recommendedJobs }) {
  return (
    <>
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center">
              <MdOutlineFeaturedPlayList className="mr-2 text-blue-500" />
              Recommended For You
            </h2>
            <div className="relative w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search recommendations..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            {recommendedJobs.map((job) => (
              <div
                key={job.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {job.match}% Match
                    </span>
                    <button className="text-gray-400 hover:text-blue-600">
                      {job.isSaved ? (
                        <FaBookmark className="text-blue-600" />
                      ) : (
                        <FaRegBookmark />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-600">
                  <div className="flex items-center">
                    <FaBriefcase className="mr-2 text-blue-500" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMoneyBillWave className="mr-2 text-blue-500" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Posted {new Date(job.postedDate).toLocaleDateString()}
                  </span>
                  <Link
                    to={`/userdashboard/apply/${job.id}`}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors">
            View All Recommendations
          </button>
        </div>
      </div>
    </>
  );
}
