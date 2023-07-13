import React from "react";

import { Flex, Image } from "@chakra-ui/react";
import SideNav from "./drawer/Drawer";
import CartIcon from "../cartIcon/CartIcon";

import logo from "../../assets/images/website-header.png";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={10}
      borderBottomWidth={1}
    >
      <Flex>
        <SideNav />
      </Flex>
      <Flex>
        <Link to="/">
          <Image src={logo} w={300} />
        </Link>
      </Flex>
      <Flex>
        <CartIcon />
      </Flex>
    </Flex>
  );
};

export default MainNav;
