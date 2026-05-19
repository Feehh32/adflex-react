import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/formatters";
import StatsCard from "./StatsCard";

const SalesSummaryStats = ({
  clientsCount,
  lowestClient,
  topClient,
  companyTotal,
  period,
}) => {
  const monthName = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(new Date(period.year, period.month - 1));

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard
        label="Total de vendas"
        mainInfo={formatCurrency(companyTotal)}
        SecondaryInfo={`${monthName}/${period.year}`}
        color="text-primary"
      />
      <StatsCard
        label="Vendeu mais"
        mainInfo={topClient?.client_name}
        SecondaryInfo={formatCurrency(topClient?.total)}
        color="text-green-secondary"
      />
      <StatsCard
        label="Vendeu menos"
        mainInfo={lowestClient.client_name}
        SecondaryInfo={formatCurrency(lowestClient?.total)}
        color="text-red"
      />
      <StatsCard
        label="Clientes no período"
        mainInfo={clientsCount}
        SecondaryInfo="com vendas"
        color="text-prim2"
      />
    </section>
  );
};

SalesSummaryStats.propTypes = {
  clientsCount: PropTypes.number.isRequired,
  lowestClient: PropTypes.string.isRequired,
  topClient: PropTypes.string.isRequired,
  companyTotal: PropTypes.number.isRequired,
};

export default SalesSummaryStats;
