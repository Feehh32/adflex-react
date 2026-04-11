import { useState } from "react";
import * as clientService from "../services/client.service";

export const useCreateClient = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createClient = async (data) => {
    try {
      setLoading(true);
      setError(null);
      const result = await clientService.createClient(data);
      return result;
    } catch (err) {
      setError(err.message || "Erro ao criar o cliente.");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createClient, loading, error };
};
