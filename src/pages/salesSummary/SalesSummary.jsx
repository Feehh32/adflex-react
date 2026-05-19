import { useState } from "react";
import SalesSummaryForm from "./SalesSummaryForm";
import SalesSummaryStats from "./SalesSummaryStats";
import SalesSummaryList from "./SalesSummaryList";
import SalesSummaryEmptyState from "./SalesSummaryEmptyState";
import Spinner from "../../components/UI/Spinner";
import { useSalesSummary } from "../../hooks/useSalesSummary";

const SalesSummary = () => {
  const [hasSearched, setHasSearched] = useState(false);
  const { loading, salesSummary, fetchSalesSummary } = useSalesSummary();
  const hasResults = salesSummary?.sales_summary?.length > 0;
  const [period, setPeriod] = useState(null);

  const handleSearch = async (month, year) => {
    setHasSearched(true);
    setPeriod({ month, year });
    await fetchSalesSummary(month, year);
  };

  return (
    <div className="flex flex-col gap-6">
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
      <SalesSummaryForm onSubmit={handleSearch} loading={loading} />
      {loading && <Spinner title="Carregando resumo de vendas..." />}

      {!loading &&
        hasSearched &&
        (hasResults ? (
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
        ) : (
          <SalesSummaryEmptyState />
        ))}
    </div>
  );
};

export default SalesSummary;
