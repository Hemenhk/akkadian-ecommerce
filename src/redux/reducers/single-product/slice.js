import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  reviews: [],
  isLoading: false,
};

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setReview: (state, action) => {
      state.reviews = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading, setProduct, setReview } =
  singleProductSlice.actions;
export default singleProductSlice;
