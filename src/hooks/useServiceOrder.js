import { useState, useEffect, useCallback } from "react";

import { getOsById } from "../services/service_order_page.service";

import { useGlobalError } from "./useGlobalError";

export const useServiceOrder = (id) => {
  const [loading, setLoading] = useState(false);

  const [serviceOrder, setServiceOrder] = useState(null);

  const { setGlobalError } = useGlobalError();

  const fetchServiceOrder = useCallback(async () => {
    if (!id) return;

    try {
      setLoading(true);

      const data = await getOsById(id);

      setServiceOrder(data);
    } catch (err) {
      setGlobalError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id, setGlobalError]);

  useEffect(() => {
    fetchServiceOrder();
  }, [fetchServiceOrder]);

  return {
    serviceOrder,
    loading,
    fetchServiceOrder,
  };
};
