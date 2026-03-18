import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import StepOne from "./postJobForm/StepOne";
import StepTwo from "./postJobForm/StepTwo";
import StepThree from "./postJobForm/StepThree";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function EmployerPostJob() {
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      jobType: "Simple",
      freelanceType: "Fixed",
    }
  });

  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const token = useSelector((state) => state.auth.token);
  const jobType = watch("jobType");

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      requirements: typeof data.requirements === "string" 
        ? data.requirements.split("\n").map((r) => r.trim()).filter((r) => r !== "")
        : data.requirements,
      skills: typeof data.skills === "string"
        ? data.skills.split(",").map((s) => s.trim()).filter((s) => s !== "")
        : data.skills,
    };

    // Clean up data based on jobType
    if (formattedData.jobType === "Simple") {
      delete formattedData.freelanceType;
      delete formattedData.budget;
      delete formattedData.hourlyRange;
      delete formattedData.projectDuration;
      delete formattedData.projectScope;
    } else {
      delete formattedData.salary;
      if (formattedData.freelanceType === "Fixed") {
        delete formattedData.hourlyRange;
      } else {
        delete formattedData.budget;
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/post-job",
        formattedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        Swal.fire({
          title: "Success!",
          text: "Job posted successfully!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/employer-dashboard");
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message || "Something went wrong",
        icon: "error",
      });
    }

    console.log("Job Data Submitted:", formattedData);
  };

  const nextStep = async () => {
    let valid = false;

    if (count === 1) {
      valid = await trigger(["jobTitle", "companyName", "jobDescription", "jobType"]);
    } else if (count === 2) {
      const fieldsToValidate = ["requirements", "industry", "skills"];
      if (jobType === "Freelance") {
        fieldsToValidate.push("freelanceType");
        if (watch("freelanceType") === "Fixed") {
          fieldsToValidate.push("budget");
        } else {
          fieldsToValidate.push("hourlyRange.min", "hourlyRange.max");
        }
      }
      valid = await trigger(fieldsToValidate);
    } else {
      valid = true;
    }

    if (valid) {
      setCount((prev) => prev + 1);
    }
  };

  const prevStep = () => setCount((prev) => prev - 1);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Post a New Job</h2>
      
      {/* Step Indicator */}
      <div className="flex items-center mb-8">
        {[1, 2, 3].map((step) => (
          <React.Fragment key={step}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${count >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              {step}
            </div>
            {step < 3 && <div className={`flex-1 h-1 mx-2 ${count > step ? 'bg-blue-600' : 'bg-gray-200'}`}></div>}
          </React.Fragment>
        ))}
      </div>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {count === 1 && <StepOne register={register} errors={errors} watch={watch} />}
        {count === 2 && <StepTwo register={register} errors={errors} watch={watch} />}
        {count === 3 && <StepThree register={register} errors={errors} watch={watch} />}

        <div className="flex justify-between pt-4">
          {count > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition cursor-pointer"
            >
              Back
            </button>
          )}

          {count < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer "
            >
              Next
            </button>
          ) : (
            <div className="flex space-x-4">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition cursor-pointer"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
              >
                Post Job
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import {employmentTypes,experienceLevels,industries} from "../../data/data";

// export default function EmployerPostJob() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [isRemote, setIsRemote] = useState(false);
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     console.log("Job Data Submitted:", data);
//     navigate("/employer-dashboard");
//   };

//   return (
//     <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-2xl font-semibold mb-6">Post a Job</h2>

//       <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
//         {/* Job Title */}
//         <div>
//           <label className="block text-gray-700 mb-1">Job Title *</label>
//           <input
//             type="text"
//             {...register("jobTitle", {
//               required: "Job title is required",
//               minLength: {
//                 value: 3,
//                 message: "Job title must be at least 3 characters"
//               }
//             })}
//             placeholder="e.g. Senior Frontend Developer"
//             className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
//           />
//           {errors.jobTitle && (
//             <p className="text-red-500 text-sm mt-1">{errors.jobTitle.message}</p>
//           )}
//         </div>

//         {/* Company Name */}
//         <div>
//           <label className="block text-gray-700 mb-1">Company Name *</label>
//           <input
//             type="text"
//             {...register("companyName", {
//               required: "Company name is required"
//             })}
//             placeholder="Enter your company name"
//             className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
//           />
//           {errors.companyName && (
//             <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
//           )}
//         </div>

//         {/* Job Description */}
//         <div>
//           <label className="block text-gray-700 mb-1">Job Description *</label>
//           <textarea
//             {...register("jobDescription", {
//               required: "Description is required",
//               minLength: {
//                 value: 50,
//                 message: "Description must be at least 50 characters"
//               }
//             })}
//             rows="5"
//             placeholder="Describe the role, responsibilities, and requirements..."
//             className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
//           ></textarea>
//           {errors.jobDescription && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors.jobDescription.message}
//             </p>
//           )}
//         </div>

//         {/* Requirements */}
//         <div>
//           <label className="block text-gray-700 mb-1">Requirements & Qualifications *</label>
//           <textarea
//             {...register("requirements", {
//               required: "Requirements are required"
//             })}
//             rows="3"
//             placeholder="List the required skills, education, and experience..."
//             className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
//           ></textarea>
//           {errors.requirements && (
//             <p className="text-red-500 text-sm mt-1">
//               {errors.requirements.message}
//             </p>
//           )}
//         </div>

//         {/* Job Type */}
//         <div>
//           <label className="block text-gray-700 mb-1">Employment Type *</label>
//           <select
//             {...register("employmentType", { required: "Employment type is required" })}
//             className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
//           >
//             <option value="">Select employment type</option>
//             {employmentTypes.map(type => (
//               <option key={type} value={type}>{type}</option>
//             ))}
//           </select>
//           {errors.employmentType && (
//             <p className="text-red-500 text-sm mt-1">{errors.employmentType.message}</p>
//           )}
//         </div>

//         {/* Experience Level */}
//         <div>
//           <label className="block text-gray-700 mb-1">Experience Level *</label>
//           <select
//             {...register("experienceLevel", { required: "Experience level is required" })}
//             className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
//           >
//             <option value="">Select experience level</option>
//             {experienceLevels.map(level => (
//               <option key={level} value={level}>{level}</option>
//             ))}
//           </select>
//           {errors.experienceLevel && (
//             <p className="text-red-500 text-sm mt-1">{errors.experienceLevel.message}</p>
//           )}
//         </div>

//         {/* Industry */}
//         <div>
//           <label className="block text-gray-700 mb-1">Industry *</label>
//           <select
//             {...register("industry", { required: "Industry is required" })}
//             className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
//           >
//             <option value="">Select industry</option>
//             {industries.map(industry => (
//               <option key={industry} value={industry}>{industry}</option>
//             ))}
//           </select>
//           {errors.industry && (
//             <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>
//           )}
//         </div>

//         {/* Location */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-gray-700 mb-1">Location *</label>
//             <input
//               type="text"
//               {...register("location", {
//                 required: "Location is required"
//               })}
//               placeholder="e.g. New York, NY"
//               className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
//               disabled={isRemote}
//             />
//             {errors.location && (
//               <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
//             )}
//           </div>

//           <div className="flex items-center px-6">
//             <label className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 {...register("isRemote")}
//                 onChange={(e) => setIsRemote(e.target.checked)}
//                 className="rounded"
//               />
//               <span className="text-gray-700">Remote job</span>
//             </label>
//           </div>
//         </div>

//         {/* Salary */}
//         <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//           <div>
//             <label className="block text-gray-700 mb-1">Salary Range *</label>
//             <input
//               type="text"
//               {...register("salary", {
//                 required: "Salary range is required",
//                 pattern: {
//                   value: /^\$?[0-9,]+(?: - \$?[0-9,]+)?$/,
//                   message: "Please enter a valid salary range (e.g. $50,000 - $70,000)"
//                 }
//               })}
//               placeholder="e.g. $50,000 - $70,000"
//               className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
//             />
//             {errors.salary && (
//               <p className="text-red-500 text-sm mt-1">{errors.salary.message}</p>
//             )}
//           </div>

//         </div>

//         {/* Application Details */}
//         <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//           <div>
//             <label className="block text-gray-700 mb-1">Application Deadline</label>
//             <input
//               type="date"
//               {...register("applicationDeadline")}
//               className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
//             />
//           </div>

//         </div>

//         {/* Contact Information */}
//         <div className="border-t pt-4">
//           <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700 mb-1">Contact Email *</label>
//               <input
//                 type="email"
//                 {...register("contactEmail", {
//                   required: "Contact email is required",
//                   pattern: {
//                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                     message: "Invalid email address"
//                   }
//                 })}
//                 placeholder="hr@company.com"
//                 className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
//               />
//               {errors.contactEmail && (
//                 <p className="text-red-500 text-sm mt-1">{errors.contactEmail.message}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-1">Contact Phone</label>
//               <input
//                 type="tel"
//                 {...register("contactPhone")}
//                 placeholder="+1 (555) 123-4567"
//                 className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-end space-x-4 pt-4">
//           <button
//             type="button"
//             className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
//             onClick={() => navigate(-1)}
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Post Job
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
