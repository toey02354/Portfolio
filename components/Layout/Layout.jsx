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
    console.log("useEffect init: ", darkThemeLS);
    if (darkThemeLS === null) {
      console.log("if");
      localStorage.setItem("toey-portfolio-theme", "light");
    } else {
      console.log("else");
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
    console.log("useEffect darkTheme: ", darkTheme ? "dark" : "light");
    if (darkTheme === true && darkTheme !== null) {
      console.log("set dark");
      setTheme(true);
      localStorage.setItem("toey-portfolio-theme", "dark");
    } else if (darkTheme === false && darkTheme !== null) {
      console.log("set light");
      setTheme(false);
      localStorage.setItem("toey-portfolio-theme", "light");
    } else {
      console.log(`something is wrong with the theme`);
    }
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={[darkTheme, setTheme]}>
      <div className={darkTheme ? styles.DarkTheme : styles.LightTheme}>
        <Navbar />
        {children}
        <Footer />
        <button
          className={`TW-DOMINANT-BG fixed bottom-0 right-0 m-4 p-2 rounded-full text-white ${
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
