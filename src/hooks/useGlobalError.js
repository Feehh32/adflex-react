import { useContext } from "react";
import { GlobalErrorContext } from "../context/GlobalErrorContext";

export const useGlobalError = () => {
  const context = useContext(GlobalErrorContext);

  if (!context)
    throw new Error("useGlobalError must be used within a GlobalErrorProvider");

  return context;
};
