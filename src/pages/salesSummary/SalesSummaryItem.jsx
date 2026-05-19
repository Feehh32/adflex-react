import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/formatters";

const SalesSummaryItem = ({ client, period, total }) => {
  const monthName = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(new Date(period.year, period.month - 1));
  return (
    <article className="flex flex-col gap-6 bg-gray-darker border border-gray-dark rounded-xl p-5 shadow-md transition hover:border-gray-medium">
      <div className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-gray-medium font-semibold">
          Cliente
        </span>

        <h3 className="text-lg font-semibold text-text-primary wrap-break-word">
          {client}
        </h3>
      </div>

      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-widest text-gray-medium font-semibold">
            Período
          </span>

          <span className="text-sm text-gray-light font-technical">
            {`${monthName}/${period.year}`}
          </span>
        </div>

        <div className="flex flex-col gap-1 text-left md:text-right">
          <span className="text-xs uppercase tracking-widest text-gray-medium font-semibold">
            Total Vendido
          </span>

          <span className="text-2xl font-semibold text-prim2 font-technical">
            {formatCurrency(total)}
          </span>
        </div>
      </div>
    </article>
  );
};

SalesSummaryItem.propTypes = {
  client: PropTypes.string.isRequired,
  period: PropTypes.shape({
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.string.isRequired,
};

export default SalesSummaryItem;
