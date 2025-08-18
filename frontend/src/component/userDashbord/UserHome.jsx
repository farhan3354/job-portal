import React from "react";
import { FaHistory } from "react-icons/fa";
import DashboardHeading from "./DashboardHeading";
import RecommendedJobs from "./RecommendedJobs";
const UserHome = () => {
  const userStats = {
    applications: 12,
    interviews: 3,
    offers: 1,
    savedJobs: 7,
  };

  const recommendedJobs = [
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
  ];

  const recentApplications = [
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
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <DashboardHeading userStats={userStats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <RecommendedJobs recommendedJobs={recommendedJobs} />

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
        </div>
      </div>
    </div>
  );
};

export default UserHome;
