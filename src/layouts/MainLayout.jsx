import { Outlet } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="md:flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 lg:p-6 xl:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
