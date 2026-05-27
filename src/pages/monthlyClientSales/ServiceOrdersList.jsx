import PropTypes from "prop-types";
import { formatLongDate, formatCurrency } from "../../utils/formatters";

const ServiceOrdersList = ({ serviceOrders, month, year }) => {
  const monthName = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(new Date(year, month - 1));
  return (
    <section className="monthly-orders flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-text-primary">
          Ordens de Serviço
        </h3>

        <p className="text-sm text-gray-medium">
          Rela&ccedil;&atilde;o das ordens referentes ao per&iacute;odo de
          {monthName} de {year}
        </p>
      </div>

      <div className="monthly-orders-cards flex flex-col gap-3">
        {serviceOrders?.map((serviceOrder) => (
          <article
            key={serviceOrder?.id}
            className="avoid-break border border-gray-dark rounded-xl p-4"
          >
            <div className="flex items-start justify-between flex-col md:flex-row gap-4">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wide text-gray-medium">
                  Ordem de Serviço
                </span>

                <span className="text-lg font-semibold text-text-primary">
                  #{serviceOrder?.code}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wide text-gray-medium">
                  Data documental
                </span>

                <span className="text-sm text-text-primary">
                  {formatLongDate(serviceOrder?.document_date)}
                </span>
              </div>
              <div className="flex flex-col md:items-end">
                <span className="text-xs uppercase tracking-wide text-gray-medium">
                  Total
                </span>

                <span className="text-lg font-bold text-text-primary">
                  {formatCurrency(serviceOrder?.total)}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <table className="monthly-orders-table hidden w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="text-left">Ordem de Serviço</th>
            <th className="text-left">Data documental</th>
            <th className="text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {serviceOrders?.map((serviceOrder) => (
            <tr key={serviceOrder.id}>
              <td>#{serviceOrder.code}</td>
              <td>{formatLongDate(serviceOrder.document_date)}</td>
              <td className="text-right">
                {formatCurrency(serviceOrder.total)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

ServiceOrdersList.propTypes = {
  serviceOrders: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      document_date: PropTypes.string.isRequired,
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      total: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
    })
  ).isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default ServiceOrdersList;
