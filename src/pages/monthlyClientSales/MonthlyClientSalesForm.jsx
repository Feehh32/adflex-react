import { useState } from "react";
import PropTypes from "prop-types";
import AddClientNameIcon from "../../assets/icons/add-client-name.svg?react";
import Calendar from "../../assets/icons/calendar.svg?react";
import ButtonSpinner from "../../components/UI/ButtonSpinner";
import Spinner from "../../components/UI/Spinner";

const CURRENT_YEAR = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, i) => CURRENT_YEAR - i);
const MONTHS = [
  { monthName: "Janeiro", monthNumber: 1 },
  { monthName: "Fevereiro", monthNumber: 2 },
  { monthName: "Março", monthNumber: 3 },
  { monthName: "Abril", monthNumber: 4 },
  { monthName: "Maio", monthNumber: 5 },
  { monthName: "Junho", monthNumber: 6 },
  { monthName: "Julho", monthNumber: 7 },
  { monthName: "Agosto", monthNumber: 8 },
  { monthName: "Setembro", monthNumber: 9 },
  { monthName: "Outubro", monthNumber: 10 },
  { monthName: "Novembro", monthNumber: 11 },
  { monthName: "Dezembro", monthNumber: 12 },
];

const MonthlyClientSalesForm = ({
  onSubmit,
  loading,
  clients,
  loadingClients,
}) => {
  const currentDate = new Date();

  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [year, setYear] = useState(currentDate.getFullYear());
  const [client, setClient] = useState("");

  const [clientError, setClientError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setClientError("");

    if (!client) {
      setClientError("Selecione um cliente");
      return;
    }

    await onSubmit(client, Number(month), Number(year));
  };

  if (loadingClients) {
    return <Spinner title="Carregando clientes..." />;
  }

  return (
    <section
      className="flex flex-col gap-4 bg-gray-darker p-4 rounded-lg shadow-lg border border-gray-dark"
      aria-labelledby="monthly-sales-form-title"
    >
      <h2 id="monthly-sales-form-title" className="sr-only">
        Filtros do balanço mensal
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 md:gap-6 md:flex-row flex-col items-start min-h-24 justify-between"
      >
        {/* client select */}
        <div className="flex flex-col gap-2 md:w-1/3 w-full">
          <label
            htmlFor="monthly-sales-client"
            className={`text-sm font-medium flex gap-2 ${
              clientError && "text-red"
            }`}
          >
            Cliente
            <span className="text-prim1">*</span>
          </label>
          <div
            className={`relative flex items-center w-full md:w-full focus-within:ring-2 focus-within:ring-prim1 rounded-lg border  shadow-lg ${
              clientError ? "border-red" : "border-gray-dark"
            }`}
          >
            <AddClientNameIcon
              className="w-6 h-6 absolute left-3 opacity-50"
              aria-hidden="true"
              focusable="false"
            />
            <select
              id="monthly-sales-client"
              value={client}
              onChange={(e) => {
                setClient(e.target.value);
                setClientError("");
              }}
              autoComplete="off"
              name="monthly-sales-client"
              aria-invalid={!!clientError}
              aria-describedby={
                clientError ? "monthly-sales-client-error" : undefined
              }
              className={
                "w-full bg-gray-input rounded-lg py-2 px-4 text-text-primary placeholder:text-gray-medium focus:outline-none transition pl-10"
              }
            >
              <option value="" disabled>
                Selecione um cliente
              </option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.name}
                </option>
              ))}
            </select>
          </div>
          <span className="text-xs text-red">
            {clientError && "Por favor, selecione um cliente!"}
          </span>
        </div>

        {/* month select */}
        <div className="flex flex-col gap-2 md:w-1/4 w-full">
          <label
            htmlFor="summary-month"
            className={`text-sm font-medium flex gap-2`}
          >
            Mês
            <p
              className="text-prim1"
              aria-hidden="true"
              id="monthly-sales-client-error"
            >
              *
            </p>
          </label>
          <div
            className={`relative flex items-center w-full md:w-full focus-within:ring-2 focus-within:ring-prim1 rounded-lg border border-gray-dark shadow-lg`}
          >
            <Calendar
              className="w-4 h-4 absolute left-3 opacity-50"
              aria-hidden="true"
              focusable="false"
            />
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              name="summary-month"
              id="summary-month"
              autoComplete="off"
              className="w-full bg-gray-input rounded-lg py-2 px-8 text-text-primary placeholder:text-gray-medium focus:outline-none transition"
            >
              {MONTHS.map((month) => (
                <option key={month.monthNumber} value={month.monthNumber}>
                  {month.monthName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* year select */}
        <div className="flex flex-col gap-2 md:w-1/5 w-full">
          <label
            htmlFor="summary-year"
            className={`text-sm font-medium flex gap-2`}
          >
            Ano
            <span className="text-prim1">*</span>
          </label>
          <div
            className={`relative flex items-center w-full md:w-full focus-within:ring-2 focus-within:ring-prim1 rounded-lg border border-gray-dark shadow-lg`}
          >
            <Calendar
              className="w-4 h-4 absolute left-3 opacity-50"
              aria-hidden="true"
              focusable="false"
            />
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              name="summary-year"
              id="summary-year"
              autoComplete="off"
              className="w-full bg-gray-input rounded-lg py-2 px-8 text-text-primary placeholder:text-gray-medium focus:outline-none transition"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="md:min-w-40 focus-visible md:mt-7 py-2 px-4 font-semibold bg-prim2 border border-prim1 rounded-md shadow-md hover:scale-102 transition duration-300 ease-in-out text-gray-darker cursor-pointer w-full md:w-auto flex items-center justify-center"
        >
          {loading ? <ButtonSpinner /> : "Gerar fechamento"}
        </button>
      </form>
    </section>
  );
};

MonthlyClientSalesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  loadingClients: PropTypes.bool.isRequired,
};

export default MonthlyClientSalesForm;
