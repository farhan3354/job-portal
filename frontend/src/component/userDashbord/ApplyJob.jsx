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
    alert("Application submitted successfully!");
  };

  return (
    <>
      {/* Application Form */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-xl font-bold mb-4 text-center">
          Apply for this Position
        </h3>
        <form onSubmit={handleSubmit(applyformdata)}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", { required: "The name is required" })}
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name ? (
              <p className="text-red-600">{errors.name.message}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "The Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email ? (
              <p className="text-red-600">{errors.email.message}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                required: "The phone is required",
                pattern: {
                  value: "",
                  message: "Invalid Number",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />{" "}
            {errors.phone ? (
              <p className="text-red-600">{errors.phone.message}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="address">
              Address
            </label>
            <input
              type="tel"
              id="address"
              {...register("address", {
                required: "The address is required",
                pattern: {
                  value: "",
                  message: "Invalid Number",
                },
              })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />{" "}
            {errors.address ? (
              <p className="text-red-600">{errors.address.message}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="company">
              Current Company
            </label>
            <input
              type="text"
              id="company"
              {...register("company")}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="salary">
              Current salary
            </label>
            <input
              type="text"
              id="salary"
              {...register("salary")}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="resume">
              Resume (PDF or DOCX)
            </label>
            <input
              type="file"
              id="resume"
              {...register("resume", { required: "The Resume is required" })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept=".pdf"
            />
            {errors.resume ? (
              <p className="text-red-600">{errors.resume.message}</p>
            ) : null}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="coverLetter">
              Cover Letter
            </label>
            <textarea
              {...register("cover")}
              id="coverLetter"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition font-medium"
          >
            Submit Application
          </button>
        </form>
      </div>
    </>
  );
}
