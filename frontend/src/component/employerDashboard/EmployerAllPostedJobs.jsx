import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { FaEdit, FaTrash, FaUsers } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function EmployerAllPostedJobs() {
  const token = useSelector((state) => state.auth.token);

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllJobs = async () => {
    try {
      const res = await axios.get("http://localhost:8000/get-jobs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setJobs(res.data.jobs || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  if (loading) {
    return (
      <>
        <div className="text-2xl text-center">...loading data</div>
      </>
    );
  }

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

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              All Posted Jobs
            </h2>
            <p className="text-gray-600">
              Manage your job postings and applications
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <label className="mr-2 text-sm font-medium text-gray-700">
              Filter by status:
            </label>
            <select className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white shadow-md rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-lg transition"
            >
              <Link to={`/employer-dashboard/all-job/details/${job._id}`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <MdOutlineWork className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {job.jobTitle}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {job.companyName} • {job.location}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Type:{" "}
                      <span className="font-medium">{job.employmentType}</span>
                    </p>
                    <p className="text-sm text-gray-400">
                      Posted on: {new Date(job.createdAt).toDateString()}
                    </p>
                  </div>
                </div>
              </Link>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 md:mt-0">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaUsers className="text-gray-500" />
                  <span>{job.applicants?.length || 0} Applicants</span>
                </div>
                <div className="flex items-center gap-3">
                  <Link to={`/employer-dashboard/all-job/${job._id}`}>
                    <button className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition">
                      <FaEdit />
                    </button>
                  </Link>
                  <button
                    className="p-2 bg-red-100 rounded-full text-red-600 hover:bg-red-200 transition"
                    onClick={() => handledelete(job._id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {jobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl text-gray-400 mb-4">📋</div>
            <h3 className="text-lg font-medium text-gray-600">
              No jobs posted yet
            </h3>
            <p className="text-gray-500">
              Get started by creating your first job posting
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { FaEdit, FaTrash, FaUsers } from "react-icons/fa";
// import { MdOutlineWork } from "react-icons/md";
// import { Link } from "react-router-dom";

// export default function EmployerAllPostedJobs() {
//   // Sample jobs data (you can fetch from API later)
//   const [jobs, setJobs] = useState([
//     {
//       id: 1,
//       title: "Frontend Developer",
//       company: "Tech Solutions",
//       location: "Remote",
//       type: "Full-Time",
//       applicants: 24,
//       postedDate: "2025-08-15",
//       status: "Active",
//     },
//     {
//       id: 2,
//       title: "UI/UX Designer",
//       company: "Creative Studio",
//       location: "New York, USA",
//       type: "Part-Time",
//       applicants: 10,
//       postedDate: "2025-08-12",
//       status: "Closed",
//     },
//     {
//       id: 3,
//       title: "Backend Engineer",
//       company: "Cloud Corp",
//       location: "Berlin, Germany",
//       type: "Contract",
//       applicants: 18,
//       postedDate: "2025-08-10",
//       status: "Active",
//     },
//   ]);

//   const handleDelete = (id) => {
//     setJobs(jobs.filter((job) => job.id !== id));
//   };
//   return (
//     <>
//       <div className="p-6 min-h-screen">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">
//           All Posted Jobs
//         </h2>

//         <div className="grid gap-6">
//           {jobs.map((job) => (
//             <div
//               key={job.id}
//               className="bg-white shadow-md rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-lg transition"
//             >
//               {/* Job Info */}
//               <div className="flex items-start gap-4">
//                 <div className="p-3 bg-blue-100 rounded-full">
//                   <MdOutlineWork className="text-blue-600 text-2xl" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {job.title}
//                   </h3>
//                   <p className="text-sm text-gray-500">
//                     {job.company} • {job.location}
//                   </p>
//                   <p className="text-sm text-gray-500 mt-1">
//                     Type: <span className="font-medium">{job.type}</span>
//                   </p>
//                   <p className="text-sm text-gray-400">
//                     Posted on: {new Date(job.postedDate).toDateString()}
//                   </p>
//                 </div>
//               </div>

//               {/* Right Side Actions */}
//               <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-4 md:mt-0">
//                 {/* Applicants */}
//                 <div className="flex items-center gap-2 text-gray-600">
//                   <FaUsers className="text-gray-500" />
//                   <span>{job.applicants} Applicants</span>
//                 </div>

//                 {/* Status */}
//                 <select>
//                   <option>
//                     <span
//                       className={`px-3 py-1 text-sm font-medium rounded-full ${
//                         job.status === "Active"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {job.status}
//                     </span>
//                   </option>
//                 </select>

//                 {/* Actions */}
//                 <div className="flex items-center gap-3">
//                   <Link to={""}>
//                     <button className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition">
//                       <FaEdit />
//                     </button>
//                   </Link>
//                   <button
//                     onClick={() => handleDelete(job.id)}
//                     className="p-2 bg-red-100 rounded-full text-red-600 hover:bg-red-200 transition"
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>{" "}
//     </>
//   );
// }
