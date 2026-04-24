import ClipboardIcon from "../../assets/icons/clipboard-icon.svg?react";

import ClientNameSelect from "./ClientNameSelect";
import HideMeasurementsSwitch from "./HideMeasurementsSwitch";

const MainDataSection = ({
  clients,
  clientIdFromUrl,
  errorSelect,
  register,
}) => {
  return (
    <section
      className="flex flex-col gap-4 bg-gray-darker p-4 rounded-lg shadow-lg border border-gray-dark"
      aria-labelledby="main-data-osForm-section-title"
    >
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg border border-prim2/50 bg-gray-input inline-block">
          <ClipboardIcon aria-hidden="true" className="w-6 h-6" />
        </div>
        <div>
          <h2
            className="text-lg md:text-xl text-light-gray font-secondary font-bold"
            id="main-data-osForm-section-title"
          >
            Dados da O.S
          </h2>
          <span className="text-sm text-gray-medium">
            Informações principais da ordem de serviço (O.S).
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <ClientNameSelect
          clients={clients}
          clientIdFromUrl={clientIdFromUrl}
          error={errorSelect}
          register={register}
        />
        <HideMeasurementsSwitch register={register} />
      </div>
    </section>
  );
};

export default MainDataSection;
