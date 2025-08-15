import React, { useState } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaRegBookmark,
  FaBookmark,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaChartLine,
  FaFileAlt,
  FaHistory,
} from "react-icons/fa";
import { MdWork, MdOutlineFeaturedPlayList } from "react-icons/md";

const UserHome = () => {
  // User stats
  const [userStats] = useState({
    applications: 12,
    interviews: 3,
    offers: 1,
    savedJobs: 7,
  });

  // Recommended jobs
  const [recommendedJobs, setRecommendedJobs] = useState([
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      salary: "$120,000 - $150,000",
      type: "Full-time",
      postedDate: "2023-06-15",
      isSaved: false,
      match: 92,
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Creative Solutions",
      location: "New York, NY",
      salary: "$90,000 - $110,000",
      type: "Full-time",
      postedDate: "2023-06-10",
      isSaved: true,
      match: 87,
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudSystems",
      location: "Austin, TX",
      salary: "$130,000 - $160,000",
      type: "Contract",
      postedDate: "2023-06-05",
      isSaved: false,
      match: 78,
    },
  ]);

  // Recent applications
  const [recentApplications] = useState([
    {
      id: 1,
      title: "Full Stack Developer",
      company: "WebWorks",
      status: "Interview",
      date: "2023-06-12",
      upcoming: "Interview on June 20",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateCo",
      status: "Applied",
      date: "2023-06-08",
      upcoming: null,
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "AnalyticsPro",
      status: "Rejected",
      date: "2023-05-28",
      upcoming: null,
    },
  ]);

  // Toggle saved status
  const toggleSaved = (id) => {
    setRecommendedJobs(
      recommendedJobs.map((job) =>
        job.id === id ? { ...job, isSaved: !job.isSaved } : job
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome back, John!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your job search
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 hover:text-blue-600">
            <FaBell size={20} />
          </button>
          <div className="flex items-center space-x-2">
            <FaUserCircle size={24} className="text-gray-500" />
            <span className="font-medium">John Doe</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            icon: <FaFileAlt className="text-blue-500" />,
            title: "Applications",
            value: userStats.applications,
            change: "+2 this week",
          },
          {
            icon: <MdWork className="text-green-500" />,
            title: "Interviews",
            value: userStats.interviews,
            change: "+1 this week",
          },
          {
            icon: <FaChartLine className="text-purple-500" />,
            title: "Offers",
            value: userStats.offers,
            change: "New!",
          },
          {
            icon: <FaBookmark className="text-yellow-500" />,
            title: "Saved Jobs",
            value: userStats.savedJobs,
            change: "+3 this week",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-full bg-blue-50">{stat.icon}</div>
              <div className="text-right">
                <p className="text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-green-500">{stat.change}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recommended Jobs */}
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
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors">
              View All Recommendations
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          {/* Recent Applications */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold flex items-center mb-4">
              <FaHistory className="mr-2 text-blue-500" />
              Recent Applications
            </h2>

            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div
                  key={app.id}
                  className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{app.title}</h3>
                      <p className="text-gray-600 text-sm">{app.company}</p>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        app.status === "Interview"
                          ? "bg-blue-100 text-blue-800"
                          : app.status === "Applied"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Applied on {new Date(app.date).toLocaleDateString()}
                  </p>
                  {app.upcoming && (
                    <p className="text-xs text-blue-600 mt-1">{app.upcoming}</p>
                  )}
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors">
              View Application History
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold flex items-center mb-4">
              <FaBriefcase className="mr-2 text-blue-500" />
              Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors flex flex-col items-center">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full mb-2">
                  <FaFileAlt />
                </div>
                <span className="text-sm">Resume Builder</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors flex flex-col items-center">
                <div className="p-3 bg-green-100 text-green-600 rounded-full mb-2">
                  <FaSearch />
                </div>
                <span className="text-sm">Job Search</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors flex flex-col items-center">
                <div className="p-3 bg-purple-100 text-purple-600 rounded-full mb-2">
                  <FaBookmark />
                </div>
                <span className="text-sm">Saved Jobs</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-colors flex flex-col items-center">
                <div className="p-3 bg-yellow-100 text-yellow-600 rounded-full mb-2">
                  <FaChartLine />
                </div>
                <span className="text-sm">Progress</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
