import React from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./styles/FeaturedProduct.module.css";
import { useNavigate } from "react-router-dom";
import { setAddProduct, setIncrease } from "../../../redux/reducers/cartSlice";
import { isInCart } from "../../../helpers";

const FeaturedProduct = ({ productId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) =>
    state.product.find((product) => product.id === productId)
  );
  const cart = useSelector((state) => state.cart);

  if (!product) {
    return <div>No product found</div>;
  }

  const { title, price, image } = product;
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
    <div className={classes.container}>
      <div className={classes.img_container} onClick={itemNavHandler}>
        <img className={classes.image} src={image} alt="product" />
      </div>
      <div className={classes.featured_product}>
        <h3>{title}</h3>
        <p>$ {price}</p>
        {!isInCart(product, cartItems) ? (
          <button className={classes.btn} onClick={addItemHandler}>
            ADD TO CART
          </button>
        ) : (
          <button className={classes.btn} onClick={increaseItemHandler}>
            ADD MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
