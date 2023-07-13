import React from "react";

import classes from "./styles/CartDropdown.module.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";



const CartDropdown = () => {
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);

  const { itemCount, cartItems, total } = cart;

  const cartProducts = cartItems.map((product) => (
    <>
      <CartItem {...product} quantity={product.quantity} key={product.id} />
    </>
  ));


  return (
    <div>
      <div>
        <div>{cartProducts} </div>
        <div>
          <CartTotal itemCount={itemCount} total={total} />
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;