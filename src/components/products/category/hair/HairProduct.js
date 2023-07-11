import React from "react";
import { useSelector } from "react-redux";
import FeaturedProduct from "../../featured-products/FeaturedProduct";

import classes from "./styles/HairProduct.module.css";

const HairProduct = () => {
  const products = useSelector((state) => state.product);

  const filteredProducts = products.filter((product) =>
    product.category.includes("hair")
  );

  const hairProducts = filteredProducts.map((product) => (
    <FeaturedProduct productId={product.id} key={product.id} />
  ));
  return (
    <div className={classes.container}>
      <h2>Hair</h2>
      <div className={classes.products}>{hairProducts}</div>
    </div>
  );
};

export default HairProduct;
