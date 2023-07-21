import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
};

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading, setProducts } = allProductsSlice.actions;
export default allProductsSlice;
