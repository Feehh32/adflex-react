import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import ClientPage from "./pages/ClientPage.jsx";
import ClientForm from "./pages/ClientForm.jsx";
import ServiceOrderPage from "./pages/ServiceOrderPage.jsx";
import ServiceOrderForm from "./pages/ServiceOrderForm.jsx";
import MonthlySales from "./pages/MonthlySales.jsx";
import SalesSummary from "./pages/SalesSummary.jsx";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* Clients */}
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/clients/new" element={<ClientForm />} />
        <Route path="/clients/:clientId/edit" element={<ClientForm />} />

        {/* Service Orders */}
        <Route path="/service-orders" element={<ServiceOrderPage />} />
        <Route path="/service-orders/new" element={<ServiceOrderForm />} />

        {/* Reports */}
        <Route path="/monthly-sales" element={<MonthlySales />} />
        <Route path="/sales-summary" element={<SalesSummary />} />
      </Route>
    </Routes>
  );
};

export default App;
