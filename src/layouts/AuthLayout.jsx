import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 lg:p-6 xl:py-8 xl:px-6">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
