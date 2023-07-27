import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import classes from "./styles/SingleItemPage.module.css";

import { Flex, Text } from "@chakra-ui/react";
import { fetchSingleProduct } from "../../redux/reducers/single-product/actions";
import TheAccordion from "../../components/products/single-item/accordion/TheAccordion";
import QuantitySelector from "../../components/products/single-item/quantity-selector/QuantitySelector";
import SingleItemButtons from "../../components/products/single-item/buttons/SingleItemButtons";
import StarRating from "../../components/products/single-item/rating/StarRating";
import ImageCarousel from "../../components/products/single-item/image-carousel/ImageCarousel";

const SingleItemPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(productId));
  }, [dispatch, productId]);
  const { product, isLoading } = useSelector((state) => state.singleProduct);

  const shouldRenderRating = product && !isLoading;
  const {
    title,
    price,
    images,
    description,
    ingredients,
    usage,
    ratingsQuantity,
    ratingsAverage,
  } = product;

  return (
    <Flex
      className={classes.container}
      flexDirection={"row"}
      justifyContent={"center"}
      gap={10}
      padding={"5rem"}
      bgColor={"#fafafa"}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={10}
      >
        <Flex flexDirection={"column"}>
          <ImageCarousel
            images={images}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        </Flex>
        <Flex w={"450px"}>
          <TheAccordion
            ingredients={ingredients}
            usage={usage}
            ratingsQuantity={ratingsQuantity}
          />
        </Flex>
      </Flex>
      <Flex flexDirection={"column"} w={"25%"} gap={10}>
        <Flex flexDirection={"column"} gap={3}>
          <Text
            fontFamily={"inter"}
            fontSize={"1.2rem"}
            fontWeight={"400"}
            letterSpacing={1.5}
            textTransform={"uppercase"}
          >
            {title}
          </Text>
          {shouldRenderRating ? (
            <StarRating
              ratingsAverage={ratingsAverage}
              ratingsQuantity={ratingsQuantity}
            />
          ) : (
            <div>Loading rating...</div> // You can customize this placeholder
          )}

          <Text fontFamily={"inter"}>$ {price}</Text>
        </Flex>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <SingleItemButtons
          product={product}
          setQuantity={setQuantity}
          quantity={quantity}
          description={description}
        />
      </Flex>
    </Flex>
  );
};

export default SingleItemPage;
