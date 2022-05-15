import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="plain-bg-grad">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
