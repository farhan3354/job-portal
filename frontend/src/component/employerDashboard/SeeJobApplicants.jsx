import React from "react";
import { Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiClock,
  FiUser,
  FiX,
  FiDownload,
} from "react-icons/fi";

const JobApplications = () => {
  const applicants = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      phone: "+1 (555) 123-4567",
      position: "Frontend Developer",
      status: "New",
      appliedDate: "2023-06-12",
      experience: "3 years",
      location: "New York, NY",
      resume: "sarah_resume.pdf",
      coverLetter:
        "I am excited to apply for the Frontend Developer position at your company. With 3 years of experience in React and modern JavaScript frameworks, I have built responsive and accessible web applications that improved user engagement by up to 40%. I am particularly drawn to your focus on innovative UI solutions.",
      skills: ["React", "JavaScript", "CSS", "HTML", "Redux", "TypeScript"],
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@example.com",
      phone: "+1 (555) 987-6543",
      position: "Backend Developer",
      status: "Reviewed",
      appliedDate: "2023-06-10",
      experience: "5 years",
      location: "San Francisco, CA",
      resume: "michael_resume.pdf",
      coverLetter:
        "With 5 years of backend development experience, I have designed and implemented scalable server architectures handling over 1 million daily requests. I am proficient in optimizing database performance and implementing secure API gateways. I look forward to contributing to your engineering team.",
      skills: ["Node.js", "Python", "SQL", "AWS", "Docker", "Redis"],
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      email: "emma@example.com",
      phone: "+1 (555) 456-7890",
      position: "UX Designer",
      status: "Interview",
      appliedDate: "2023-06-09",
      experience: "4 years",
      location: "Austin, TX",
      resume: "emma_resume.pdf",
      coverLetter:
        "As a UX Designer with 4 years of experience, I have created intuitive user interfaces that have increased customer satisfaction scores by 35% across various platforms. My user-centered design approach aligns well with your commitment to exceptional user experiences.",
      skills: ["Figma", "UI/UX", "Wireframing", "User Research", "Prototyping"],
    },
    {
      id: 4,
      name: "David Kim",
      email: "david@example.com",
      phone: "+1 (555) 234-5678",
      position: "Marketing Manager",
      status: "Rejected",
      appliedDate: "2023-06-08",
      experience: "6 years",
      location: "Chicago, IL",
      resume: "david_resume.pdf",
      coverLetter:
        "I bring 6 years of digital marketing experience with a proven track record of developing strategies that increased brand visibility and conversion rates. My data-driven approach to marketing has consistently delivered ROI exceeding 200% on campaigns.",
      skills: [
        "Digital Marketing",
        "SEO",
        "Content Strategy",
        "Analytics",
        "PPC",
      ],
    },
    {
      id: 5,
      name: "Priya Patel",
      email: "priya@example.com",
      phone: "+1 (555) 876-5432",
      position: "Frontend Developer",
      status: "Interview",
      appliedDate: "2023-06-07",
      experience: "2 years",
      location: "Remote",
      resume: "priya_resume.pdf",
      coverLetter:
        "As a passionate frontend developer with 2 years of experience, I specialize in creating performant and accessible web applications. I have successfully led the redesign of key product features that improved page load times by 50%.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Redux", "Jest"],
    },
  ];

  const handleDownload = (applicant) => {
    alert(`Downloading ${applicant.resume}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-5 py-5 sm:py-6 lg:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Job Applications
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2">
            Manage and review all job applications in one place
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-lg shadow p-4 sm:p-5 lg:p-6">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 rounded-full bg-blue-100 text-blue-600">
                <FiUser className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              </div>
              <div className="ml-3 sm:ml-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {applicants.length}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Total Applicants
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 sm:p-5 lg:p-6">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 rounded-full bg-green-100 text-green-600">
                <FiClock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              </div>
              <div className="ml-3 sm:ml-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {applicants.filter((a) => a.status === "New").length}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  New Applications
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 sm:p-5 lg:p-6">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 rounded-full bg-yellow-100 text-yellow-600">
                <FiBriefcase className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              </div>
              <div className="ml-3 sm:ml-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {applicants.filter((a) => a.status === "Interview").length}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Interview Stage
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4 sm:p-5 lg:p-6">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 rounded-full bg-red-100 text-red-600">
                <FiX className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              </div>
              <div className="ml-3 sm:ml-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {applicants.filter((a) => a.status === "Rejected").length}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">Rejected</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 hidden md:table">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Applicant
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Applied For
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date Applied
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applicants.map((applicant) => (
                  <tr key={applicant.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                            {applicant.name.charAt(0)}
                          </div>
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-gray-900">
                            {applicant.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {applicant.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {applicant.position}
                      </div>
                      <div className="text-xs text-gray-500">
                        {applicant.experience} experience
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full
                        ${
                          applicant.status === "New"
                            ? "bg-blue-100 text-blue-800"
                            : ""
                        }
                        ${
                          applicant.status === "Reviewed"
                            ? "bg-green-100 text-green-800"
                            : ""
                        }
                        ${
                          applicant.status === "Interview"
                            ? "bg-yellow-100 text-yellow-800"
                            : ""
                        }
                        ${
                          applicant.status === "Rejected"
                            ? "bg-red-100 text-red-800"
                            : ""
                        }
                      `}
                      >
                        {applicant.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      {applicant.appliedDate}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        to={`/employer-dashboard/applicant/${applicant.id}`}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        Details
                      </Link>
                      <button
                        onClick={() => handleDownload(applicant)}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <FiDownload className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="md:hidden">
              {applicants.map((applicant) => (
                <div
                  key={applicant.id}
                  className="border-b border-gray-200 p-4"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">
                          {applicant.name.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">
                          {applicant.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {applicant.email}
                        </div>
                        <div className="text-xs text-gray-500">
                          {applicant.position}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-gray-500">Status</p>
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${
                          applicant.status === "New"
                            ? "bg-blue-100 text-blue-800"
                            : ""
                        }
                        ${
                          applicant.status === "Reviewed"
                            ? "bg-green-100 text-green-800"
                            : ""
                        }
                        ${
                          applicant.status === "Interview"
                            ? "bg-yellow-100 text-yellow-800"
                            : ""
                        }
                        ${
                          applicant.status === "Rejected"
                            ? "bg-red-100 text-red-800"
                            : ""
                        }
                      `}
                      >
                        {applicant.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Experience</p>
                      <p className="text-sm text-gray-900">
                        {applicant.experience}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Applied</p>
                      <p className="text-sm text-gray-900">
                        {applicant.appliedDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm text-gray-900">
                        {applicant.location}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
                    <Link
                      to={`/employer-dashboard/applicant/${applicant.id}`}
                      className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleDownload(applicant)}
                      className="text-gray-600 hover:text-gray-900 flex items-center text-sm"
                    >
                      <FiDownload className="h-4 w-4 mr-1" />
                      Resume
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplications;