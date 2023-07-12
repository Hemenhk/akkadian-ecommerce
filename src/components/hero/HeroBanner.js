import React from "react";

import { Link } from "react-router-dom";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

const HeroBanner = () => {
  return (
    <Flex flexDirection={"column"} gap={10} ml={20}>
      <Flex flexDirection={"column"} gap={5} w={"60%"}>
        <Heading color={"#fff"} fontSize={28}>
          Nurture your beard and style your hair with the highest quaility
          ingredients.
        </Heading>
        <Text color={"#d4d4d4"} fontFamily={"Inter"} fontSize={"1rem"}>
          Our products are made with natural ingredients and are always
          ethically sourced, so you can enjoy the benefits from all around the
          world
        </Text>
      </Flex>
      <Flex>
        <Link to="/shop">
          <Button
            fontFamily={"Inter"}
            fontSize={"1rem"}
            h={50}
            w={160}
            borderRadius={"2px"}
            transition={` 0.3s ease-out `}
            _hover={{ backgroundColor: "cadetBlue", color: "#fff" }}
          >
            View products
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default HeroBanner;
