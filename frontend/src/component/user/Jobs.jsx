import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import JobsList from "./JobList";

export default function Jobs() {
  return (
    <>
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-6xl bg-gray-100 rounded-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 items-center">
          {/* Job Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Job"
              className="w-full pl-10 pr-4 py-3 bg-white border-b-2 border-transparent focus:outline-none focus:border-blue-500 rounded-md"
            />
            <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          </div>

          {/* Location Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Location"
              className="w-full pl-10 pr-4 py-3 bg-white border-b-2 border-transparent focus:outline-none focus:border-blue-500 rounded-md"
            />
            <FaLocationDot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          </div>

          {/* Button */}
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200">
            Find Jobs
          </button>
        </div>
      </div>
      <JobsList></JobsList>
    </>
  );
}
