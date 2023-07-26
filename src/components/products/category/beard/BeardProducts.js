import React from "react";
import { useSelector } from "react-redux";
import FeaturedProduct from "../../featured-products/FeaturedProduct";

import classes from "./styles/BeardProduct.module.css"
import { Heading } from "@chakra-ui/react";
const BeardProducts = () => {
  const products = useSelector((state) => state.allProducts.products);

  const filteredProducts = products.filter((product) =>
    product.categories.includes("beard")
  );

  const beardProducts = filteredProducts.map((product) => (
    <FeaturedProduct productId={product.id} key={product.id} />
  ));
  return (
    <div className={classes.container}>
        <Heading fontFamily={"noto sans"} fontSize={"2rem"}>Beard</Heading>
      <div className={classes.products}>{beardProducts}</div>
    </div>
  );
};

export default BeardProducts;
