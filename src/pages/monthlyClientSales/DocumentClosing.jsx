import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/formatters";

const DocumentClosing = ({ closing }) => {
  return (
    <section className="monthly-closing avoid-break border-t border-b border-gray-dark py-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-text-primary">
            Fechamento do Período
          </h3>

          <p className="text-sm text-gray-medium">
            Consolidação financeira mensal
          </p>
        </div>

        <div className="monthly-closing-grid flex flex-col gap-4">
          <div className="monthly-closing-row flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-dark pb-4">
            <span className="text-sm uppercase tracking-wide text-gray-medium">
              Quantidade de O.S
            </span>

            <span className="text-lg font-semibold text-text-primary">
              {closing?.ordersCount}
            </span>
          </div>

          <div className="monthly-closing-row flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="text-sm uppercase tracking-wide text-gray-medium">
              Total vendido
            </span>

            <span className="md:text-2xl text-lg font-bold text-text-primary">
              {formatCurrency(closing?.totalAmount)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

DocumentClosing.propTypes = {
  closing: PropTypes.shape({
    ordersCount: PropTypes.number.isRequired,
    totalAmount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
      .isRequired,
  }).isRequired,
};

export default DocumentClosing;
