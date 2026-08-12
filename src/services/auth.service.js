import { supabase } from "../services/supabase";

// Centralizes authentication operations to keep Supabase calls out of the UI.
export const getSession = async () => {
  const result = await supabase.auth.getSession();
  return result;
};

export const signIn = (email, password) => {
  return supabase.auth.signInWithPassword({ email, password });
};

export const signOut = () => supabase.auth.signOut();
