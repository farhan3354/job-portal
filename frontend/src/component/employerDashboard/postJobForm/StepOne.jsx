import React from "react";

export default function StepOne({ register, errors }) {
  return (
    <>
      <div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Job Type *</label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value="Simple"
                {...register("jobType")}
                className="form-radio text-blue-600"
                defaultChecked
              />
              <span>Simple Job</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value="Freelance"
                {...register("jobType")}
                className="form-radio text-green-600"
              />
              <span>Freelance / Fixed Task</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Job Title *</label>
          <input
            type="text"
            {...register("jobTitle", {
              required: "Job title is required",
              minLength: {
                value: 3,
                message: "Job title must be at least 3 characters",
              },
            })}
            placeholder="e.g. Senior Frontend Developer"
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            required
          />
          {errors.jobTitle && (
            <p className="text-red-500 text-sm mt-1">
              {errors.jobTitle.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Company Name *</label>
          <input
            type="text"
            {...register("companyName", {
              required: "Company name is required",
            })}
            placeholder="Enter your company name"
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            required
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.companyName.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Job Description *</label>
          <textarea
            {...register("jobDescription", {
              required: "Description is required",
              minLength: {
                value: 25,
                message: "Description must be at least 25 characters",
              },
            })}
            rows="5"
            placeholder="Describe the role, responsibilities, and requirements..."
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            required
          ></textarea>
          {errors.jobDescription && (
            <p className="text-red-500 text-sm mt-1">
              {errors.jobDescription.message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
