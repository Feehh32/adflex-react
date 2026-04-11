import PropTypes from "prop-types";
const InputField = ({
  label,
  name,
  id,
  type = "text",
  placeholder,
  required = false,
  autoComplete,
  Icon,
  width = "1/2",
  register,
  error,
  value,
  onChange,
}) => {
  const inputProps = register ? register(name) : { name, value, onChange };

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className={`text-sm font-medium flex gap-2 ${error && "text-red"}`}
      >
        {label} {required && <span className="text-prim1">*</span>}
      </label>
      <div
        className={`relative flex items-center w-full md:w-${width} focus-within:ring-2 focus-within:ring-prim1 rounded-lg border ${
          error ? "border-red" : "border-gray-dark"
        }  shadow-lg`}
      >
        {Icon && (
          <Icon
            className="w-4 h-4 absolute left-3 opacity-40"
            aria-hidden="true"
          />
        )}
        <input
          type={type}
          name={name}
          id={id}
          noValidate={true}
          autoComplete={autoComplete}
          {...inputProps}
          placeholder={placeholder}
          className={`w-full bg-gray-input rounded-lg py-2 pr-4 text-text-primary placeholder:text-gray-medium focus:outline-none transition ${
            Icon ? "pl-10" : "pl-4"
          }`}
        />
      </div>
      {error && (
        <span className="text-xs text-red">
          {error.message || "Preencha o campo corretamente"}
        </span>
      )}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
  Icon: PropTypes.element,
  width: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputField;
