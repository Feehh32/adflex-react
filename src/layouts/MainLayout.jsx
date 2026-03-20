import { Outlet } from "react-router-dom";
import ErrorScreen from "../components/UI/ErrorScreen";
import { useDashboardStats } from "../hooks/useDashboardStats";
import Sidebar from "../components/sidebar/Sidebar";

const MainLayout = () => {
  const { error, refetch } = useDashboardStats();

  if (error) return <ErrorScreen message={error} onRetry={refetch} />;
  return (
    <div className="md:flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 lg:p-6 xl:py-8 xl:px-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
