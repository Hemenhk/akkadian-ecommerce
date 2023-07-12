import React from "react";
import { useSelector } from "react-redux";
import FeaturedProduct from "../featured-products/FeaturedProduct";

import classes from "./styles/FeaturedCollection.module.css";
import { Container, Flex, Heading } from "@chakra-ui/react";
const FeatureCollection = () => {
  const products = useSelector((state) => state.product);

  const productItems = products
    .filter((product, idx) => idx < 4)
    .map((product) => (
      <FeaturedProduct productId={product.id} {...product} key={product.id} />
    ));
  return (
    <Flex flexDirection="column" alignItems="center" gap={10}>
      <Heading size={"lg"} fontFamily={"Noto Sans"} fontWeight={500}>Featured Collection</Heading>
      <Flex gap={4} justifyContent={"center"} flexWrap={"wrap"}>{productItems}</Flex>
    </Flex>
  );
};

export default FeatureCollection;
