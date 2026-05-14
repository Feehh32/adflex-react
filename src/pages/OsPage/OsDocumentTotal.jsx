import { formatCurrency } from "../../utils/formatters";
import PropTypes from "prop-types";

const OsDocumentTotal = ({ total }) => {
  return (
    <section className="mt-6 flex md:justify-end font-technical avoid-break print:justify-end">
      <div className="w-full md:w-auto border-2 border-t-8 border-zinc-800 p-3 rounded-md print:w-auto ">
        <div className="flex items-center justify-between gap-6 border-b border-zinc-800">
          <span className="text-sm font-bold tracking-wide text-black uppercase">
            Total:
          </span>

          <span className="text-xl font-bold text-green-700">
            {formatCurrency(total)}
          </span>
        </div>
      </div>
    </section>
  );
};

OsDocumentTotal.propTypes = { total: PropTypes.number };

export default OsDocumentTotal;
