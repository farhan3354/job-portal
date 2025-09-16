import React from "react";
import Bannerlogin from "../component/login/BannerLogin";
import LoginForm from "../component/login/LoginForm";

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
