import PropTypes from "prop-types";
const ButtonSpinner = ({ color = "prim2" }) => {
  return (
    <span role="status" className="inline-flex items-center justify-center">
      <span className="sr-only">Carregando...</span>
      <span
        className={`border-4 border-gray-dark  border-t-${color} w-6 h-6 rounded-full animate-spin`}
      ></span>
    </span>
  );
};

ButtonSpinner.propTypes = {
  color: PropTypes.string,
};

export default ButtonSpinner;
