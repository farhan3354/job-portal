import React, { useState } from "react";
import { FaSearch, FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";
import { LuTrash2 } from "react-icons/lu";

const CheckEmployers = () => {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedStatus, setEditedStatus] = useState("");

  // Dummy data with more users for better demonstration
  const [users, setUsers] = useState([
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
    {
      id: 4,
      name: "Fatima Zahra",
      email: "fatima@example.com",
      role: "Employer",
      status: "Pending",
    },
    {
      id: 5,
      name: "Hassan Raza",
      email: "hassan@example.com",
      role: "Job Seeker",
      status: "Blocked",
    },
    {
      id: 6,
      name: "Ayesha Siddiqa",
      email: "ayesha@example.com",
      role: "Employer",
      status: "Pending",
    },
  ]);

  // Handle status update
  const handleStatusUpdate = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, status: editedStatus } : user
      )
    );
    setEditingUserId(null);
    setEditedStatus("");
  };

  // Handle user deletion
  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  // Filter users based on search, role, and status
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesRole = roleFilter ? user.role === roleFilter : true;
    const matchesStatus = statusFilter ? user.status === statusFilter : true;

    return matchesSearch && matchesRole && matchesStatus;
  });

  // Get status counts for dashboard
  const statusCounts = users.reduce((acc, user) => {
    acc[user.status] = (acc[user.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Employer Management
      </h2>

      {/* Status Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-gray-700">Active Users</h3>
          <p className="text-2xl font-bold text-gray-800">
            {statusCounts.Active || 0}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
          <h3 className="text-lg font-semibold text-gray-700">Pending Users</h3>
          <p className="text-2xl font-bold text-gray-800">
            {statusCounts.Pending || 0}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-gray-700">Blocked Users</h3>
          <p className="text-2xl font-bold text-gray-800">
            {statusCounts.Blocked || 0}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3 bg-white p-4 rounded-lg shadow-md">
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

        <div className="flex flex-col md:flex-row gap-3 w-full md:w-2/3">
          <select
            className="border rounded-lg px-3 py-2 w-full md:w-1/2"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="">All Roles</option>
            <option value="Job Seeker">Job Seeker</option>
            <option value="Employer">Employer</option>
          </select>

          <select
            className="border rounded-lg px-3 py-2 w-full md:w-1/2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Blocked">Blocked</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg border bg-white">
        <table className="w-full border-amber-50">
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
                  <td className="py-3 px-4 border font-medium">{user.name}</td>
                  <td className="py-3 px-4 border text-gray-600">
                    {user.email}
                  </td>
                  <td className="py-3 px-4 border">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        user.role === "Employer"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-4 border">
                    {editingUserId === user.id ? (
                      <div className="flex items-center gap-2">
                        <select
                          className="border rounded px-2 py-1 text-sm"
                          value={editedStatus}
                          onChange={(e) => setEditedStatus(e.target.value)}
                        >
                          <option value="Active">Active</option>
                          <option value="Pending">Pending</option>
                          <option value="Blocked">Blocked</option>
                        </select>
                        <button
                          className="text-green-600 hover:text-green-800"
                          onClick={() => handleStatusUpdate(user.id)}
                        >
                          <FaCheck />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800"
                          onClick={() => setEditingUserId(null)}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            user.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : user.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {user.status}
                        </span>
                        <button
                          className="text-gray-500 hover:text-blue-600"
                          onClick={() => {
                            setEditingUserId(user.id);
                            setEditedStatus(user.status);
                          }}
                        >
                          <FaEdit className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-4 border">
                    <div className="flex gap-2">
                      <button
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded"
                        title="View Details"
                      >
                        <IoIosEye className="w-5 h-5" />
                      </button>
                      <button
                        className="p-2 text-red-600 hover:bg-red-100 rounded"
                        onClick={() => handleDeleteUser(user.id)}
                        title="Delete User"
                      >
                        <LuTrash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-8 text-center text-gray-500">
                  No users found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-4 text-sm text-gray-600">
        Showing {filteredUsers.length} of {users.length} users
      </div>
    </div>
  );
};

export default CheckEmployers;
