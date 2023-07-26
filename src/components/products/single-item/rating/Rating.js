import React from "react";
import { Rating } from "@mui/material";
import { Flex, Text } from "@chakra-ui/react";

import classes from "../../../../pages/single-item/styles/SingleItemPage.module.css";

const StarRating = ({ ratingsAverage, ratingsQuantity }) => {
  return (
    <Flex alignItems={"center"} gap={2}>
      <Rating
        name="read-only"
        precision={0.5}
        size="small"
        value={ratingsAverage}
        readOnly
        className={classes.rating}
      />
      <Text fontFamily={"inter"} fontSize={".8rem"} fontWeight={300}>
        {ratingsQuantity} reviews
      </Text>
    </Flex>
  );
};

export default StarRating;
