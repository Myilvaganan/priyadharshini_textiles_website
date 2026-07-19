import { createContext, useCallback, useContext, useState } from "react";

const SESSION_KEY = "cms-admin-session";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === "true"
  );

  const login = useCallback((username, password) => {
    const validUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const validPassword = import.meta.env.VITE_ADMIN_PASSWORD;
    const ok = Boolean(validUsername) && username === validUsername && password === validPassword;
    if (ok) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setIsAuthenticated(true);
    }
    return ok;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
