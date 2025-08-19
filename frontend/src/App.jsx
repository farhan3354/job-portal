import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Layout = lazy(() => import("./component/common/Layout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Contact = lazy(() => import("./pages/Contact"));

const UserLayout = lazy(() =>
  import("./component/common/userLayout/UserLayout")
);
const Userdashboard = lazy(() => import("./pages/userPages/UserDashboard"));
const Job = lazy(() => import("./pages/userPages/Job"));
const Saved = lazy(() => import("./pages/userPages/SavedJob"));
const ApplyJob = lazy(() => import("./pages/userPages/ApplyJob"));
const Profile = lazy(() => import("./pages/userPages/Profile"));
const Appliedjob = lazy(() => import("./pages/userPages/AppliedJob"));

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
