import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data Submitted:", data);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="bg-blue-500 text-white p-8 md:p-12 md:w-1/2 relative overflow-hidden">
        <div className="z-10 relative">
          <h2 className="text-2xl font-bold mb-6">Jobzy</h2>
          <div className="mt-20 md:mt-32">
            <h1 className="text-3xl font-bold mb-4">Sign in to Jobzy</h1>
            <p className="max-w-md opacity-90">
              Jobzy is your trusted gateway to career success — connecting
              talented job seekers with top companies. Whether you're looking
              for your first job or your next big opportunity, Jobzy makes the
              process simple, fast, and effective.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="p-8 md:p-12 md:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
          <div className="mb-8 text-center">
            <p className="mb-1 text-2xl text-blue-500 font-bold">Login</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Enter your username
              </label>
              <input
                id="email"
                {...register("email", { required: true })}
                type="text"
                placeholder="Username or email address"
                className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Enter your Password
              </label>
              <input
                id="password"
                {...register("password", { required: true })}
                type="password"
                placeholder="Password"
                className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Link
                to="/forgot-password"
                className="text-blue-500 text-sm float-right mt-2"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition duration-200"
            >
              Sign in
            </button>
          </form>

          <div className="text-left mt-4">
            <span className="text-gray-500">No Account?</span>{" "}
            <Link to="/signup" className="text-blue-500 font-medium">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.password) newErrors.password = "Password is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form submitted:", formData);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen">
//       {/* Left Section */}
//       <div className="bg-blue-500 text-white p-8 md:p-12 md:w-1/2 relative overflow-hidden">
//         <div className="z-10 relative">
//           <h2 className="text-2xl font-bold mb-6">Your Logo</h2>
//           <div className="mt-20 md:mt-32">
//             <h1 className="text-3xl md:text-3xl font-bold mb-4">
//               Sign in to Jobzy
//             </h1>
//             <p className="max-w-md opacity-90">
//               Jobzy is your trusted gateway to career success — connecting
//               talented job seekers with top companies. Whether you're looking
//               for your first job or your next big opportunity, Jobzy makes the
//               process simple, fast, and effective.
//             </p>
//           </div>
//         </div>

//         <div className="absolute right-0 top-1/3 transform translate-x-1/4">
//           <div className="relative w-64 h-64">
//             <svg
//               className="text-white/20 absolute top-10 left-10 w-16 h-16"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               viewBox="0 0 24 24"
//             >
//               <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
//             </svg>

//             <svg
//               className="text-white/20 absolute bottom-10 right-10 w-20 h-20"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               viewBox="0 0 24 24"
//             >
//               <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
//             </svg>

//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//               <div className="relative w-40 h-40">
//                 <svg
//                   className="text-orange-400 w-40 h-40 transform rotate-45"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
//                   <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
//                   <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
//                   <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>

//         <svg
//           className="text-white/20 absolute bottom-10 left-10 w-24 h-24"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           viewBox="0 0 24 24"
//         >
//           <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
//         </svg>
//       </div>

//       {/* Right Section */}
//       <div className="p-8 md:p-12 md:w-1/2 flex items-center justify-center">
//         <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
//           <div className="mb-8 text-center">
//             <p className="mb-1 text-2xl text-blue-500 font-bold">Login </p>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="space-y-6">
//               <div className="space-y-2">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Enter your username
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="text"
//                   placeholder="Username or email address"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={`w-full h-12 px-3 py-2 border ${
//                     errors.email ? "border-red-500" : "border-gray-300"
//                   } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm">{errors.email}</p>
//                 )}
//               </div>

//               <div className="space-y-2">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Enter your Password
//                 </label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className={`w-full h-12 px-3 py-2 border ${
//                     errors.password ? "border-red-500" : "border-gray-300"
//                   } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
//                 />
//                 <div className="flex justify-between">
//                   {errors.password && (
//                     <p className="text-red-500 text-sm">{errors.password}</p>
//                   )}
//                   <Link
//                     to="/forgot-password"
//                     className="text-blue-500 text-sm ml-auto text-left"
//                   >
//                     Forgot Password?
//                   </Link>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition duration-200"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>
//           <div className="text-left mt-4">
//             <span className="text-gray-500">No Account?</span>
//             <Link to="/signup" className="text-blue-500 font-medium">
//               Sign up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
