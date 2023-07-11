import React from "react";

import classes from "./styles/HeroBanner.module.css";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.text_container}>
        <h1 className={classes.h1}>
          Nurture your beard and style your hair with the highest quaility
          ingredients.
        </h1>
        <p className={classes.p}>
          Our products are made with natural ingredients and are always
          ethically sourced, so you can enjoy the benefits from all around the
          world
        </p>
      </div>
      <div className={classes.btn_container}>
        <Link to="/shop">
          <button className={classes.secondary_btn}>View products</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
