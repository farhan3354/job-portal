import React from "react";
import {
  employmentTypes,
  experienceLevels,
  industries,
} from "../../../data/data";

export default function StepTwo({ register, errors }) {
  return (
    <>
      <div>
        {/* Requirements */}
        <div>
          <label className="block text-gray-700 mb-1">
            Requirements & Qualifications *
          </label>
          <textarea
            {...register("requirements", {
              required: "Requirements are required",
            })}
            rows="3"
            placeholder="List the required skills, education, and experience..."
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            required
          ></textarea>
          {errors.requirements && (
            <p className="text-red-500 text-sm mt-1">
              {errors.requirements.message}
            </p>
          )}
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-gray-700 mb-1">Employment Type *</label>
          <select
            {...register("employmentType", {
              required: "Employment type is required",
            })}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
          >
            <option value="">Select employment type</option>
            {employmentTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.employmentType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.employmentType.message}
            </p>
          )}
        </div>

        {/* Experience Level */}
        <div>
          <label className="block text-gray-700 mb-1">Experience Level *</label>
          <select
            {...register("experienceLevel", {
              required: "Experience level is required",
            })}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
          >
            <option value="">Select experience level</option>
            {experienceLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          {errors.experienceLevel && (
            <p className="text-red-500 text-sm mt-1">
              {errors.experienceLevel.message}
            </p>
          )}
        </div>
        {/* Industry */}
        <div>
          <label className="block text-gray-700 mb-1">Industry *</label>
          <select
            {...register("industry", { required: "Industry is required" })}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
          >
            <option value="">Select industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
          {errors.industry && (
            <p className="text-red-500 text-sm mt-1">
              {errors.industry.message}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
