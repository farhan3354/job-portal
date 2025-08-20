import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { CgMenu } from "react-icons/cg";
import img from "./../../../assets/music.svg";

export default function EmployerHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img src={img} className="h-8 w-8" alt="Logo" />
              <span className="ml-2 text-xl font-semibold dark:text-white">
                Jobzy
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4 ml-8">
            <Link to="/profile" className="px-2">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Profile"
                className="w-10 h-10 object-cover rounded-full border"
              />
            </Link>
            <Link
              to="/logout"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              Logout
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            >
              {menuOpen ? (
                <RxCross2 className="h-6 w-6" />
              ) : (
                <CgMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 px-4 py-3 space-y-3 border-t border-gray-200 dark:border-gray-700">
          <Link
            to="/profile"
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-200"
          >
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full border"
            />
            <span>My Profile</span>
          </Link>
          <Link
            to="/logout"
            className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium text-center"
          >
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
}
