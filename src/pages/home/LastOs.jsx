import { Link } from "react-router-dom";
import { formatRelativeDate, formatCurrency } from "../../utils/formatters";
import CardVisual from "../../components/UI/CardVisual";
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
          const isClientDeleted = !!os.deleted_at;
          return (
            <li key={os.id}>
              <CardVisual
                as={isClientDeleted ? "div" : Link}
                disabled
                className={`
                  flex items-center gap-2 flex-wrap transition duration-300 ease-in-out
                  ${
                    isClientDeleted
                      ? "opacity-60 grayscale cursor-default"
                      : "hover:scale-[1.01] hover:shadow-xl cursor-pointer"
                  }
                `}
                to={!isClientDeleted ? `/service-orders/${os.id}` : undefined}
              >
                <span
                  className="bg-gray-dark font-medium text-white rounded-sm p-1 flex items-center justify-center font-technical"
                  aria-label={`Ordem de serviço ${os.code}`}
                >
                  {os.code}
                </span>
                <div className="flex-1 flex items-center gap-4 flex-wrap">
                  <h3
                    className={`font-medium truncate ${
                      isClientDeleted ? "text-gray-medium" : ""
                    }`}
                    title={os.client_name}
                  >
                    {os.client_name}
                  </h3>
                  {isClientDeleted && (
                    <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded bg-red/10 text-red/80 border border-red/20">
                      desativado
                    </span>
                  )}
                </div>

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
