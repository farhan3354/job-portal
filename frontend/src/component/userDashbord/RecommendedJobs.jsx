import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const [profile, setProfile] = useState(0);
  const [missingFields, setMissingFields] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const fetchProfile = async () => {
    try {
      const resp = await axios.get("http://localhost:8000/get-profile-score", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(resp.data.profileCompletion || 0);
      setMissingFields(resp.data.missingFields || []);
    } catch (error) {
      console.error("Error fetching profile score:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-8xl">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Job Opportunities
              </h2>
              <FiBriefcase className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">12</p>
            <p className="text-gray-600 text-sm mb-4">
              New jobs match your profile
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Browse All Jobs
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Interviews
              </h2>
              <FiCalendar className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">2 </p>
            <p className="text-gray-600 text-sm mb-4">Upcoming interviews</p>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
              View Interviews
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Applications
              </h2>
              <FiFileText className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">12 </p>
            <p className="text-gray-600 text-sm mb-4">
              Total applications submitted
            </p>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
              View Applications
            </button>
          </div>
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg font-semibold text-gray-800 mb-5 flex items-center">
              <FiUser className="h-5 w-5 text-black mr-2" />
              Profile Completion
            </h2>

            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Profile Completion</span>
                <span className="font-medium text-gray-800">{profile}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-orange-500 to-orange-600 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${profile}%` }}
                ></div>
              </div>

              {profile < 100 && (
                <div className="mt-3 text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg border border-amber-50">
                  <p>
                    Your profile is{" "}
                    <span className="font-semibold">
                      {100 - profile}% incomplete
                    </span>
                    .
                  </p>
                  {missingFields.length > 0 && (
                    <p className="mt-1">
                      Missing:{" "}
                      <span className="font-semibold">
                        {missingFields.join(", ")}
                      </span>
                    </p>
                  )}
                </div>
              )}
            </div>

            <p className="text-gray-600 text-sm mb-5 leading-relaxed">
              Complete your profile to get more job matches and interview calls
              🚀
            </p>

            <Link
              to={"profile"}
              className="bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-blue-700 active:scale-95 transition transform duration-200"
            >
              Complete Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

// import React from "react";
// import {
//   FaBriefcase,
//   FaMapMarkerAlt,
//   FaMoneyBillWave,
//   FaRegBookmark,
//   FaBookmark,
//   FaSearch,
// } from "react-icons/fa";
// import { MdOutlineFeaturedPlayList } from "react-icons/md";
// import { Link } from "react-router-dom";

// export default function RecommendedJobs({ recommendedJobs }) {
//   return (
//     <>
//       <div className="lg:col-span-2">
//         <div className=" p-6 mb-6">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-bold flex items-center">
//               <MdOutlineFeaturedPlayList className="mr-2 text-blue-500" />
//               Recommended For You
//             </h2>
//             <div className="relative w-64">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaSearch className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search recommendations..."
//                 className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           <div className="space-y-4">
//             {recommendedJobs.map((job) => (
//               <div
//                 key={job.id}
//                 className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
//               >
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="font-bold text-lg">{job.title}</h3>
//                     <p className="text-gray-600">{job.company}</p>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
//                       {job.match}% Match
//                     </span>
//                     <button className="text-gray-400 hover:text-blue-600">
//                       {job.isSaved}
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex flex-wrap items-center gap-4 mt-3 text-gray-600">
//                   <div className="flex items-center">
//                     <FaBriefcase className="mr-2 text-blue-500" />
//                     <span>{job.type}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <FaMapMarkerAlt className="mr-2 text-blue-500" />
//                     <span>{job.location}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <FaMoneyBillWave className="mr-2 text-blue-500" />
//                     <span>{job.salary}</span>
//                   </div>
//                 </div>

//                 <div className="mt-4 flex justify-between items-center">
//                   <span className="text-sm text-gray-500">
//                     Posted {new Date(job.postedDate).toLocaleDateString()}
//                   </span>
//                   <Link
//                     to={`/userdashboard/apply/${job.id}`}
//                     className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
//                   >
//                     Apply Now
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button className="w-full mt-6 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors">
//             View All Recommendations
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
