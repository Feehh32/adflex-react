import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import ClientPage from "./pages/clients/ClientPage.jsx";
import ClientFormPage from "./pages/clientForm/ClientFormPage.jsx";
import OsPage from "./pages/OsPage.jsx";
import OsFormPage from "./pages/OsForm/OsFormPage.jsx";
import MonthlySales from "./pages/MonthlySales.jsx";
import SalesSummary from "./pages/SalesSummary.jsx";

import { Toaster } from "react-hot-toast";
import GlobalErrorProvider from "./context/GlobalErrorProvider.jsx";

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
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            {/* Clients */}
            <Route path="/clients/:clientId" element={<ClientPage />} />
            <Route path="/clients/new" element={<ClientFormPage />} />
            <Route
              path="/clients/:clientId/edit"
              element={<ClientFormPage />}
            />

            {/* Service Orders */}
            <Route path="/service-orders/:clientId" element={<OsFormPage />} />
            <Route path="/service-orders/new" element={<OsFormPage />} />
            <Route path="/service-order-page/:clientId" element={<OsPage />} />

            {/* Reports */}
            <Route path="/monthly-sales" element={<MonthlySales />} />
            <Route path="/sales-summary" element={<SalesSummary />} />
          </Route>
        </Routes>
      </GlobalErrorProvider>
    </>
  );
};

export default App;
