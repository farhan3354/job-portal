import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Direct imports (no lazy)
import Layout from "./component/common/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import UserLayout from "./component/common/userLayout/UserLayout";
import Userdashboard from "./pages/userDashboardPages/UserDashboard";
import Job from "./pages/userDashboardPages/Job";
import Saved from "./pages/userDashboardPages/SavedJob";
import ApplyJob from "./pages/userDashboardPages/ApplyJob";
import Profile from "./pages/userDashboardPages/Profile";
import Appliedjob from "./pages/userDashboardPages/AppliedJob";
import EmployerLayout from "./component/common/employerLayout/EmployerLayout";
import EmployerHome from "./pages/employerDashboardPages/EmployerHome";
import PostJob from "./pages/employerDashboardPages/PostJob";
import EmployerProfile from "./pages/employerDashboardPages/EmployerProfile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/contact", element: <Contact /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
    {
      path: "/user-dashboard",
      element: <UserLayout />,
      children: [
        { path: "", element: <Userdashboard /> },
        { path: "jobs", element: <Job /> },
        { path: "saved", element: <Saved /> },
        { path: "apply/:id", element: <ApplyJob /> },
        { path: "applied", element: <Appliedjob /> },
        { path: "profile", element: <Profile /> },
      ],
    },
    {
      path: "/employer-dashboard",
      element: <EmployerLayout />,
      children: [
        { path: "", element: <EmployerHome /> },
        { path: "posta-job", element: <PostJob /> },
        { path: "profile", element: <EmployerProfile /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

// import React, { Suspense, lazy } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import EmployerHome from "./pages/employerDashboardPages/EmployerHome";

// const Layout = lazy(() => import("./component/common/Layout"));
// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const PageNotFound = lazy(() => import("./pages/PageNotFound"));
// const Login = lazy(() => import("./pages/Login"));
// const Register = lazy(() => import("./pages/Register"));
// const Contact = lazy(() => import("./pages/Contact"));

// const UserLayout = lazy(() =>
//   import("./component/common/userLayout/UserLayout")
// );
// const Userdashboard = lazy(() =>
//   import("./pages/userDashboardPages/UserDashboard")
// );
// const Job = lazy(() => import("./pages/userDashboardPages/Job"));
// const Saved = lazy(() => import("./pages/userDashboardPages/SavedJob"));
// const ApplyJob = lazy(() => import("./pages/userDashboardPages/ApplyJob"));
// const Profile = lazy(() => import("./pages/userDashboardPages/Profile"));
// const Appliedjob = lazy(() => import("./pages/userDashboardPages/AppliedJob"));
// const EmployerLayout = lazy(() =>
//   import("./component/common/employerLayout/EmployerLayout")
// );
// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         { index: true, element: <Home /> },
//         { path: "/about", element: <About /> },
//         { path: "/login", element: <Login /> },
//         { path: "/register", element: <Register /> },
//         { path: "/contact", element: <Contact /> },
//         { path: "*", element: <PageNotFound /> },
//       ],
//     },
//     {
//       path: "/user-dashboard",
//       element: <UserLayout />,
//       children: [
//         { path: "", element: <Userdashboard /> },
//         { path: "jobs", element: <Job /> },
//         { path: "saved", element: <Saved /> },
//         { path: "apply/:id", element: <ApplyJob /> },
//         { path: "applied", element: <Appliedjob /> },
//         { path: "profile", element: <Profile /> },
//       ],
//     },
//     {
//       path: "/employer-dashboard",
//       element: <EmployerLayout />,
//       children: [{ path: "", element: <EmployerHome /> }],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }

// export default App;
