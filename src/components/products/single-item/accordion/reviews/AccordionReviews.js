import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text } from "@chakra-ui/react";
import { Rating } from "@mui/material";
import { fetchReviews } from "../../../../../redux/reducers/single-product/actions";

const AccordionReviews = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const reviews = useSelector((state) => state.singleProduct.reviews);

  useEffect(() => {
    dispatch(fetchReviews(productId));
  }, [dispatch, productId]);

  const fetchedReview = reviews.map((rev) => (
    <Flex
      flexDirection={"column"}
      key={rev._id}
      marginBottom={5}
      borderBottomWidth={1}
      padding={"1rem 0"}
    >
      <Flex gap={3}>
        {/* Avatar  */}
        <Flex
          borderRadius={50}
          backgroundColor={"#e0e0e0"}
          width={12}
          height={12}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {rev.author.charAt(0)}
        </Flex>
        {/* Rating, date, author */}
        <Flex flexDirection={"column"} gap={1}>
          <Flex alignItems={"center"} gap={1}>
            <Rating
              size="small"
              readOnly
              value={rev.rating}
              style={{ color: "rgb(14, 14, 14)" }}
            />{" "}
            <Text fontFamily={"inter"} fontSize={".8rem"} fontWeight={"300"}>
              {rev.createdAt}
            </Text>
          </Flex>
          <Flex>
            <Text fontFamily={"noto sans"} fontWeight={"700"}>
              {rev.author}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {/* Title, review */}
      <Flex flexDirection={"column"} marginLeft={1} marginTop={2}>
        <Text fontFamily={"noto sans"} fontWeight={"700"}>
          {rev.title}
        </Text>
        <Text fontFamily={"inter"} fontSize={".8rem"} fontWeight={"400"}>
          {rev.review}
        </Text>
      </Flex>
    </Flex>
  ));
  return <>{fetchedReview}</>;
};

export default AccordionReviews;
