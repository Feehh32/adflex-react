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
        <table className="monthly-doc-info-table w-full table-fixed border-collapse">
          <tbody>
            <tr className="border-b border-gray-dark">
              <td className="pb-4" colSpan={2}>
                <span className="block text-xs uppercase text-gray-medium tracking-wide">
                  Cliente
                </span>
                <span className="block text-base font-medium text-text-primary">
                  {client?.name}
                </span>
              </td>
            </tr>

            <tr>
              <td className="w-1/2 pt-4 pr-4 align-top">
                <span className="block text-xs uppercase text-gray-medium tracking-wide">
                  Competência
                </span>
                <span className="block text-base font-medium text-text-primary">
                  {`${monthName}/${year}`}
                </span>
              </td>

              <td className="w-1/2 pt-4 pl-4 align-top">
                <span className="block text-xs uppercase text-gray-medium tracking-wide">
                  Emissão
                </span>
                <span className="block text-base font-medium text-text-primary">
                  {formatLongDate(issuanceDate)}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="monthly-doc-info-table w-full table-fixed border-collapse">
          <tbody>
            <tr>
              <td className="w-1/2 pr-4 align-top">
                <span className="block text-xs uppercase text-gray-medium tracking-wide">
                  Email
                </span>
                <div className="flex gap-2 flex-col">
                  <span className="block text-base font-medium text-text-primary wrap-break-word">
                    {client?.email_primary}
                  </span>
                  {client?.email_secondary && (
                    <span className="block text-base font-medium text-text-primary wrap-break-word">
                      {client?.email_secondary}
                    </span>
                  )}
                </div>
              </td>

              <td className="w-1/2 pl-4 align-top">
                <span className="block text-xs uppercase text-gray-medium tracking-wide">
                  Telefone
                </span>
                <div className="flex gap-2 flex-col">
                  <span className="block text-base font-medium text-text-primary">
                    {formatPhone(client?.phone_primary)}
                  </span>
                  {client?.phone_secondary && (
                    <span className="block text-base font-medium text-text-primary">
                      {formatPhone(client?.phone_secondary)}
                    </span>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
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
