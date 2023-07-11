import React, { useState } from "react";

import classes from "./styles/CartIcon.module.css";
import { useSelector } from "react-redux";
import CartDropdown from "./cart-dropdown/CartDropdown";

const CartIcon = () => {
  localStorage.getItem("cart");
  const [cartOpen, setCartOpen] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { itemCount } = cart;

  const openCartHandler = () => {
    setCartOpen(!cartOpen);
  };

  const cartTotal = <p>{itemCount}</p>;
  return (
    <div className={classes.cart_container} onClick={openCartHandler}>
      <span class="material-symbols-outlined">local_mall</span>
      {itemCount > 0 ? cartTotal : <p>0</p>}
    {cartOpen && <CartDropdown openCartHandler={openCartHandler} cartOpen={cartOpen}/>}
    </div>
  );
};

export default CartIcon;
