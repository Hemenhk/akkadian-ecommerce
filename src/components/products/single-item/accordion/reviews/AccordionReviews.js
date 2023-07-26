import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text, Button } from "@chakra-ui/react";
import { Rating } from "@mui/material";
import { fetchReviews } from "../../../../../redux/reducers/single-product/actions";

const AccordionReviews = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(5);
  const reviews = useSelector((state) => state.singleProduct.reviews);

  useEffect(() => {
    dispatch(fetchReviews(productId));
  }, [dispatch, productId]);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const loadMoreReviewsHandler = () => {
    setCurrentPage((prevState) => prevState + 1);
  };
  const loadPreviousReviewsHandler = () => {
    setCurrentPage((prevState) => prevState - 1);
  };

  const renderedReviews = currentReviews.map((rev) => (
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
  return (
    <>
      {renderedReviews}
      <Flex>
        {currentPage > 1 && (
          <Button
            w={"100%"}
            h={10}
            fontSize={".8rem"}
            fontWeight={"400"}
            letterSpacing={2}
            bgGradient={"linear(to-r, white 50%, black 50%)"}
            bgSize={"200% 100%"}
            bgPosition={"right bottom"}
            color={"#fff"}
            border={"1px solid black"}
            borderRadius={2}
            transition={"all 0.5s ease-out"}
            _hover={{
              backgroundPosition: "left bottom",
              color: "#000",
            }}
            onClick={loadPreviousReviewsHandler}
          >
            Load previous reviews
          </Button>
        )}
        {reviews.length > indexOfLastReview && (
          <Button
            w={"100%"}
            h={10}
            fontSize={".8rem"}
            fontWeight={"400"}
            letterSpacing={2}
            bgGradient={"linear(to-r, white 50%, black 50%)"}
            bgSize={"200% 100%"}
            bgPosition={"right bottom"}
            color={"#fff"}
            border={"1px solid black"}
            borderRadius={2}
            transition={"all 0.5s ease-out"}
            _hover={{
              backgroundPosition: "left bottom",
              color: "#000",
            }}
            onClick={loadMoreReviewsHandler}
          >
            Load more reviews
          </Button>
        )}
      </Flex>
    </>
  );
};

export default AccordionReviews;
