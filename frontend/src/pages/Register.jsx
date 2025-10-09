import React from "react";
import { useLocation } from "react-router-dom";
import Bannerlogin from "../component/login/Bannerlogin";
import RegisterForm from "../component/login/RegisterForm";

export default function Register() {
  const location = useLocation();

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        {location.pathname === "/register/job-seeker" && (
          <>
            <Bannerlogin />
            <RegisterForm />
          </>
        )}
        {location.pathname === "/register/employer" && (
          <>
            <RegisterForm />
            <Bannerlogin />
          </>
        )}
      </div>
    </>
  );
}
