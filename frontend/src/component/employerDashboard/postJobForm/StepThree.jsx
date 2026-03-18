import React from "react";

export default function StepThree({ register, errors, watch }) {
  const jobType = watch("jobType");

  return (
    <>
      <div className="space-y-4">
        {jobType === "Freelance" && (
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Project Duration *</label>
              <select
                {...register("projectDuration", { required: jobType === "Freelance" })}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="Less than 1 month">Less than 1 month</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="More than 6 months">More than 6 months</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Project Scope *</label>
              <select
                {...register("projectScope", { required: jobType === "Freelance" })}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="Small">Small (Quick task)</option>
                <option value="Medium">Medium (Defined project)</option>
                <option value="Large">Large (Complex project)</option>
              </select>
            </div>
          </div>
        )}

        <div>
          <label className="block text-gray-700 mb-1">Desired Experience Level *</label>
          <select
            {...register("experienceLevel", { required: "Experience level is required" })}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="Entry">Entry Level</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert / Specialist</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Location *</label>
            <input
              type="text"
              {...register("location", {
                required: "Location is required",
              })}
              placeholder="e.g. New York, NY"
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>
        </div>

        {jobType !== "Freelance" && (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Salary Range *</label>
              <input
                type="text"
                {...register("salary", {
                  required: jobType !== "Freelance",
                })}
                placeholder="e.g. $50,000 - $70,000"
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">
              Application Deadline
            </label>
            <input
              type="date"
              {...register("applicationDeadline")}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
            />
          </div>
        </div>

        <div className="border-t pt-4 mt-4">
          <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">
                Contact Email *
              </label>
              <input
                type="email"
                {...register("contactEmail", {
                  required: "Contact email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="hr@company.com"
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
              />
              {errors.contactEmail && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.contactEmail.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Contact Phone</label>
              <input
                type="tel"
                {...register("contactPhone")}
                placeholder="+1 (555) 123-4567"
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
