import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Layout = lazy(() => import("./component/comman/Layout"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Contact = lazy(() => import("./pages/Contact"));

const UserLayout = lazy(() =>
  import("./component/comman/userLayout/UserLayout")
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
      path: "/userdashboard",
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
