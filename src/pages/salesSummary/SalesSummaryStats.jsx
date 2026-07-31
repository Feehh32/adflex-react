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
        secondaryInfo={`${monthName}/${period.year}`}
        color="text-primary"
      />
      <StatsCard
        label="Vendeu mais"
        mainInfo={topClient?.client_name}
        secondaryInfo={formatCurrency(topClient?.total)}
        color="text-green-secondary"
      />
      <StatsCard
        label="Vendeu menos"
        mainInfo={lowestClient?.client_name}
        secondaryInfo={formatCurrency(lowestClient?.total)}
        color="text-red"
      />
      <StatsCard
        label="Clientes no período"
        mainInfo={clientsCount}
        secondaryInfo="com vendas"
        color="text-prim2"
      />
    </section>
  );
};

SalesSummaryStats.propTypes = {
  clientsCount: PropTypes.number.isRequired,
  topClient: PropTypes.shape({
    client_name: PropTypes.string,
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  period: PropTypes.shape({
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  lowestClient: PropTypes.shape({
    client_name: PropTypes.string,
    total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  companyTotal: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};

export default SalesSummaryStats;
