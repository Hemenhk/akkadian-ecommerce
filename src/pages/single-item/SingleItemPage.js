import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import classes from "./styles/SingleItemPage.module.css";
import { setAddProduct, setIncrease } from "../../redux/reducers/cartSlice";
import { isInCart } from "../../helpers";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { fetchSingleProduct } from "../../redux/reducers/single-product/actions";

const SingleItemPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);
  const { product } = useSelector((state) => state.singleProduct);
  const cart = useSelector((state) => state.cart);

  const { title, price, imageCover, description } = product;
  const { cartItems } = cart;

  const addItemHandler = () => {
    dispatch(setAddProduct(product));
  };

  const increaseItemHandler = () => {
    dispatch(setIncrease(product));
  };

  return (
    <Flex
      className={classes.container}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={10}
    >
      <Flex ml={20}>
        <Image src={imageCover} alt="product " w={"450px"} />
      </Flex>
      <Flex flexDirection={"column"} gap={10}>
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
        </Flex>
        <Flex flexDirection={"column"} gap={10} w={"90%"}>
          {!isInCart(product, cartItems) ? (
            <Button
              w={"100%"}
              h={10}
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
              onClick={addItemHandler}
            >
              ADD TO CART
            </Button>
          ) : (
            <Button
              w={"100%"}
              h={10}
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
              onClick={increaseItemHandler}
            >
              ADD MORE
            </Button>
          )}{" "}
          <Text>{description}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SingleItemPage;
