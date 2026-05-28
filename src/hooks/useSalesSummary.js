import { useState } from "react";
import { getSalesSummary } from "../services/sales_summary.service";
import { useGlobalError } from "./useGlobalError";

export const useSalesSummary = () => {
  const [loading, setLoading] = useState(false);
  const [salesSummary, setSalesSummary] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const { setGlobalError } = useGlobalError();

  const fetchSalesSummary = async (month, year) => {
    try {
      setLoading(true);
      setSalesSummary(null);
      setHasSearched(true);
      const data = await getSalesSummary(month, year);

      setSalesSummary(data);
      setHasResults(data?.sales_summary?.length > 0);
    } catch (err) {
      setGlobalError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { salesSummary, fetchSalesSummary, loading, hasSearched, hasResults };
};
