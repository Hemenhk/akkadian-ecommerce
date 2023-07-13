import React from "react";

import { useSelector } from "react-redux";
import FeaturedProduct from "../products/featured-products/FeaturedProduct";
import classes from "./styles/AllProducts.module.css";
import { Heading } from "@chakra-ui/react";

const AllProducts = () => {
  const products = useSelector((state) => state.product);

  const allProducts = products.map((product) => (
    <FeaturedProduct productId={product.id} key={product.id} />
  ));
  return (
    <div className={classes.container}>
      <Heading fontFamily={"noto sans"} fontSize={"2rem"}>Shop</Heading>
      <div className={classes.products}>{allProducts}</div>
    </div>
  );
};

export default AllProducts;
