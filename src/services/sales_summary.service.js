import { supabase } from "../services/supabase";

export const getSalesSummary = async (month, year) => {
  const { data, error } = await supabase.rpc("get_month_sales_summary", {
    p_month: month,
    p_year: year,
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
