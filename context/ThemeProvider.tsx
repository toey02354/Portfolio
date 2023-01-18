import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from "react";
import { themeConstants } from "../utils/Constants";

interface IThemeContext {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<IThemeContext | null>(null);

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

  useEffect(() => {
    const darkThemeLS = localStorage.getItem(themeConstants.LOCAL_STORAGE_KEY);
    if (!darkThemeLS) {
      localStorage.setItem(themeConstants.LOCAL_STORAGE_KEY, themeConstants.LIGHT);
    } else {
      darkThemeLS === themeConstants.DARK ? setDark(true) : setDark(false);
    }
  }, [])

  const value = { dark, setDark };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
