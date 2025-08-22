// src/components/profile/ProfileSetting.jsx
import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";

export default function ProfileSetting() {
  const profile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    headline: "Senior Software Engineer",
    about:
      "Experienced full-stack developer with 5+ years of experience building web applications. Specialized in React, Node.js, and cloud technologies.",
    experience: [
      {
        id: 1,
        title: "Senior Software Engineer",
        company: "TechCorp",
        location: "San Francisco, CA",
        startDate: "2020",
        endDate: "Present",
        description:
          "Leading a team of developers to build scalable web applications.",
      },
      {
        id: 2,
        title: "Software Engineer",
        company: "WebSolutions",
        location: "New York, NY",
        startDate: "2018",
        endDate: "2020",
        description: "Developed and maintained client-facing applications.",
      },
    ],
    education: [
      {
        id: 1,
        degree: "Bachelor of Science in Computer Science",
        institution: "Stanford University",
        year: "2014 - 2018",
      },
      {
        id: 2,
        degree: "High School Diploma",
        institution: "San Francisco High School",
        year: "2010 - 2014",
      },
    ],
    skills: [
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "AWS",
      "Git & GitHub",
    ],
    jobPreferences: {
      type: "Full-time / Remote",
      location: "San Francisco, Remote",
      salary: "$120,000 - $150,000 / year",
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Personal Info */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Profile Sidebar */}
          <div className="md:w-1/4 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold text-center">
              {profile.name}
            </h2>
            <p className="text-gray-600 text-center">{profile.headline}</p>
          </div>

          {/* Profile Info */}
          <div className="md:w-3/4">
            <h3 className="text-3xl font-bold mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <FaUser className="text-gray-500 mr-3" />
                <span>{profile.name}</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-gray-500 mr-3" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-gray-500 mr-3" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-500 mr-3" />
                <span>{profile.location}</span>
              </div>
            </div>

            {/* About */}
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <p className="text-gray-700">{profile.about}</p>
          </div>
        </div>
      </div>

      {/* Grid Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold flex items-center mb-4">
            <MdWork className="mr-2 text-blue-500" /> Experience
          </h3>
          {profile.experience.map((exp) => (
            <div
              key={exp.id}
              className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0"
            >
              <h4 className="font-semibold text-lg">{exp.title}</h4>
              <p className="text-gray-600">
                {exp.company} • {exp.location}
              </p>
              <p className="text-gray-500 text-sm mb-2">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold flex items-center mb-4">
            <MdSchool className="mr-2 text-blue-500" /> Education
          </h3>
          {profile.education.map((edu) => (
            <div
              key={edu.id}
              className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0"
            >
              <h4 className="font-semibold text-lg">{edu.degree}</h4>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaBriefcase className="mr-2 text-blue-500" /> Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  );
}
