import { supabase } from "../services/supabase";

export const createServiceOrder = async (data) => {
  // build payload
  const payload = {
    p_client_id: Number(data.client_id),
    p_hide_measure: !!data.hide_measure,
    p_services: data.services.map((s) => ({
      service_name: s.service_name,
      width: Number(s.width),
      height: Number(s.height),
      amount: Number(s.amount),
      thickness_id: Number(s.thickness_id),
      budget_value:
        s.budget_value && s.budget_value.replace !== ""
          ? Number(s.budget_value)
          : null,
    })),
  };
  const { data: result, error } = await supabase.rpc(
    "create_service_order",
    payload
  );
  if (error) throw error;

  return result;
};
