import { useState, useEffect, FC, PropsWithChildren } from "react";
import styles from "./Theme.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { ArrowCircleUp } from "../Icons";
import { useTheme } from "../../context/ThemeProvider";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { dark, setDark } = useTheme();
  const [show, setShow] = useState<boolean>(false);
  const handleTop = () => {
    scrollTo({ behavior: "smooth", top: 0 });
  };

  useEffect(() => {
    const darkThemeLS = localStorage.getItem("toey-portfolio-theme");
    if (darkThemeLS === null) {
      localStorage.setItem("toey-portfolio-theme", "light");
    } else {
      darkThemeLS === "dark" ? setDark(true) : setDark(false);
    }

    addEventListener("scroll", () => {
      if (scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  useEffect(() => {
    if (dark === true && dark !== null) {
      setDark(true);
      localStorage.setItem("toey-portfolio-theme", "dark");
    } else if (dark === false && dark !== null) {
      setDark(false);
      localStorage.setItem("toey-portfolio-theme", "light");
    } else {
    }
  }, [dark]);

  return (
    <div className={dark ? styles.DarkTheme : styles.LightTheme}>
      <Navbar />
      {children}
      <Footer />
      <button
        className={`fixed bottom-0 right-0 m-4 p-2 rounded-full shadow-lg 
        ${show ? "block" : "hidden"} ${
          dark ? "bg-white" : "bg-main text-white"
        }`}
        onClick={handleTop}
      >
        <ArrowCircleUp />
      </button>
    </div>
  );
};

export default Layout;
