import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import classes from "./styles/SingleItemPage.module.css";
import { setAddProduct, setIncrease } from "../../redux/reducers/cartSlice";
import { isInCart } from "../../helpers";

const SingleItemPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector((state) =>
    state.product.find((p) => Number(p.id) === Number(productId))
  );
  const cart = useSelector((state) => state.cart);

  const { title, price, image, description } = products;
  const { cartItems } = cart;

  const addItemHandler = () => {
    dispatch(setAddProduct(products));
  };

  const increaseItemHandler = () => {
    dispatch(setIncrease(products));
  };

  return (
    <div className={classes.container}>
      <div className={classes.img_container}>
        <img src={image} alt="product " className={classes.img} />
      </div>
      <div className={classes.product_container}>
        <div className={classes.product_info}>
          <h3>{title}</h3>
          <p>$ {price}</p>
        </div>
        <div className={classes.btn_container}>
          {!isInCart(products, cartItems) ? (
            <button onClick={addItemHandler}>ADD TO CART</button>
          ) : (
            <button onClick={increaseItemHandler}>ADD MORE</button>
          )}
        </div>
        <div className={classes.desc_container}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleItemPage;
