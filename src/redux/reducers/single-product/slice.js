import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  reviews: [],
  isLoading: false,
  reviewValues: {
    title: "",
    rating: null,
    review: "",
    author: "",
  },
  error: "",
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
    setError: (state, action) => {
      state.error = action.payload;
    },
    setInputValues: (state, action) => {
      state.reviewValues = {
        ...state.reviewValues,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});

export const { setIsLoading, setProduct, setReview, setInputValues, setError } =
  singleProductSlice.actions;
export default singleProductSlice;
