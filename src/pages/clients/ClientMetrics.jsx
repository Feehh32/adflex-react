import DeleteIcon from "../../assets/icons/delete-icon.svg?react";
import { formatCurrency } from "../../utils/formatters";
import PropTypes from "prop-types";

const ClientMetrics = ({ metrics, onDeleteClick, isDeleted }) => {
  return (
    <aside className="flex flex-col gap-4 sticky top-2">
      <div className="flex flex-col gap-2 ">
        <div className="bg-gray-darker rounded-md py-4 px-8 shadow-md w-full">
          <span className="font-secondary text-gray-medium">
            Valor padrão por m²
          </span>
          <p className="text-xl font-semibold mt-1">
            {formatCurrency(metrics?.charge)}
          </p>
        </div>
        <div className="bg-gray-darker rounded-md py-4 px-8 shadow-md w-full">
          <p className="font-secondary text-gray-medium">
            Faturamento mensal
          </p>
          <p className="text-xl font-semibold mt-1">
            {formatCurrency(metrics?.monthly_revenue)}
          </p>
        </div>
        <div className="bg-gray-darker rounded-md py-4 px-8 shadow-md w-full">
          <p className="font-secondary text-gray-medium">Total de OS</p>
          <p className="text-xl font-semibold mt-1">{metrics?.total_orders}</p>
        </div>
      </div>
      {!isDeleted && (
        <div className="bg-gray-darker rounded-md py-4 px-8 shadow-md w-full">
          <button
            type="button"
            className="focus-visible w-full flex items-center justify-center gap-2 py-2 rounded-md border-2 border-red text-red transition duration-300 ease-in-out hover:text-white  hover:bg-red cursor-pointer shadow-md font-bold"
            onClick={onDeleteClick}
          >
            <DeleteIcon aria-hidden="true" className="w-3 h-3" />
            Excluir cliente
          </button>
        </div>
      )}
    </aside>
  );
};

ClientMetrics.propTypes = {
  metrics: PropTypes.object,
  onDeleteClick: PropTypes.func,
  isDeleted: PropTypes.bool,
};

export default ClientMetrics;
