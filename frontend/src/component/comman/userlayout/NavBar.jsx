import React, { useState } from "react";
import { navItems } from "../../../data/data";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { IoMdContact } from "react-icons/io";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="https://www.svgrepo.com/show/499962/music.svg"
                  className="h-8 w-8"
                  alt="Logo"
                />
                <span className="ml-2 text-xl font-semibold dark:text-white">
                  Jobzy
                </span>
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <ul className="flex space-x-8">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-4 ml-8">
              <Link
                to={"/"}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
              >
                Logout
              </Link>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <RxCross2 className="h-6 w-6" />
                ) : (
                  <CgMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (shown when toggled) */}
        <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="px-2 pt-2 pb-4 space-y-2">
            <Link
              to={"/"}
              className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              Logout
            </Link>
            <Link
              to={"/"}
              className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              <IoMdContact></IoMdContact>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
