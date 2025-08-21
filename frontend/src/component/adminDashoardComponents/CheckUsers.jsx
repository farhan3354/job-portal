import React, { useState } from "react";
import { FaSearch, FaEdit } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { LuTrash2 } from "react-icons/lu";

const CheckUsers = () => {
  const [search, setSearch] = useState("");

  // Dummy data
  const users = [
    {
      id: 1,
      name: "Ali Khan",
      email: "ali@example.com",
      role: "Job Seeker",
      status: "Active",
    },
    {
      id: 2,
      name: "Sara Malik",
      email: "sara@example.com",
      role: "Employer",
      status: "Blocked",
    },
    {
      id: 3,
      name: "Usman Ahmed",
      email: "usman@example.com",
      role: "Job Seeker",
      status: "Active",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="p-6">
        {/* Header */}
        <h2 className="text-2xl font-bold mb-6">User List</h2>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
          {/* Search Bar */}
          <div className="flex items-center w-full md:w-1/3 border rounded-lg px-3 py-2">
            <FaSearch className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search users..."
              className="ml-2 outline-none w-full bg-transparent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Role Filter */}
          <select className="border rounded-lg px-3 py-2 w-full md:w-auto">
            <option value="">Filter by Role</option>
            <option value="Job Seeker">Job Seeker</option>
            <option value="Employer">Employer</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto shadow-lg rounded-lg border">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
              <tr>
                <th className="py-3 px-4 border">Name</th>
                <th className="py-3 px-4 border">Email</th>
                <th className="py-3 px-4 border">Role</th>
                <th className="py-3 px-4 border">Status</th>
                <th className="py-3 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border">{user.name}</td>
                    <td className="py-3 px-4 border">{user.email}</td>
                    <td className="py-3 px-4 border">{user.role}</td>
                    <td className="py-3 px-4 border">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 border flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-100 rounded">
                        <IoIosEye className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-yellow-600 hover:bg-yellow-100 rounded">
                        <FaEdit className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-100 rounded">
                        <LuTrash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-4 text-center text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CheckUsers;
