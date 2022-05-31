import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <div className="">
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
  );
};

export default Layout;
