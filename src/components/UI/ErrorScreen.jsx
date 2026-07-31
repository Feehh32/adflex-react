import PropTypes from "prop-types";
import Logo from "../../assets/logoColorida.svg?react";

const ErrorScreen = ({ message, error, onRetry }) => {
  const errorMsg =
    message || error || error?.message || "Ocorreu um erro inesperado.";
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#1B1C1D] text-light-gray">
      <div
        className="max-w-md text-center space-y-6 p-2"
        role="alert"
        aria-live="assertive"
      >
        <Logo className="w-32 h-32 m-auto" aria-hidden="true" />
        <h1 className="text-2xl font-bold font-secondary">
          Não foi possível carregar os dados da aplicação
        </h1>

        <p className="text-sm text-gray-400">
          {errorMsg ||
            "Verifique sua conexão ou tente novamente em alguns instantes."}
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            type="button"
            className="focus-visible px-6 py-2 bg-prim2 w-full font-bold rounded-md hover:opacity-90 transition cursor-pointer"
            aria-label="Tentar carregar novamente"
          >
            Tentar novamente
          </button>
        )}
      </div>
    </div>
  );
};

ErrorScreen.propTypes = {
  message: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      message: PropTypes.string,
    }),
  ]),
  onRetry: PropTypes.func.isRequired,
};

export default ErrorScreen;
