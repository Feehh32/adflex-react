import { useState } from "react";
import * as serviceOrderService from "../services/service_order.service";

export const useCreateServiceOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createServiceOrder = async (data) => {
    try {
      setLoading(true);
      setError(null);
      const result = await serviceOrderService.createServiceOrder(data);

      return result;
    } catch (err) {
      setError(err.message || "Error ao criar a O.S");
      throw err;
    } finally {
      setLoading(false);
    }
  };
  return { createServiceOrder, loading, error };
};
