import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export default function EmployerPostJob() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("Login Data Submitted:", data);
    navigate("/employer-dashboard");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Post a Job</h2>

      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {/* Job Title */}
        <div>
          <label className="block text-gray-700 mb-1">Job Title</label>
          <input
            type="text"
            id="jodtitle"
            {...register("jobtitle", {
              required: "Job title is required",
            })}
            placeholder="Enter job title"
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
          />
          {errors.jobtitle && (
            <p className="text-red-500 text-sm mt-1">{errors.jobtitle.message}</p>
          )}
        </div>

        {/* Job Description */}
        <div>
          <label className="block text-gray-700 mb-1">Job Description</label>
          <textarea
            id="joddescripition"
            {...register("jobdescripition", {
              required: "Descripition is required",
            })}
            rows="5"
            placeholder="Enter job description"
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
          ></textarea>
          {errors.jobdescripition && (
            <p className="text-red-500 text-sm mt-1">
              {errors.jobdescripition.message}
            </p>
          )}
        </div>

        {/* Job Type */}
        <div>
          <label className="block text-gray-700 mb-1">Job Type</label>
          <select className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300">
            <option value="">Select type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 mb-1">Location</label>
          <input
            type="text"
            id="Location"
            {...register("Location", {
              required: "Location is required",
            })}
            placeholder="Enter job location"
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
          />
          {errors.Location && (
            <p className="text-red-500 text-sm mt-1">{errors.Location.message}</p>
          )}
        </div>

        {/* Salary */}
        <div>
          <label className="block text-gray-700 mb-1">Salary Range</label>
          <input
            type="text"
            id="salary"
            {...register("salary", { required: "salary is required" })}
            placeholder="e.g. $2000 - $3000"
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
          />
          {errors.salary && (
            <p className="text-red-500 text-sm mt-1">{errors.salary.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}
