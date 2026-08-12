import { supabase } from "../services/supabase";

export const getMonthlyClientSales = async (clientId, month, year) => {
  const { data, error } = await supabase.rpc("get_monthly_client_sales", {
    p_client_id: clientId,
    p_month: month,
    p_year: year,
  });

  if (error) throw new Error(error.message);

  return data;
};
