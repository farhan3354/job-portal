import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let user = true;
  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
