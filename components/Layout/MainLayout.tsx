import { useEffect, ReactNode } from "react";
import styles from "./Theme.module.css";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { useTheme } from "../../context/ThemeProvider";
import ScrollToTop from "./scrollToTop/ScrollToTopButton";

const Layout = ({
  children
}: {
  children: ReactNode
}) => {
  const { darkTheme } = useTheme();

  return (
    <div className={darkTheme ? styles.DarkTheme : styles.LightTheme}>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;