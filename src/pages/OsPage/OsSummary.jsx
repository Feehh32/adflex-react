import { formatCurrency } from "../../utils/formatters";

const OsSummary = ({ total, services }) => {
  const budgetTotal = services.reduce((acc, service) => {
    if (service.pricing_mode === "manual") {
      return Number(acc) + Number(service.budget_value);
    } else {
      return acc;
    }
  }, 0);

  const calculatedTotal = services.reduce((acc, service) => {
    if (service.pricing_mode === "calculated") {
      return Number(acc) + Number(service.line_total);
    } else {
      return acc;
    }
  }, 0);

  return (
    <section
      className="flex flex-col gap-4 p-4 bg-gray-darker rounded-lg shadow-lg border border-gray-dark text-light-gray"
      aria-labelledby="osSidebar-summary-title"
    >
      <div className="flex flex-col gap-4">
        <h2
          id="osSidebar-summary-title"
          className="font-semibold text-lg font-secondary text-left"
        >
          RESUMO
        </h2>

        <hr className="-mx-4 border-t border-gray-dark" />
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-light-gray/70">Preço base</span>
          <span className="font-medium">
            {formatCurrency(services[0].unit_charge)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-light-gray/70">Valor calculado</span>
          <span className="font-medium">{formatCurrency(calculatedTotal)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-light-gray/70">Valor orçamento</span>
          <span className="font-medium">{formatCurrency(budgetTotal)}</span>
        </div>
      </div>

      <div className="border-t border-gray-dark pt-3">
        <div className="flex justify-between items-center">
          <span className="font-semibold uppercase tracking-wide">Total</span>

          <span className="text-lg font-bold text-green-secondary">
            {formatCurrency(total)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default OsSummary;
