import React from "react";
import { Navbar, Footer } from "../components";

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;