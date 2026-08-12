import { createClient } from "@supabase/supabase-js";

// Creates the shared Supabase client using environment variables.
// The URL and anon key must come from Vite's environment configuration
// instead of being hardcoded in the application.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
