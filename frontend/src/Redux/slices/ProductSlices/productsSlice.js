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

export const deleteProductThunk = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await axios.delete(`https://dummyjson.com/products/${id}`);
    return id;
  }
);

export const postProductThunk = createAsyncThunk(
  "products/postProduct",
  async (product) => {
    await axios.post("https://dummyjson.com/products", product);
    return product;
  }
);

export const putProductThunk = createAsyncThunk(
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
  reducers: {
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    postProduct: (state, action) => {
      state.products.push(action.payload);
    },
    putProduct: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });
    },
  },
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
    builder.addCase(deleteProductThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteProductThunk.fulfilled, (state, action) => {
      console.log(action.payload);
      console.log("request successful!");
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.loading = false;
    });
    builder.addCase(deleteProductThunk.rejected, (state, action) => {
      state.isError = true;
      console.log(action.error);
      state.errorMessage = action.error.message;
      state.loading = false;
    });
    builder.addCase(postProductThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(postProductThunk.fulfilled, (state, action) => {
      console.log(action.payload);
      console.log("request successful!");
      state.products.push(action.payload);
      state.loading = false;
    });
    builder.addCase(postProductThunk.rejected, (state, action) => {
      state.isError = true;
      console.log(action.error);
      state.errorMessage = action.error.message;
      state.loading = false;
    });
    builder.addCase(putProductThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(putProductThunk.fulfilled, (state, action) => {
      console.log(action.payload);
      console.log("request successful!");
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      state.loading = false;
    });
    builder.addCase(putProductThunk.rejected, (state, action) => {
      state.isError = true;
      console.log(action.error);
      state.errorMessage = action.error.message;
      state.loading = false;
    });
  },
});
export const { deleteProduct, postProduct, putProduct } = productsSlice.actions;
export default productsSlice.reducer;
