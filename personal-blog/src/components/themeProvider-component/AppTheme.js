import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppTheme = ({ children }) => {

  const [themeMode, setThemeMode] = useState("");

  return <AppContext.Provider value={{themeMode, setThemeMode}}>
      {children}
  </AppContext.Provider>;
};

export default AppTheme;