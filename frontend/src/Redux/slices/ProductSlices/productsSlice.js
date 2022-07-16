import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const data = () => {
  return axios
    .request({
      method: "GET",
      url: process.env.REACT_APP_API_ENDPOINT,
      params: {
        store: "US",
        offset: "0",
        categoryId: "4208",
        limit: "500",
        country: "US",
        sort: "freshness",
        currency: "USD",
        sizeSchema: "US",
        lang: "en-US",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
      },
    })
    .then(function (response) {
      return response.data.products;
    })
    .catch(function (error) {
      console.error(error);
    });
};
export const fetchProducts = createAsyncThunk("products/fetchProducts", data);

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
    filterProducts: [],
  },
  reducers: {
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    filterProducts: (state, action) => {
      if (action.payload === "") {
        state.filterProducts = state.products;
      }

      state.filterProducts = state.products.filter((product) => {
        return product.title.toLowerCase().includes(action.payload);
      });
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
      state.products = action.payload;
      state.loading = false;
      state.filterProducts = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isError = true;
      state.errorMessage = action.error.message;
      state.loading = false;
    });
    builder.addCase(deleteProductThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteProductThunk.fulfilled, (state, action) => {
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
export const { deleteProduct, postProduct, putProduct, filterProducts } =
  productsSlice.actions;
export const selectProducts = (state) => state.products.products;
export const selectFilterProducts = (state) => state.products.filterProducts;
export const selectLoading = (state) => state.products.loading;
export const selectIsError = (state) => state.products.isError;
export const selectErrorMessage = (state) => state.products.errorMessage;

export default productsSlice.reducer;
