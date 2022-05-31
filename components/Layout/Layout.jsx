import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ArrowCircleUpOutlinedIcon from "@mui/icons-material/ArrowCircleUpOutlined";

const Layout = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleTop = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  useEffect(() => {
    setPosition({ x: pageXOffset, y: pageYOffset });
  }, [position]);

  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
      <button
        className={`TW-DOMINANT-BG fixed bottom-0 right-0 m-4 p-2 rounded-full text-white ${
          position.y <= 300 ? "hidden" : null
        }`}
        onClick={handleTop}
      >
        <ArrowCircleUpOutlinedIcon />
      </button>
    </div>
  );
};

export default Layout;
