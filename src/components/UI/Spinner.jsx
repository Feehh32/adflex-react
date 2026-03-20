import React from "react";
import Logo from "../../assets/logoColorida.svg?react";

const Spinner = ({ title }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-[32px] font-secondary font-bold">
        {title}
        <span className="text-prim1">.</span>
      </h1>
      <div className="flex items-center justify-center py-16">
        <div className="relative w-16 h-16">
          {/* círculo girando */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-dark border-t-prim2 animate-spin"></div>

          {/* logo no centro */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Logo className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
