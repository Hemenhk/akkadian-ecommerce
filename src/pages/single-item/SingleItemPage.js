import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import classes from "./styles/SingleItemPage.module.css";
import {
  setAddProduct,
  setAmountIncrease,
} from "../../redux/reducers/cartSlice";
import { isInCart } from "../../helpers";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { fetchSingleProduct } from "../../redux/reducers/single-product/actions";
import TheAccordion from "../../components/products/single-item/accordion/TheAccordion";

const SingleItemPage = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);
  const { product } = useSelector((state) => state.singleProduct);
  const cart = useSelector((state) => state.cart);

  const {
    title,
    price,
    imageCover,
    description,
    ingredients,
    usage,
    ratingsQuantity,
  } = product;
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

  const increaseQuantityHandler = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decreaseQuantityHandler = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <Flex
      className={classes.container}
      flexDirection={"row"}
      justifyContent={"center"}
      gap={10}
      padding={"5rem"}
      bgColor={"#fafafa"}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={10}
      >
        <Flex flexDirection={"column"}>
          <Image src={imageCover} alt="product " w={"400px"} />
        </Flex>
        <Flex w={"450px"}>
          <TheAccordion
            ingredients={ingredients}
            usage={usage}
            ratingsQuantity={ratingsQuantity}
          />
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} w={"25%"} gap={10}>
        <Flex flexDirection={"column"} gap={2}>
          <Text
            fontFamily={"inter"}
            fontSize={"1.2rem"}
            fontWeight={"400"}
            letterSpacing={1.5}
            textTransform={"uppercase"}
          >
            {title}
          </Text>
          <Text fontFamily={"inter"}>$ {price}</Text>
          <Text fontFamily={"inter"}>Ratings {ratingsQuantity}</Text>
        </Flex>
        <Flex flexDirection={"column"} gap={3}>
          <Text fontFamily={"inter"} fontSize={".8rem"}>
            Quantity:
          </Text>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={4}
            border={"1px"}
            borderColor={"#dbdbdb"}
            borderRadius={2}
            padding={"6px 20px"}
            w={125}
          >
            <AiOutlineMinus
              size={15}
              cursor={"pointer"}
              onClick={decreaseQuantityHandler}
            />
            <Text>{quantity}</Text>
            <AiOutlinePlus
              size={15}
              cursor={"pointer"}
              onClick={increaseQuantityHandler}
            />
          </Flex>
        </Flex>
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
            lineHeight={1.5}
          >
            {description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SingleItemPage;
