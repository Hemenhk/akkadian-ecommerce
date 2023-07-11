import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

import classes from "./styles/Dropdown.module.css";

const Dropdown = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDropdownHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const drawer = (
    <>
      <ul className={classes.dropdownMenu}>
        <li>
          <NavLink to="/beard">Beard</NavLink>
        </li>
        <li>
          <NavLink to="/hair">Hair</NavLink>
        </li>
        <li>
          <NavLink>Kits</NavLink>
        </li>
      </ul>
    </>
  );
  
  return (
    <div
      className={`${classes.dropdown} ${
        openDropdownHandler ? classes.open : ""
      }`}
      onClick={openDropdownHandler}
    >
      <li>
        Categories{" "}
        <BiChevronDown
          size={30}
          className={`${
            drawerIsOpen ? classes.chevron : classes.chevron_closed
          }`}
        />
      </li>
      {drawerIsOpen && drawer}
    </div>
  );
};

export default Dropdown;
