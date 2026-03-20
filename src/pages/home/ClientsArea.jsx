import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/formatters";
import PropTypes from "prop-types";
import CardVisual from "./CardVisual";

const ClientsArea = ({ allClients }) => {
  return (
    <section className="flex-3 mt-8" aria-labelledby="clients-title">
      <h2
        className="text-xl text-light-gray font-secondary font-bold md:col-span-3 xl:col-span-4 mb-2"
        id="clients-title"
      >
        Clientes
        <span className="text-prim1" aria-hidden="true">
          .
        </span>
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2">
        {allClients?.length === 0 && (
          <li className="col-span-4">
            <CardVisual>
              <span className="text-gray-medium m-auto block text-center">
                Nenhum cliente cadastrado
              </span>
            </CardVisual>
          </li>
        )}
        {allClients?.map((client) => {
          return (
            <li key={client.id}>
              <CardVisual
                as={Link}
                to={`/clients/${client.id}`}
                className="flex flex-wrap gap-4 justify-between items-center focus:outline-none focus:ring-2 focus:ring-prim1 focus:ring-offset-2 focus:rounded-lg hover:scale-[1.01] hover:shadow-xl transition duration-300 ease-in-out focus:ring-offset-gray-dark"
              >
                <h3 className="text-xl font-secondary font-bold w-full">
                  {client.name}
                </h3>
                <span className="text-gray-medium w-full flex gap-2 justify-between">
                  Ordens de Serviço:
                  <strong className="border border-green-secondary rounded-sm w-7 h-7 flex items-center justify-center bg-green-primary text-green-secondary">
                    {formatNumber(client.total_orders ?? 0)}
                  </strong>
                </span>
              </CardVisual>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

ClientsArea.propTypes = {
  allClients: PropTypes.array,
};

export default ClientsArea;
