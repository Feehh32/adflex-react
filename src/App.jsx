import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";

// Pages are loaded on demand so the initial bundle only includes
// the code required for the current route.
const Home = lazy(() => import("./pages/home/Home.jsx"));
const ClientPage = lazy(() => import("./pages/clients/ClientPage.jsx"));
const ClientFormPage = lazy(
  () => import("./pages/clientForm/ClientFormPage.jsx"),
);
const OsPage = lazy(() => import("./pages/OsPage/OsPage.jsx"));
const OsFormPage = lazy(() => import("./pages/OsForm/OsFormPage.jsx"));
const MonthlyClientSales = lazy(
  () => import("./pages/monthlyClientSales/MonthlyClientSales.jsx"),
);
const SalesSummary = lazy(
  () => import("./pages/salesSummary/SalesSummary.jsx"),
);
const LoginPage = lazy(() => import("./pages/login/LoginPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/notFound/NotFoundPage.jsx"));

import { Toaster } from "react-hot-toast";
import GlobalErrorProvider from "./context/GlobalErrorProvider.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import GuestRoute from "./components/auth/GuestRoute.jsx";

const App = () => {
  return (
    <>
      <Toaster
        position="center-bottom"
        toastOptions={{
          className:
            "bg-gray-darker text-light-gray border border-gray-dark shadow-2xl font-secondary",
          duration: 2000,
          style: {
            background: "#1a1a1a",
            color: "#f3f4f6",
            border: "1px solid #374151",
          },
          success: {
            iconTheme: {
              primary: "#C5A47E",
              secondary: "#1a1a1a",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#1a1a1a",
            },
          },
        }}
      />
      <GlobalErrorProvider>
        <AuthProvider>
          <Suspense fallback={null}>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <MainLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Home />} />
                {/* Clients */}
                <Route path="/clients/:clientId" element={<ClientPage />} />
                <Route path="/clients/new" element={<ClientFormPage />} />
                <Route
                  path="/clients/:clientId/edit"
                  element={<ClientFormPage />}
                />

                {/* Service Orders */}
                <Route
                  path="/service-orders/:clientId"
                  element={<OsFormPage />}
                />
                <Route path="/service-orders/new" element={<OsFormPage />} />
                <Route path="/service-order-page/:osId" element={<OsPage />} />

                {/* Reports */}
                <Route
                  path="/monthly-client-sales"
                  element={<MonthlyClientSales />}
                />
                <Route path="/sales-summary" element={<SalesSummary />} />
                {/* Not Found */}
                <Route path="*" element={<NotFoundPage />} />
              </Route>
              {/* Login */}
              <Route element={<AuthLayout />}>
                <Route
                  path="/login"
                  element={
                    <GuestRoute>
                      <LoginPage />
                    </GuestRoute>
                  }
                />
                {/* Not Found */}
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </AuthProvider>
      </GlobalErrorProvider>
    </>
  );
};

export default App;
