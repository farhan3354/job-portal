import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";

export default function AdminHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    // Handle logout logic
    console.log("Logging out...");
  };

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center ml-4">
            <FiBriefcase className="h-7 w-7 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900 hidden sm:block">
              JobPortal Admin
            </span>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              to={"/user-dashboard/profile"}
              className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Profile"
                className="w-10 h-10 object-cover rounded-full"
              />
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              <FiLogOut className="mr-2" /> Logout
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <RxCross2 className="h-6 w-6" />
              ) : (
                <CgMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (shown when toggled) */}
        <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-4 space-y-3 border-t border-gray-200 dark:border-gray-700">
            <Link
              to={"/user-dashboard/profile"}
              className="flex items-center justify-center w-full px-4 py-3 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Profile"
                className="w-10 h-10 object-cover rounded-full mr-3"
              />
              <span>Profile</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              <FiLogOut className="mr-2" /> Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
