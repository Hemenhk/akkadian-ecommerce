import React from "react";

import classes from "./MainNav.module.css";
import { Link, NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <div className={classes.container}>
      <div>
        <Link className={classes.logo} to="/">
          Logo
        </Link>
      </div>
      <div className={classes.header}>
        <nav>
          <ul className={classes.nav_list}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={classes.cart_container}>
        <span class="material-symbols-outlined">local_mall</span>
        <p>1</p>
      </div>
    </div>
  );
};

export default MainNav;
