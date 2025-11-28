import SidebarCorretor from "../../components/SidebarCorretor";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex">
      {/* Sidebar fixa */}
      <div className="fixed left-0 top-0 h-screen">
        <SidebarCorretor />
      </div>

      {/* ConteÃºdo Ã  direita */}
      <div className="ml-sidebar w-full min-h-screen px-6">
        <Outlet />
      </div>
    </div>
  );
}

