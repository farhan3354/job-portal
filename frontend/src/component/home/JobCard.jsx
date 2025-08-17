import React from "react";
import {
  FaBriefcase,
  FaMoneyBillWave,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const JobCard = ({ job, toggleSaved }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between">
        <div className="flex items-start space-x-4">
          <img
            src={job.logo}
            alt={job.company}
            className="w-12 h-12 object-contain"
          />
          <div>
            <h3 className="font-bold text-lg">{job.title}</h3>
            <p className="text-gray-600">
              {job.company} • {job.location}
            </p>
          </div>
        </div>
        <button
          onClick={() => toggleSaved(job.id)}
          className="text-gray-400 hover:text-blue-600"
        >
          {job.isSaved ? (
            <FaBookmark className="text-blue-600" />
          ) : (
            <FaRegBookmark />
          )}
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-4 text-gray-600">
        <div className="flex items-center">
          <FaBriefcase className="mr-2 text-blue-500" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center">
          <FaMoneyBillWave className="mr-2 text-blue-500" />
          <span>{job.salary}</span>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <span className="text-sm text-gray-500">Posted {job.posted}</span>
        <Link
          to={"/login"}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
