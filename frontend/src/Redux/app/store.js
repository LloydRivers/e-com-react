import { productsReducer, cartSliceReducer } from "../slices";
import productReducer from "../slices/ProductSlices/productSlice";
import userSlice from "../slices/UserSlice/userSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    cart: cartSliceReducer,
    user: userSlice,
  },
});
