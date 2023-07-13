import React from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";

import classes from "./MainNav.module.css";
import CartIcon from "../cartIcon/CartIcon";
import { useDispatch } from "react-redux";
import { setClearCart } from "../../redux/reducers/cartSlice";
import { Flex, Text } from "@chakra-ui/react";
import SideNav from "./drawer/Drawer";

const MainNav = () => {
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(setClearCart());
  };
  return (
    
    <Flex justifyContent={"space-between"} alignItems={"center"} padding={10} borderBottomWidth={1}>
      <Flex>
        <SideNav />
      </Flex>
      <Flex>
        <Text>Logo</Text>
      </Flex>
      <Flex>
        <CartIcon />
      </Flex>
    </Flex>
  );
};

export default MainNav;
