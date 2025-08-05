import React from "react";
import {
  MdSend,
  MdWork,
  MdBookmark,
  MdOutlineWorkOutline,
} from "react-icons/md";
import { IoHome } from "react-icons/io5";

import { Link } from "react-router-dom";

const UserSidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 shadow-lg text-gray-800 p-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 tracking-tight">
        Dashboard
      </h2>

      <nav className="flex flex-col space-y-4">
        <Link
          to={"/userdashboard"}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          <IoHome size={22} className="text-gray-800" />
          <span className="text-sm font-medium">Home</span>
        </Link>
        <Link
          to={"/userdashboard/apply"}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          <MdSend size={22} className="text-gray-800" />
          <span className="text-sm font-medium">Apply</span>
        </Link>

        <Link
          to={"/userdashboard/jobs"}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          <MdWork size={22} className="text-gray-800" />
          <span className="text-sm font-medium">My Jobs</span>
        </Link>

        <Link
          to={"/userdashboard/saved"}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          <MdBookmark size={22} className="text-gray-800" />
          <span className="text-sm font-medium">Saved Jobs</span>
        </Link>

        <Link
          to={"/userdashboard/all-jobs"}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          <MdOutlineWorkOutline size={22} className="text-gray-800" />
          <span className="text-sm font-medium">All Jobs</span>
        </Link>
      </nav>
    </div>
  );
};

export default UserSidebar;
