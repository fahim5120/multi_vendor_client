import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../Config/Api";

const API_URL = "/api/coupons";

// Create coupon
export const createCoupon = createAsyncThunk(
  "coupon/createCoupon",
  async ({ jwt, coupon }, { rejectWithValue }) => {
    try {
      const response = await api.post(`${API_URL}/admin/create`, coupon, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("create coupon", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// Fetch all coupons
export const fetchAllCoupons = createAsyncThunk(
  "coupon/fetchAllCoupons",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/admin/all`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log(" fetch all coupon", response.data);
      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue(error);
    }
  }
);

// Delete coupon
export const deleteCoupon = createAsyncThunk(
  "coupon/deleteCoupon",
  async ({ jwt, id }, { rejectWithValue }) => {
    try {
      const response = await api.delete(`${API_URL}/admin/delete/${id}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error?.response?.data || "Failed to delete coupon"
      );
    }
  }
);

const initialState = {
  coupons: [],
  cart: null,
  loading: false,
  error: "",
//   couponCreated: false,
//   couponApplied: false,
};


// Slice
const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create coupon
      .addCase(createCoupon.pending, (state) => {
        state.loading = true;
        state.error = "";
        // state.couponCreated = false;
      })
      .addCase(createCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.coupons.push(action.payload);
        // state.couponCreated = true;
      })
      .addCase(createCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
        // state.couponCreated = false;
      })

      // Delete coupon
      .addCase(deleteCoupon.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(deleteCoupon.fulfilled, (state, action) => {
        state.loading = false;
        state.coupons = state.coupons.filter(
          (coupon) => coupon._id !== action.meta.arg.id
        );
      })
      .addCase(deleteCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      })

      // Fetch all coupons
      .addCase(fetchAllCoupons.pending, (state) => {
        state.loading = true;
        state.error ="";
        // state.couponCreated = false;
      })
      .addCase(fetchAllCoupons.fulfilled, (state, action) => {
        state.loading = false;
        state.coupons = action.payload;
      })
      .addCase(fetchAllCoupons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      });
  },
});


export default couponSlice.reducer;
