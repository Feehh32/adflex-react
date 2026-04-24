import { useState, useEffect } from "react";
import { supabase } from "../services/supabase";

export const useSelectClients = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      setError(null);
      try {
        const { data, error } = await supabase
          .from("clients")
          .select("id, name")
          .order("name");

        if (error) throw error;

        setClients(data);
      } catch (err) {
        setError(err.message);
        console.error("Error ao buscar os clients:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchClients();
  }, []);

  return {
    error,
    loading,
    clients,
  };
};
