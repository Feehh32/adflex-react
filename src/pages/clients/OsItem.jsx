import CardVisual from "../../components/UI/CardVisual";
import { Link } from "react-router-dom";
import { formatCurrency, formatLongDate } from "../../utils/formatters";
import PropTypes from "prop-types";

const OsItem = ({ order }) => {
  return (
    <CardVisual
      as={Link}
      to={`/service-order-page/${order?.id}`}
      className="border border-gray-dark rounded-md p-4 hover:scale-[1.01] transition  focus:ring-offset-gray-dark focus-visible flex flex-wrap md:grid md:grid-cols-[auto_1fr_100px] gap-4 items-center"
    >
      <p className="bg-gray-dark font-medium text-white rounded-sm flex px-2 py-1 font-technical">
        {`#${order?.code}`}
      </p>

      <time
        dateTime={order?.created_at}
        className="font-bold justify-self-center"
      >
        {formatLongDate(order?.created_at)}
      </time>
      <p className="text-green-secondary justify-self-end">
        {formatCurrency(order?.total)}
      </p>
    </CardVisual>
  );
};

OsItem.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    code: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};

export default OsItem;
