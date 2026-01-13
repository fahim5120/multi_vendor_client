import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../Config/Api";


const API_URL = "/home";

// Update home category
export const updateHomeCategory = createAsyncThunk(
  "homeCategory/updateHomeCategory",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`${API_URL}/home-category/${id}`, data);
      console.log("update home category", response);
      return response.data;
    } catch (error) {
      console.log("error", error);

      return rejectWithValue(error);
    }
  }
);

// Fetch home categories
export const fetchHomeCategory = createAsyncThunk(
  "homeCategory/fetchHomeCategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/home-category`);
      console.log("fetch Home Category", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  categories: [],
  loading: false,
  error: "",
  //   categoryUpdated: false,
};

const HomeCategorySlice = createSlice({
  name: "homeCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Fetch home categories
      .addCase(fetchHomeCategory.pending, (state) => {
        state.loading = true;
        state.error = "";
        // state.categoryUpdated = false;
      })
      .addCase(fetchHomeCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchHomeCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update home category
      .addCase(updateHomeCategory.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateHomeCategory.fulfilled, (state, action) => {
        state.loading = false;
        // state.categoryUpdated = true;

        const index = state.categories.findIndex(
          (category) => category._id === action.payload._id
        );

        state.categories[index] = action.payload;  //pazhaya category remove aakki puthiya catgory add cheyyunnu
      })
      .addCase(updateHomeCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export default HomeCategorySlice.reducer;
