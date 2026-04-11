import { supabase } from "../services/supabase";

// Function to create a new client
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

// Function to search a client by ID
export const getClientById = async (clientId) => {
  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .eq("id", clientId)
    .single();

  if (error) throw error;

  return data;
};

// Function to update a client by ID
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

// Function to make a soft delete of a client by ID
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
