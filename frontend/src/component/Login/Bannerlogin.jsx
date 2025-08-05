import React from "react";

export default function Bannerlogin() {
  return (
    <>
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
    </>
  );
}
