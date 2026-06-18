import { createContext, useContext, useState } from "react";
import { signup, authenticate } from "../api/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const [authMessage, setAuthMessage] = useState("");
  const [authError, setAuthError] = useState(null);

  async function register(credentials) {
    try {
      setAuthError(null);
      setAuthMessage("");

      const newToken = await signup(credentials);
      setToken(newToken);
      localStorage.setItem("token", newToken);
      setAuthMessage("Account created! Token saved!");
    } catch (error) {
      throw new error();
    }
  }

  async function checkAuth() {
    setAuthError(null);
    const userData = await authenticate(token);
    setUser(userData);
    setAuthMessage("You are authenticated!");
  }

  function logout() {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    setAuthMessage("You logged out.");
  }

  const value = {
    token,
    user,
    authMessage,
    authError,
    logout,
    register,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside the AuthProvider");
  }
  return context;
}
