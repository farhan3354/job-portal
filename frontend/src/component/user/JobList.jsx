import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaClock,
  FaBuilding,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const JobList = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      posted: "2 days ago",
      description:
        "We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user interfaces and implementing features for our web applications.",
      requirements: [
        "5+ years of experience with React.js",
        "Strong knowledge of JavaScript, HTML5, and CSS3",
        "Experience with Redux or similar state management libraries",
        "Familiarity with RESTful APIs",
        "Bachelor's degree in Computer Science or related field",
      ],
      responsibilities: [
        "Develop new user-facing features",
        "Build reusable components and front-end libraries",
        "Optimize components for maximum performance",
        "Collaborate with UX/UI designers",
        "Participate in code reviews",
      ],
    },
    // Add more job objects as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Job Listings */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-bold mb-6">Available Positions</h2>

          {jobs.map((job) => (
            <div
              key={job.id}
              className={`bg-white rounded-lg shadow-md p-6 mb-6 cursor-pointer transition-all hover:shadow-lg ${
                selectedJob?.id === job.id ? "border-l-4 border-blue-500" : ""
              }`}
              onClick={() => setSelectedJob(job)}
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {job.title}
              </h3>
              <p className="text-gray-700 font-medium">{job.company}</p>

              <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <FaBriefcase className="mr-2" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center">
                  <FaMoneyBillWave className="mr-2" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  <span>{job.posted}</span>
                </div>
              </div>

              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedJob(job);
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Right Side - Job Details or Application Form */}
        <div className="lg:w-1/2">
          {selectedJob ? (
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedJob.title}
                  </h2>
                  <div className="flex items-center mt-2">
                    <FaBuilding className="text-gray-500 mr-2" />
                    <span className="text-gray-700 font-medium">
                      {selectedJob.company}
                    </span>
                  </div>
                </div>
                <button
                  className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm transition"
                  onClick={() => setSelectedJob(null)}
                >
                  Back to List
                </button>
              </div>

              <div className="border-t border-b border-gray-200 py-4 my-4">
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center">
                    <FaBriefcase className="mr-2" />
                    <span>{selectedJob.type}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMoneyBillWave className="mr-2" />
                    <span>{selectedJob.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    <span>{selectedJob.posted}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                <p className="text-gray-700">{selectedJob.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="mb-1">
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                <ul className="list-disc pl-5 text-gray-700">
                  {selectedJob.responsibilities.map((resp, index) => (
                    <>
                      <li key={index} className="mb-1">
                        {resp}
                      </li>
                    </>
                  ))}
                </ul>
                <Link to={"/userdashboard/apply"}>
                  <button className="bg-blue-500 text-white border rounded">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-full">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Select a job to view details
                </h3>
                <p className="text-gray-500">
                  Click on any job listing to see the full description and apply
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobList;

// import React from "react";
// import JobCard from "./JobCard";
// import { jobs } from "../../data/data";
// const JobsList = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {jobs.map((job) => (
//           <JobCard key={job.id} job={job} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobsList;
