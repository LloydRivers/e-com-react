import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    loading: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isError = true;
      console.log(action.error);
      state.errorMessage = action.error.message;
      state.loading = false;
    });
  },
});

export const { addProduct } = productSlice.actions;
export const selectProduct = (state) => state.product.product;

export default productSlice.reducer;
