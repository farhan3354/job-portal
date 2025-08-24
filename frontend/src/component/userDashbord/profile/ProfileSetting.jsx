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

// src/components/profile/ProfileSetting.jsx
// import React, { useState } from "react";
// import {
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaBriefcase,
//   FaPlus,
//   FaEdit,
//   FaTrash,
//   FaSave,
//   FaTimes
// } from "react-icons/fa";
// import { MdWork, MdSchool } from "react-icons/md";

// export default function ProfileSetting() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profile, setProfile] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "+1 (555) 123-4567",
//     location: "San Francisco, CA",
//     headline: "Senior Software Engineer",
//     about: "Experienced full-stack developer with 5+ years of experience building web applications. Specialized in React, Node.js, and cloud technologies.",
//     experience: [
//       {
//         id: 1,
//         title: "Senior Software Engineer",
//         company: "TechCorp",
//         location: "San Francisco, CA",
//         startDate: "2020",
//         endDate: "Present",
//         description: "Leading a team of developers to build scalable web applications.",
//       },
//       {
//         id: 2,
//         title: "Software Engineer",
//         company: "WebSolutions",
//         location: "New York, NY",
//         startDate: "2018",
//         endDate: "2020",
//         description: "Developed and maintained client-facing applications.",
//       },
//     ],
//     education: [
//       {
//         id: 1,
//         degree: "Bachelor of Science in Computer Science",
//         institution: "Stanford University",
//         year: "2014 - 2018",
//       },
//       {
//         id: 2,
//         degree: "High School Diploma",
//         institution: "San Francisco High School",
//         year: "2010 - 2014",
//       },
//     ],
//     skills: ["JavaScript", "React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "AWS", "Git & GitHub"],
//     jobPreferences: {
//       type: "Full-time / Remote",
//       location: "San Francisco, Remote",
//       salary: "$120,000 - $150,000 / year",
//     },
//   });

//   const [newExperience, setNewExperience] = useState({
//     title: "",
//     company: "",
//     location: "",
//     startDate: "",
//     endDate: "",
//     description: ""
//   });

//   const [newEducation, setNewEducation] = useState({
//     degree: "",
//     institution: "",
//     year: ""
//   });

//   const [newSkill, setNewSkill] = useState("");

//   const addExperience = () => {
//     if (newExperience.title && newExperience.company) {
//       setProfile(prev => ({
//         ...prev,
//         experience: [...prev.experience, { id: Date.now(), ...newExperience }]
//       }));
//       setNewExperience({
//         title: "",
//         company: "",
//         location: "",
//         startDate: "",
//         endDate: "",
//         description: ""
//       });
//     }
//   };

//   const addEducation = () => {
//     if (newEducation.degree && newEducation.institution) {
//       setProfile(prev => ({
//         ...prev,
//         education: [...prev.education, { id: Date.now(), ...newEducation }]
//       }));
//       setNewEducation({ degree: "", institution: "", year: "" });
//     }
//   };

//   const addSkill = () => {
//     if (newSkill.trim()) {
//       setProfile(prev => ({
//         ...prev,
//         skills: [...prev.skills, newSkill.trim()]
//       }));
//       setNewSkill("");
//     }
//   };

//   const removeExperience = (id) => {
//     setProfile(prev => ({
//       ...prev,
//       experience: prev.experience.filter(exp => exp.id !== id)
//     }));
//   };

//   const removeEducation = (id) => {
//     setProfile(prev => ({
//       ...prev,
//       education: prev.education.filter(edu => edu.id !== id)
//     }));
//   };

