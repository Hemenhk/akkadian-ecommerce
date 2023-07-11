import React from "react";
import { useSelector } from "react-redux";
import FeaturedProduct from "../../featured-products/FeaturedProduct";

import classes from "./styles/BeardProduct.module.css"
const BeardProducts = () => {
  const products = useSelector((state) => state.product);

  const filteredProducts = products.filter((product) =>
    product.category.includes("beard")
  );

  const beardProducts = filteredProducts.map((product) => (
    <FeaturedProduct productId={product.id} key={product.id} />
  ));
  return (
    <div className={classes.container}>
        <h2>Beard</h2>
      <div className={classes.products}>{beardProducts}</div>
    </div>
  );
};

export default BeardProducts;
