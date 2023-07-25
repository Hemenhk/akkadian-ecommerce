import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturedProduct from "../featured-products/FeaturedProduct";

import { Flex, Heading, Spinner } from "@chakra-ui/react";
import { fetchAllProducts } from "../../../redux/reducers/all-products/actions";
const FeatureCollection = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const productItems = products && (
    products
      .filter((product, idx) => idx < 4)
      .map((product) => (
        <FeaturedProduct
          productId={product._id}
          {...product}
          key={product._id}
        />
      ))
  ) 
  return (
    <Flex flexDirection="column" alignItems="center" gap={10}>
      <Heading size={"lg"} fontFamily={"Noto Sans"} fontWeight={500}>
        Featured Collection
      </Heading>
      <Flex gap={4} justifyContent={"center"} flexWrap={"wrap"}>
        {!isLoading ? (
          productItems
        ) : (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
      </Flex>
    </Flex>
  );
};

export default FeatureCollection;
