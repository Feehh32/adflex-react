import InfoIcon from "../../assets/icons/info-icon.svg?react";

const OsInfo = () => {
  return (
    <section
      className="flex gap-3 text-xs items-start p-4 bg-gray-darker rounded-lg shadow-lg border border-gray-dark text-light-gray"
      aria-labelledby="osSidebar-info-title"
    >
      <h2
        className="text-lg font-bold font-secondary sr-only"
        id="osSidebar-info-title"
      >
        INFORMAÇÕES
      </h2>
      <InfoIcon className="h-4 min-w-4 md:min-w-6 md:h-6" aria-hidden="true" />
      <div>
        <p>Esta é uma visualização da ordem de serviço.</p>

        <p>Utilize "Imprimir" para gerar o documento.</p>

        <p className="text-light-gray/70">
          Apenas a data pode ser alterada. Os demais dados são fixos após
          cadastro.
        </p>
      </div>
    </section>
  );
};

export default OsInfo;
