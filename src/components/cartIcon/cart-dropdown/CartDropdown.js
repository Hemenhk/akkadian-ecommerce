import React from "react";

import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartDropdown = () => {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const cartProducts = cartItems.map((product) => (
    <>
      <CartItem {...product} quantity={product.quantity} key={product.id} />
    </>
  ));

  return <div>{cartProducts} </div>;
};

export default CartDropdown;
