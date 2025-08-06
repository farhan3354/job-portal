import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";
import { useState } from "react";

const JobCard = ({ job }) => {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="bg-white sm:w-full rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 relative">
      <button
        onClick={toggleSave}
        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-blue-600 transition-colors"
        aria-label={isSaved ? "Unsave job" : "Save job"}
      >
        {isSaved ? <FaBookmark className="text-blue-600" /> : <FaRegBookmark />}
      </button>

      <div className="p-6">
        <div className="flex items-start justify-between pr-6">
          {" "}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-1">
              {job.title}
            </h3>
            <p className="text-gray-600 mb-2">{job.company}</p>
          </div>
          <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            {job.type}
          </div>
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2 text-blue-500" />
            <span>{job.location}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <FaBriefcase className="mr-2 text-blue-500" />
            <span>{job.experience}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <FaMoneyBillWave className="mr-2 text-blue-500" />
            <span>{job.salary}</span>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <span className="text-sm text-gray-500">Posted {job.postedDate}</span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
