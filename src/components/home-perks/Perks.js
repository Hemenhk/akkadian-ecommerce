import React from "react";

import { GiWorld } from "react-icons/gi";
import { BiLeaf } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import classes from "./styles/Perks.module.css";

const Perks = () => {
  return (
    <div className={classes.container}>
      <div className={classes.perks_container}>
        <LiaShippingFastSolid size={60} className={classes.perks} />
        <h3>Fast Shipping</h3>
        <p>Our delivery times are 1-2 days in Sweden, and 4-6 abroad.</p>
      </div>
      <div className={classes.perks_container}>
        <GiWorld size={60} className={classes.perks} />
        <h3>International Market</h3>
        <p>We sell and deliver products abroad to EU, UK, USA and Canada.</p>
      </div>
      <div className={classes.perks_container}>
        <BiLeaf size={60} className={classes.perks} />
        <h3>Natural Ingredients</h3>
        <p>
          All out products are made with the highest quality of ingredients
          found in nature.
        </p>
      </div>
    </div>
  );
};

export default Perks;
