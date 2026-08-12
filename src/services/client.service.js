import { supabase } from "../services/supabase";

// Creates a client through the RPC to keep client creation rules in the database.
export const createClient = async (data) => {
  const { data: result, error } = await supabase.rpc("create_client", data);

  if (error) throw error;

  if (!result.success) {
    const err = new Error(result.error.message);
    err.field = result.error.field;
    throw err;
  }
  return result;
};

// Retrieves a client by its ID.
export const getClientById = async (clientId) => {
  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .eq("id", clientId)
    .single();

  if (error) throw error;

  return data;
};

// Updates the client record directly by its ID.
export const updateClient = async (clientId, data) => {
  const { data: result, error } = await supabase
    .from("clients")
    .update(data)
    .eq("id", clientId)
    .single();

  if (error) {
    const err = new Error(error.message);
    throw err;
  }

  return result;
};

// Uses a soft delete to preserve the client's historical records.
export const deleteClient = async (clientId) => {
  const { error } = await supabase.rpc("delete_client", {
    p_client_id: clientId,
  });

  if (error) {
    const err = new Error(error.message);
    throw err;
  }

  return true;
};
