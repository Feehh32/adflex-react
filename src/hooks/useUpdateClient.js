import { useState } from "react";
import * as clientService from "../services/client.service";

export const useUpdateClient = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdateClient = async (clientId, data) => {
    try {
      setLoading(true);
      setError(null);

      const result = await clientService.updateClient(clientId, data);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updateClient: handleUpdateClient, loading, error };
};
