import React from "react";
import MainNav from "../components/navigation/MainNav";
import { Outlet } from "react-router-dom";

import classes from "./Root.module.css";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <>
      <MainNav />
      <main className={classes.main_content}>
        <Outlet />
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </>
  );
};

export default Root;
