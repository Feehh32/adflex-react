import { Outlet } from "react-router-dom";
import PageTransition from "../components/UI/PageTransition";
const AuthLayout = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 lg:p-6 xl:py-8 xl:px-6">
      <PageTransition variant="auth">
        <Outlet />
      </PageTransition>
    </main>
  );
};

export default AuthLayout;
