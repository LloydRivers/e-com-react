import { productsReducer, cartSliceReducer } from "../slices";
import productReducer from "../slices/ProductSlices/productSlice";
import userReducer from "../slices/UserSlice/userSlice";
import categoriesReducer from "../slices/CategoriesSlice/categoriesSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    cart: cartSliceReducer,
    user: userReducer,
    category: categoriesReducer,
  },
});
