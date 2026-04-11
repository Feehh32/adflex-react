import CardVisual from "../../components/UI/CardVisual";
import OsItem from "./OsItem";
import SearchOs from "./SearchOs";
import PropTypes from "prop-types";

const OsArea = ({
  isDeleted,
  orders,
  nextPage,
  prevPage,
  pagination,
  isSearching,
  search,
  setSearch,
}) => {
  return (
    <section aria-labelledby="osArea-title">
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <h2
          className="text-xl text-light-gray font-secondary font-bold"
          id="osArea-title"
        >
          Ordens de serviço
          <span className="text-prim1" aria-hidden="true">
            .
          </span>
        </h2>
        <SearchOs search={search} setSearch={setSearch} />
      </div>

      <ul className="flex flex-col gap-2">
        {orders.length > 0 ? (
          orders.map((os) => (
            <li key={os.id}>
              <OsItem order={os} />
            </li>
          ))
        ) : (
          <li>
            <CardVisual className="h-49 flex justify-center items-center">
              <span className="text-gray-medium m-auto block text-center">
                {isSearching
                  ? "Nenhuma O.S encontrada com esse código."
                  : "Esse cliente ainda não tem nenhuma O.S cadastrada."}
              </span>
            </CardVisual>
          </li>
        )}
      </ul>

      <div
        className={`${
          isSearching ? "hidden" : "flex"
        } items-center justify-between mt-6 pt-4 border-t border-gray-dark/50`}
      >
        <span className="text-sm text-gray-medium">
          Página{" "}
          <span className="text-light-gray font-bold">{pagination.page}</span>{" "}
          de {pagination.total_pages}
        </span>

        <div className="flex gap-2">
          <button
            onClick={prevPage}
            disabled={pagination.page === 1 || isDeleted}
            className="px-4 py-2 text-sm font-medium rounded-md bg-gray-dark border border-gray-medium/20 hover:bg-gray-darker disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer focus-visible"
          >
            Anterior
          </button>
          <button
            onClick={nextPage}
            disabled={pagination.page === pagination.total_pages || isDeleted}
            className="px-4 py-2 text-sm font-medium rounded-md bg-gray-dark border border-gray-medium/20 hover:bg-gray-darker disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer focus-visible"
          >
            Próximo
          </button>
        </div>
      </div>
    </section>
  );
};

OsArea.propTypes = {
  orders: PropTypes.array.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  pagination: PropTypes.object.isRequired,
  isSearching: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  isDeleted: PropTypes.bool.isRequired,
};

export default OsArea;
