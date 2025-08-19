import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Layout = lazy(() => import("./component/common/Layout"));
const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const PageNotFound = lazy(() => import("./pages/pageNotFound"));
const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));
const Contact = lazy(() => import("./pages/contact"));

const UserLayout = lazy(() =>
  import("./component/common/userLayout/userlayout")
);
const Userdashboard = lazy(() => import("./pages/userPages/userDashboard"));
const Job = lazy(() => import("./pages/userPages/job"));
const Saved = lazy(() => import("./pages/userPages/savedJob"));
const ApplyJob = lazy(() => import("./pages/userPages/applyJob"));
const Profile = lazy(() => import("./pages/userPages/profile"));
const Appliedjob = lazy(() => import("./pages/userPages/appliedJob"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center text-xl">
              Loading...
            </div>
          }
        >
          <Layout />
        </Suspense>
      ),
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
      element: (
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center text-xl">
              Loading Dashboard...
            </div>
          }
        >
          <UserLayout />
        </Suspense>
      ),
      children: [
        { path: "", element: <Userdashboard /> },
        { path: "jobs", element: <Job /> },
        { path: "saved", element: <Saved /> },
        { path: "apply/:id", element: <ApplyJob /> },
        { path: "applied", element: <Appliedjob /> },
        { path: "profile", element: <Profile /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./component/comman/Layout";
// import Home from "./pages/Home.jsx";
// import About from "./pages/About";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Contact from "./pages/Contact";
// import UserLayout from "./component/comman/userLayout/UserLayout";
// import UserDashboard from "./pages/userPages/UserDashboard";
// import Job from "./pages/userPages/Job";
// import SavedJob from "./pages/userPages/SavedJob";
// import ApplyJob from "./pages/userPages/ApplyJob";
// import Profile from "./pages/userPages/Profile";
// import AppliedJob from "./pages/userPages/AppliedJob";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         { index: true, element: <Home /> },
//         { path: "about", element: <About /> },
//         { path: "login", element: <Login /> },
//         { path: "register", element: <Register /> },
//         { path: "contact", element: <Contact /> },
//         { path: "*", element: <PageNotFound /> },
//       ],
//     },
//     {
//       path: "userdashboard",
//       element: <UserLayout />,
//       children: [
//         { index: true, element: <UserDashboard /> },
//         { path: "jobs", element: <Job /> },
//         { path: "saved", element: <SavedJob /> },
//         { path: "apply/:id", element: <ApplyJob /> },
//         { path: "applied", element: <AppliedJob /> },
//         { path: "profile", element: <Profile /> },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }

// export default App;
