import PropTypes from "prop-types";

const StatsCard = ({ label, mainInfo, SecondaryInfo, color }) => {
  const getMainInfoSize = (text) => {
    const contentLength = String(text).length;

    if (contentLength > 40) {
      return "text-base";
    }

    if (contentLength > 25) {
      return "text-xl";
    }

    return "text-2xl";
  };

  return (
    <div className="flex flex-col gap-2 bg-gray-darker font-technical p-4 rounded-lg shadow-md border border-gray-dark min-h-35">
      <span className="text-sm uppercase tracking-wider font-semibold text-gray-medium">
        {label}
      </span>

      <span
        className={`
          font-semibold
          leading-tight
          wrap-break-word
          line-clamp-2
          ${getMainInfoSize(mainInfo)}
          ${color}
        `}
      >
        {mainInfo}
      </span>

      <span className="text-sm text-gray-medium mt-auto">{SecondaryInfo}</span>
    </div>
  );
};

StatsCard.propTypes = {
  label: PropTypes.string.isRequired,

  mainInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,

  SecondaryInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,

  color: PropTypes.string.isRequired,
};

export default StatsCard;
