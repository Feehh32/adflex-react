import { supabase } from "../services/supabase";

export const getSession = async () => {
  const result = await supabase.auth.getSession();
  return result;
};

export const signIn = (email, password) => {
  return supabase.auth.signInWithPassword({ email, password });
};

export const signOut = () => supabase.auth.signOut();
