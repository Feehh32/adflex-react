import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import { useGlobalError } from "./useGlobalError";

export const useClientPageData = (clientId, search) => {
  const [data, setData] = useState({
    client: null,
    metrics: {
      total_orders: 0,
      monthly_revenue: 0,
      charge: 0,
    },
    orders: [],
    pagination: {
      page: 1,
      limit: 5,
      total: 0,
      total_pages: 1,
    },
  });

  const [page, setPage] = useState(1);
  const [limit] = useState(5);
  const [loading, setLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const [error, setError] = useState(null);

  const { setGlobalError } = useGlobalError();

  // 🔹 normalização da busca
  const searchNormalized = search?.trim() || "";
  const isSearching = searchNormalized.length > 2;

  const fetchClientPageData = async () => {
    try {
      setError(null);

      const { data, error } = await supabase.rpc("get_client_page_data", {
        p_client_id: clientId,
        p_page: isSearching ? 1 : page,
        p_per_page: limit,
        p_search: isSearching ? searchNormalized : null,
      });

      if (error) throw error;

      if (data) {
        setData({
          client: data.client ?? null,
          metrics: {
            total_orders: data.metrics?.total_orders ?? 0,
            monthly_revenue: data.metrics?.monthly_revenue ?? 0,
            charge: data.metrics?.charge ?? 0,
          },
          orders: data.orders ?? [],
          pagination: data.pagination ?? {
            page: 1,
            limit,
            total: 0,
            total_pages: 1,
          },
        });
      }

      if (!hasLoadedOnce) {
        setLoading(false);
        setHasLoadedOnce(true);
      }
    } catch (err) {
      setError(err.message);
      console.error(err);
      setGlobalError("Erro ao carregar dados. Verifique sua conexão.");

      if (!hasLoadedOnce) {
        setLoading(false);
        setHasLoadedOnce(true);
      }
    }
  };

  // 🔹 reset de página quando inicia busca
  useEffect(() => {
    if (isSearching) {
      setPage(1);
    }
  }, [searchNormalized]);

  useEffect(() => {
    if (!clientId) return;
    fetchClientPageData();
  }, [clientId, page, searchNormalized]);

  const nextPage = () => {
    if (isSearching) return;
    setPage((prev) => (prev < data.pagination.total_pages ? prev + 1 : prev));
  };

  const prevPage = () => {
    if (isSearching) return;
    setPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const goToPage = (newPage) => {
    if (isSearching) return;
    if (newPage >= 1 && newPage <= data.pagination.total_pages) {
      setPage(newPage);
    }
  };

  const refetch = async () => {
    setError(null);
    await fetchClientPageData();
  };

  return {
    ...data,
    loading,
    error,
    page,
    setPage,
    nextPage,
    prevPage,
    goToPage,
    refetch,
    isSearching,
  };
};
