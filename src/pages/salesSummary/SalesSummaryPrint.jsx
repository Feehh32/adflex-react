import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/formatters";

const formatSalesSummaryPeriod = (period) => {
  const date = new Date(period.year, period.month - 1);

  return new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
  }).format(date);
};

const SalesSummaryPrint = ({ salesSummary, period }) => {
  if (!salesSummary || !period) return null;

  return (
    <section className="sales-summary-print hidden flex-col gap-6 text-black">
      <header className="border-b pb-4">
        <h1 className="text-3xl font-bold">Resumo de vendas</h1>

        <span className="text-sm">{formatSalesSummaryPeriod(period)}</span>
      </header>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <strong>Total vendido:</strong>
          {formatCurrency(salesSummary.company_total)}
        </div>

        <div>
          <strong>Clientes no período:</strong> {salesSummary.clients_count}
        </div>

        <div>
          <strong>Cliente com maior faturamento:</strong>
          {salesSummary.top_client?.client_name}
        </div>

        <div>
          <strong>Cliente com menor faturamento:</strong>
          {salesSummary.lowest_client?.client_name}
        </div>
      </div>

      <table
        className="w-full border-collapse text-sm"
        aria-label="Resumo de vendas por cliente"
      >
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Cliente</th>

            <th className="text-right py-2">Total</th>
          </tr>
        </thead>

        <tbody>
          {(salesSummary.sales_summary ?? []).map((client) => (
            <tr key={client.client_id} className="border-b">
              <td className="py-2 pr-4">{client.client_name}</td>

              <td className="py-2 text-right">
                {formatCurrency(client.total)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

SalesSummaryPrint.propTypes = {
  salesSummary: PropTypes.shape({
    clients_count: PropTypes.number,
    company_total: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    lowest_client: PropTypes.shape({
      client_name: PropTypes.string,
    }),
    top_client: PropTypes.shape({
      client_name: PropTypes.string,
    }),
    sales_summary: PropTypes.arrayOf(
      PropTypes.shape({
        client_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
          .isRequired,
        client_name: PropTypes.string.isRequired,
        total: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
          .isRequired,
      }),
    ),
  }),
  period: PropTypes.shape({
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  }),
};

export default SalesSummaryPrint;
