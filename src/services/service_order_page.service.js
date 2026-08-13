import { supabase } from "../services/supabase";
export const getOsById = async (id) => {
  const { data, error } = await supabase.rpc("get_service_order_by_id", {
    p_service_order_id: id,
  });

  if (error) {
    if (error.code === "P0001") {
      return null;
    }

    throw new Error(error.message);
  }

  return data;
};

export const updateDateOs = async (osId, newDate) => {
  const { error } = await supabase
    .from("service_orders")
    .update({
      document_date: newDate,
    })
    .eq("id", osId);

  if (error) throw new Error(error.message);
};

export const deleteOs = async (osId) => {
  const { error } = await supabase
    .from("service_orders")
    .delete()
    .eq("id", osId);

  if (error) throw new Error(error.message);
};
