import React from "react";
import Bannerlogin from "../component/Login/Bannerlogin";
import RegisterForm from "../component/Login/RegisterForm";

export default function Register() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Bannerlogin></Bannerlogin>
      <RegisterForm></RegisterForm>
    </div>
  );
}
