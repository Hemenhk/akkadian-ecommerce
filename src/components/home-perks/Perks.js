import React from "react";

import { GiWorld } from "react-icons/gi";
import { BiLeaf } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import classes from "./styles/Perks.module.css";
import { Flex, Heading, Text } from "@chakra-ui/react";

const Perks = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      h={"300px"}
      margin={"20px 50px"}
    >
      <Flex flexDirection={"column"} alignItems={"center"} w={"30%"} textAlign={"center"}>
        <LiaShippingFastSolid size={60} className={classes.perks} />
        <Heading size={"md"} fontFamily={"Noto Sans"} fontWeight={"600"} color={"#343434"} mb={"15px"}>Fast Shipping</Heading>
        <Text fontFamily={"Inter"} fontSize={"1rem"} fontWeight={"500"} lineHeight={"1.4rem"} color={"#666666"} w={"90%"}>Our delivery times are 1-2 days in Sweden, and 4-6 abroad.</Text>
      </Flex>
      <Flex flexDirection={"column"} alignItems={"center"} w={"30%"} textAlign={"center"}>
        <GiWorld size={60} className={classes.perks} />
        <Heading size={"md"} fontFamily={"Noto Sans"} fontWeight={"600"} color={"#343434"} mb={"15px"}>International Market</Heading>
        <Text fontFamily={"Inter"} fontSize={"1rem"} fontWeight={"500"} lineHeight={"1.4rem"} color={"#666666"} w={"90%"}>We sell and deliver products abroad to EU, UK, USA and Canada.</Text>
      </Flex>
      <Flex flexDirection={"column"} alignItems={"center"} w={"30%"} textAlign={"center"}>
        <BiLeaf size={60} className={classes.perks} />
        <Heading size={"md"} fontFamily={"Noto Sans"} fontWeight={"600"} color={"#343434"} mb={"15px"}>Natural Ingredients</Heading>
        <Text fontFamily={"Inter"} fontSize={"1rem"} fontWeight={"500"} lineHeight={"1.4rem"} color={"#666666"} w={"90%"}>
          All out products are made with the highest quality of ingredients
          found in nature.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Perks;
