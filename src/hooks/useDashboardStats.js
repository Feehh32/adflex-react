import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useGlobalError } from "./useGlobalError";

export const useDashboardStats = () => {
  const [stats, setStats] = useState({
    totalOS: 0,
    monthlyRevenue: 0,
    topClients: [],
    lastOs: [],
    allClients: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { setGlobalError } = useGlobalError();

  const fetchDashboardStats = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase.rpc("dashboard_home");
      if (error) throw error;

      if (data)
        setStats({
          totalOS: data.total_os_month ?? 0,
          monthlyRevenue: data.monthly_revenue ?? 0,
          topClients: data.top_clients ?? [],
          lastOs: data.last_orders ?? [],
          allClients: data.all_clients ?? [],
        });
    } catch (err) {
      setError(err.message);
      console.error(err);
      setGlobalError("Erro ao carregar dados. Verifique sua conexão.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const refetch = async () => {
    setError(null);
    await fetchDashboardStats();
  };

  return {
    ...stats,
    loading,
    error,
    refetch,
  };
};
