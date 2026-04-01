import Search from "../../assets/icons/search.svg?react";
import PropTypes from "prop-types";

const SearchOs = ({ search, setSearch }) => {
  return (
    <div className="relative flex items-center md:mt-0 w-full md:w-auto">
      <label htmlFor="os-search" className="sr-only">
        Buscar OS
      </label>
      <Search className="w-5 h-5 absolute left-3 opacity-50" />
      <input
        id="os-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite o número da OS"
        type="search"
        className="w-full  bg-gray-darker py-2 pl-10 pr-4 rounded-md shadow-md placeholder:text-gray-medium placeholder:text-sm focus-within:ring-2 focus-within:ring-prim1 border border-gray-dark"
      />
    </div>
  );
};

SearchOs.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default SearchOs;
