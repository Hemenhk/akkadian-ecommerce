import React from "react";
import MainNav from "../components/MainNav.js";
import { Outlet } from "react-router-dom";

import classes from "./Root.module.css"

const Root = () => {
  return (
    <>
      <MainNav />
      <main className={classes.main_content}>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
