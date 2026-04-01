import DeleteIcon from "../../assets/icons/delete-icon.svg?react";
import { formatCurrency } from "../../utils/formatters";
import PropTypes from "prop-types";

const ClientMetrics = ({ metrics }) => {
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
          <span className="font-secondary text-gray-medium">
            Faturamento mensal
          </span>
          <p className="text-xl font-semibold mt-1">
            {formatCurrency(metrics?.monthly_revenue)}
          </p>
        </div>
        <div className="bg-gray-darker rounded-md py-4 px-8 shadow-md w-full">
          <span className="font-secondary text-gray-medium">Total de OS</span>
          <p className="text-xl font-semibold mt-1">{metrics?.total_orders}</p>
        </div>
      </div>
      <div className="bg-gray-darker rounded-md py-4 px-8 shadow-md w-full">
        <button className="focus-visible w-full flex items-center justify-center gap-2 py-2 rounded-md border-2 border-red text-red transition duration-300 ease-in-out hover:text-white  hover:bg-red cursor-pointer shadow-md font-bold">
          <DeleteIcon aria-hidden="true" className="w-4 h-4" />
          Excluir cliente
        </button>
      </div>
    </aside>
  );
};

ClientMetrics.propTypes = {
  metrics: PropTypes.object,
};

export default ClientMetrics;
