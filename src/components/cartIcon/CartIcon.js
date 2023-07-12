import React from "react";

import { useSelector } from "react-redux";
import CartDropdown from "./cart-dropdown/CartDropdown";
import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import classes from "./styles/CartIcon.module.css";

const CartIcon = () => {
  localStorage.getItem("cart");

  const cart = useSelector((state) => state.cart);
  const { itemCount } = cart;

  const cartTotal = <p>{itemCount}</p>;
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          justifyContent={"space-between"}
          alignItems={"center"}
          backgroundColor={"#000"}
          w={"70px"}
          borderRadius={"30px"}
          padding={"10px"}
          gap={"5px"}
          cursor={"pointer"}
          className={classes.cart_container}
        >
          <span class="material-symbols-outlined">local_mall</span>
          {itemCount > 0 ? cartTotal : <p>0</p>}
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverBody>
          <CartDropdown />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default CartIcon;
