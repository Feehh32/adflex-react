import PropTypes from "prop-types";
const InputField = ({
  label,
  name,
  id,
  type = "text",
  placeholder,
  required = false,
  Icon,
  width = "w-1/2",
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium flex gap-2">
        {label} {required && <span className="text-prim1">*</span>}
      </label>
      <div className={`relative flex items-center w-full md:${width}`}>
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
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full bg-gray-input rounded-lg py-2 pr-4 text-text-primary placeholder:text-gray-medium focus:outline-none border border-gray-dark transition shadow-lg ${
            Icon ? "pl-10" : "pl-4"
          }`}
        />
      </div>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  Icon: PropTypes.element,
  width: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputField;
