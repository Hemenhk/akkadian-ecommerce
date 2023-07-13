import { Flex } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./styles/NavLinks.module.css"
import CategoriesDrawer from "../drawer/CategoriesDrawer";

const NavLinks = () => {
  return (
    <Flex flexDirection={"column"}>
      <ul className={classes.nav}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/shop"}>Shop</NavLink>
        </li>
        <li>
          <CategoriesDrawer />
        </li>
        <li>
          <NavLink to={"/faq"}>Faq</NavLink>
        </li>
      </ul>
    </Flex>
  );
};

export default NavLinks;
