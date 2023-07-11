import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import cartSlice from "./reducers/cartSlice";

const rootReducer = combineReducers({
  product: productSlice.reducer,
  cart: cartSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
