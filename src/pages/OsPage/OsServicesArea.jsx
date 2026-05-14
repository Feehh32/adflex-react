import { formatCurrency } from "../../utils/formatters";
import PropTypes from "prop-types";

const OsServicesArea = ({ hideMeasure, services }) => {
  return (
    <section className="flex flex-col gap-6 py-6 font-technical">
      <h2 className="text-xs font-semibold tracking-[0.2em] text-text-secondary">
        SERVIÇOS
      </h2>

      {/* 🖥 DESKTOP (table) */}
      <div className="hidden print:block md:block overflow-hidden rounded-md border border-gray-medium">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-zinc-900 text-left text-[11px] font-semibold uppercase tracking-wide text-white">
              <th className="px-3 py-3 text-center">#</th>
              <th className="px-3 py-3">Serviço</th>
              <th className="px-3 py-3 text-center">Qtd</th>
              {!hideMeasure && <th className="px-3 py-3 text-center">Larg</th>}
              {!hideMeasure && <th className="px-3 py-3 text-center">Alt</th>}
              <th className="px-3 py-3 text-center">Esp.</th>
              <th className="px-3 py-3 text-right">Valor</th>
            </tr>
          </thead>

          <tbody>
            {services?.map((service, index) => (
              <tr
                key={service.id}
                className="border-t-2 border-gray-medium text-sm text-text-secondary"
              >
                <td className="px-3 py-3 text-center">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td className="px-3 py-3 font-medium">
                  {service.service_name}
                </td>
                <td className="px-3 py-3 text-center">{service.amount}</td>

                {!hideMeasure && (
                  <td className="px-3 py-3 text-center">{service.width}</td>
                )}
                {!hideMeasure && (
                  <td className="px-3 py-3 text-center">{service.height}</td>
                )}

                <td className="px-3 py-3 text-center">{service.thickness}</td>

                <td className="px-3 py-3 text-right font-semibold text-green-700">
                  {formatCurrency(service.line_total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📱 MOBILE (cards) */}
      <div className="md:hidden print:hidden flex flex-col gap-4">
        {services?.map((service, index) => (
          <div
            key={service.id}
            className="border border-gray-medium rounded-md p-4 space-y-2"
          >
            <div className="flex justify-between text-sm font-semibold text-text-secondary">
              <span>
                {String(index + 1).padStart(2, "0")} - {service.service_name}
              </span>
              <span className="text-green-700">
                {formatCurrency(service.line_total)}
              </span>
            </div>

            <div className="text-sm text-text-secondary flex flex-wrap gap-x-4 gap-y-1">
              <span>Qtd: {service.service_amount}</span>

              {!hideMeasure && (
                <>
                  <span>L: {service.width}</span>
                  <span>A: {service.height}</span>
                </>
              )}

              <span>Esp: {service.thickness}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

OsServicesArea.propTypes = {
  hideMeasure: PropTypes.bool,
  services: PropTypes.array,
};

export default OsServicesArea;
