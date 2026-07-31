import { useEffect, useState } from "react";
import { getClientById } from "../services/client.service";

export const useClientById = (clientId) => {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(!!clientId);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!clientId) return;

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

    fetchClient();
  }, [clientId]);

  const refetch = async () => {
    setError(null);
    await getClientById(clientId);
  };

  return { client, loading, error, refetch };
};
