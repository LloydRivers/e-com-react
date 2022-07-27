import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const { data } = await axios.get(`http://localhost:5000/categories`);
    return data;
  }
);

const categoriesSlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

export default categoriesSlice.reducer;
export const { actions } = categoriesSlice;
export const selectCategories = (state) => state.category.categories;
