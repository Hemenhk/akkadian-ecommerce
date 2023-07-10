import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";

const rootReducer = combineReducers({
  product: productSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store