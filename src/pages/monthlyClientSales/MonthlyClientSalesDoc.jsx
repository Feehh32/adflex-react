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
        client={monthlyClientSales?.client}
        month={period.month}
        year={period.year}
        issuanceDate={issuanceDate}
      />
      <ServiceOrdersList
        serviceOrders={monthlyClientSales?.serviceOrders}
        month={period.month}
        year={period.year}
      />
      <DocumentClosing closing={monthlyClientSales?.closing} />
    </article>
  );
};

MonthlyClientSalesDoc.propTypes = {
  issuanceDate: PropTypes.string.isRequired,
  monthlyClientSales: PropTypes.object.isRequired,
  period: PropTypes.object.isRequired,
};

export default MonthlyClientSalesDoc;
