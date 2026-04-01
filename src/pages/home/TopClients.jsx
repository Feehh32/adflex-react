import { Link } from "react-router-dom";
import { formatNumber, formatCurrency } from "../../utils/formatters";
import PropTypes from "prop-types";
import CardVisual from "../../components/UI/CardVisual";

const TopClients = ({ topClients }) => {
  return (
    <section className="flex-3 h-full mt-8" aria-labelledby="top-clients-title">
      <h2
        className="text-xl text-light-gray font-secondary font-bold mb-4"
        id="top-clients-title"
      >
        TOP 3 clientes do mês
        <span className="text-prim1" aria-hidden="true">
          .
        </span>
      </h2>
      <ul className="flex flex-col gap-2">
        {topClients?.length === 0 && (
          <li className="col-span-4">
            <CardVisual className="h-49 flex justify-center items-center">
              <span className="text-gray-medium m-auto block text-center">
                Nenhum cliente cadastrado. Cadastre clientes para visualizar o
                TOP 3.
              </span>
            </CardVisual>
          </li>
        )}
        {topClients?.map((client, index) => {
          return (
            <li key={client.id}>
              <CardVisual
                as={Link}
                className="flex items-center gap-3 flex-wrap focus-visible hover:scale-[1.01] hover:shadow-xl transition duration-300 ease-in-out focus:ring-offset-gray-dark"
                to={`/clients/${client.id}`}
              >
                <span
                  className={`${
                    index === 0 ? "bg-prim2" : "bg-gray-dark"
                  } font-medium text-white rounded-sm w-7 h-7 flex items-center justify-center`}
                >
                  {index + 1}
                </span>
                <h3 className="flex-1 font-medium truncate" title={client.name}>
                  {client.name}
                </h3>
                <p className="text-gray-medium whitespace-nowrap">
                  <span className="text-green-secondary font-bold mr-2">
                    {formatCurrency(client.monthly_revenue)}
                  </span>
                  no mês
                </p>
                <span className="text-gray-medium text-sm w-full">
                  {" "}
                  {formatNumber(client.os_count)} O.S
                </span>
              </CardVisual>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

TopClients.propTypes = {
  topClients: PropTypes.array.isRequired,
};

export default TopClients;
