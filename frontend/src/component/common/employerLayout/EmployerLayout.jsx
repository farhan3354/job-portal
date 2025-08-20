import { Outlet } from "react-router-dom";
import EmployerHeader from "./EmployerHeader";
import EmployerSideBar from "./EmployerSideBar";

export default function UserLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <EmployerHeader />
      <div className="flex flex-1">
        <EmployerSideBar />
        <main className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
