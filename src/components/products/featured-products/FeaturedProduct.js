import React from "react";
import { useSelector } from "react-redux";

import classes from "./styles/FeaturedProduct.module.css";

const FeaturedProduct = ({ productId }) => {
  const product = useSelector((state) =>
    state.product.find((product) => product.id === productId)
  );

  if (!product) {
    return <div>No product found</div>;
  }

  const { title, price, image} = product;

  return (
    <div className={classes.container}>
      <div className={classes.img_container}>
        <img className={classes.image} src={image} alt="product" />
      </div>
      <div className={classes.featured_product}>
        <h3>{title}</h3>
        <p>$ {price}</p>
        <button className={classes.btn}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
