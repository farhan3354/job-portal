import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaClock,
  FaBuilding,
  FaSearch,
  FaFilter,
  FaBookmark,
  FaShareAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const JobList = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    jobType: "",
    location: "",
    salaryRange: "",
  });
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  // Sample job data - in a real app, this would come from an API
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
      skills: ["React", "JavaScript", "Redux", "HTML/CSS"],
      remote: true,
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Creative Solutions",
      location: "Remote",
      type: "Contract",
      salary: "$80 - $100 per hour",
      posted: "1 week ago",
      description:
        "Join our design team to create beautiful and functional user experiences for our clients.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Portfolio demonstrating design skills",
        "Proficiency in Figma or Sketch",
        "Understanding of user-centered design",
      ],
      responsibilities: [
        "Create wireframes and prototypes",
        "Conduct user research",
        "Collaborate with developers",
        "Maintain design systems",
      ],
      skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
      remote: true,
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "DataSystems LLC",
      location: "New York, NY",
      type: "Full-time",
      salary: "$130,000 - $160,000",
      posted: "3 days ago",
      description:
        "We need a skilled Backend Engineer to develop and maintain our server infrastructure.",
      requirements: [
        "Experience with Node.js and Python",
        "Knowledge of database systems",
        "Understanding of RESTful API design",
        "Familiarity with cloud services",
      ],
      responsibilities: [
        "Develop server-side logic",
        "Optimize database queries",
        "Implement security measures",
        "Monitor system performance",
      ],
      skills: ["Node.js", "Python", "SQL", "AWS"],
      remote: false,
    },
  ];

  // Filter jobs based on search and filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = !filters.jobType || job.type === filters.jobType;
    const matchesLocation =
      !filters.location ||
      job.location.toLowerCase().includes(filters.location.toLowerCase());

    return matchesSearch && matchesType && matchesLocation;
  });

  const toggleBookmark = (jobId) => {
    if (bookmarkedJobs.includes(jobId)) {
      setBookmarkedJobs(bookmarkedJobs.filter((id) => id !== jobId));
    } else {
      setBookmarkedJobs([...bookmarkedJobs, jobId]);
    }
  };

  // Auto-select first job if none selected on mobile
  useEffect(() => {
    if (window.innerWidth < 1024 && filteredJobs.length > 0 && !selectedJob) {
      setSelectedJob(filteredJobs[0]);
    }
  }, [filteredJobs, selectedJob]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs or companies..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <select
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.jobType}
                onChange={(e) =>
                  setFilters({ ...filters, jobType: e.target.value })
                }
              >
                <option value="">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>

              <select
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
              >
                <option value="">All Locations</option>
                <option value="Remote">Remote</option>
                <option value="San Francisco">San Francisco</option>
                <option value="New York">New York</option>
              </select>

              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                <FaFilter /> Filters
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Job Listings */}
          <div className={`${selectedJob ? "lg:w-1/2" : "w-full"}`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                {filteredJobs.length} Available Positions
              </h2>
              <p className="text-gray-600">Sorted by: Most recent</p>
            </div>

            {filteredJobs.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No jobs found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all hover:shadow-lg ${
                      selectedJob?.id === job.id
                        ? "border-l-4 border-blue-500"
                        : ""
                    }`}
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                          {job.title}
                        </h3>
                        <p className="text-gray-700 font-medium">
                          {job.company}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(job.id);
                        }}
                        className="text-gray-400 hover:text-yellow-500 transition"
                      >
                        <FaBookmark
                          className={
                            bookmarkedJobs.includes(job.id)
                              ? "text-yellow-500 fill-current"
                              : ""
                          }
                        />
                      </button>
                    </div>

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

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.skills?.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <button
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedJob(job);
                        }}
                      >
                        View Details
                      </button>
                      {job.remote && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          Remote Available
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side - Job Details */}
          {selectedJob && (
            <div className="lg:w-1/2">
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
                  <div className="flex gap-2">
                    <button
                      className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition"
                      onClick={() => toggleBookmark(selectedJob.id)}
                    >
                      <FaBookmark
                        className={
                          bookmarkedJobs.includes(selectedJob.id)
                            ? "text-yellow-500 fill-current"
                            : "text-gray-500"
                        }
                      />
                    </button>
                    <button
                      className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition"
                      onClick={() => {
                        /* Implement share functionality */
                      }}
                    >
                      <FaShareAlt className="text-gray-500" />
                    </button>
                    <button
                      className="lg:hidden bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded text-sm transition"
                      onClick={() => setSelectedJob(null)}
                    >
                      Back
                    </button>
                  </div>
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
                  <h3 className="text-lg font-semibold mb-2">
                    Job Description
                  </h3>
                  <p className="text-gray-700">{selectedJob.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Responsibilities
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>

                {selectedJob.skills?.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedJob.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <Link
                    to={`/userdashboard/apply/${selectedJob.id}`}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                  >
                    Apply Now
                  </Link>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Save for Later
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobList;