//   const removeSkill = (skillToRemove) => {
//     setProfile(prev => ({
//       ...prev,
//       skills: prev.skills.filter(skill => skill !== skillToRemove)
//     }));
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       {/* Header with Edit Toggle */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Profile Settings</h1>
//         <button
//           onClick={() => setIsEditing(!isEditing)}
//           className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//         >
//           {isEditing ? <FaSave /> : <FaEdit />}
//           {isEditing ? "Save Changes" : "Edit Profile"}
//         </button>
//       </div>

//       {/* Personal Info */}
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Profile Sidebar */}
//           <div className="md:w-1/4 flex flex-col items-center">
//             <div className="relative">
//               <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
//                 <img
//                   src="https://randomuser.me/api/portraits/men/1.jpg"
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               {isEditing && (
//                 <button className="absolute bottom-4 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
//                   <FaEdit size={14} />
//                 </button>
//               )}
//             </div>
//             <h2 className="text-2xl font-semibold text-center">{profile.name}</h2>
//             <p className="text-gray-600 text-center">{profile.headline}</p>
//           </div>

//           {/* Profile Info */}
//           <div className="md:w-3/4">
//             <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//               {[
//                 { icon: <FaUser className="text-gray-500 mr-3" />, value: profile.name, label: "Name" },
//                 { icon: <FaEnvelope className="text-gray-500 mr-3" />, value: profile.email, label: "Email" },
//                 { icon: <FaPhone className="text-gray-500 mr-3" />, value: profile.phone, label: "Phone" },
//                 { icon: <FaMapMarkerAlt className="text-gray-500 mr-3" />, value: profile.location, label: "Location" }
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center">
//                   {item.icon}
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       value={item.value}
//                       onChange={(e) => setProfile(prev => ({ ...prev, [item.label.toLowerCase()]: e.target.value }))}
//                       className="border rounded px-2 py-1 w-full"
//                     />
//                   ) : (
//                     <span>{item.value}</span>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* About */}
//             <h3 className="text-xl font-semibold mb-4">About</h3>
//             {isEditing ? (
//               <textarea
//                 value={profile.about}
//                 onChange={(e) => setProfile(prev => ({ ...prev, about: e.target.value }))}
//                 className="w-full border rounded px-3 py-2 h-24"
//                 placeholder="Tell us about yourself..."
//               />
//             ) : (
//               <p className="text-gray-700">{profile.about}</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Grid Sections */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Experience Section */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-semibold flex items-center">
//               <MdWork className="mr-2 text-blue-500" /> Experience
//             </h3>
//             {isEditing && (
//               <button
//                 onClick={() => document.getElementById('experience-modal').showModal()}
//                 className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
//               >
//                 <FaPlus />
//               </button>
//             )}
//           </div>

//           {profile.experience.map((exp) => (
//             <div key={exp.id} className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0 group relative">
//               <h4 className="font-semibold text-lg">{exp.title}</h4>
//               <p className="text-gray-600">{exp.company} • {exp.location}</p>
//               <p className="text-gray-500 text-sm mb-2">{exp.startDate} - {exp.endDate}</p>
//               <p className="text-gray-700">{exp.description}</p>

//               {isEditing && (
//                 <button
//                   onClick={() => removeExperience(exp.id)}
//                   className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition"
//                 >
//                   <FaTrash size={12} />
//                 </button>
//               )}
//             </div>
//           ))}

//           {/* Add Experience Modal */}
//           <dialog id="experience-modal" className="modal">
//             <div className="modal-box">
//               <h3 className="font-bold text-lg">Add Experience</h3>
//               <div className="space-y-4 mt-4">
//                 <input
//                   type="text"
//                   placeholder="Job Title"
//                   value={newExperience.title}
//                   onChange={(e) => setNewExperience(prev => ({ ...prev, title: e.target.value }))}
//                   className="w-full border rounded px-3 py-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Company"
//                   value={newExperience.company}
//                   onChange={(e) => setNewExperience(prev => ({ ...prev, company: e.target.value }))}
//                   className="w-full border rounded px-3 py-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Location"
//                   value={newExperience.location}
//                   onChange={(e) => setNewExperience(prev => ({ ...prev, location: e.target.value }))}
//                   className="w-full border rounded px-3 py-2"
//                 />
//                 <div className="grid grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="Start Date"
//                     value={newExperience.startDate}
//                     onChange={(e) => setNewExperience(prev => ({ ...prev, startDate: e.target.value }))}
//                     className="border rounded px-3 py-2"
//                   />
//                   <input
//                     type="text"
//                     placeholder="End Date"
//                     value={newExperience.endDate}
//                     onChange={(e) => setNewExperience(prev => ({ ...prev, endDate: e.target.value }))}
//                     className="border rounded px-3 py-2"
//                   />
//                 </div>
//                 <textarea
//                   placeholder="Description"
//                   value={newExperience.description}
//                   onChange={(e) => setNewExperience(prev => ({ ...prev, description: e.target.value }))}
//                   className="w-full border rounded px-3 py-2 h-20"
//                 />
//               </div>
//               <div className="modal-action">
//                 <button className="btn" onClick={() => document.getElementById('experience-modal').close()}>
//                   Cancel
//                 </button>
//                 <button className="btn btn-primary" onClick={addExperience}>
//                   Add Experience
//                 </button>
//               </div>
//             </div>
//           </dialog>
//         </div>

//         {/* Education Section */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-semibold flex items-center">
//               <MdSchool className="mr-2 text-blue-500" /> Education
//             </h3>
//             {isEditing && (
//               <button
//                 onClick={() => document.getElementById('education-modal').showModal()}
//                 className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
//               >
//                 <FaPlus />
//               </button>
//             )}
//           </div>

//           {profile.education.map((edu) => (
//             <div key={edu.id} className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0 group relative">
//               <h4 className="font-semibold text-lg">{edu.degree}</h4>
//               <p className="text-gray-600">{edu.institution}</p>
//               <p className="text-gray-500 text-sm">{edu.year}</p>

//               {isEditing && (
//                 <button
//                   onClick={() => removeEducation(edu.id)}
//                   className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition"
//                 >
//                   <FaTrash size={12} />
//                 </button>
//               )}
//             </div>
//           ))}

//           {/* Add Education Modal */}
//           <dialog id="education-modal" className="modal">
//             <div className="modal-box">
//               <h3 className="font-bold text-lg">Add Education</h3>
//               <div className="space-y-4 mt-4">
//                 <input
//                   type="text"
//                   placeholder="Degree"
//                   value={newEducation.degree}
//                   onChange={(e) => setNewEducation(prev => ({ ...prev, degree: e.target.value }))}
//                   className="w-full border rounded px-3 py-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Institution"
//                   value={newEducation.institution}
//                   onChange={(e) => setNewEducation(prev => ({ ...prev, institution: e.target.value }))}
//                   className="w-full border rounded px-3 py-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Year"
//                   value={newEducation.year}
//                   onChange={(e) => setNewEducation(prev => ({ ...prev, year: e.target.value }))}
//                   className="w-full border rounded px-3 py-2"
//                 />
//               </div>
//               <div className="modal-action">
//                 <button className="btn" onClick={() => document.getElementById('education-modal').close()}>
//                   Cancel
//                 </button>
//                 <button className="btn btn-primary" onClick={addEducation}>
//                   Add Education
//                 </button>
//               </div>
//             </div>
//           </dialog>
//         </div>

//         {/* Skills Section */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-semibold flex items-center">
//               <FaBriefcase className="mr-2 text-blue-500" /> Skills
//             </h3>
//             {isEditing && (
//               <div className="flex gap-2">
//                 <input
//                   type="text"
//                   placeholder="Add skill"
//                   value={newSkill}
//                   onChange={(e) => setNewSkill(e.target.value)}
//                   className="border rounded px-3 py-1 text-sm"
//                 />
//                 <button
//                   onClick={addSkill}
//                   className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
//                 >
//                   <FaPlus />
//                 </button>
//               </div>
//             )}
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {profile.skills.map((skill, index) => (
//               <span
//                 key={index}
//                 className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 group"
//               >
//                 {skill}
//                 {isEditing && (
//                   <button
//                     onClick={() => removeSkill(skill)}
//                     className="text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition"
//                   >
//                     <FaTimes size={10} />
//                   </button>
//                 )}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // src/components/profile/ProfileSetting.jsx
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import {
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaBriefcase,
// } from "react-icons/fa";
// import { MdWork, MdSchool } from "react-icons/md";

// export default function ProfileSetting() {
//   const [profile, setProfile] = useState(null); // Empty profile initially
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const saveProfile = (data) => {
//     setProfile({
//       ...data,
//       experience: [],
//       education: [],
//       skills: data.skills ? data.skills.split(",") : [],
//     });
//   };

//   // ✅ If profile is empty → show the form
//   if (!profile) {
//     return (
//       <div className="max-w-3xl mx-auto px-6 py-8 bg-white shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Complete Your Profile
//         </h2>

//         <form onSubmit={handleSubmit(saveProfile)} className="space-y-5">
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Full Name
//             </label>
//             <input
//               {...register("name", { required: "Name is required" })}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//             {errors.name && (
//               <p className="text-red-600 text-sm">{errors.name.message}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               {...register("email", { required: "Email is required" })}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//             {errors.email && (
//               <p className="text-red-600 text-sm">{errors.email.message}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Phone
//             </label>
//             <input
//               type="tel"
//               {...register("phone")}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Location
//             </label>
//             <input
//               {...register("location")}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Headline
//             </label>
//             <input
//               {...register("headline")}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               About
//             </label>
//             <textarea
//               {...register("about")}
//               rows="3"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             ></textarea>
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Skills (comma separated)
//             </label>
//             <input
//               {...register("skills")}
//               placeholder="e.g. React, Node.js, Tailwind CSS"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
//           >
//             Save Profile
//           </button>
//         </form>
//       </div>
//     );
//   }

//   // ✅ If profile is filled → show profile details
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Sidebar */}
//           <div className="md:w-1/4 flex flex-col items-center">
//             <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
//               <img
//                 src="https://randomuser.me/api/portraits/men/1.jpg"
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h2 className="text-2xl font-semibold text-center">
//               {profile.name}
//             </h2>
//             <p className="text-gray-600 text-center">{profile.headline}</p>
//           </div>

//           {/* Info */}
//           <div className="md:w-3/4">
//             <h3 className="text-3xl font-bold mb-6">Personal Information</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//               <div className="flex items-center">
//                 <FaUser className="text-gray-500 mr-3" /> {profile.name}
//               </div>
//               <div className="flex items-center">
//                 <FaEnvelope className="text-gray-500 mr-3" /> {profile.email}
//               </div>
//               <div className="flex items-center">
//                 <FaPhone className="text-gray-500 mr-3" /> {profile.phone}
//               </div>
//               <div className="flex items-center">
//                 <FaMapMarkerAlt className="text-gray-500 mr-3" />{" "}
//                 {profile.location}
//               </div>
//             </div>

//             {/* About */}
//             <h3 className="text-xl font-semibold mb-4">About</h3>
//             <p className="text-gray-700">{profile.about}</p>
//           </div>
//         </div>
//       </div>

//       {/* Skills */}
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h3 className="text-xl font-semibold mb-4 flex items-center">
//           <FaBriefcase className="mr-2 text-blue-500" /> Skills
//         </h3>
//         <div className="flex flex-wrap gap-2">
//           {profile.skills?.map((skill, idx) => (
//             <span
//               key={idx}
//               className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import {
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaBriefcase,
//   FaPlus,
//   FaTrash,
//   FaSave
// } from "react-icons/fa";
// import { MdWork, MdSchool } from "react-icons/md";

// export default function JobSeekerProfileForm() {
//   const [profile, setProfile] = useState(null);
//   const [experiences, setExperiences] = useState([]);
//   const [educations, setEducations] = useState([]);
//   const [skills, setSkills] = useState([]);
//   const [newSkill, setNewSkill] = useState("");
//   const [showExperienceForm, setShowExperienceForm] = useState(false);
//   const [showEducationForm, setShowEducationForm] = useState(false);
  
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const emptyExperience = {
//     title: "",
//     company: "",
//     location: "",
//     startDate: "",
//     endDate: "",
//     description: "",
//     current: false
//   };

//   const emptyEducation = {
//     degree: "",
//     institution: "",
//     location: "",
//     fieldOfStudy: "",
//     startDate: "",
//     endDate: "",
//     current: false
//   };

//   const [newExperience, setNewExperience] = useState(emptyExperience);
//   const [newEducation, setNewEducation] = useState(emptyEducation);

//   const addExperience = () => {
//     if (newExperience.title && newExperience.company) {
//       setExperiences([...experiences, { ...newExperience, id: Date.now() }]);
//       setNewExperience(emptyExperience);
//       setShowExperienceForm(false);
//     }
//   };

//   const removeExperience = (id) => {
//     setExperiences(experiences.filter(exp => exp.id !== id));
//   };

//   const addEducation = () => {
//     if (newEducation.degree && newEducation.institution) {
//       setEducations([...educations, { ...newEducation, id: Date.now() }]);
//       setNewEducation(emptyEducation);
//       setShowEducationForm(false);
//     }
//   };

//   const removeEducation = (id) => {
//     setEducations(educations.filter(edu => edu.id !== id));
//   };

//   const addSkill = () => {
//     if (newSkill.trim() && !skills.includes(newSkill.trim())) {
//       setSkills([...skills, newSkill.trim()]);
//       setNewSkill("");
//     }
//   };

//   const removeSkill = (skillToRemove) => {
//     setSkills(skills.filter(skill => skill !== skillToRemove));
//   };

//   const handleExperienceChange = (field, value) => {
//     setNewExperience({
//       ...newExperience,
//       [field]: value
//     });
//   };

//   const handleEducationChange = (field, value) => {
//     setNewEducation({
//       ...newEducation,
//       [field]: value
//     });
//   };

//   const onSubmit = (data) => {
//     const profileData = {
//       ...data,
//       experiences,
//       educations,
//       skills
//     };
//     setProfile(profileData);
//     // Here you would typically send this data to your backend API
//     console.log("Profile data:", profileData);
//   };

//   // If profile is completed, show the profile view
//   if (profile) {
//     return (
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <div className="flex flex-col md:flex-row gap-8">
//             {/* Profile Sidebar */}
//             <div className="md:w-1/4 flex flex-col items-center">
//               <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
//                 <img
//                   src="https://randomuser.me/api/portraits/men/1.jpg"
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="text-2xl font-semibold text-center">
//                 {profile.name}
//               </h2>
//               <p className="text-gray-600 text-center">{profile.headline}</p>
//             </div>

//             {/* Profile Info */}
//             <div className="md:w-3/4">
//               <h3 className="text-3xl font-bold mb-6">Personal Information</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                 <div className="flex items-center">
//                   <FaUser className="text-gray-500 mr-3" />
//                   <span>{profile.name}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaEnvelope className="text-gray-500 mr-3" />
//                   <span>{profile.email}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaPhone className="text-gray-500 mr-3" />
//                   <span>{profile.phone}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <FaMapMarkerAlt className="text-gray-500 mr-3" />
//                   <span>{profile.location}</span>
//                 </div>
//               </div>

//               {/* About */}
//               <h3 className="text-xl font-semibold mb-4">About</h3>
//               <p className="text-gray-700">{profile.about}</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Experience Section */}
//           {experiences.length > 0 && (
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-semibold flex items-center mb-4">
//                 <MdWork className="mr-2 text-blue-500" /> Experience
//               </h3>
//               {experiences.map((exp) => (
//                 <div
//                   key={exp.id}
//                   className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0"
//                 >
//                   <h4 className="font-semibold text-lg">{exp.title}</h4>
//                   <p className="text-gray-600">
//                     {exp.company} • {exp.location}
//                   </p>
//                   <p className="text-gray-500 text-sm mb-2">
//                     {exp.startDate} - {exp.current ? "Present" : exp.endDate}
//                   </p>
//                   <p className="text-gray-700">{exp.description}</p>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Education Section */}
//           {educations.length > 0 && (
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-semibold flex items-center mb-4">
//                 <MdSchool className="mr-2 text-blue-500" /> Education
//               </h3>
//               {educations.map((edu) => (
//                 <div
//                   key={edu.id}
//                   className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0"
//                 >
//                   <h4 className="font-semibold text-lg">{edu.degree}</h4>
//                   <p className="text-gray-600">{edu.institution}</p>
//                   <p className="text-gray-500 text-sm">{edu.fieldOfStudy}</p>
//                   <p className="text-gray-500 text-sm">
//                     {edu.startDate} - {edu.current ? "Present" : edu.endDate}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Skills Section */}
//           {skills.length > 0 && (
//             <div className="bg-white rounded-lg shadow-md p-6">
//               <h3 className="text-xl font-semibold mb-4 flex items-center">
//                 <FaBriefcase className="mr-2 text-blue-500" /> Skills
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {skills.map((skill, index) => (
//                   <span
//                     key={index}
//                     className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="mt-8 text-center">
//           <button
//             onClick={() => setProfile(null)}
//             className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
//           >
//             Edit Profile
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Profile creation form
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 className="text-3xl font-bold mb-6 text-center">Create Your Job Seeker Profile</h2>
        
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Personal Information */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Full Name *
//               </label>
//               <input
//                 {...register("name", { required: "Name is required" })}
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 placeholder="John Doe"
//               />
//               {errors.name && (
//                 <p className="text-red-600 text-sm">{errors.name.message}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Email *
//               </label>
//               <input
//                 type="email"
//                 {...register("email", { required: "Email is required" })}
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 placeholder="john.doe@example.com"
//               />
//               {errors.email && (
//                 <p className="text-red-600 text-sm">{errors.email.message}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Phone
//               </label>
//               <input
//                 type="tel"
//                 {...register("phone")}
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 placeholder="+1 (555) 123-4567"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium mb-2">
//                 Location
//               </label>
//               <input
//                 {...register("location")}
//                 className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 placeholder="San Francisco, CA"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Professional Headline
//             </label>
//             <input
//               {...register("headline")}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Senior Software Engineer"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               About Me
//             </label>
//             <textarea
//               {...register("about")}
//               rows="4"
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Tell us about yourself, your experience, and your career goals..."
//             ></textarea>
//           </div>

//           {/* Experience Section */}
//           <div>
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-semibold">Work Experience</h3>
//               <button
//                 type="button"
//                 onClick={() => setShowExperienceForm(!showExperienceForm)}
//                 className="flex items-center gap-2 text-blue-500 hover:text-blue-700"
//               >
//                 <FaPlus /> Add Experience
//               </button>
//             </div>

//             {showExperienceForm && (
//               <div className="bg-gray-50 p-4 rounded-lg mb-4">
//                 <h4 className="font-medium mb-3">Add New Experience</h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   <input
//                     value={newExperience.title}
//                     onChange={(e) => handleExperienceChange("title", e.target.value)}
//                     className="px-3 py-2 border rounded"
//                     placeholder="Job Title"
//                   />
//                   <input
//                     value={newExperience.company}
//                     onChange={(e) => handleExperienceChange("company", e.target.value)}
//                     className="px-3 py-2 border rounded"
//                     placeholder="Company"
//                   />
//                   <input
//                     value={newExperience.location}
//                     onChange={(e) => handleExperienceChange("location", e.target.value)}
//                     className="px-3 py-2 border rounded"
//                     placeholder="Location"
//                   />
//                   <div className="flex items-center gap-2">
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         checked={newExperience.current}
//                         onChange={(e) => handleExperienceChange("current", e.target.checked)}
//                         className="mr-2"
//                       />
//                       Current Job
//                     </label>
//                   </div>
//                   <input
//                     value={newExperience.startDate}
//                     onChange={(e) => handleExperienceChange("startDate", e.target.value)}
//                     className="px-3 py-2 border rounded"
//                     placeholder="Start Date (MM/YYYY)"
//                     type="month"
//                   />
//                   {!newExperience.current && (
//                     <input
//                       value={newExperience.endDate}
//                       onChange={(e) => handleExperienceChange("endDate", e.target.value)}
//                       className="px-3 py-2 border rounded"
//                       placeholder="End Date (MM/YYYY)"
//                       type="month"
//                     />
//                   )}
//                 </div>
//                 <textarea
//                   value={newExperience.description}
//                   onChange={(e) => handleExperienceChange("description", e.target.value)}
//                   className="w-full px-3 py-2 border rounded mb-4"
//                   placeholder="Description of your responsibilities and achievements"
//                   rows="3"
//                 ></textarea>
//                 <div className="flex justify-end gap-2">
//                   <button
//                     type="button"
//                     onClick={() => setShowExperienceForm(false)}
//                     className="px-4 py-2 text-gray-600 hover:text-gray-800"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="button"
//                     onClick={addExperience}
//                     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                   >
//                     Add
//                   </button>
//                 </div>
//               </div>
//             )}

//             {experiences.map((exp) => (
//               <div key={exp.id} className="bg-gray-50 p-4 rounded-lg mb-3 flex justify-between items-start">
//                 <div>
//                   <h4 className="font-medium">{exp.title}</h4>
//                   <p className="text-gray-600">{exp.company} • {exp.location}</p>
//                   <p className="text-sm text-gray-500">
//                     {exp.startDate} - {exp.current ? "Present" : exp.endDate}
//                   </p>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => removeExperience(exp.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Education Section */}
//           <div>
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-semibold">Education</h3>
//               <button
//                 type="button"
//                 onClick={() => setShowEducationForm(!showEducationForm)}
//                 className="flex items-center gap-2 text-blue-500 hover:text-blue-700"
//               >
//                 <FaPlus /> Add Education
//               </button>
//             </div>

//             {showEducationForm && (
//               <div className="bg-gray-50 p-4 rounded-lg mb-4">
//                 <h4 className="font-medium mb-3">Add New Education</h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   <input
//                     value={newEducation.degree}
//                     onChange={(e) => handleEducationChange("degree", e.target.value)}
//                     className="px-3 py-2 border rounded"
//                     placeholder="Degree"
//                   />
//                   <input
//                     value={newEducation.institution}
//                     onChange={(e) => handleEducationChange("institution", e.target.value)}
//                     className="px-3 py-2 border rounded"
//                     placeholder="Institution"
//                   />
//                   <input
//                     value={newEducation.fieldOfStudy}
//                     onChange={(e) => handleEducationChange("fieldOfStudy", e.target.value)}
//                     className="px-3 py-2 border rounded"
//                     placeholder="Field of Study"
//                   />
//                   <input
//                     value={newEducation.location}
//                     onChange={(e) => handleEducationChange("location", e.target.value)}
//                     className="px-3 py-2 border rounded"
//                     placeholder="Location"
//                   />
//                   <div className="flex items-center gap-2">
//                     <label className="flex items-center">
//                       <input
//                         type="checkbox"
//                         checked={newEducation.current}
//                         onChange={(e) => handleEducationChange("current", e.target.checked)}
//                         className="mr-2"
//                       />
//                       Currently Studying
//                     </label>
//                   </div>
//                   <input
//                     value={newEducation.startDate}
//                     onChange={(e) => handleEducationChange("startDate", e.target.value)}
//                     className="px-3 py-2 border rounded"
//                     placeholder="Start Date (MM/YYYY)"
//                     type="month"
//                   />
//                   {!newEducation.current && (
//                     <input
//                       value={newEducation.endDate}
//                       onChange={(e) => handleEducationChange("endDate", e.target.value)}
//                       className="px-3 py-2 border rounded"
//                       placeholder="End Date (MM/YYYY)"
//                       type="month"
//                     />
//                   )}
//                 </div>
//                 <div className="flex justify-end gap-2">
//                   <button
//                     type="button"
//                     onClick={() => setShowEducationForm(false)}
//                     className="px-4 py-2 text-gray-600 hover:text-gray-800"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="button"
//                     onClick={addEducation}
//                     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                   >
//                     Add
//                   </button>
//                 </div>
//               </div>
//             )}

//             {educations.map((edu) => (
//               <div key={edu.id} className="bg-gray-50 p-4 rounded-lg mb-3 flex justify-between items-start">
//                 <div>
//                   <h4 className="font-medium">{edu.degree}</h4>
//                   <p className="text-gray-600">{edu.institution} • {edu.fieldOfStudy}</p>
//                   <p className="text-sm text-gray-500">
//                     {edu.startDate} - {edu.current ? "Present" : edu.endDate}
//                   </p>
//                 </div>
//                 <button
//                   type="button"
//                   onClick={() => removeEducation(edu.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   <FaTrash />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Skills Section */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Skills</h3>
//             <div className="flex gap-2 mb-4">
//               <input
//                 value={newSkill}
//                 onChange={(e) => setNewSkill(e.target.value)}
//                 className="flex-1 px-3 py-2 border rounded"
//                 placeholder="Add a skill"
//                 onKeyPress={(e) => {
//                   if (e.key === "Enter") {
//                     e.preventDefault();
//                     addSkill();
//                   }
//                 }}
//               />
//               <button
//                 type="button"
//                 onClick={addSkill}
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 Add
//               </button>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {skills.map((skill, index) => (
//                 <div key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center">
//                   <span>{skill}</span>
//                   <button
//                     type="button"
//                     onClick={() => removeSkill(skill)}
//                     className="ml-2 text-blue-600 hover:text-blue-800"
//                   >
//                     <FaTrash size={12} />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="pt-6">
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2"
//             >
//               <FaSave /> Save Profile
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }