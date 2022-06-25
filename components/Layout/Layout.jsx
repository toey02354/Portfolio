import React, { useState, useEffect, createContext } from "react";
import styles from "./Theme.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import { style } from "@mui/system";

const ThemeContext = createContext(false);

const Layout = ({ children }) => {
  const [darkTheme, setTheme] = useState();
  const [show, setShow] = useState(false);
  const handleTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  useEffect(() => {
    const darkThemeLS = localStorage.getItem("toey-portfolio-theme");
    if (darkThemeLS === null) {
      localStorage.setItem("toey-portfolio-theme", "light");
    } else {
      darkThemeLS === "dark" ? setTheme(true) : setTheme(false);
    }

    window.addEventListener("scroll", () => {
      if (scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  useEffect(() => {
    const darkThemeLS = localStorage.getItem("toey-portfolio-theme");
    if (darkTheme === true && darkTheme !== null) {
      setTheme(true);
      localStorage.setItem("toey-portfolio-theme", "dark");
    } else if (darkTheme === false && darkTheme !== null) {
      setTheme(false);
      localStorage.setItem("toey-portfolio-theme", "light");
    } else {
    }
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={[darkTheme, setTheme]}>
      <div className={darkTheme ? styles.DarkTheme : styles.LightTheme}>
        <Navbar />
        {children}
        <Footer />
        <button
          className={`TW60P-BG fixed bottom-0 right-0 m-4 p-2 rounded-full text-white ${
            show ? null : "hidden"
          }`}
          onClick={handleTop}
        >
          <ArrowCircleUpOutlinedIcon />
        </button>
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
export { ThemeContext };
