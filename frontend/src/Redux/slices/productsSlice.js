import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    console.log(data);
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await axios.delete(`https://dummyjson.com/products/${id}`);
    return id;
  }
);

export const postProduct = createAsyncThunk(
  "products/postProduct",
  async (product) => {
    await axios.post("https://dummyjson.com/products", product);
    return product;
  }
);

export const putProduct = createAsyncThunk(
  "products/putProduct",
  async (product) => {
    await axios.put(`https://dummyjson.com/products/${product.id}`, product);
    return product;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(action.payload);
      console.log("request successful!");
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isError = true;
      console.log(action.error);
      state.errorMessage = action.error.message;
      state.loading = false;
    });
    builder.addCase(deleteProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      console.log("request successful!");
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.loading = false;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.isError = true;
      console.log(action.error);
      state.errorMessage = action.error.message;
      state.loading = false;
    });
    builder.addCase(postProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(postProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      console.log("request successful!");
      state.products.push(action.payload);
      state.loading = false;
    });
    builder.addCase(postProduct.rejected, (state, action) => {
      state.isError = true;
      console.log(action.error);
      state.errorMessage = action.error.message;
      state.loading = false;
    });
    builder.addCase(putProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(putProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      console.log("request successful!");
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      state.loading = false;
    });
    builder.addCase(putProduct.rejected, (state, action) => {
      state.isError = true;
      console.log(action.error);
      state.errorMessage = action.error.message;
      state.loading = false;
    });
  },
});

export default productsSlice.reducer;
