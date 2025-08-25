import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const EditJob = () => {
  // Dummy data (later replace with API/props)
  const dummyJob = {
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "80,000 - 100,000",
    description: "Work with React, Tailwind, and modern frontend tools.",
    type: "Full-time",
  };

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Prefill form with dummy data
  useEffect(() => {
    reset(dummyJob);
  }, [reset]);

  // Submit handler
  const onSubmit = (data) => {
    console.log("Updated Job Data:", data);
    alert("Job updated successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Edit Job</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Job Title */}
        <div>
          <label className="block font-semibold mb-1">Job Title</label>
          <input
            type="text"
            {...register("title", { required: "Job Title is required" })}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label className="block font-semibold mb-1">Company</label>
          <input
            type="text"
            {...register("company", { required: "Company name is required" })}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          />
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company.message}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            {...register("location")}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block font-semibold mb-1">Salary</label>
          <input
            type="text"
            {...register("salary")}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block font-semibold mb-1">Job Type</label>
          <select
            {...register("type", { required: "Job Type is required" })}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Internship">Internship</option>
            <option value="Remote">Remote</option>
          </select>
          {errors.type && (
            <p className="text-red-500 text-sm">{errors.type.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            {...register("description")}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"
            rows="4"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Update Job
          </button>
          <button
            type="button"
            onClick={() => reset(dummyJob)}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJob;
