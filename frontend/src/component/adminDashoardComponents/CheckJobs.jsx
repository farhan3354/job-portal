import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaBriefcase,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
  FaPlus,
  FaSort,
  FaEllipsisV,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function CheckJobs() {
  const [jobs, setJobs] = useState([]);
  const [showOptions, setShowOptions] = useState(null);

  const token = useSelector((state) => state.auth.token);
  const fetchadminjobs = async () => {
    try {
      const respo = await axios.get("http://localhost:8000/getalljobs", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(respo.data.jobs || null);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchadminjobs();
  }, [token]);

  const [searchTerm, setSearchTerm] = useState("");

  const handledelete = async (jobId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(
          `http://localhost:8000/remove/${jobId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.data.success) {
          Swal.fire("Deleted!", "Job has been deleted.", "success");
          setJobs(jobs.filter((job) => job._id !== jobId));
        }
      } catch (error) {
        Swal.fire("Error!", "Failed to delete job.", error);
      }
    }
  };

  const handleStatusChange = async (jobId, status) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/update-job-status/${jobId}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        setJobs(
          jobs.map((job) => (job._id === jobId ? { ...job, status } : job))
        );
        Swal.fire("Updated!", `Job set to ${status}.`, "success");
      }
    } catch (error) {
      Swal.fire("Error!", "Failed to update status.", error);
    } finally {
      setShowOptions(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <FaBriefcase className="text-blue-600 text-xl" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                Manage Jobs
              </h1>
              <p className="text-gray-500 text-sm md:text-base">
                View and manage your job postings
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search jobs or employers..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm md:text-base">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center">
                      Job Title
                      <FaSort className="ml-1 text-gray-400" />
                    </div>
                  </th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Employer
                  </th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center">
                      Posted On
                      <FaSort className="ml-1 text-gray-400" />
                    </div>
                  </th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stats
                  </th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
                    <div className="flex items-center">
                      Status
                      <FaSort className="ml-1 text-gray-400" />
                    </div>
                  </th>
                  <th className="px-4 md:px-6 py-3 md:py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {jobs.length > 0 ? (
                  jobs.map((job) => (
                    <tr key={job._id} className="hover:bg-gray-50">
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {job.jobTitle}
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-700">
                          {job?.postedBy.name}
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          {job.industry}
                        </span>
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-gray-500">
                        {new Date(job.createdAt).toDateString()}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex items-center text-xs md:text-sm text-gray-500">
                            <span className="mr-1">👤</span>
                            {job.applicants.length}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap">
                        {job.status === "Active" ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <FaCheckCircle className="mr-1" /> Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <FaTimesCircle className="mr-1" /> Inactive
                          </span>
                        )}
                      </td>
                      <td className="px-4 md:px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2 md:space-x-3">
                          {/* <button
                            className="text-yellow-600 hover:text-yellow-900 p-1 rounded-full hover:bg-yellow-50"
                            title="Edit"
                          >
                            <FaEdit />
                          </button> */}
                          <div className="relative inline-block">
                            <button
                              onClick={() =>
                                setShowOptions(
                                  showOptions === job._id ? null : job._id
                                )
                              }
                              className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition"
                            >
                              <FaEdit />
                            </button>

                            {showOptions === job._id && (
                              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                <button
                                  className="block w-full px-4 py-2 text-left text-sm text-green-600 hover:bg-gray-100"
                                  onClick={() =>
                                    handleStatusChange(job._id, "Active")
                                  }
                                >
                                  Active
                                </button>
                                <button
                                  className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                                  onClick={() =>
                                    handleStatusChange(job._id, "Inactive")
                                  }
                                >
                                  Inactive
                                </button>
                              </div>
                            )}
                          </div>
                          <button
                            className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50"
                            title="Delete"
                            onClick={handledelete}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <FaBriefcase className="text-gray-300 text-4xl mb-3" />
                        <h3 className="text-lg font-medium text-gray-700">
                          No jobs found
                        </h3>
                        <p className="text-gray-500 mt-1">
                          Try adjusting your search to find what you're looking
                          for.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {jobs.length > 0 && (
            <div className="px-4 md:px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">{jobs.length}</span> of{" "}
                <span className="font-medium">{jobs.length}</span> results
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
}
