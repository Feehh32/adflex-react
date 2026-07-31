import PropTypes from "prop-types";
const HideMeasurementsSwitch = ({ register }) => {
  return (
    <label
      htmlFor="hide-measurements"
      className="flex items-center gap-3 cursor-pointer select-none self-end"
    >
      <span className="text-gray-400 text-sm font-medium">
        Esconder medidas nos itens
      </span>
      <span className="relative inline-flex items-center">
        <input
          id="hide-measurements"
          type="checkbox"
          className="sr-only peer absolute "
          {...register("hide_measure")}
        />
        <div
          className="
          peer-focus-visible:ring-2 
        peer-focus-visible:ring-prim1 
          peer-focus-visible:ring-offset-2 
        peer-focus-visible:ring-offset-gray-darker
  
          w-12 h-6 bg-[#333] peer-focus:outline-none rounded-full peer 
          peer-checked:after:translate-x-6 peer-checked:after:border-white 
          after:content-[''] after:absolute after:top-1 after:left-1 
          after:bg-gray-medium after:border-gray-300 after:border after:rounded-full 
          after:h-4 after:w-4 after:transition-all 
          peer-checked:bg-prim2 after:duration-300
          peer-checked:after:bg-white border border-gray-medium"
        />
      </span>
    </label>
  );
};

HideMeasurementsSwitch.propTypes = {
  register: PropTypes.func.isRequired,
};

export default HideMeasurementsSwitch;
