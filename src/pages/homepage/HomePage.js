import React from "react";

import HeroBanner from "../../components/hero/HeroBanner";
import Perks from "../../components/home-perks/Perks";
import classes from "./HomePage.module.css";
import FeatureCollection from "../../components/products/featured-collection/FeatureCollection";

const HomePage = () => {
  return (
    <div>
      <div className={classes.hero_image}>
        <HeroBanner />
      </div>

      <Perks />
      <FeatureCollection />
    </div>
  );
};

export default HomePage;
