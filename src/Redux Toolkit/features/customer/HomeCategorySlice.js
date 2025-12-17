// src/slices/home/homeThunks.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../Config/Api";





/* ======================
   CREATE HOME CATEGORIES
====================== */

export const createHomeCategories = createAsyncThunk(
  "home/createHomeCategories",
  async (homeCategories, { rejectWithValue }) => {
    try {
      const response = await api.post(
        "/home/categories",
        homeCategories
      );
      console.log("home categories", response.data);
      return response.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to create home categories";
      console.log("error", errorMessage, error);
      return rejectWithValue(errorMessage);
    }
  }
);


const HomeCategorySlice = createSlice({
  name: "homeCategories",
  initialState: {
    homeCategories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createHomeCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createHomeCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.homeCategories = action.payload;
      })
      .addCase(createHomeCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
})

export default HomeCategorySlice.reducer;
