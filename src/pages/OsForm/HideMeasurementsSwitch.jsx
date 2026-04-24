const HideMeasurementsSwitch = ({ register }) => {
  return (
    <div className="flex items-center gap-3 select-none self-end focus-visible">
      <span className="text-gray-400 text-sm font-medium">
        Esconder medidas nos itens
      </span>
      <label
        htmlFor="hideMeasure"
        className="relative inline-flex items-center cursor-pointer"
      >
        <input
          id="hideMeasure"
          type="checkbox"
          className="sr-only peer"
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
        ></div>
      </label>
    </div>
  );
};

export default HideMeasurementsSwitch;
