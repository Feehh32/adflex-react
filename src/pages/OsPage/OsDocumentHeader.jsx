import { formatLongDate } from "../../utils/formatters";
import OsLogo from "../../assets/img/logo-os.svg?react";
import PrimaryTel from "../../assets/icons/tel-primary-icon.svg?react";
import Email from "../../assets/icons/mail-icon-gray.svg?react";
import PropTypes from "prop-types";

const OsDocumentHeader = ({ code, document_date }) => {
  return (
    <header className="border-b border-gray-dark pb-6 font-technical">
      <div className="flex items-start flex-wrap gap-4 md:gap-6 justify-between md:justify-start">
        {/* Logo */}
        <OsLogo
          className=" w-16 h-16 md:w-22.5 md:h-22.5 order-first print:w-22.5 print:h-22.5"
          aria-hidden="true"
        />

        {/* Info principal */}
        <div className="text-left flex-1 min-w-50">
          <h2 className="font-semibold tracking-[0.2em] text-text-secondary">
            ORDEM DE SERVIÇO
          </h2>

          <p className="mt-2 text-sm text-text-secondary font-semibold">
            {formatLongDate(document_date)}
          </p>

          <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-2 print:flex-row print:gap-6">
            <p className="flex gap-2 items-center text-sm text-text-secondary wrap-break-word">
              <Email aria-hidden="true" className="w-4 h-4" />
              adm.xavier@hotmail.com
            </p>

            <p className="flex gap-2 items-center text-sm text-text-secondary">
              <PrimaryTel aria-hidden="true" className="w-4 h-4" />
              (11) 94285-8422
            </p>
          </div>
        </div>

        {/* Número da OS */}
        <p className="order-first md:order-last  w-1/2 md:w-auto text-right md:text-left mt-2 md:mt-0 md:ml-auto self-start text-xl font-bold text-prim2 px-3 py-0.5 md:bg-text-secondary  inline-block rounded-md print:bg-text-secondary print:order-last print:w-auto print:mt-0 print:text-left">
          O.S {code}
        </p>
      </div>

      {/* Endereço */}
      <p className="mt-4 text-[12px] text-text-secondary leading-relaxed break-all">
        Rua Cavatton, 57 Freguesia do Ó - São Paulo - SP - Cep: 02962-150
      </p>
    </header>
  );
};

OsDocumentHeader.propTypes = {
  code: PropTypes.string.isRequired,
  document_date: PropTypes.string.isRequired,
};

export default OsDocumentHeader;
