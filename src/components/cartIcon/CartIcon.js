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
  useDisclosure,
} from "@chakra-ui/react";
import CartTotal from "./cart-dropdown/CartTotal";

const CartIcon = () => {
  localStorage.getItem("cart");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const cart = useSelector((state) => state.cart);
  const { itemCount, total } = cart;

  const cartTotal = <p>{itemCount}</p>;
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        backgroundColor={"#000"}
        w={"70px"}
        borderRadius={"30px"}
        cursor={"pointer"}
        bgGradient={"linear(to-r, white 50%, black 50%)"}
        bgSize={"200% 100%"}
        bgPosition={"right bottom"}
        color={"#fff"}
        border={"1px solid black"}
        transition={"all 0.5s ease-out"}
        _hover={{
          backgroundPosition: "left bottom",
          color: "#000",
        }}
      >
        <Flex alignItems={"center"} gap={1}>
          <span class="material-symbols-outlined">local_mall</span>
          {itemCount > 0 ? cartTotal : <p>0</p>}
        </Flex>
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
          <DrawerFooter justifyContent={"center"}>
            <DrawerBody>
              <CartTotal itemCount={itemCount} total={total} />
            </DrawerBody>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartIcon;
