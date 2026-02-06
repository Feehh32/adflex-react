import PropTypes from "prop-types";

const HamburgerButton = ({ isOpen, onClick, label = "Abrir menu" }) => {
  return (
    <button
      type="button"
      aria-label={label}
      aria-expanded={isOpen}
      onClick={onClick}
      className="
        group
        relative
        flex
        md:hidden
        h-10
        w-10
        items-center
        justify-center
        rounded-md
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-prim1
        focus-visible:ring-offset-2
        focus-visible:ring-offset-gray-darker
      "
    >
      <span
        className={`
          absolute h-0.5 w-6 bg-current transition-all duration-300
          ${isOpen ? "rotate-45" : "-translate-y-2"}
        `}
      />
      <span
        className={`
          absolute h-0.5 w-6 bg-current transition-all duration-300
          ${isOpen ? "opacity-0" : ""}
        `}
      />
      <span
        className={`
          absolute h-0.5 w-6 bg-current transition-all duration-300
          ${isOpen ? "-rotate-45" : "translate-y-2"}
        `}
      />
    </button>
  );
};

HamburgerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default HamburgerButton;
