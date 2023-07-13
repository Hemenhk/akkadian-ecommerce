import React from "react";

import { Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SideNav from "./drawer/Drawer";
import CartIcon from "../cartIcon/CartIcon";

import logo from "../../assets/images/website-header.png";
import classes from "./MainNav.module.css"

const MainNav = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={10}
      borderBottomWidth={1}
      className={classes.container}
    >
      <Flex>
        <SideNav />
      </Flex>
      <Flex>
        <Link to="/">
          <Image className={classes.logo} src={logo} w={300} />
        </Link>
      </Flex>
      <Flex>
        <CartIcon />
      </Flex>
    </Flex>
  );
};

export default MainNav;
