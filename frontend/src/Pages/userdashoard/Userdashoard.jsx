import React from "react";
import {
  MdSend,
  MdWork,
  MdBookmark,
  MdOutlineWorkOutline,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 shadow-lg text-gray-800 p-6">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 tracking-tight">
        Dashboard
      </h2>

      <nav className="flex flex-col space-y-4">
        <a
          href="/dashboard/apply"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          <MdSend size={22} className="text-gray-800" />
          <span className="text-sm font-medium">Apply</span>
        </a>

        <a
          href="/dashboard/jobs"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          <MdWork size={22} className="text-gray-800" />
          <span className="text-sm font-medium">My Jobs</span>
        </a>

        <a
          href="/dashboard/saved"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          <MdBookmark size={22} className="text-gray-800" />
          <span className="text-sm font-medium">Saved Jobs</span>
        </a>

        <a
          href="/userdashboard/all-jobs"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
        >
          <MdOutlineWorkOutline size={22} className="text-gray-800" />
          <span className="text-sm font-medium">All Jobs</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
