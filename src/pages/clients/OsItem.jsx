import CardVisual from "../../components/UI/CardVisual";
import { Link } from "react-router-dom";
import { formatCurrency, formatLongDate } from "../../utils/formatters";
import PropTypes from "prop-types";

const OsItem = ({ order }) => {
  return (
    <CardVisual
      as={Link}
      to={`/service-orders/${order?.id}`}
      className="border border-gray-dark rounded-md p-4 hover:scale-[1.01] transition  focus:ring-offset-gray-dark focus-visible flex flex-wrap md:grid md:grid-cols-[auto_1fr_100px] gap-4 items-center"
    >
      <span className="bg-gray-dark font-medium text-white rounded-sm flex px-2 py-1 font-technical">
        {`#${order?.code}`}
      </span>

      <span className="font-bold justify-self-center">
        {formatLongDate(order?.created_at)}
      </span>
      <span className="text-green-secondary justify-self-end">
        {formatCurrency(order?.total)}
      </span>
    </CardVisual>
  );
};

OsItem.propTypes = {
  order: PropTypes.object,
};

export default OsItem;
