import React from "react";
import { useDispatch } from "react-redux";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsTrash3Fill } from "react-icons/bs";

import {
  setIncrease,
  setRemove,
  setDecrease,
} from "../../../redux/reducers/cartSlice";
import classes from "./styles/CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, image, quantity, id } = props;

  const itemIncreaseHandler = () => dispatch(setIncrease({ id }));

  const itemDecreaseHandler = () => dispatch(setDecrease({ title, price, image, quantity, id }));

  const itemRemoveHandler = () => dispatch(setRemove({title, price, image, quantity, id }));

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
            <AiFillPlusCircle size={25} onClick={itemIncreaseHandler} />
          </button>

          {quantity > 0 && (
            <>
              <button className={classes.remove_btn}>
                <AiFillMinusCircle size={25} onClick={itemDecreaseHandler} />
              </button>
              <button className={classes.remove_btn}>
                <BsTrash3Fill size={25} onClick={itemRemoveHandler} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
