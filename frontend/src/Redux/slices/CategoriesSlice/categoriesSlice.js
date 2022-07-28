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
      console.log("fulfilled");
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.loading = true;
      console.log("pending");
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.error = action.error;
      console.log("rejected");
    });
  },
});
export default categoriesSlice.reducer;
export const selectCategories = (state) => state.category.categories;
