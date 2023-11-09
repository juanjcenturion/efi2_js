import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const USER = "usuario";
const PASS = "demo";

export function AppProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const login = (values) => {
    const { username, password } = values;

    if (username === USER && password === PASS) {
      setUser(username);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const contextValue = {
    isDarkMode,
    toggleDarkMode,
    user,
    login,
    logout,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
