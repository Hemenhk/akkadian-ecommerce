import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { setAddProduct, setIncrease } from "../../../redux/reducers/cartSlice";
import { isInCart } from "../../../helpers";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

const FeaturedProduct = ({ productId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) =>
    state.product.find((product) => product.id === productId)
  );
  const cart = useSelector((state) => state.cart);

  if (!product) {
    return <div>No product found</div>;
  }

  const { title, price, image } = product;
  const { cartItems } = cart;

  const addItemHandler = () => {
    dispatch(setAddProduct(product));
  };

  const increaseItemHandler = () => {
    dispatch(setIncrease(product));
  };

  const itemNavHandler = () => {
    navigate(`/${productId}`);
  };

  return (
    <Card>
      <CardBody>
        <Image src={image} w={200} onClick={itemNavHandler} cursor="pointer" />
        <Flex flexDirection={"column"} gap={2} pt={5}>
          <Text fontFamily={"noto sans"} fontWeight="semibold" fontSize="1.1rem">
            {title}
          </Text>
          <Text fontFamily="Inter" fontWeight="400">
            $ {price}
          </Text>
        </Flex>
      </CardBody>
      <CardFooter display="flex" justifyContent="center">
        {!isInCart(product, cartItems) ? (
          <Button
            w="100%"
            fontFamily={"noto sans"}
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
            w="100%"
            fontFamily={"noto sans"}
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
        )}
      </CardFooter>
    </Card>
  );
};

export default FeaturedProduct;
