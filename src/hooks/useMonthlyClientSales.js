import { useState } from "react";
import { getMonthlyClientSales } from "../services/monthly_client_sales.service";
import { useGlobalError } from "./useGlobalError";

export const useMonthlyClientSales = () => {
  const [loading, setLoading] = useState(false);
  const [monthlyClientSales, setMonthlyClientSales] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const { setGlobalError } = useGlobalError();

  const fetchMonthlyClientSales = async (client, month, year) => {
    try {
      setLoading(true);
      setMonthlyClientSales(null);
      setHasSearched(true);

      const data = await getMonthlyClientSales(client, month, year);

      setMonthlyClientSales(data);
      setHasResults(data?.serviceOrders?.length > 0);
    } catch (err) {
      setGlobalError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    monthlyClientSales,
    fetchMonthlyClientSales,
    loading,
    hasSearched,
    hasResults,
  };
};
