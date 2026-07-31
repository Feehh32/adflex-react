import PropTypes from "prop-types";
import DocHeader from "./DocHeader";
import ServiceOrdersList from "./ServiceOrdersList";
import DocumentClosing from "./DocumentClosing";

const MonthlyClientSalesDoc = ({
  issuanceDate,
  monthlyClientSales,
  period,
}) => {
  return (
    <article className="monthly-sales-doc flex flex-col gap-6 font-technical bg-gray-darker border border-gray-dark rounded-xl p-6 shadow-lg">
      <DocHeader
        client={monthlyClientSales.client}
        month={period.month}
        year={period.year}
        issuanceDate={issuanceDate}
      />
      <ServiceOrdersList
        serviceOrders={monthlyClientSales.serviceOrders}
        month={period.month}
        year={period.year}
      />
      <DocumentClosing closing={monthlyClientSales.closing} />
    </article>
  );
};

MonthlyClientSalesDoc.propTypes = {
  issuanceDate: PropTypes.string.isRequired,
  monthlyClientSales: PropTypes.shape({
    client: PropTypes.shape({
      email_primary: PropTypes.string,
      email_secondary: PropTypes.string,
      name: PropTypes.string.isRequired,
      phone_primary: PropTypes.string,
      phone_secondary: PropTypes.string,
    }).isRequired,
    closing: PropTypes.string.isRequired,
    serviceOrders: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  period: PropTypes.shape({
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default MonthlyClientSalesDoc;
