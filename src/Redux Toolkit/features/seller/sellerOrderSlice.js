

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../Config/Api";

const initialState = {
  orders: [],
  loading: false,
  error: null,
};


// Fetch seller orders
export const fetchSellerOrders = createAsyncThunk(
  "sellerOrders/fetchSellerOrders",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/seller/orders", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("fetch seller orders", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error);
    }
  }
);


// Update order status
export const updateOrderStatus = createAsyncThunk(
  "sellerOrders/updateOrderStatus",
  async ({ jwt, orderId, orderStatus }, { rejectWithValue }) => {
    console.log("update order",orderId,orderStatus);
    
    try {
      const response = await api.patch(
        `/api/seller/orders/${orderId}/status/${orderStatus}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt }`,
          },
        }
      );
      console.log(" update seller order", response.data);
      return response.data;
    } catch (error) {
      console.log("error ", error);
      return rejectWithValue(error);
    }
  }
);


/* ======================
   SLICE
====================== */

const sellerOrderSlice = createSlice({
  name: "sellerOrders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch orders
      .addCase(fetchSellerOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellerOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchSellerOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update order status
      .addCase(updateOrderStatus.pending, (state) => {
        state.loading = true;
        // state.error = null;
      })
      // .addCase(updateOrderStatus.fulfilled, (state, action) => {
      //   state.loading = false;
      //   const index = state.orders.findIndex(
      //     (order) => order._id === action.payload._id
      //   );
        
      //   state.orders[index] = action.payload;
        
      // })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
  state.loading = false;

  const index = state.orders.findIndex(
    (order) => order._id === action.payload._id
  );

  if (index !== -1) {
    state.orders[index] = action.payload; // ✅ UI update
  }
})

      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete order
    //   .addCase(deleteOrder.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(deleteOrder.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.orders = state.orders.filter(
    //       (order) => order._id !== action.meta.arg.orderId
    //     );
    //   })
    //   .addCase(deleteOrder.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   });
  },
});

export default sellerOrderSlice.reducer;
