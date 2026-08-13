import PropTypes from "prop-types";
import { formatLongDate, formatCurrency } from "../../utils/formatters";

const ServiceOrdersList = ({ serviceOrders, month, year }) => {
  const monthName = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(new Date(year, month - 1));
  return (
    <section
      className="monthly-orders flex flex-col gap-4"
      aria-labelledby="service-orders-title"
    >
      <div className="flex flex-col gap-1">
        <h3
          className="text-lg font-semibold text-text-primary"
          id="service-orders-title"
        >
          Ordens de Serviço
        </h3>

        <p className="text-sm text-gray-medium">
          Relação das ordens referentes ao período de
          {monthName} de {year}
        </p>
      </div>

      <div className="monthly-orders-cards flex flex-col md:grid gap-3">
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
                  #{serviceOrder.code}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wide text-gray-medium">
                  Data documental
                </span>

                <time
                  className="text-sm text-text-primary"
                  dateTime={serviceOrder.document_date}
                >
                  {formatLongDate(serviceOrder.document_date)}
                </time>
              </div>
              <div className="flex flex-col md:items-end md:min-w-32">
                <span className="text-xs uppercase tracking-wide text-gray-medium">
                  Total
                </span>

                <span className="text-lg font-bold text-text-primary">
                  {formatCurrency(serviceOrder.total)}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <table className="monthly-orders-table hidden w-full border-collapse text-sm">
        <caption className="sr-only">
          Relação das ordens de serviço do período.
        </caption>
        <thead>
          <tr>
            <th className="text-left" scope="col">
              Ordem de Serviço
            </th>
            <th className="text-left" scope="col">
              Data documental
            </th>
            <th className="text-right" scope="col">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {serviceOrders?.map((serviceOrder) => (
            <tr key={serviceOrder.id}>
              <td>#{serviceOrder.code}</td>
              <td>
                <time dateTime={serviceOrder.document_date}>
                  {formatLongDate(serviceOrder.document_date)}
                </time>
              </td>
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
    }),
  ).isRequired,
  month: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default ServiceOrdersList;
