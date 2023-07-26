import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import { Flex, Text } from "@chakra-ui/react";

import classes from "../../../../pages/single-item/styles/SingleItemPage.module.css";

const StarRating = ({ ratingsAverage, ratingsQuantity }) => {
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    if (ratingsAverage) {
      setAverageRating(ratingsAverage);
    }
  }, [ratingsAverage]);

  const renderRatingStars = () => {
    if (averageRating > 0) {
      return (
        <Rating
          name="read-only"
          precision={0.5}
          size="small"
          value={averageRating}
          readOnly
          className={classes.rating}
        />
      );
    } else {
      return (
        <Rating
          name="read-only"
          precision={0.5}
          size="small"
          value={0}
          readOnly
          className={classes.rating}
        />
      );
    }
  };
  return (
    <Flex alignItems={"center"} gap={2}>
      {renderRatingStars()}
      <Text fontFamily={"inter"} fontSize={".8rem"} fontWeight={300}>
        {ratingsQuantity} reviews
      </Text>
    </Flex>
  );
};

export default StarRating;
