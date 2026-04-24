import { useState, useEffect } from "react";
import { supabase } from "../services/supabase";

export const useServiceOrderOptions = () => {
  const [loading, setLoading] = useState(true);
  const [thicknessOptions, setThicknessOptions] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const { data, error } = await supabase
          .from("thickness_options")
          .select("id, label");

        if (error) throw error;

        setThicknessOptions(data);
      } catch (err) {
        console.error("Erro ao buscar espessuras:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, []);

  return {
    loading,
    thicknessOptions,
  };
};
