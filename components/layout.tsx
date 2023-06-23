import { useEffect, ReactNode } from "react";
import styles from "./Theme.module.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { useTheme } from "../context/ThemeProvider";
import ScrollToTop from "./ScrollToTopButton";

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
