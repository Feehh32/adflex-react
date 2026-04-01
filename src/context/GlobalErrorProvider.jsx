import { useState } from "react";
import { GlobalErrorContext } from "./GlobalErrorContext";

const GlobalErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const setGlobalError = (message) => setError(message);

  const clearGlobalError = () => setError(null);

  return (
    <GlobalErrorContext.Provider
      value={{ error, setGlobalError, clearGlobalError }}
    >
      {children}
    </GlobalErrorContext.Provider>
  );
};

export default GlobalErrorProvider;
