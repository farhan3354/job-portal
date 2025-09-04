import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function Apply() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);
  const navigate =useNavigate();
  const applyformdata = async (data) => {
    try {
      const formData = new FormData();
      formData.append("lastcompany", data.lastcompany);
      formData.append("lastsalary", data.lastsalary);
      formData.append("availability", data.availability);
      formData.append("coverLetter", data.coverLetter);

      if (data.resume && data.resume[0]) {
        formData.append("resume", data.resume[0]);
      }

      const respo = await axios.post(
        `http://localhost:8000/apply/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (respo.data.success) {
        toast.success("Form submitted successfullly");
        navigate('')
      }
    } catch (error) {
      toast.error("❌ Error submitting form:", error);
    }
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
            htmlFor="company"
          >
            Current Company
          </label>
          <input
            type="text"
            id="company"
            {...register("lastcompany")}
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
            {...register("lastsalary")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="availability"
          >
            Availability
          </label>
          <input
            type="text"
            id="availability"
            {...register("availability")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="resume"
          >
            Resume (PDF) <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            id="resume"
            {...register("resume", { required: "Resume is required" })}
            accept="application/pdf"
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
