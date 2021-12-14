import React, { useContext, createContext, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";

// Creating Auth Context
let AuthContext = createContext(null);

// Auth provider => returning children
function AuthProvider({ children }) {

  // Current user => TODO
  let [user, setUser] = useState(null);
  let [isAdmin, setIsAdmin] = useState(!true);

  // Login
  let login = (user, callback) => {
    setUser(user);
    callback();
  };

  // Register
  let register = (newUser, callback) => {
    setUser(newUser);
    callback();
  };

  // Logout
  let logout = (callback) => {
    setUser(null);
    callback();
  };

  // Informations about user
  let value = { user, isAdmin, login, register, logout };

  // Rendering children
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

// useAuth hook
function useAuth() {
  return useContext(AuthContext);
}

// Auth guard => children is accessible only to authorized users
function RequireAuth({ children }) {

  // Hooks  
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login.
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
}

// Auth guard => children is accessible only to authorized users
function RequireAdmin({ children }) {

  // Hooks  
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user || !auth.isAdmin) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login.
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
}

export { AuthProvider, RequireAuth, RequireAdmin, useAuth }