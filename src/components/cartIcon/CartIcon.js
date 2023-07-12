import React, { useRef } from "react";

import { useSelector } from "react-redux";
import CartDropdown from "./cart-dropdown/CartDropdown";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import classes from "./styles/CartIcon.module.css";
import CartTotal from "./cart-dropdown/CartTotal";

const CartIcon = () => {
  localStorage.getItem("cart");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const cart = useSelector((state) => state.cart);
  const { itemCount } = cart;

  const cartTotal = <p>{itemCount}</p>;
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
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
      <Drawer
        size={"sm"}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}

      >
        <DrawerOverlay />
        <DrawerContent bg={"#fafafa"}>
          <DrawerCloseButton size={"lg"} />
          <DrawerHeader
            fontFamily={"noto sans"}
            fontWeight={"400"}
            letterSpacing={2}
            borderBottomWidth="1px"
            mb={8}
          >
            CART
          </DrawerHeader>
          <DrawerBody>
            <CartDropdown />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartIcon;
