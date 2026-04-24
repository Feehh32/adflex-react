import ChargeIcon from "../../assets/icons/charge-icon.svg?react";

const SummarySection = () => {
  return (
    <section
      className="flex flex-col gap-4 bg-gray-darker p-4 rounded-lg shadow-lg border border-gray-dark"
      aria-labelledby="summary-section-title"
    >
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg border border-prim2/50 bg-gray-input inline-block">
          <ChargeIcon aria-hidden="true" className="w-6 h-6" />
        </div>
        <div>
          <h2
            className="text-lg md:text-xl text-light-gray font-secondary font-bold"
            id="service-section-title"
          >
            Resumo
          </h2>
          <span className="text-sm text-gray-medium">
            O valor total será calculado ao salvar a ordem de serviço (O.S).
          </span>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
