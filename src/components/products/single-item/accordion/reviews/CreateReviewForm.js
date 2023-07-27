import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setInputValues } from "../../../../../redux/reducers/single-product/slice";
import { createReview } from "../../../../../redux/reducers/single-product/actions";
import { Button, Flex } from "@chakra-ui/react";
import { TextField, Rating } from "@mui/material";

const CreateReviewForm = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [addRating, setAddRating] = useState(0);
  const { isLoading, reviewValues } = useSelector(
    (state) => state.singleProduct
  );

  const { title, review, author } = reviewValues;

  const reviewData = {
    title: title,
    review: review,
    author: author,
  };

  const changeHandler = (e) => {
    dispatch(setInputValues({ name: e.target.name, value: e.target.value }));
  };

  const ratingChangeHandler = (e, newValue) => {
    setAddRating(newValue);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(createReview(productId, { ...reviewData, rating: addRating }));

    dispatch(setInputValues({ name: "title", value: "" }));
    dispatch(setInputValues({ name: "review", value: "" }));
    dispatch(setInputValues({ name: "author", value: "" }));
    setAddRating(0);
  };
  return (
    <form onSubmit={submitHandler}>
      <Flex
        flexDirection={"column"}
        gap={5}
        padding={"20px 0"}
        marginBottom={5}
        borderBottomWidth={1}
      >
        <Rating
          name="simple-controlled"
          value={addRating}
          onChange={ratingChangeHandler}
        />
        <Flex flexDirection={"column"}  gap={3}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            name="title"
            value={title}
            onChange={changeHandler}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Review"
            variant="outlined"
            name="review"
            value={review}
            onChange={changeHandler}
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Author"
            variant="outlined"
            name="author"
            value={author}
            onChange={changeHandler}
            size="small"
          />
        </Flex>
        <Button
          type="submit"
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
        >
          Add Review
        </Button>
      </Flex>
    </form>
  );
};

export default CreateReviewForm;
