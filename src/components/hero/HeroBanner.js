import React from "react";

import classes from "./styles/HeroBanner.module.css";

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
        <button className={classes.main_btn}>Buy now</button>
        <button className={classes.secondary_btn}>View collections</button>
      </div>
    </div>
  );
};

export default HeroBanner;
