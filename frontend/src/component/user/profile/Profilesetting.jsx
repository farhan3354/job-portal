import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaEdit,
  FaSave,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";
import { MdWork, MdSchool } from "react-icons/md";

const ProfileSetting = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
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
        degree: "Master of Computer Science",
        institution: "Stanford University",
        year: "2018",
      },
      {
        id: 2,
        degree: "Bachelor of Technology",
        institution: "MIT",
        year: "2016",
      },
    ],
    skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker"],
    links: {
      linkedin: "linkedin.com/in/johndoe",
      github: "github.com/johndoe",
      portfolio: "johndoe.dev",
    },
    jobPreferences: {
      type: "Full-time",
      location: "Remote",
      salary: "$100,000 - $150,000",
    },
  });

  const [newSkill, setNewSkill] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleExperienceChange = (id, field, value) => {
    setProfile((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    }));
  };

  const handleEducationChange = (id, field, value) => {
    setProfile((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const handleLinkChange = (platform, value) => {
    setProfile((prev) => ({
      ...prev,
      links: {
        ...prev.links,
        [platform]: value,
      },
    }));
  };

  const handleJobPreferenceChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      jobPreferences: {
        ...prev.jobPreferences,
        [field]: value,
      },
    }));
  };

  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile((prev) => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()],
      }));
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setProfile((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Profile Settings</h1>
        <button
          onClick={toggleEdit}
          className={`flex items-center px-4 py-2 rounded-md ${
            isEditing
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white transition-colors`}
        >
          {isEditing ? (
            <>
              <FaSave className="mr-2" /> Save Changes
            </>
          ) : (
            <>
              <FaEdit className="mr-2" /> Edit Profile
            </>
          )}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {isEditing && (
              <button className="text-blue-500 text-sm mb-4">
                Change Photo
              </button>
            )}
            <h2 className="text-xl font-semibold text-center">
              {profile.name}
            </h2>
            <p className="text-gray-600 text-center">{profile.headline}</p>
          </div>

          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <FaUser className="text-gray-500 mr-3" />
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    className="border-b border-gray-300 focus:border-blue-500 outline-none w-full"
                  />
                ) : (
                  <span>{profile.name}</span>
                )}
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-gray-500 mr-3" />
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    className="border-b border-gray-300 focus:border-blue-500 outline-none w-full"
                  />
                ) : (
                  <span>{profile.email}</span>
                )}
              </div>
              <div className="flex items-center">
                <FaPhone className="text-gray-500 mr-3" />
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                    className="border-b border-gray-300 focus:border-blue-500 outline-none w-full"
                  />
                ) : (
                  <span>{profile.phone}</span>
                )}
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-500 mr-3" />
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleInputChange}
                    className="border-b border-gray-300 focus:border-blue-500 outline-none w-full"
                  />
                ) : (
                  <span>{profile.location}</span>
                )}
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">About</h3>
            {isEditing ? (
              <textarea
                name="about"
                value={profile.about}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 outline-none"
                rows="4"
              />
            ) : (
              <p className="text-gray-700 mb-6">{profile.about}</p>
            )}

            <h3 className="text-xl font-semibold mb-4">Professional Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <FaLinkedin className="text-blue-700 mr-3" />
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.links.linkedin}
                    onChange={(e) =>
                      handleLinkChange("linkedin", e.target.value)
                    }
                    className="border-b border-gray-300 focus:border-blue-500 outline-none w-full"
                    placeholder="LinkedIn URL"
                  />
                ) : (
                  <a
                    href={`https://${profile.links.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {profile.links.linkedin}
                  </a>
                )}
              </div>
              <div className="flex items-center">
                <FaGithub className="text-gray-800 mr-3" />
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.links.github}
                    onChange={(e) => handleLinkChange("github", e.target.value)}
                    className="border-b border-gray-300 focus:border-blue-500 outline-none w-full"
                    placeholder="GitHub URL"
                  />
                ) : (
                  <a
                    href={`https://${profile.links.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {profile.links.github}
                  </a>
                )}
              </div>
              <div className="flex items-center">
                <FaGlobe className="text-green-600 mr-3" />
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.links.portfolio}
                    onChange={(e) =>
                      handleLinkChange("portfolio", e.target.value)
                    }
                    className="border-b border-gray-300 focus:border-blue-500 outline-none w-full"
                    placeholder="Portfolio URL"
                  />
                ) : (
                  <a
                    href={`https://${profile.links.portfolio}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {profile.links.portfolio}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Experience Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold flex items-center">
              <MdWork className="mr-2 text-blue-500" /> Experience
            </h3>
            {isEditing && (
              <button className="text-blue-500 text-sm">Add Experience</button>
            )}
          </div>
          {profile.experience.map((exp) => (
            <div
              key={exp.id}
              className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0"
            >
              {isEditing ? (
                <>
                  <div className="mb-2">
                    <input
                      type="text"
                      value={exp.title}
                      onChange={(e) =>
                        handleExperienceChange(exp.id, "title", e.target.value)
                      }
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none font-semibold"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) =>
                          handleExperienceChange(
                            exp.id,
                            "company",
                            e.target.value
                          )
                        }
                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                        placeholder="Company"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={exp.location}
                        onChange={(e) =>
                          handleExperienceChange(
                            exp.id,
                            "location",
                            e.target.value
                          )
                        }
                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                        placeholder="Location"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) =>
                          handleExperienceChange(
                            exp.id,
                            "startDate",
                            e.target.value
                          )
                        }
                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                        placeholder="Start Date"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={exp.endDate}
                        onChange={(e) =>
                          handleExperienceChange(
                            exp.id,
                            "endDate",
                            e.target.value
                          )
                        }
                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                        placeholder="End Date"
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      value={exp.description}
                      onChange={(e) =>
                        handleExperienceChange(
                          exp.id,
                          "description",
                          e.target.value
                        )
                      }
                      className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 outline-none"
                      rows="2"
                      placeholder="Description"
                    />
                  </div>
                </>
              ) : (
                <>
                  <h4 className="font-semibold text-lg">{exp.title}</h4>
                  <p className="text-gray-600">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-gray-500 text-sm mb-2">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="text-gray-700">{exp.description}</p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold flex items-center">
              <MdSchool className="mr-2 text-blue-500" /> Education
            </h3>
            {isEditing && (
              <button className="text-blue-500 text-sm">Add Education</button>
            )}
          </div>
          {profile.education.map((edu) => (
            <div
              key={edu.id}
              className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0"
            >
              {isEditing ? (
                <>
                  <div className="mb-2">
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) =>
                        handleEducationChange(edu.id, "degree", e.target.value)
                      }
                      className="w-full border-b border-gray-300 focus:border-blue-500 outline-none font-semibold"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) =>
                          handleEducationChange(
                            edu.id,
                            "institution",
                            e.target.value
                          )
                        }
                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                        placeholder="Institution"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={edu.year}
                        onChange={(e) =>
                          handleEducationChange(edu.id, "year", e.target.value)
                        }
                        className="w-full border-b border-gray-300 focus:border-blue-500 outline-none"
                        placeholder="Year"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaBriefcase className="mr-2 text-blue-500" /> Skills
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {profile.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
              >
                <span>{skill}</span>
                {isEditing && (
                  <button
                    onClick={() => removeSkill(skill)}
                    className="ml-2 text-blue-500 hover:text-blue-700"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="flex">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                className="border border-gray-300 rounded-l-md px-3 py-2 focus:border-blue-500 outline-none flex-grow"
                placeholder="Add new skill"
                onKeyPress={(e) => e.key === "Enter" && addSkill()}
              />
              <button
                onClick={addSkill}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          )}
        </div>

        {/* Job Preferences Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FaBriefcase className="mr-2 text-blue-500" /> Job Preferences
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Job Type</label>
              {isEditing ? (
                <select
                  value={profile.jobPreferences.type}
                  onChange={(e) =>
                    handleJobPreferenceChange("type", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 outline-none"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Internship">Internship</option>
                </select>
              ) : (
                <p className="text-gray-700">{profile.jobPreferences.type}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Preferred Location
              </label>
              {isEditing ? (
                <select
                  value={profile.jobPreferences.location}
                  onChange={(e) =>
                    handleJobPreferenceChange("location", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 outline-none"
                >
                  <option value="Remote">Remote</option>
                  <option value="On-site">On-site</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              ) : (
                <p className="text-gray-700">
                  {profile.jobPreferences.location}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-1">
                Expected Salary
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.jobPreferences.salary}
                  onChange={(e) =>
                    handleJobPreferenceChange("salary", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 outline-none"
                />
              ) : (
                <p className="text-gray-700">{profile.jobPreferences.salary}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
