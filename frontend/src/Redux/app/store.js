import { configureStore } from "@reduxjs/toolkit";

import { productsReducer, productReducer, cartSliceReducer } from "../slices";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    cart: cartSliceReducer,
  },
});
