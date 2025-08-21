import React from "react";
import { FaUsersLine } from "react-icons/fa6";
import { ImUserCheck } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";
import { IoBriefcaseSharp } from "react-icons/io5";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Employers",
      value: 120,
      icon: FaUsersLine,
      color: "bg-blue-500",
    },
    {
      title: "Total Job Seekers",
      value: 850,
      icon: ImUserCheck,
      color: "bg-green-500",
    },
    {
      title: "Active Jobs",
      value: 342,
      icon: IoBriefcaseSharp,
      color: "bg-purple-500",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "Job Post",
      detail: "Frontend Developer at TechCorp",
      time: "2 hrs ago",
    },
    {
      id: 2,
      type: "New Employer",
      detail: "XYZ Solutions registered",
      time: "4 hrs ago",
    },
    {
      id: 3,
      type: "Application",
      detail: "John Doe applied for Backend Developer",
      time: "5 hrs ago",
    },
    {
      id: 4,
      type: "Job Post",
      detail: "UI/UX Designer at DesignHub",
      time: "1 day ago",
    },
  ];

  return (
    <>
      <div className="p-6 space-y-8">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4 hover:shadow-lg"
            >
              <div className={`${stat.color} p-3 rounded-xl text-white`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  {stat.title}
                </h2>
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <ul className="divide-y divide-gray-200">
            {recentActivity.map((activity) => (
              <li
                key={activity.id}
                className="py-3 flex justify-between items-center"
              >
                <div>
                  <p className="text-gray-700 font-medium">{activity.type}</p>
                  <p className="text-gray-500 text-sm">{activity.detail}</p>
                </div>
                <span className="text-sm text-gray-400">{activity.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
