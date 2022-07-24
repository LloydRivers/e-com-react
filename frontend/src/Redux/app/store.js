import { productsReducer, cartSliceReducer } from "../slices";
import productReducer from "../slices/ProductSlices/productSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    cart: cartSliceReducer,
  },
});
