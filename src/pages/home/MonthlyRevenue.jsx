import { formatCurrency, formatNumber } from "../../utils/formatters";
import PropTypes from "prop-types";
import CardVisual from "../../components/UI/CardVisual";

const MonthlyRevenue = ({ totalOS, monthlyRevenue }) => {
  if (totalOS === 0)
    return (
      <CardVisual
        as="section"
        className="mt-8 h-41.25 flex justify-center items-center"
      >
        <span className="text-gray-medium">
          Atualizado até {new Date().toLocaleDateString()}
        </span>
      </CardVisual>
    );

  return (
    <CardVisual
      as="section"
      className="flex gap-4 mt-8 flex-wrap justify-between items-center"
      aria-labelledby="monthly-revenue-title"
    >
      <div className="font-primary flex flex-col gap-2 min-w-62.5">
        <h2
          className="text-xl text-light-gray font-secondary font-bold"
          id="monthly-revenue-title"
        >
          Total de O.S no mês
          <span className="text-prim1" aria-hidden="true">
            .
          </span>
        </h2>

        <span className="block text-[2rem]">{formatNumber(totalOS)}</span>
        <span className="text-gray-medium text-sm">Atualizado até hoje</span>
      </div>
      <div
        className="font-primary flex flex-col gap-2 p-4 bg-white/5 backdrop-blur-sm border-white/10 rounded-xl  w-full md:w-105 border
              "
      >
        <div>
          <h3 className="text-xl text-light-gray font-secondary">
            Faturamento do mês
          </h3>
          <span className="block text-[2rem]">
            {formatCurrency(monthlyRevenue)}
          </span>
          <span className="text-gray-medium text-sm">Atualizado até hoje</span>
        </div>
      </div>
    </CardVisual>
  );
};

MonthlyRevenue.propTypes = {
  totalOS: PropTypes.number.isRequired,
  monthlyRevenue: PropTypes.number.isRequired,
};

export default MonthlyRevenue;
