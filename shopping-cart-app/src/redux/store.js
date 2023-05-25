import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductSlice";
import CartSlice from "./CartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: CartSlice,
  },
});
