import React from "react";

import classes from "./styles/CartIcon.module.css";
import { useSelector } from "react-redux";

const CartIcon = () => {
  localStorage.getItem("cart");

  const cart = useSelector((state) => state.cart);
  const { itemCount } = cart;

  const cartTotal = <p>{itemCount}</p>;
  return (
    <div className={classes.cart_container}>
      <span class="material-symbols-outlined">local_mall</span>
      {itemCount > 0 ? cartTotal : <p>0</p>}
    </div>
  );
};

export default CartIcon;
