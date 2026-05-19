import { useState } from "react";
import { getSalesSummary } from "../services/sales_summary.service";
import { useGlobalError } from "./useGlobalError";

export const useSalesSummary = () => {
  const [loading, setLoading] = useState(false);
  const [salesSummary, setSalesSummary] = useState(null);
  const { setGlobalError } = useGlobalError();

  const fetchSalesSummary = async (month, year) => {
    try {
      setLoading(true);

      const data = await getSalesSummary(month, year);
      console.log(data);
      setSalesSummary(data);
    } catch (err) {
      setGlobalError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { salesSummary, fetchSalesSummary, loading };
};
