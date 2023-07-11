import React from "react";

import classes from "./styles/ShopPage.module.css";
import AllProducts from "../../components/shop/AllProducts";

const ShopPage = () => {
  return (
    <div className={classes.container}>
      <AllProducts />
    </div>
  );
};

export default ShopPage;
