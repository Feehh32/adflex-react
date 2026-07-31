import PropTypes from "prop-types";
import Logo from "../../assets/logoColorida.svg?react";

const Spinner = ({ title }) => {
  return (
    <div role="status" aria-live="polite">
      <p className="text-2xl md:text-[32px] font-secondary font-bold">
        {title}
        <span className="text-prim1" aria-hidden="true">
          {title ? "." : ""}
        </span>
      </p>
      <div
        className="flex items-center justify-center py-16"
        aria-hidden="true"
      >
        <div className="relative w-16 h-16">
          {/* círculo girando */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-dark border-t-prim2 animate-spin"></div>

          {/* logo no centro */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Logo className="w-8 h-8" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

Spinner.propTypes = {
  title: PropTypes.string,
};

export default Spinner;
