import React from "react";

import classes from "./styles/CartTotal.module.css";
import { useDispatch } from "react-redux";
import { setClearCart } from "../../../redux/reducers/cartSlice";

const CartTotal = ({ itemCount, total }) => {
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(setClearCart());
  };
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <p>Total items: {itemCount}</p>
        <p>{`Total: $${total.toFixed(2)}`}</p>
      </div>
      <div className={classes.btn_container}>
        <button className={classes.btn_checkout}>CHECKOUT</button>
        <button className={classes.btn_clear} onClick={clearCartHandler}>
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
