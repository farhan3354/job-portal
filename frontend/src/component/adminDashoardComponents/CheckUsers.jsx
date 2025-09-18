import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch, FaEdit, FaFilter, FaPlus, FaSort } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { LuTrash2 } from "react-icons/lu";
import {
  RiUserSearchLine,
  RiUserFollowLine,
  RiUserUnfollowLine,
} from "react-icons/ri";
import { useSelector } from "react-redux";

const CheckUsers = () => {
  const [search, setSearch] = useState("");
  // const [user, setuser] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const [profile, setprofile] = useState([]);
  const fetchjobseeker = async () => {
    try {
      const respo = await axios("http://localhost:8000/getuser", {
        headers: { Authorization: `Bearer ${token}` },
      });
      // setuser(respo.data.users || null);
      setprofile(respo.data.profile || null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchjobseeker();
  }, [token]);
  // const filteredUsers = users;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <RiUserSearchLine className="text-blue-600 text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                User Management
              </h1>
              <p className="text-gray-500">Manage and monitor user accounts</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search users by name or email..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center">
                      User
                      <FaSort className="ml-1 text-gray-400" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center">
                      Join Date
                      <FaSort className="ml-1 text-gray-400" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center">
                      Status
                      <FaSort className="ml-1 text-gray-400" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {profile.length > 0 ? (
                  profile.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-medium">
                              {user?.userId.name.charAt(0)}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {user?.userId.name}
                            </div>
                            <div className="text-gray-500">
                              {user?.userId.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            user?.userId.role === "Job Seeker"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {user?.userId.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {new Date(user?.userId.createdAt).toDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {user?.userId.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            user?.userId.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.location}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <RiUserSearchLine className="text-gray-300 text-4xl mb-3" />
                        <h3 className="text-lg font-medium text-gray-700">
                          No users found
                        </h3>
                        <p className="text-gray-500 mt-1">
                          Try adjusting your search or filter to find what
                          you're looking for.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {profile.length > 0 && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">{profile.length}</span> of{" "}
                <span className="font-medium">{profile.length}</span> results
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1.5 rounded-md border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1.5 rounded-md border border-gray-300 bg-blue-50 text-blue-600 text-sm font-medium">
                  1
                </button>
                <button className="px-3 py-1.5 rounded-md border border-gray-300 bg-white text-sm text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckUsers;
