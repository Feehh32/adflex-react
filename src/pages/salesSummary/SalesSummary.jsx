import { useState } from "react";
import SalesSummaryForm from "./SalesSummaryForm";
import SalesSummaryStats from "./SalesSummaryStats";
import SalesSummaryList from "./SalesSummaryList";
import SalesSummaryEmptyState from "./SalesSummaryEmptyState";
import SalesSummaryPrint from "./SalesSummaryPrint";
import PrintIcon from "../../assets/icons/print-icon.svg?react";
import Spinner from "../../components/UI/Spinner";
import { useSalesSummary } from "../../hooks/useSalesSummary";
import { usePageMetadata } from "../../hooks/usePageMetadata";

const SalesSummary = () => {
  const { loading, salesSummary, fetchSalesSummary, hasResults, hasSearched } =
    useSalesSummary();

  usePageMetadata({ title: "Resumo de vendas" });

  const [period, setPeriod] = useState(null);
  const handlePrint = () => window.print();

  const handleSearch = async (month, year) => {
    setPeriod({ month, year });
    await fetchSalesSummary(month, year);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="sales-summary-screen flex flex-col gap-6">
        <div className="flex gap-6 items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-[32px] font-secondary font-bold">
              Resumo de vendas
              <span className="text-prim1" aria-hidden="true">
                .
              </span>
            </h1>
            <span className="text-sm text-gray-medium">
              Veja aqui o fechamento mensal de vendas da empresa.
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

        <SalesSummaryForm onSubmit={handleSearch} loading={loading} />

        {loading && <Spinner title="Carregando resumo de vendas..." />}
        {!loading && hasResults && (
          <>
            <SalesSummaryStats
              clientsCount={salesSummary?.clients_count}
              lowestClient={salesSummary?.lowest_client}
              topClient={salesSummary?.top_client}
              companyTotal={salesSummary?.company_total}
              period={period}
            />
            <SalesSummaryList
              salesSummaryList={salesSummary?.sales_summary}
              period={period}
            />
          </>
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
        {!loading && !hasResults && hasSearched && (
          <SalesSummaryEmptyState period={period} />
        )}
      </div>
      {hasResults && (
        <SalesSummaryPrint salesSummary={salesSummary} period={period} />
      )}
    </div>
  );
};

export default SalesSummary;
