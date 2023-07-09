import React from "react";

import HeroBanner from "../../components/hero/HeroBanner.js";

import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.hero_image}>
      <HeroBanner />
    </div>
  );
};

export default HomePage;
