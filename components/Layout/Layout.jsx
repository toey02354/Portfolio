import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="TW-PLAIN-BG-GRAD">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
