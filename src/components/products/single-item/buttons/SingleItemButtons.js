import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Flex, Text, Button } from "@chakra-ui/react";
import { isInCart } from "../../../../helpers";

import {
  setAddProduct,
  setAmountIncrease,
} from "../../../../redux/reducers/cartSlice";

const SingleItemButtons = ({ product, setQuantity, quantity, description }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addItemsHandler = () => {
    const itemToAdd = { ...product, quantity: quantity };
    dispatch(setAddProduct(itemToAdd));
    setQuantity(1);
  };

  const addMoreItemsHandler = () => {
    const itemToAdd = { ...product, quantity };
    dispatch(setAmountIncrease(itemToAdd));
    setQuantity(1);
  };

  return (
    <Flex flexDirection={"column"} gap={10} w={"100%"}>
      {!isInCart(product, cartItems) ? (
        <Button
          w={"100%"}
          h={10}
          fontSize={".8rem"}
          fontWeight={"400"}
          letterSpacing={2}
          bgGradient={"linear(to-r, white 50%, black 50%)"}
          bgSize={"200% 100%"}
          bgPosition={"right bottom"}
          color={"#fff"}
          border={"1px solid black"}
          borderRadius={2}
          transition={"all 0.5s ease-out"}
          _hover={{
            backgroundPosition: "left bottom",
            color: "#000",
          }}
          onClick={addItemsHandler}
        >
          ADD TO CART
        </Button>
      ) : (
        <Button
          w={"100%"}
          h={10}
          fontSize={".8rem"}
          fontWeight={"400"}
          letterSpacing={2}
          bgGradient={"linear(to-r, white 50%, black 50%)"}
          bgSize={"200% 100%"}
          bgPosition={"right bottom"}
          color={"#fff"}
          border={"1px solid black"}
          borderRadius={2}
          transition={"all 0.5s ease-out"}
          _hover={{
            backgroundPosition: "left bottom",
            color: "#000",
          }}
          onClick={addMoreItemsHandler}
        >
          ADD MORE
        </Button>
      )}
      <Text
        textAlign={"center"}
        fontFamily={"inter"}
        fontSize={".8rem"}
        fontWeight={400}
        letterSpacing={0.5}
        lineHeight={1.75}
      >
        {description}
      </Text>
    </Flex>
  );
};

export default SingleItemButtons;
