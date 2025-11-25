import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="">
        <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
