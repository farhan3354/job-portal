import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data Submitted:", data);
  };

  return (
    <>
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Let's Connect!
        </h2>
        <p className="text-gray-600 mb-10">
          Have a question, suggestion, or job inquiry? We'd love to hear from
          you. Fill out the form and our team will get back to you shortly.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="fullName" className="block text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              {...register("fullName", {
                required: "The Name is required",
              })}
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              aria-invalid={errors.email ? "true" : "false"}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
