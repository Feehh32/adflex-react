import { useEffect, useState } from "react";
import { getClientById } from "../services/client.service";

export const useClientById = (clientId) => {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(!!clientId);
  const [error, setError] = useState(null);

  const fetchClient = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getClientById(clientId);
      setClient(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!clientId) return;
    fetchClient();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientId]); // Include fetchClient

  // Revalidates the client data without updating the local state.
  const refetch = fetchClient;

  return { client, loading, error, refetch };
};
