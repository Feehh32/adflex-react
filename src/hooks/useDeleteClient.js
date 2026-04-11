import { useState } from "react";
import * as clientService from "../services/client.service";

export const useDeleteClient = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteClient = async (clientId) => {
    try {
      setLoading(true);
      setError(null);

      await clientService.deleteClient(clientId);
      return true;
    } catch (err) {
      setError(err.message || "Erro ao deletar o cliente.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const resetError = () => setError(null);

  return { deleteClient: handleDeleteClient, resetError, loading, error };
};
