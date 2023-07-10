import React from "react";
import { useSelector } from "react-redux";
import FeaturedProduct from "../featured-products/FeaturedProduct";

import classes from "./styles/FeaturedCollection.module.css";
const FeatureCollection = () => {
  const products = useSelector((state) => state.product);

  const productItems = products
    .filter((product, idx) => idx < 4)
    .map((product) => (
      <FeaturedProduct productId={product.id} {...product} key={product.id} />
    ));
  return (
    <div className={classes.container}>
      <h2>Featured Collection</h2>
      <div className={classes.collection}>{productItems}</div>
    </div>
  );
};

export default FeatureCollection;
