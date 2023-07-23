import React from "react";
import { useDispatch } from "react-redux";
import { BsTrash3 } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import {
  setIncrease,
  setRemove,
  setDecrease,
} from "../../../redux/reducers/cartSlice";
import { Flex, Image, Text } from "@chakra-ui/react";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, imageCover, quantity, id } = props;

  const itemIncreaseHandler = () => dispatch(setIncrease({ id }));

  const itemDecreaseHandler = () =>
    dispatch(setDecrease({ title, price, imageCover, quantity, id }));

  const itemRemoveHandler = () =>
    dispatch(setRemove({ title, price, imageCover, quantity, id }));

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      mb={5}
      pb={8}
      borderBottomWidth="1px"
    >
      <Flex alignItems={"center"} ml={10}>
        <Image src={imageCover} w={"110px"} />
      </Flex>
      <Flex gap={4} flexDirection={"column"} mr={20}>
        <Flex flexDirection={"column"} gap={1.5}>
          <Text
            fontFamily={"noto sans"}
            fontWeight={"400"}
            fontSize=".8rem"
            letterSpacing={1.5}
            textTransform={"uppercase"}
          >
            {title}
          </Text>
          <Text fontFamily={"inter"} fontSize={".9rem"}>
            $ {price}
          </Text>
        </Flex>

        <Flex alignItems={"center"} justifyContent={"space-between"} gap={3}>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={4}
            border={"1px"}
            borderColor={"#dbdbdb"}
            borderRadius={2}
            padding={"6px"}
          >
            <AiOutlineMinus
              size={15}
              cursor={"pointer"}
              onClick={itemDecreaseHandler}
            />
            <Text>{quantity}</Text>
            <AiOutlinePlus
              size={15}
              cursor={"pointer"}
              onClick={itemIncreaseHandler}
            />
          </Flex>
          <Flex>
            <BsTrash3 cursor={"pointer"} onClick={itemRemoveHandler} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItem;
