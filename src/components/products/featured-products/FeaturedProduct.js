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
  Heading,
  Image,
  Stack,
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
        <Stack gap={-10}>
          <Heading size="sm" fontSize="1.1rem">
            {title}
          </Heading>
          <Text fontFamily="Inter" fontWeight="semibold">
            $ {price}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter display="flex" justifyContent="center">
        {!isInCart(product, cartItems) ? (
          <Button
            borderRadius={4}
            bg="#000"
            color="#fff"
            w="100%"
            _hover={{ backgroundColor: "cadetBlue" }}
            onClick={addItemHandler}
          >
            ADD TO CART
          </Button>
        ) : (
          <Button
            borderRadius={4}
            bg="#000"
            color="#fff"
            w="100%"
            _hover={{ backgroundColor: "cadetBlue" }}
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
