import { useState, useRef, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import Search from "../../assets/icons/search.svg?react";
import PropTypes from "prop-types";
const SearchClients = ({ allClients }) => {
  const [search, setSearch] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const itemsRef = useRef([]);
  const [isOpen, setIsOpen] = useState(false);

  // create a debounce on search
  const debouncedSearch = useDebounce(search, 300);

  // create a filter to search clients
  const filteredClients = useMemo(() => {
    const clients = allClients ?? [];

    if (debouncedSearch.length < 2) return [];

    return clients
      .filter((client) =>
        client.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      )
      .slice(0, 5);
  }, [allClients, debouncedSearch]);

  // handle with keyboard navigation on search input
  const handleKeyDown = (e) => {
    if (!filteredClients.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredClients.length - 1 ? prev + 1 : 0
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredClients.length - 1
      );
    }

    if (e.key === "Enter" && highlightedIndex >= 0) {
      e.preventDefault();
      setSearch("");
      setHighlightedIndex(-1);
      navigate(`/clients/${filteredClients[highlightedIndex].id}`);
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
      setHighlightedIndex(-1);
    }
  };

  // create a outside click to close the list of clients
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearch("");
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  //scroll follows the selection
  useEffect(() => {
    if (highlightedIndex >= 0) {
      itemsRef.current[highlightedIndex]?.scrollIntoView({
        block: "center",
      });
    }
  }, [highlightedIndex]);

  useEffect(() => {
    itemsRef.current = [];
  }, [filteredClients]);

  const displayValue =
    highlightedIndex >= 0
      ? filteredClients[highlightedIndex]?.name ?? search
      : search;
  return (
    <div
      ref={searchRef}
      className="flex w-full md:w-[40%] items-center focus-within:ring-2 focus-within:ring-prim1 rounded-lg border border-gray-dark relative"
    >
      <label htmlFor="client-search" className="sr-only">
        Buscar cliente pelo nome
      </label>
      <input
        className="w-full
      bg-gray-darker
      rounded-l-lg
      px-4 py-2.5
      text-text-primary
      placeholder:text-gray-medium
      focus:outline-none
      border-none
      transition"
        type="search"
        name="search"
        id="client-search"
        value={displayValue}
        placeholder="Buscar pelo nome do cliente"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls="client-list"
        aria-autocomplete="list"
        onChange={(e) => {
          setSearch(e.target.value);
          setHighlightedIndex(-1);
          setIsOpen(true);
        }}
        onKeyDown={handleKeyDown}
      />
      <span
        type="button"
        className="right-0 bg-gray-dark py-2.5 px-4 rounded-r-lg"
      >
        <Search />
      </span>
      <ul
        role="listbox"
        aria-labelledby="dropdown"
        id="client-list"
        spellCheck={false}
        className={`${
          isOpen && filteredClients?.length > 0 && debouncedSearch.length >= 2
            ? "flex"
            : "hidden"
        } flex-col gap-2 absolute w-full bg-gray-dark border border-light-gray shadow-lg top-12 z-50 p-4 mt-2 rounded-lg `}
      >
        {filteredClients?.map((client, index) => (
          <li
            key={client.id}
            role="option"
            ref={(el) => (itemsRef.current[index] = el)}
            className={`${
              index === highlightedIndex ? "bg-gray-darker" : ""
            } hover:bg-gray-darker p-2 rounded-lg`}
          >
            <Link onClick={() => setSearch("")} to={`/clients/${client.id}`}>
              {client.name}
            </Link>
          </li>
        ))}
        {search.length >= 2 && filteredClients.length === 0 && (
          <li className="text-gray-medium p-2">Nenhum cliente encontrado</li>
        )}
      </ul>
    </div>
  );
};

SearchClients.propTypes = {
  allClients: PropTypes.array.isRequired,
};

export default SearchClients;
