import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

import classes from "./styles/CategoriesDrawer.module.css";

const CategoriesDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawerHandler = () => setIsOpen(!isOpen);
  return (
    <>
      <Flex flexDirection={"column"}>
        <li onClick={openDrawerHandler} className={classes.parent_link}>
          <Flex alignItems={"center"} gap={3}>
            Categories
            <BiChevronDown
              size={20}
              className={isOpen ? classes.chevron_up : classes.chevron_down}
            />
          </Flex>
        </li>
        <ul
          className={`${classes.nested_drawer} ${
            isOpen ? classes.nested_drawer_open : classes.nested_drawer_closed
          }`}
        >
          <li>
            <NavLink to="/beard">Beard</NavLink>
          </li>
          <li>
            <NavLink to="/hair">Hair</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </Flex>
    </>
  );
};

export default CategoriesDrawer;
