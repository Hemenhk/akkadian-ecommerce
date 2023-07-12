import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

import classes from "./styles/Dropdown.module.css";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

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
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            rightIcon={
              <BiChevronDown
                size={20}
                className={`${
                  isOpen ? classes.chevron : classes.chevron_closed
                }`}
              />
            }
            backgroundColor="transparent"
            fontFamily="Inter"
            fontWeight="400"
          >
            Categories
          </MenuButton>
          <MenuList>
            <MenuItem>Beard</MenuItem>
            <MenuItem>Hair</MenuItem>
            <MenuItem>Kits</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default Dropdown;
