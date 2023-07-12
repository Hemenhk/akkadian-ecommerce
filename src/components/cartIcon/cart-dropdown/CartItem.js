import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";

import {
  setIncrease,
  setRemove,
  setDecrease,
} from "../../../redux/reducers/cartSlice";
import classes from "./styles/CartItem.module.css";
import { Button, Flex, Image, Text } from "@chakra-ui/react";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, image, quantity, id } = props;

  const itemIncreaseHandler = () => dispatch(setIncrease({ id }));

  const itemDecreaseHandler = () =>
    dispatch(setDecrease({ title, price, image, quantity, id }));

  const itemRemoveHandler = () =>
    dispatch(setRemove({ title, price, image, quantity, id }));

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      mb={5}
      pb={8}
      borderBottomWidth="1px"
    >
      <Flex alignItems={"center"} ml={10}>
        <Image src={image} w={"110px"} />
      </Flex>
      <Flex gap={4} flexDirection={"column"} mr={20}>
        <Flex flexDirection={"column"} gap={1.5}>
          <Text fontFamily={"noto sans"} fontSize={".9rem"}>
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
