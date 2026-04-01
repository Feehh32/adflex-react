import { Outlet } from "react-router-dom";
import ErrorScreen from "../components/UI/ErrorScreen";
import Sidebar from "../components/sidebar/Sidebar";
import { useGlobalError } from "../hooks/useGlobalError";

const MainLayout = () => {
  const { error, clearGlobalError } = useGlobalError();
  if (error) {
    return (
      <ErrorScreen
        message={error}
        onRetry={() => {
          clearGlobalError();
          window.location.reload();
        }}
      />
    );
  }

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
