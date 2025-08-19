import UserSidebar from "./UserSidebar";
import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <UserSidebar />
        <main className="flex-1 p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
