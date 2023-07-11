import React from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";

import classes from "./MainNav.module.css";
import CartIcon from "../cartIcon/CartIcon";
import { useDispatch } from "react-redux";
import { setClearCart } from "../../redux/reducers/cartSlice";

const MainNav = () => {
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(setClearCart());
  };
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
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <Dropdown />
            </li>
            <li>
              <NavLink to="/">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <CartIcon />
    </div>
  );
};

export default MainNav;
