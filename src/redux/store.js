import { combineReducers, configureStore } from "@reduxjs/toolkit";
import allProductsSlice from "./reducers/all-products/slice";
import cartSlice from "./reducers/cartSlice";
import singleProductSlice from "./reducers/single-product/slice";

const rootReducer = combineReducers({
  allProducts: allProductsSlice.reducer,
  singleProduct: singleProductSlice.reducer,
  cart: cartSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
