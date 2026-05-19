import { useState } from "react";
import PropTypes from "prop-types";
import Calendar from "../../assets/icons/calendar.svg?react";
import ButtonSpinner from "../../components/UI/ButtonSpinner";

const SalesSummaryForm = ({ onSubmit, loading }) => {
  const currentDate = new Date();
  const [month, setMonth] = useState(currentDate.getMonth() + 1);
  const [year, setYear] = useState(currentDate.getFullYear());

  const preSelectedYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => preSelectedYear - i);
  const months = [
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(Number(month), Number(year));
  };

  return (
    <section className="flex flex-col gap-4 bg-gray-darker p-4 rounded-lg shadow-lg border border-gray-dark">
      <form
        onSubmit={handleSubmit}
        className="flex gap-2 md:gap-6 md:flex-row flex-col items-start"
      >
        {/* month select */}
        <div className="flex flex-col gap-2 md:w-1/2 w-full">
          <label
            htmlFor="summary-month"
            className={`text-sm font-medium flex gap-2`}
          >
            Mês
            <span className="text-prim1">*</span>
          </label>
          <div
            className={`relative flex items-center w-full md:w-full focus-within:ring-2 focus-within:ring-prim1 rounded-lg border border-gray-dark shadow-lg`}
          >
            <Calendar className="w-4 h-4 absolute left-3 opacity-50" />
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              name="summary-month"
              id="summary-month"
              autoComplete="off"
              className="w-full bg-gray-input rounded-lg py-2 px-8 text-text-primary placeholder:text-gray-medium focus:outline-none transition"
            >
              {months.map((month) => (
                <option key={month.monthNumber} value={month.monthNumber}>
                  {month.monthName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* year select */}
        <div className="flex flex-col gap-2 md:w-1/2 w-full">
          <label
            htmlFor="summary-year"
            className={`text-sm font-medium flex gap-2`}
          >
            Ano
            <span className="text-prim1">*</span>
          </label>
          <div
            className={`relative flex items-center w-full md:w-full focus-within:ring-2 focus-within:ring-prim1 rounded-lg borderborder-gray-dark shadow-lg`}
          >
            <Calendar className="w-4 h-4 absolute left-3 opacity-50" />
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
        <button className="focus-visible md:mt-7 py-2 px-4 font-semibold bg-prim2 border border-prim1 rounded-md shadow-md hover:scale-102 transition duration-300 ease-in-out text-gray-darker cursor-pointer w-full md:w-auto">
          {loading ? <ButtonSpinner /> : "Buscar"}
        </button>
      </form>
    </section>
  );
};

SalesSummaryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SalesSummaryForm;
