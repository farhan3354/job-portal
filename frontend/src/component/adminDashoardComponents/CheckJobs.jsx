import React from "react";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaBriefcase,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

export default function CheckJobs() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      employer: "Tech Solutions",
      category: "IT",
      status: "Active",
      postedOn: "2025-08-10",
    },
    {
      id: 2,
      title: "Digital Marketing Manager",
      employer: "Creative Agency",
      category: "Marketing",
      status: "Inactive",
      postedOn: "2025-08-05",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      employer: "DesignHub",
      category: "Design",
      status: "Active",
      postedOn: "2025-08-01",
    },
  ];

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <FaBriefcase className="text-blue-600" /> Manage Jobs
        </h1>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">Job Title</th>
                <th className="px-4 py-3 text-left">Employer</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Posted On</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{job.title}</td>
                  <td className="px-4 py-3">{job.employer}</td>
                  <td className="px-4 py-3">{job.category}</td>
                  <td className="px-4 py-3">{job.postedOn}</td>
                  <td className="px-4 py-3">
                    {job.status === "Active" ? (
                      <span className="flex items-center gap-1 text-green-600 font-medium">
                        <FaCheckCircle /> Active
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-600 font-medium">
                        <FaTimesCircle /> Inactive
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center flex justify-center gap-3">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      title="View"
                    >
                      <FaEye />
                    </button>
                    <button
                      className="text-yellow-500 hover:text-yellow-700"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
