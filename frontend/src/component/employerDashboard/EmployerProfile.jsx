import React, { useState } from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

export default function EmployerProfile() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Tech Solutions Ltd.",
    email: "contact@techsolutions.com",
    location: "San Francisco, USA",
    industry: "Software Development",
    size: "200-500 Employees",
    website: "https://techsolutions.com",
    about:
      "Tech Solutions Ltd. is a leading software development company focused on building innovative solutions for businesses worldwide. We specialize in web and mobile app development, cloud computing, and AI-driven applications. Our mission is to empower organizations with cutting-edge technology.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <>
      <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
        {/* Profile Header */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src="https://via.placeholder.com/120"
            alt="Company Logo"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-blue-500 object-cover"
          />
          <div className="flex-1 text-center md:text-left">
            {editing ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="text-xl sm:text-2xl font-bold text-gray-800 border p-2 rounded-lg w-full"
              />
            ) : (
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                {profile.name}
              </h1>
            )}
            <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2 mt-1 text-sm sm:text-base">
              <FaEnvelope className="text-blue-500" />{" "}
              {editing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="border p-1 rounded-lg w-full"
                />
              ) : (
                profile.email
              )}
            </p>
            <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
              <FaMapMarkerAlt className="text-blue-500" />{" "}
              {editing ? (
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  className="border p-1 rounded-lg w-full"
                />
              ) : (
                profile.location
              )}
            </p>
          </div>
          {editing ? (
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 w-full md:w-auto"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 w-full md:w-auto"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
          <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 text-center">
            <h3 className="text-base sm:text-lg font-semibold text-gray-600">
              Jobs Posted
            </h3>
            <p className="text-2xl sm:text-3xl font-bold text-blue-600 mt-2">
              24
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 text-center">
            <h3 className="text-base sm:text-lg font-semibold text-gray-600">
              Active Jobs
            </h3>
            <p className="text-2xl sm:text-3xl font-bold text-green-600 mt-2">
              5
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 text-center">
            <h3 className="text-base sm:text-lg font-semibold text-gray-600">
              Total Applicants
            </h3>
            <p className="text-2xl sm:text-3xl font-bold text-purple-600 mt-2">
              128
            </p>
          </div>
        </div>

        {/* Company Info Section */}
        <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 mt-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            Company Information
          </h2>
          <div className="space-y-3 text-sm sm:text-base">
            <p className="flex items-center gap-2 text-gray-700">
              <FaBuilding className="text-blue-500" /> Industry:{" "}
              {editing ? (
                <input
                  type="text"
                  name="industry"
                  value={profile.industry}
                  onChange={handleChange}
                  className="border p-1 rounded-lg w-full"
                />
              ) : (
                profile.industry
              )}
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaUsers className="text-blue-500" /> Company Size:{" "}
              {editing ? (
                <input
                  type="text"
                  name="size"
                  value={profile.size}
                  onChange={handleChange}
                  className="border p-1 rounded-lg w-full"
                />
              ) : (
                profile.size
              )}
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaGlobe className="text-blue-500" /> Website:{" "}
              {editing ? (
                <input
                  type="url"
                  name="website"
                  value={profile.website}
                  onChange={handleChange}
                  className="border p-1 rounded-lg w-full"
                />
              ) : (
                <a
                  href={profile.website}
                  className="text-blue-600 hover:underline"
                >
                  {profile.website}
                </a>
              )}
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 mt-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          {editing ? (
            <textarea
              name="about"
              value={profile.about}
              onChange={handleChange}
              rows="4"
              className="w-full border p-2 rounded-lg text-sm sm:text-base"
            />
          ) : (
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {profile.about}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

// import React from "react";
// import {
//   FaBuilding,
//   FaEnvelope,
//   FaGlobe,
//   FaMapMarkerAlt,
//   FaUsers,
// } from "react-icons/fa";

// export default function EmployerProfile() {
//   return (
//     <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
//       {/* Profile Header */}
//       <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
//         <img
//           src="https://via.placeholder.com/120"
//           alt="Company Logo"
//           className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-blue-500 object-cover"
//         />
//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
//             Tech Solutions Ltd.
//           </h1>
//           <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2 mt-1 text-sm sm:text-base">
//             <FaEnvelope className="text-blue-500" /> contact@techsolutions.com
//           </p>
//           <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
//             <FaMapMarkerAlt className="text-blue-500" /> San Francisco, USA
//           </p>
//         </div>
//         <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 w-full md:w-auto">
//           Edit Profile
//         </button>
//       </div>

//       {/* Stats Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
//         <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 text-center">
//           <h3 className="text-base sm:text-lg font-semibold text-gray-600">
//             Jobs Posted
//           </h3>
//           <p className="text-2xl sm:text-3xl font-bold text-blue-600 mt-2">24</p>
//         </div>
//         <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 text-center">
//           <h3 className="text-base sm:text-lg font-semibold text-gray-600">
//             Active Jobs
//           </h3>
//           <p className="text-2xl sm:text-3xl font-bold text-green-600 mt-2">5</p>
//         </div>
//         <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 text-center">
//           <h3 className="text-base sm:text-lg font-semibold text-gray-600">
//             Total Applicants
//           </h3>
//           <p className="text-2xl sm:text-3xl font-bold text-purple-600 mt-2">
//             128
//           </p>
//         </div>
//       </div>

//       {/* Company Info Section */}
//       <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 mt-6">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
//           Company Information
//         </h2>
//         <div className="space-y-3 text-sm sm:text-base">
//           <p className="flex items-center gap-2 text-gray-700">
//             <FaBuilding className="text-blue-500" /> Industry: Software
//             Development
//           </p>
//           <p className="flex items-center gap-2 text-gray-700">
//             <FaUsers className="text-blue-500" /> Company Size: 200-500
//             Employees
//           </p>
//           <p className="flex items-center gap-2 text-gray-700">
//             <FaGlobe className="text-blue-500" /> Website:{" "}
//             <a
//               href="https://techsolutions.com"
//               className="text-blue-600 hover:underline"
//             >
//               www.techsolutions.com
//             </a>
//           </p>
//         </div>
//       </div>

//       {/* About Section */}
//       <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 mt-6">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
//           About Us
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
//           Tech Solutions Ltd. is a leading software development company focused
//           on building innovative solutions for businesses worldwide. We
//           specialize in web and mobile app development, cloud computing, and
//           AI-driven applications. Our mission is to empower organizations with
//           cutting-edge technology.
//         </p>
//       </div>
//     </div>
//   );
// }
