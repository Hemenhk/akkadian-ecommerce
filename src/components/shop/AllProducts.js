import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import FeaturedProduct from "../products/featured-products/FeaturedProduct";
import classes from "./styles/AllProducts.module.css";
import { Heading } from "@chakra-ui/react";
import { fetchAllProducts } from "../../redux/reducers/all-products/actions";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const allProducts =
    products &&
    products.map((product) => (
      <FeaturedProduct productId={product._id} key={product._id} />
    ));
  return (
    <div className={classes.container}>
      <Heading fontFamily={"noto sans"} fontSize={"2rem"}>
        Shop
      </Heading>
      <div className={classes.products}>{allProducts}</div>
    </div>
  );
};

export default AllProducts;
