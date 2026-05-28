import PropTypes from "prop-types";
import SearchX from "../../assets/icons/search-x.svg?react";

const SalesSummaryEmptyState = ({ period }) => {
  const newDate = new Date(period.year, period.month - 1, 1);
  const downcaseMonthName = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(newDate);
  const monthName =
    downcaseMonthName.charAt(0).toUpperCase() + downcaseMonthName.slice(1);
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-gray-darker border border-gray-dark rounded-xl p-10 text-center shadow-md">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-input border border-gray-dark">
        <SearchX className="w-6 h-6 text-gray-medium" />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-text-primary">
          Nenhuma venda encontrada
        </h2>

        <p className="text-sm text-gray-medium max-w-md">
          {` Não existem vendas registradas para ${monthName} de ${period.year}.`}
        </p>
      </div>
    </section>
  );
};

SalesSummaryEmptyState.propTypes = {
  period: PropTypes.shape({
    year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    month: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
};

export default SalesSummaryEmptyState;
