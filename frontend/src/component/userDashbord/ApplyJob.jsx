import React from "react";
import { useForm } from "react-hook-form";

export default function Apply() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const applyformdata = (data) => {
    console.log("Form submitted:", data);
    alert("✅ Application submitted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto border-t border-gray-200 pt-8 px-6 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Apply for this Position
      </h3>

      <form onSubmit={handleSubmit(applyformdata)} className="space-y-5">
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Full Name is required" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="phone"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: "Enter a valid phone number",
              },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="address"
          >
            Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            {...register("address", {
              required: "Address is required",
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.address && (
            <p className="text-red-600 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="company"
          >
            Current Company
          </label>
          <input
            type="text"
            id="company"
            {...register("company")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="salary"
          >
            Current Salary
          </label>
          <input
            type="text"
            id="salary"
            {...register("salary")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="resume"
          >
            Resume (PDF or DOCX) <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            id="resume"
            {...register("resume", { required: "Resume is required" })}
            accept=".pdf,.doc,.docx"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.resume && (
            <p className="text-red-600 text-sm mt-1">{errors.resume.message}</p>
          )}
        </div>

        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="coverLetter"
          >
            Cover Letter
          </label>
          <textarea
            id="coverLetter"
            rows="4"
            {...register("coverLetter")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition font-medium shadow-md"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
