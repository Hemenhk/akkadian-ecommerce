import React from "react";

import { useSelector } from "react-redux";
import FeaturedProduct from "../products/featured-products/FeaturedProduct";
import classes from "./styles/AllProducts.module.css";

const AllProducts = () => {
  const products = useSelector((state) => state.product);

  const allProducts = products.map((product) => (
    <FeaturedProduct productId={product.id} key={product.id} />
  ));
  return (
    <div className={classes.container}>
      <h2>Shop</h2>
      <div className={classes.products}>{allProducts}</div>
    </div>
  );
};

export default AllProducts;
