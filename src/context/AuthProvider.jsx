import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext.jsx";
import {
  getSession,
  signIn as signInService,
  signOut as signOutService,
} from "../services/auth.service.js";
import { supabase } from "../services/supabase";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  const signIn = async (email, password) => {
    return await signInService(email, password);
  };
  const signOut = async () => {
    return await signOutService();
  };

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data } = await getSession();
        setUser(data.session?.user ?? null);
        setSession(data.session ?? null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setSession(session ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        session,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
