import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiBriefcase,
  FiDownload,
  FiArrowLeft,
} from "react-icons/fi";

const JobSeekerDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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

  const applicant = applicants.find((app) => app.id === parseInt(id));

  if (!applicant) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Applicant Not Found
          </h1>
          <button
            onClick={() => navigate("/employer-dashboard")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Back to Applications
          </button>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    alert(`Downloading ${applicant.resume}`);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-blue-600 hover:text-blue-800 mb-4"
            >
              <FiArrowLeft className="mr-2" /> Back to Applications
            </button>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Applicant Details
                </h1>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Review all details for {applicant.name}
                </p>
              </div>
              <button
                onClick={handleDownload}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <FiDownload className="h-4 w-4 mr-2" />
                Download CV
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-16 w-16">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-xl">
                    {applicant.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    {applicant.name}
                  </h2>
                  <p className="text-sm text-gray-500">{applicant.position}</p>
                </div>
              </div>
            </div>

            <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Contact Information
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <FiMail className="h-4 w-4 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-900">
                        {applicant.email}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <FiPhone className="h-4 w-4 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-900">
                        {applicant.phone}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <FiMapPin className="h-4 w-4 text-gray-400 mr-3" />
                      <span className="text-sm text-gray-900">
                        {applicant.location}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Application Details
                    </h3>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Status</span>
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

                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">
                          Applied On
                        </span>
                        <span className="text-sm text-gray-900">
                          {applicant.appliedDate}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">
                          Experience
                        </span>
                        <span className="text-sm text-gray-900">
                          {applicant.experience}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {applicant.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Cover Letter
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      {applicant.coverLetter}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Resume Preview
                  </h3>
                  <div className="bg-gray-100 border border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <FiBriefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-sm text-gray-500 mb-2">
                      Preview of {applicant.resume}
                    </p>
                    <button
                      onClick={handleDownload}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      View Full Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-end space-x-3">
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Close
              </button>
              <Link to={"schedule-interview"}>
                <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                  Schedule Interview
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobSeekerDetail;
