import { Link } from "react-router-dom";
import { formatRelativeDate, formatCurrency } from "../../utils/formatters";
import CardVisual from "./CardVisual";
import PropTypes from "prop-types";

const LastOs = ({ lastOs }) => {
  return (
    <section className="flex-2 h-full mt-8" aria-labelledby="last-os-title">
      <h2
        className="text-xl text-light-gray font-secondary font-bold mb-4"
        id="last-os-title"
      >
        Últimas OS
        <span className="text-prim1" area-hidden="true">
          .
        </span>
      </h2>
      <ul className="flex flex-col gap-2">
        {lastOs?.length === 0 && (
          <li className="col-span-4">
            <CardVisual className="h-49 flex justify-center items-center">
              <span className="text-gray-medium m-auto block text-center">
                Nenhuma O.S cadastrada. Cadastre para visualizar as mais
                recentes.
              </span>
            </CardVisual>
          </li>
        )}
        {lastOs?.map((os) => {
          return (
            <li key={os.id}>
              <CardVisual
                as={Link}
                className="flex items-center gap-2 flex-wrap focus:outline-none focus:ring-2 focus:ring-prim1 focus:ring-offset-2 focus:rounded-lg hover:scale-[1.01] hover:shadow-xl transition duration-300 ease-in-out focus:ring-offset-gray-dark"
                to={`/service-orders/${os.id}`}
              >
                <span
                  className="bg-gray-dark font-medium text-white rounded-sm p-1 flex items-center justify-center font-technical"
                  aria-label={`Ordem de serviço ${os.code}`}
                >
                  {os.code}
                </span>
                <h3
                  className="flex-1 font-medium truncate"
                  title={os.client_name}
                >
                  {os.client_name}
                </h3>
                <span className="text-green-secondary font-bold mr-2">
                  {formatCurrency(os.total)}
                </span>
                <time
                  className="text-gray-medium text-sm w-full"
                  dateTime={os.created_at}
                >
                  {formatRelativeDate(os.created_at)}
                </time>
              </CardVisual>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

LastOs.propTypes = {
  lastOs: PropTypes.array.isRequired,
};

export default LastOs;
