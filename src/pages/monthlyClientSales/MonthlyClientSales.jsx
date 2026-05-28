import { useState } from "react";
import MonthlyClientSalesForm from "./MonthlyClientSalesForm.jsx";
import MonthlyClientSalesDoc from "./MonthlyClientSalesDoc.jsx";
import EmptyState from "./EmptyState.jsx";
import PrintIcon from "../../assets/icons/print-icon.svg?react";
import Spinner from "../../components/UI/Spinner";
import { useMonthlyClientSales } from "../../hooks/useMonthlyClientSales";
import { useSelectClients } from "../../hooks/useSelectClients.js";

const MonthlyClientSales = () => {
  const issuanceDate = new Date().toISOString();
  const handlePrint = () => window.print();
  const {
    loading,
    monthlyClientSales,
    fetchMonthlyClientSales,
    hasResults,
    hasSearched,
  } = useMonthlyClientSales();
  const { loadingClients, clients } = useSelectClients();
  const [period, setPeriod] = useState(null);

  const handleSearch = async (client, month, year) => {
    setPeriod({ month, year });
    await fetchMonthlyClientSales(client, month, year);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="monthly-sales-screen flex flex-col gap-6">
        <div className="flex justify-between items-center gap-6">
          <div>
            <h1 className="text-2xl md:text-[32px] font-secondary font-bold">
              Balanço Mensal
              <span className="text-prim1" aria-hidden="true">
                .
              </span>
            </h1>
            <span className="text-sm text-gray-medium">
              Visualize e imprima o fechamento mensal de um cliente.
            </span>
          </div>
          {hasResults && (
            <button
              className="hidden md:flex focus-visible py-2 px-4 font-semibold bg-prim2 border border-prim1 rounded-md shadow-md hover:scale-102 transition duration-300 ease-in-out text-gray-darker cursor-pointer w-full md:w-auto items-center justify-center gap-2"
              type="button"
              onClick={handlePrint}
            >
              <PrintIcon aria-hidden="true" className="w-5 h-5" />
              Imprimir
            </button>
          )}
        </div>

        <MonthlyClientSalesForm
          loading={loading}
          onSubmit={handleSearch}
          loadingClients={loadingClients}
          clients={clients}
        />

        {loading && (
          <Spinner title="Carregando balanço de vendas do cliente..." />
        )}

        {!loading && hasResults && (
          <MonthlyClientSalesDoc
            issuanceDate={issuanceDate}
            monthlyClientSales={monthlyClientSales}
            period={period}
          />
        )}
        {!loading && !hasResults && hasSearched && (
          <EmptyState
            clientName={monthlyClientSales.client.name}
            period={period}
          />
        )}
        {hasResults && (
          <button
            className="md:hidden focus-visible md:mt-7 py-2 px-4 font-semibold bg-prim2 border border-prim1 rounded-md shadow-md hover:scale-102 transition duration-300 ease-in-out text-gray-darker cursor-pointer w-full md:w-auto flex items-center justify-center gap-2"
            type="button"
            onClick={handlePrint}
          >
            <PrintIcon aria-hidden="true" className="w-5 h-5" />
            Imprimir
          </button>
        )}
      </div>
      {hasResults && (
        <div className="monthly-sales-print hidden">
          <MonthlyClientSalesDoc
            issuanceDate={issuanceDate}
            monthlyClientSales={monthlyClientSales}
            period={period}
          />
        </div>
      )}
    </div>
  );
};

export default MonthlyClientSales;
