import React from "react";
import { FaChartLine, FaFileAlt, FaBookmark } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";

export default function DashboardHeading(userStats) {
  const arr = [
    {
      icon: <FaChartLine className="text-purple-500" />,
      title: "All Jobs",
      value: userStats.offers,
      // change: "New!",
      path: "jobs",
    },
    {
      icon: <FaBookmark className="text-yellow-500" />,
      title: "Saved Jobs",
      value: userStats.savedJobs,
      // change: "+3 this week",
      path: "saved",
    },
    {
      icon: <FaFileAlt className="text-blue-500" />,
      title: "Applied Jobs",
      value: userStats.applications,
      // change: "+2 this week",
      path: "applied",
    },
    {
      icon: <MdWork className="text-green-500" />,
      title: "Interviews",
      value: userStats.interviews,
      // change: "+1 this week",
      path: "interview",
    },
  ];
  return (
    <>
      {/* Header */}
      <div className="pt-2 pb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome , John!</h1>
          <p className="text-gray-600">
            Here's what's happening with your job search
          </p>
        </div>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {arr.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <Link to={stat.path}>
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-full bg-blue-50">{stat.icon}</div>
                <div className="text-right">
                  <p className="text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  {/* <p className="text-sm text-green-500">{stat.change}</p> */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
