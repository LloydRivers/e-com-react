import { configureStore } from "@reduxjs/toolkit";

import { productsReducer, cartSliceReducer } from "../slices";
import productReducer from "../slices/ProductSlices/productSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    cart: cartSliceReducer,
  },
});
