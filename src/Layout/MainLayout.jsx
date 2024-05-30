import React from "react";
import { Navbar, Footer } from "../components";

function MainLayout({ children }) {
  return (
    <div className="bg-[#B4B4B8]">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
