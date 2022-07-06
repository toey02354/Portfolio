import { useState, useEffect, createContext } from "react";
import styles from "./Theme.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";
import { useTheme } from "../../context/ThemeProvider";
// const ThemeContext = createContext(false);

const Layout = ({ children }) => {
  const { dark, setDark } = useTheme();
  const [show, setShow] = useState(false);
  const handleTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  useEffect(() => {
    const darkThemeLS = localStorage.getItem("toey-portfolio-theme");
    if (darkThemeLS === null) {
      localStorage.setItem("toey-portfolio-theme", "light");
    } else {
      darkThemeLS === "dark" ? setDark(true) : setDark(false);
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
        className={`bg-main fixed bottom-0 right-0 m-4 p-2 rounded-full text-white ${
          show ? null : "hidden"
        }`}
        onClick={handleTop}
      >
        <ArrowCircleUpOutlinedIcon />
      </button>
    </div>
  );
};

export default Layout;
