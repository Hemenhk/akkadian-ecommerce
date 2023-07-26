import React from "react";
import { useSelector } from "react-redux";
import FeaturedProduct from "../../featured-products/FeaturedProduct";

import classes from "./styles/HairProduct.module.css";
import { Heading } from "@chakra-ui/react";

const HairProduct = () => {
  const products = useSelector((state) => state.allProducts.products);

  const filteredProducts = products.filter((product) =>
    product.categories.includes("hair")
  );

  const hairProducts = filteredProducts.map((product) => (
    <FeaturedProduct productId={product.id} key={product.id} />
  ));
  return (
    <div className={classes.container}>
      <Heading fontFamily={"noto sans"} fontSize={"2rem"}>
        Hair
      </Heading>
      <div className={classes.products}>{hairProducts}</div>
    </div>
  );
};

export default HairProduct;
