import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./component/comman/Layout";
import About from "./Pages/About";
import PageNot from "./Pages/PageNot";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import Userdashoard from "./Pages/userdashoard/Userdashoard";
import Job from "./Pages/userdashoard/Job";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/userdashboard",
          element: <Userdashoard />,
        },
        {
          path: "/userdashboard/all-jobs",
          element: <Job />,
        },
        {
          path: "*",
          element: <PageNot />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
