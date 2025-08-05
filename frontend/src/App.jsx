import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./component/comman/Layout";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import UserLayout from "./component/comman/userlayout/Userlayout";
import Userdashboard from "./pages/userpages/Userdashboard";
import Job from "./pages/userpages/Job";
import Alljobs from "./pages/userpages/Alljobs";
import Saved from "./pages/userpages/Saved";
import ApplyJob from "./pages/userpages/ApplyJob";
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
          path: "*",
          element: <PageNotFound />,
        },
      ],
    },
    {
      path: "/userdashboard",
      element: <UserLayout />,
      children: [
        { path: "", element: <Job /> },
        { path: "jobs", element: <Userdashboard /> },
        { path: "all-jobs", element: <Alljobs /> },
        { path: "saved", element: <Saved /> },
        { path: "apply", element: <ApplyJob /> },
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
