import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  isLoading: false,
};

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading, setProduct } = singleProductSlice.actions;
export default singleProductSlice;
