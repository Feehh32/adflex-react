import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/home/Home.jsx";
import ClientPage from "./pages/clients/ClientPage.jsx";
import ClientForm from "./pages/ClientForm.jsx";
import ServiceOrderPage from "./pages/ServiceOrderPage.jsx";
import ServiceOrderForm from "./pages/ServiceOrderForm.jsx";
import MonthlySales from "./pages/MonthlySales.jsx";
import SalesSummary from "./pages/SalesSummary.jsx";

import GlobalErrorProvider from "./context/GlobalErrorProvider.jsx";

const App = () => {
  return (
    <GlobalErrorProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* Clients */}
          <Route path="/clients/:clientId" element={<ClientPage />} />
          <Route path="/clients/new" element={<ClientForm />} />
          <Route path="/clients/:clientId/edit" element={<ClientForm />} />

          {/* Service Orders */}
          <Route
            path="/service-orders/:clientId"
            element={<ServiceOrderPage />}
          />
          <Route path="/service-orders/new" element={<ServiceOrderForm />} />
          <Route
            path="/service-orders/clientId"
            element={<ServiceOrderForm />}
          />

          {/* Reports */}
          <Route path="/monthly-sales" element={<MonthlySales />} />
          <Route path="/sales-summary" element={<SalesSummary />} />
        </Route>
      </Routes>
    </GlobalErrorProvider>
  );
};

export default App;
