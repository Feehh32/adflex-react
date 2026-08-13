import PropTypes from "prop-types";
import { formatPhone } from "../../utils/formatPhone";
import { formatLongDate } from "../../utils/formatters";

const DocHeader = ({ client, month, year, issuanceDate }) => {
  const monthName = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(new Date(year, month - 1));

  return (
    <header className="monthly-doc-header flex flex-col gap-4 border-b border-gray-dark pb-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-text-primary">Balanço Mensal</h2>

        <p className="text-sm text-gray-medium">Fechamento mensal do cliente</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="border-b border-gray-dark pb-4">
          <span className="block text-xs uppercase tracking-wide text-gray-medium">
            Cliente
          </span>

          <span className="block text-base font-medium text-text-primary">
            {client?.name}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-0">
          <div className="md:pr-4">
            <span className="block text-xs uppercase tracking-wide text-gray-medium">
              Competência
            </span>

            <span className="block text-base font-medium text-text-primary">
              {`${monthName}/${year}`}
            </span>
          </div>

          <div className="md:pl-4">
            <span className="block text-xs uppercase tracking-wide text-gray-medium">
              Emissão
            </span>

            <time
              dateTime={issuanceDate}
              className="block text-base font-medium text-text-primary"
            >
              {formatLongDate(issuanceDate)}
            </time>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-0">
          <div className="md:pr-4">
            <span className="block text-xs uppercase tracking-wide text-gray-medium">
              Email
            </span>

            <div className="flex flex-col gap-2">
              <span className="block wrap-break-word text-base font-medium text-text-primary">
                {client?.email_primary}
              </span>

              {client?.email_secondary && (
                <span className="block wrap-break-word text-base font-medium text-text-primary">
                  {client?.email_secondary}
                </span>
              )}
            </div>
          </div>

          <div className="md:pl-4">
            <span className="block text-xs uppercase tracking-wide text-gray-medium">
              Telefone
            </span>

            <div className="flex flex-col gap-2">
              <span className="block text-base font-medium text-text-primary">
                {formatPhone(client?.phone_primary)}
              </span>

              {client?.phone_secondary && (
                <span className="block text-base font-medium text-text-primary">
                  {formatPhone(client?.phone_secondary)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

DocHeader.propTypes = {
  client: PropTypes.shape({
    email_primary: PropTypes.string,
    email_secondary: PropTypes.string,
    name: PropTypes.string.isRequired,
    phone_primary: PropTypes.string,
    phone_secondary: PropTypes.string,
  }).isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  issuanceDate: PropTypes.string.isRequired,
};

export default DocHeader;
