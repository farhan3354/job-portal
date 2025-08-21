import React from "react";
import Bannerlogin from "../component/Login/Bannerlogin";
import LoginForm from "../component/Login/LoginForm";

export default function Login() {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        <Bannerlogin />
        <LoginForm />
      </div>
    </>
  );
}
