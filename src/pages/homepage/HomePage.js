import React from "react";

import HeroBanner from "../../components/hero/HeroBanner";
import Perks from "../../components/home-perks/Perks";
import classes from "./HomePage.module.css";
import FeatureCollection from "../../components/products/featured-collection/FeatureCollection";
import { Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Flex flexDirection={"column"}>
      <Flex
        className={classes.hero_image}
        flexDirection={"column"}
        justifyContent={"center"}
        h={"600px"}
        margin={"20px"}
      >
        <HeroBanner />
      </Flex>

      <Perks />
      <FeatureCollection />
    </Flex>
  );
};

export default HomePage;
