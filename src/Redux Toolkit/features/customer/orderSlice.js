import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../../Config/Api";
import axios from "axios";


const initialState = {
  orders: [],
  loading: false,
  error: "",
  orderItem: null,
  currentOrder: null,
  paymentOrder: null,
  // orderCanceled: false,
};

const API_URL = "/api/orders";

// Fetch user order history
export const fetchUserOrderHistory = createAsyncThunk(
  "orders/fetchUserOrderHistory",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/user`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("fetch user ordder history", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error?.response);
      return rejectWithValue(
        error?.response?.data?.error || "Failed to fetch order history"
      );
    }
  }
);

// Fetch order by ID
export const fetchOrderById = createAsyncThunk(
  "orders/fetchOrderById",
  async ({ jwt, orderId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/${orderId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("fetch order by id", response.data);
      return response.data;
    } catch (error) {
      console.log("error fetch order", error?.response);
      return rejectWithValue("Failed to fetch order");
    }
  }
);

// Create a new order
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async ({ address, jwt, paymentGateway }, { rejectWithValue }) => {
    try {
      const response = await api.post(
        API_URL,
        { shippingAddress: address },
        {
          headers: { Authorization: `Bearer ${jwt}` },
          params: { paymentMethod: paymentGateway },
        }
      );

      console.log("create order", response.data);

      //   if (response.data?.payment_link_url) {
      //     window.location.href = response.data.payment_link_url;
      //   }

      return response.data;
    } catch (error) {
      console.log("error", error?.response);
      return rejectWithValue("Failed to create order");
    }
  }
);

// Fetch order item by ID
export const fetchOrderItemById = createAsyncThunk(
  "orders/fetchOrderItemById",
  async ({ jwt, orderItemId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/item/${orderItemId}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log(" fetch order item by id", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(error);
    }
  }
);

// Payment success handler
export const paymentSuccess = createAsyncThunk(
  "orders/paymentSuccess",
  async ({ jwt, paymentId, paymentLinkId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/payment/${paymentId}`, {
        headers: { Authorization: `Bearer ${jwt}` },
        params: { paymentLinkId },
      });
      console.log("payment success", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      return rejectWithValue(
        error?.response?.data?.message || "Failed to process payment"
      );
    }
  }
);

// Cancel order
export const cancelOrder = createAsyncThunk(
  "orders/cancelOrder",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await api.put(
        `${API_URL}/${orderId}/cancel`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      console.log("cancel order", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error?.response);
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue("An error occurred while cancelling the order.");
    }
  }
);

/* ======================
   SLICE
====================== */

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch user order history
      .addCase(fetchUserOrderHistory.pending, (state) => {
        state.loading = true;
        // state.error = null;
        // state.orderCanceled = false;
      })
      .addCase(fetchUserOrderHistory.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.loading = false;
      })
      .addCase(fetchUserOrderHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch order by ID
      .addCase(fetchOrderById.pending, (state) => {
        state.loading = true;
        // state.error = null;
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.currentOrder = action.payload;
        state.loading = false;
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create order
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.currentOrder = action.payload;
        state.paymentOrder = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Payment success
      .addCase(paymentSuccess.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(paymentSuccess.fulfilled, (state, action) => {
        state.loading = false;
        // console.log("Payment successful:", action.payload);
        state.currentOrder = action.payload;
      })
      .addCase(paymentSuccess.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


            // Cancel order
      .addCase(cancelOrder.pending, (state) => {
        state.loading = true;
        // state.error = null;
        // state.orderCanceled = false;
      })
      .addCase(cancelOrder.fulfilled, (state, action) => {
        state.loading = false;
        // state.orders = state.orders.map((order) =>
        //        order._id === action.payload._id ? action.payload : order
        // );
        // state.orderCanceled = true;
        state.currentOrder = action.payload;
      })
      .addCase(cancelOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch order item
      .addCase(fetchOrderItemById.pending, (state) => {
        state.loading = true;
        // state.error = null;
      })
      .addCase(fetchOrderItemById.fulfilled, (state, action) => {
        state.orderItem = action.payload;
        state.loading = false;
      })
      .addCase(fetchOrderItemById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

    
  },
})


export default orderSlice.reducer;