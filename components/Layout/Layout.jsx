import React from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-tl from-cyan-300 to-green-300">
      <Navbar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
