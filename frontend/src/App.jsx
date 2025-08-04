import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./component/comman/Layout";
import About from "./Pages/About";
import PageNot from "./Pages/PageNot";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <NotFound />,
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
