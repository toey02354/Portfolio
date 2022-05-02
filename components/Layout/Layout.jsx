import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-tl from-cyan-300 to-green-300">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
