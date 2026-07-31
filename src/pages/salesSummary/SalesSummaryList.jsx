import PropTypes from "prop-types";
import SalesSummaryItem from "./SalesSummaryItem";

const SalesSummaryList = ({ period, salesSummaryList }) => {
  return (
    <section
      className=" flex flex-col gap-4"
      aria-labelledby="sales-summary-list-title"
    >
      <h2
        className="text-lg md:text-xl text-light-gray font-secondary font-bold"
        id="sales-summary-list-title"
      >
        Vendas por cliente
      </h2>
      {salesSummaryList.map((sale) => (
        <SalesSummaryItem
          key={sale.client_id}
          client={sale.client_name}
          period={period}
          total={sale.total}
        />
      ))}
    </section>
  );
};

SalesSummaryList.propTypes = {
  period: PropTypes.shape({
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  salesSummaryList: PropTypes.arrayOf(
    PropTypes.shape({
      client_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      client_name: PropTypes.string.isRequired,
      total: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
    }),
  ).isRequired,
};

export default SalesSummaryList;
