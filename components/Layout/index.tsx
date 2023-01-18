import { useEffect, ReactNode } from "react";
import styles from "./Theme.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useTheme } from "../../context/ThemeProvider";
import { themeConstants } from "../../utils/Constants";
import ScrollToTop from "../ScrollToTop";

const Layout = ({
  children
}: {
  children: ReactNode
}) => {
  const { dark, setDark } = useTheme();

  useEffect(() => {
    if (dark) {
      setDark(true);
      localStorage.setItem("toey-portfolio-theme", themeConstants.DARK);
    } else {
      setDark(false);
      localStorage.setItem("toey-portfolio-theme", themeConstants.LIGHT);
    }
  }, [dark, setDark]);

  return (
    <div className={dark ? styles.DarkTheme : styles.LightTheme}>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
