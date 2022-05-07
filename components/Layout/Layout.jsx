import React from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="plain-bg">
      <Navbar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
