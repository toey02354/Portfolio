import { useContext, createContext, useState } from "react";

const ThemeContext = createContext({});

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState();
  let value = { dark, setDark };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
