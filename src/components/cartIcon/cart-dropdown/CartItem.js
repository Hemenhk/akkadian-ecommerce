import React from "react";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsTrash3Fill } from "react-icons/bs";

import classes from "./styles/CartItem.module.css";

const CartItem = (props) => {
  const { title, price, image, quantity, id } = props;
  return (
    <div className={classes.container}>
      <div className={classes.product_container}>
        <div className={classes.img_container}>
          <img className={classes.img} src={image} />
        </div>
        <div className={classes.info}>
          <h4>{title}</h4>
          <p>$ {price}</p>
        </div>
      </div>
      <div className={classes.item_handler}>
        <div className={classes.quantity}>
          <p>{`Quantity: ${quantity}`}</p>
        </div>
        <div className={classes.btn_container}>
          <button className={classes.add_btn}>
            <AiFillPlusCircle size={25} />
          </button>

          {quantity > 0 && (
            <>
              <button className={classes.remove_btn}>
                <AiFillMinusCircle size={25} />
              </button>
              <button className={classes.remove_btn}>
                <BsTrash3Fill size={25} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
