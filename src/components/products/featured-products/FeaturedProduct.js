import React, { useState, useEffect } from "react";
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
import { Rating } from "@mui/material";

const FeaturedProduct = ({ productId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [averageRating, setAverageRating] = useState(0);

  const product = useSelector((state) =>
    state.allProducts.products.find((product) => product._id === productId)
  );
  const cart = useSelector((state) => state.cart);
  const { ratingsAverage } = useSelector(
    (state) => state.singleProduct.product
  );

  useEffect(() => {
    if (ratingsAverage) {
      setAverageRating(ratingsAverage);
    }
  }, [ratingsAverage]);

  if (!product) {
    return <div>No product found</div>;
  }

  const { title, price, imageCover } = product;
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
        <Image
          src={imageCover}
          w={200}
          onClick={itemNavHandler}
          cursor="pointer"
        />
        <Flex flexDirection={"column"} gap={2} pt={5}>
          <Text
            fontFamily={"noto sans"}
            fontWeight={"400"}
            fontSize=".9rem"
            letterSpacing={1}
            textTransform={"uppercase"}
          >
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
            fontSize={".8rem"}
            fontWeight={"400"}
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
            fontSize={".8rem"}
            fontWeight={"400"}
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
