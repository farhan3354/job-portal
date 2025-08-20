// import React from "react";
// import { MdWork, MdPeople, MdMessage } from "react-icons/md";

// export default function Dashboard() {
//   return (
//     <>
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <h4 className="text-2xl font-semibold mb-6">Employer Dashboard</h4>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4 hover:shadow-md transition">
//             <div className="p-3 bg-blue-100 rounded-full text-blue-600 text-3xl">
//               <MdWork />
//             </div>
//             <div>
//               <p className="text-lg font-semibold">12</p>
//               <p className="text-sm text-gray-500">Jobs Posted</p>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4 hover:shadow-md transition">
//             <div className="p-3 bg-green-100 rounded-full text-green-600 text-3xl">
//               <MdPeople />
//             </div>
//             <div>
//               <p className="text-lg font-semibold">87</p>
//               <p className="text-sm text-gray-500">Applicants</p>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow flex items-center space-x-4 hover:shadow-md transition">
//             <div className="p-3 bg-purple-100 rounded-full text-purple-600 text-3xl">
//               <MdMessage />
//             </div>
//             <div>
//               <p className="text-lg font-semibold">5</p>
//               <p className="text-sm text-gray-500">New Messages</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React from "react";
import {
  MdWorkOutline,
  MdPeople,
  MdOutlineBarChart,
} from "react-icons/md";
import { FaUserTie } from "react-icons/fa";

export default function EmployerDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-6">Employer Dashboard</h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <MdWorkOutline className="text-4xl text-blue-500" />
          <div>
            <h4 className="text-lg font-semibold">Active Jobs</h4>
            <p className="text-gray-600">12</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <MdPeople className="text-4xl text-green-500" />
          <div>
            <h4 className="text-lg font-semibold">Applicants</h4>
            <p className="text-gray-600">87</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
          <MdOutlineBarChart className="text-4xl text-purple-500" />
          <div>
            <h4 className="text-lg font-semibold">Interviews Scheduled</h4>
            <p className="text-gray-600">5</p>
          </div>
        </div>
      </div>

      {/* Recent Job Postings */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h3 className="text-xl font-bold mb-4">Recent Job Postings</h3>
        <ul className="divide-y divide-gray-200">
          <li className="py-3 flex justify-between items-center">
            <div>
              <h4 className="font-semibold">Frontend Developer</h4>
              <p className="text-gray-600 text-sm">Posted 2 days ago</p>
            </div>
            <span className="text-blue-500 text-sm font-medium">Open</span>
          </li>
          <li className="py-3 flex justify-between items-center">
            <div>
              <h4 className="font-semibold">UI/UX Designer</h4>
              <p className="text-gray-600 text-sm">Posted 1 week ago</p>
            </div>
            <span className="text-red-500 text-sm font-medium">Closed</span>
          </li>
        </ul>
      </div>

      {/* Recent Applicants */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-xl font-bold mb-4">Recent Applicants</h3>
        <ul className="divide-y divide-gray-200">
          <li className="py-3 flex items-center gap-4">
            <FaUserTie className="text-2xl text-gray-500" />
            <div>
              <h4 className="font-semibold">Ali Khan</h4>
              <p className="text-gray-600 text-sm">Applied for Frontend Developer</p>
            </div>
          </li>
          <li className="py-3 flex items-center gap-4">
            <FaUserTie className="text-2xl text-gray-500" />
            <div>
              <h4 className="font-semibold">Sara Ahmed</h4>
              <p className="text-gray-600 text-sm">Applied for UI/UX Designer</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
