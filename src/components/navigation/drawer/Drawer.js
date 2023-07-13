import React, { useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import NavLinks from "../navlinks/NavLinks";

const SideNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        backgroundColor={"transparent"}
        cursor={"pointer"}
        _hover={{ backgroundColor: "transparent" }}
      >
        <RxHamburgerMenu size={30} />
      </Button>
      <Drawer
        size={"xs"}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#fafafa"}>
          <DrawerHeader mb={20}>
            <DrawerCloseButton size={"lg"} />
          </DrawerHeader>

          <DrawerBody>
            <NavLinks />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideNav;
