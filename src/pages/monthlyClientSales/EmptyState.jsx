import SearchX from "../../assets/icons/search-x.svg?react";
import PropTypes from "prop-types";

const EmptyState = ({ clientName, period }) => {
  const newDate = new Date(period.year, period.month - 1, 1);
  const downcaseMonthName = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(newDate);
  const monthName =
    downcaseMonthName.charAt(0).toUpperCase() + downcaseMonthName.slice(1);
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-gray-darker border border-gray-dark rounded-xl p-10 text-center shadow-md">
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-input border border-gray-dark">
        <SearchX
          className="w-6 h-6 text-gray-medium"
          aria-hidden="true"
          focusable="false"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-text-primary">
          Nenhuma venda encontrada
        </h2>

        <p className="text-sm text-gray-medium max-w-md">
          {`Não existem vendas registradas para ${clientName} em ${monthName} de ${period.year}.`}
        </p>
      </div>
    </section>
  );
};

EmptyState.propTypes = {
  clientName: PropTypes.string.isRequired,
  period: PropTypes.shape({
    month: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }),
};

export default EmptyState;
