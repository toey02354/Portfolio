import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

interface ThemeContext {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContext | null>(null);

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (themeContext == null) {
    throw new Error("ThemeContext is null");
  }
  return themeContext;
};

const ThemeProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [dark, setDark] = useState<boolean>(false);
  let value = { dark, setDark };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
