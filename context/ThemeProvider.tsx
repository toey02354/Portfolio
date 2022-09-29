import {
  useContext,
  createContext,
  useState,
  FC,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from "react";

interface ThemeContext {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContext>({
  dark: false,
  setDark: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [dark, setDark] = useState<boolean>(false);
  let value = { dark, setDark };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
